"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "./top.jpg";
import { Menu, X } from "lucide-react";

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // メニューが開いているときにスクロールを無効に��る
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const handleNavClick = (hash: string) => {
    if (pathname === "/") {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${hash}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        )}
        style={{ zIndex: 1000 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push("/")} className="flex items-center gap-2">
              <div className="relative w-64 h-16">
                <Image
                  src={logo}
                  alt="弘前トップゼミナール"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </button>
            {/* デスクトップメニュー */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => handleNavClick("courses")}
                className={cn(
                  "hover:text-blue-600 transition-colors",
                  "text-gray-800"
                )}
              >
                コース紹介
              </button>
              <button
                onClick={() => handleNavClick("faculty")}
                className={cn(
                  "hover:text-blue-600 transition-colors",
                  "text-gray-800"
                )}
              >
                講師紹介
              </button>
              <button
                onClick={() => handleNavClick("results")}
                className={cn(
                  "hover:text-blue-600 transition-colors",
                  "text-gray-800"
                )}
              >
                合格実績
              </button>
              <button
                onClick={() => handleNavClick("news")}
                className={cn(
                  "hover:text-blue-600 transition-colors",
                  "text-gray-800"
                )}
              >
                お知らせ
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className={cn(
                  "hover:text-blue-600 transition-colors",
                  "text-gray-800"
                )}
              >
                お問い合わせ
              </button>
            </div>
            {/* ハンバーガーメニュー */}
            <button
              className="md:hidden p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-64 h-16">
              <Image
                src={logo}
                alt="弘前トップゼミナール"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <button
              className="flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => {
                router.push("/");
                setIsMenuOpen(false);
              }}
              className={cn(
                "hover:text-blue-600 transition-colors",
                "text-gray-800 text-lg"
              )}
            >
              ホーム
            </button>
            <button
              onClick={() => handleNavClick("courses")}
              className={cn(
                "hover:text-blue-600 transition-colors",
                "text-gray-800 text-lg"
              )}
            >
              コース紹介
            </button>
            <button
              onClick={() => handleNavClick("faculty")}
              className={cn(
                "hover:text-blue-600 transition-colors",
                "text-gray-800 text-lg"
              )}
            >
              講師紹介
            </button>
            <button
              onClick={() => handleNavClick("results")}
              className={cn(
                "hover:text-blue-600 transition-colors",
                "text-gray-800 text-lg"
              )}
            >
              合格実績
            </button>
            <button
              onClick={() => handleNavClick("news")}
              className={cn(
                "hover:text-blue-600 transition-colors",
                "text-gray-800 text-lg"
              )}
            >
              お知らせ
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={cn(
                "hover:text-blue-600 transition-colors",
                "text-gray-800 text-lg"
              )}
            >
              お問い合わせ
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
