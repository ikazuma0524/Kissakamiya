'use client';

import { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';










const GeometricAnimation: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3; // 近くして図形を大きく見せる
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: document.createElement('canvas')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

    // シンプルなメビウス帯的な曲面を描くパラメトリックライン
    const uSegments = 200;
    const vSegments = 30;
    const uMin = 0, uMax = 2 * Math.PI;
    const vMin = -1, vMax = 1;

    const uLines: THREE.LineLoop[] = [];
    const vLines: THREE.LineLoop[] = [];

    for (let i = 0; i <= uSegments; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array((vSegments + 1) * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const line = new THREE.LineLoop(geometry, lineMaterial);
      uLines.push(line);
      scene.add(line);
    }

    for (let j = 0; j <= vSegments; j++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array((uSegments + 1) * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const line = new THREE.LineLoop(geometry, lineMaterial);
      vLines.push(line);
      scene.add(line);
    }

    let time = 0;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.07; // 変化を速く

      // ベースとなる半径をやや大きくし、波を強めて流動的に
      const baseR = 1.5;
      const waveAmp = 0.4; // 波の振幅
      const waveFreq = 5.0; // 波の周波数を上げて速い変化を演出
      const verticalWave = 0.3; // 縦方向の変動

      // u固定ライン更新
      uLines.forEach((line, i) => {
        const positions = line.geometry.getAttribute('position') as THREE.BufferAttribute;
        const count = positions.count;
        const u = uMin + (uMax - uMin) * (i / uSegments);
        for (let k = 0; k < count; k++) {
          const v = vMin + (vMax - vMin) * (k / vSegments);
          // 波の計算
          const wave = waveAmp * Math.sin(time + u * waveFreq + v * waveFreq);
          const R = baseR + (v * 0.5) * Math.cos(u / 2 + wave);
          const x = R * Math.cos(u);
          const y = R * Math.sin(u);
          const z = v * Math.sin(u / 2) * verticalWave + wave * 0.5;

          positions.setXYZ(k, x, y, z);
        }
        positions.needsUpdate = true;
      });

      // v固定ライン更新
      vLines.forEach((line, j) => {
        const positions = line.geometry.getAttribute('position') as THREE.BufferAttribute;
        const count = positions.count;
        const v = vMin + (vMax - vMin) * (j / vSegments);
        for (let k = 0; k < count; k++) {
          const u = uMin + (uMax - uMin) * (k / uSegments);
          const wave = waveAmp * Math.sin(time + u * waveFreq + v * waveFreq);
          const R = baseR + (v * 0.5) * Math.cos(u / 2 + wave);
          const x = R * Math.cos(u);
          const y = R * Math.sin(u);
          const z = v * Math.sin(u / 2) * verticalWave + wave * 0.5;

          positions.setXYZ(k, x, y, z);
        }
        positions.needsUpdate = true;
      });

      // カメラを一周ゆっくりぐるっと回転する感じ
const radius = 2.5; // カメラが回る半径
const horizontalSpeed = 0.05; // カメラが一周する速さ（小さいほどゆっくり）
const verticalWaveSpeed = 0.1; 
const verticalWaveAmp = 0.3;

camera.position.x = Math.sin(time * horizontalSpeed) * radius;
camera.position.z = Math.cos(time * horizontalSpeed) * radius;
camera.position.y = 0.5 + Math.cos(time * verticalWaveSpeed) * verticalWaveAmp;
camera.lookAt(0, 0, 0);

renderer.render(scene, camera);


      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }

      uLines.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
      });

      vLines.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative bg-white"
      style={{ minHeight: '100vh' }}
    />
  );
};

export default GeometricAnimation;














const TextAnimator: FC<{
  className?: string;
  targetText: string;
  duration?: number;
  delay?: number;
}> = ({ className, targetText, duration = 500, delay = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const intervalMs = 5;
  const probability = (targetText.length / duration) * intervalMs;
  const characters = 'abcdefghijklmnopqrstuvwxyz ';

  useEffect(() => {
    let currentIndex = 0;
    let currentText = Array(targetText.length).fill(' ');
    let intervalId: NodeJS.Timeout;

    const startAnimation = () => {
      intervalId = setInterval(() => {
        if (currentIndex >= targetText.length) {
          clearInterval(intervalId);
          return;
        }
        const targetChar = targetText[currentIndex];
        const random = Math.random();
        if (random < probability) {
          currentText[currentIndex] = targetChar;
          currentIndex++;
        } else {
          currentText[currentIndex] =
            characters[Math.floor(random * characters.length)];
        }
        if (ref.current) {
          ref.current.textContent = currentText.join('');
        }
      }, intervalMs);
    };

    const timeoutId = setTimeout(startAnimation, delay);
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [targetText, duration, delay]);

  return <span className={className} ref={ref} />;
};

export const HeroSection: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  if (isMobile) {
    // モバイル専用画面、テキストもアニメーションで表示
    return (
      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-start p-2 md:p-10 bg-white">
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="mb-6 md:mb-10"
  >
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
      <TextAnimator targetText="Practice Makes Perfect" duration={2000} delay={600} />
    </h1>
    <div className="text-lg md:text-2xl font-medium text-gray-800 mt-2 md:mt-4">
      <TextAnimator targetText="弘前で最高の学習環境を提供するために" duration={2000} delay={1000} />
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
    transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
    className="space-y-3 md:space-y-4"
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-4">
      <TextAnimator targetText="令和5年度　実績" duration={2000} delay={1200} />
    </h2>
    <ul className="text-lg md:text-2xl text-gray-800 font-medium space-y-2">
      <li>
        <TextAnimator targetText="弘前高校 39人合格" duration={2000} delay={1400} />
      </li>
      <li>
        <TextAnimator targetText="弘前大学教育学部附属中学校 25人合格" duration={2000} delay={1600} />
      </li>
    </ul>
  </motion.div>
</div>
    );
  }
      

  // PC版
  return (
    <section className="flex flex-row w-full overflow-hidden">
      <div className="w-1/2 h-screen">
        <GeometricAnimation />
      </div>
      
      <div className="w-1/2 h-screen flex flex-col justify-center items-start p-10 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-10"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            <TextAnimator targetText="Practice Makes Perfect" duration={2000} delay={600} />
          </h1>
          <div className="text-2xl font-medium text-gray-800 mt-4">
            <TextAnimator targetText="弘前で最高の学習環境を提供するために" duration={2000} delay={1000} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            <TextAnimator targetText="令和5年度　実績" duration={2000} delay={1200} />
          </h2>
          <ul className="text-2xl text-gray-800 font-medium space-y-2">
            <li><TextAnimator targetText="弘前高校 39人合格" duration={2000} delay={1400} /></li>
            <li><TextAnimator targetText="弘前大学教育学部附属中学校 25人合格" duration={2000} delay={1600} /></li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
