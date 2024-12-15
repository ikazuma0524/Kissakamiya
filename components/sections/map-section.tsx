"use client";

import { useRef, useCallback } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { motion } from "framer-motion";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// 喫茶kamiyamの情報
const address = "青森県弘前市徳田町4-4";
const name = "喫茶kamiya";
// あらかじめ特定した座標（例）
const position = { lat: 40.60317723153976, lng:140.47438958127282}

export function MapSection() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: [],
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    map.setCenter(position);
    map.setZoom(15);

    const marker = new google.maps.Marker({
      position,
      map,
      title: name,
    });
    markerRef.current = marker;

    const infoWindowContent = `
      <div style="color: #333; font-family: sans-serif;">
        <h3 style="font-size:16px; font-weight:bold; margin-bottom:4px;">${name}</h3>
        <p style="margin:0;">${address}</p>
      </div>
    `;
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });
    infoWindowRef.current = infoWindow;

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
    if (markerRef.current) {
      markerRef.current.setMap(null);
      markerRef.current = null;
    }
    if (infoWindowRef.current) {
      infoWindowRef.current.close();
      infoWindowRef.current = null;
    }
  }, []);

  if (loadError) return <div>エラーが発生しました。地図を表示できません。</div>;
  if (!isLoaded) return <div>地図を読み込んでいます...</div>;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12 text-center"
      >
        {/* 見出し */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-8">
          アクセス
        </h2>

        {/* 住所表示カード */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mb-8 flex items-center"
        >
          <div className="mr-4">
            {/* 場所アイコン */}
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6c0 5.25 6 10 6 10s6-4.75 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
            <p className="text-gray-600 text-sm">{address}</p>
          </div>
        </motion.div>

        {/* 地図表示 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              disableDefaultUI: false,
              zoomControl: true,
            }}
            aria-label={name + "の所在地"}
          />
        </motion.div>

        {/* Google Mapsリンクボタン */}
        <motion.a
          href={`https://www.google.com/maps/place/${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Google Mapsで見る
        </motion.a>
      </motion.div>
    </section>
  );
}
