'use client';

import { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export const HeroSection: FC = () => {
  // 画面幅をチェックしてモバイル判定
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // GlitchImageコンポーネント
  const GlitchImage: FC<{
    imageSrc: string;
    intensity?: number; // 0-1
    frequency?: number; // 0-1
    glitchTypes?: ('rgb' | 'line' | 'noise')[];
  }> = ({
    imageSrc,
    intensity = 1,
    frequency = 1,
    glitchTypes = ['rgb', 'line', 'noise'],
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (!containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      camera.position.z = 1;

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      containerRef.current.appendChild(renderer.domElement);

      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(imageSrc);

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform float intensity;
        uniform float frequency;
        uniform int activeEffect;
        uniform float mouseX;
        uniform float mouseY;
        varying vec2 vUv;

        float random(vec2 c) {
          return fract(sin(dot(c.xy, vec2(12.9898,78.233))) * 43758.5453);
        }

        vec4 rgbShift(vec2 uv) {
          float noise = random(uv * time) * intensity;
          float r = texture2D(tDiffuse, uv + vec2(noise * 0.02, 0.0)).r;
          float g = texture2D(tDiffuse, uv).g;
          float b = texture2D(tDiffuse, uv - vec2(noise * 0.02, 0.0)).b;
          return vec4(r, g, b, 1.0);
        }

        vec4 lineGlitch(vec2 uv) {
          float line = step(0.99, random(vec2(time * frequency, uv.y)));
          vec2 offset = vec2(0.02 * intensity * random(vec2(time)), 0.0) * line;
          return texture2D(tDiffuse, uv + offset);
        }

        vec4 noiseGlitch(vec2 uv) {
          float n = random(uv * time * 100.0) * intensity;
          vec4 color = texture2D(tDiffuse, uv);
          return vec4(color.rgb + vec3(n), 1.0);
        }

        void main() {
          vec2 uv = vUv;
          uv += vec2((mouseX - 0.5) * 0.02, (mouseY - 0.5) * 0.02);

          vec4 color;
          if (activeEffect == 0) {
            color = rgbShift(uv);
          } else if (activeEffect == 2) {
            color = lineGlitch(uv);
          } else if (activeEffect == 3) {
            color = noiseGlitch(uv);
          } else {
            color = texture2D(tDiffuse, uv);
          }
          gl_FragColor = color;
        }
      `;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          tDiffuse: { value: texture },
          time: { value: 0 },
          intensity: { value: intensity },
          frequency: { value: frequency },
          activeEffect: { value: -1 },
          mouseX: { value: 0.5 },
          mouseY: { value: 0.5 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const handleResize = () => {
        if (!containerRef.current) return;
        const { clientWidth, clientHeight } = containerRef.current;
        renderer.setSize(clientWidth, clientHeight);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      const applyRandomEffect = () => {
        if (Math.random() > frequency) {
          material.uniforms.activeEffect.value = -1;
        } else {
          const effectIndex = Math.floor(Math.random() * glitchTypes.length);
          material.uniforms.activeEffect.value = effectIndex;
        }
        const nextChangeTime = 100 + Math.random() * 500;
        timeoutRef.current = setTimeout(applyRandomEffect, nextChangeTime);
      };
      applyRandomEffect();

      const handleMouseMove = (e: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        material.uniforms.mouseX.value = x;
        material.uniforms.mouseY.value = y;
      };
      window.addEventListener('mousemove', handleMouseMove);

      let animationFrameId: number;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        material.uniforms.time.value += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
        containerRef.current?.removeChild(renderer.domElement);
        geometry.dispose();
        material.dispose();
        texture.dispose();
        renderer.dispose();
      };
    }, [imageSrc, intensity, frequency, glitchTypes]);

    return <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" />;
  };

  // TextAnimatorコンポーネント
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

      const startAnimation = () => {
        const interval = setInterval(() => {
          if (currentIndex >= targetText.length) {
            clearInterval(interval);
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

      const timeout = setTimeout(startAnimation, delay);
      return () => {
        clearTimeout(timeout);
      };
    }, [targetText, duration, delay]);

    return <span className={className} ref={ref} />;
  };

  return (
    <section
      className="relative min-h-screen flex items-end pb-20 bg-black"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        position: 'relative',
      }}
    >
      {/* グリッチ背景 */}
      <GlitchImage
        imageSrc="/topseminar.jpg"
        intensity={0.95}
        frequency={0.7}
        glitchTypes={['rgb', 'noise']}
      />

      {/* オーバーレイと粒子 */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.6) 90%)",
          mixBlendMode: "multiply",
        }}
      ></div>
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "3px 3px",
          opacity: 0.2,
        }}
      ></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end px-5 md:px-10 gap-5 md:gap-10">
        {/* 左カラム */}
        <div className="flex flex-col space-y-6 text-left max-w-xl w-full">
          {/* タイトル */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-4xl md:text-7xl font-extrabold leading-tight text-white whitespace-nowrap relative"
            style={{
              textShadow: '0 0 20px rgba(0,200,255,0.5)',
            }}
          >
            <div className="relative inline-block">
              <span
                style={{
                  background: 'linear-gradient(90deg, #89cff0, #b3ecff)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                <TextAnimator targetText="弘前トップゼミナール" duration={1500} delay={500} />
              </span>
              <span
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 70%)',
                  mixBlendMode: 'screen',
                  pointerEvents: 'none',
                }}
              ></span>
            </div>
          </motion.div>

          {/* サブタイトル */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
            className="text-xl md:text-4xl font-semibold text-blue-200"
          >
            <TextAnimator
              targetText="Practice Makes Perfect"
              duration={2000}
              delay={1000}
            />
          </motion.div>

          {/* キャッチコピー */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, delay: 1.5, ease: 'easeOut' }}
            className="text-lg md:text-2xl font-medium text-blue-100 leading-relaxed"
          >
            <TextAnimator
              targetText="弘前で最高の学習環境を提供するために"
              duration={2000}
              delay={1000}
            />
          </motion.div>

          {/* 令和5年度入試実績 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, delay: 2, ease: 'easeOut' }}
            className="leading-snug space-y-2 text-sm md:text-base"
          >
            <div className="text-lg md:text-2xl font-bold text-blue-100">
              <TextAnimator
                targetText="令和5年度入試実績"
                duration={2000}
                delay={1200}
              />
            </div>
            <div className="font-semibold text-white">
              <TextAnimator
                targetText="弘前高校 39人"
                duration={2000}
                delay={1400}
              />
            </div>
            <div className="font-semibold text-white">
              <TextAnimator
                targetText="弘前大学教育学部附属中学校 25人(内部＋外部)"
                duration={2000}
                delay={1600}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
