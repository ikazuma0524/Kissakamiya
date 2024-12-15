import { useEffect, useRef, useState } from 'react';

export function HeroSection() {
  const introTexts = [
    "当店は厳選した豆を使ったコーヒー、手作りの洋菓子、そして季節の軽食をご用意しております。静かな店内でゆっくりお過ごしください。",
    "春には桜をイメージしたスイーツ、夏には柑橘を使った爽やかなドリンク、秋にはりんごや栗を使った甘み深い菓子、冬には濃厚なチョコレートスイーツをご用意しています。",
    "季節が巡るたびに、新しい味覚との出会いがあり、何度訪れても新鮮な驚きを提供します。",
    "心地よいBGMと柔らかな照明、そして丁寧な接客が、ここで過ごすひとときを特別なものにしています。",
    "読書をしたり、静かに物思いにふけったり、あるいは大切な人との会話を楽しんだり——自由な時間をお過ごしください。",
    "地元の生産者から仕入れる素材にもこだわり、土地の恵みを感じられるメニューづくりを心がけています。"
  ];

  const leftImages = [
    { src: '/left-img1.jpg', mt: 'mt-0' },
    { src: '/left-img2.jpg', mt: 'mt-20' },
    { src: '/left-img3.jpg', mt: 'mt-40' },
    { src: '/left-img4.jpg', mt: 'mt-10' },
  ];

  const rightImages = [
    { src: '/right-img1.jpg', mt: 'mt-32' },
    { src: '/right-img2.jpg', mt: 'mt-0' },
    { src: '/right-img3.jpg', mt: 'mt-28' },
    { src: '/right-img4.jpg', mt: 'mt-48' },
  ];

  const [introVisibles, setIntroVisibles] = useState<boolean[]>(Array(introTexts.length).fill(false));
  const [leftVisibles, setLeftVisibles] = useState<boolean[]>(Array(leftImages.length).fill(false));
  const [rightVisibles, setRightVisibles] = useState<boolean[]>(Array(rightImages.length).fill(false));

  const introRefs = useRef<HTMLParagraphElement[]>([]);
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);

  introRefs.current = [];
  leftRefs.current = [];
  rightRefs.current = [];

  const addIntroRef = (el: HTMLParagraphElement) => {
    if (el && !introRefs.current.includes(el)) introRefs.current.push(el);
  };
  const addLeftRef = (el: HTMLDivElement) => {
    if (el && !leftRefs.current.includes(el)) leftRefs.current.push(el);
  };
  const addRightRef = (el: HTMLDivElement) => {
    if (el && !rightRefs.current.includes(el)) rightRefs.current.push(el);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    // テキスト監視
    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = introRefs.current.indexOf(entry.target as HTMLParagraphElement);
        if (index > -1) {
          setIntroVisibles(prev => {
            const newArr = [...prev];
            newArr[index] = entry.isIntersecting;
            return newArr;
          });
        }
      });
    }, options);
    introRefs.current.forEach(el => introObserver.observe(el));

    // 左画像監視
    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = leftRefs.current.indexOf(entry.target as HTMLDivElement);
        if (index > -1) {
          setLeftVisibles(prev => {
            const newArr = [...prev];
            newArr[index] = entry.isIntersecting;
            return newArr;
          });
        }
      });
    }, options);
    leftRefs.current.forEach(el => leftObserver.observe(el));

    // 右画像監視
    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = rightRefs.current.indexOf(entry.target as HTMLDivElement);
        if (index > -1) {
          setRightVisibles(prev => {
            const newArr = [...prev];
            newArr[index] = entry.isIntersecting;
            return newArr;
          });
        }
      });
    }, options);
    rightRefs.current.forEach(el => rightObserver.observe(el));

    return () => {
      introObserver.disconnect();
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/kamiya.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            喫茶KAMIYA
          </h1>
          <p className="text-xl md:text-2xl font-serif font-light text-white/90 max-w-xl mx-auto leading-relaxed">
          　　ここにキャッチコピーを入れる
          </p>
        </div>
      </section>

      {/* 3カラムレイアウト - 細長くするために大きな縦余白 */}
      <section className="relative py-96 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:space-x-12 relative">
          {/* 左カラム（4枚画像）アシンメトリー配置 */}
          <div className="flex-1 flex flex-col items-start justify-center">
            {leftImages.map((img, i) => (
              <div
                key={i}
                ref={addLeftRef}
                className={`transition-all duration-700 ${img.mt}`}
                style={{
                  opacity: leftVisibles[i] ? 1 : 0,
                  transform: leftVisibles[i] ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <img
                  src={img.src}
                  alt={`left-image-${i}`}
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* 中央カラム（狭くして細長い印象） */}
          <div className="flex-none w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-16 mt-16 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              紹介文（仮)
              
            </h2>
            <div className="space-y-8">
              {introTexts.map((text, i) => (
                <p
                  key={i}
                  ref={addIntroRef}
                  className="text-gray-700 text-lg leading-relaxed transition-all duration-700 max-w-md mx-auto"
                  style={{
                    opacity: introVisibles[i] ? 1 : 0,
                    transform: introVisibles[i] ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* 右カラム（4枚画像）アシンメトリー配置 */}
          <div className="flex-1 flex flex-col items-end justify-center">
            {rightImages.map((img, i) => (
              <div
                key={i}
                ref={addRightRef}
                className={`transition-all duration-700 ${img.mt}`}
                style={{
                  opacity: rightVisibles[i] ? 1 : 0,
                  transform: rightVisibles[i] ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <img
                  src={img.src}
                  alt={`right-image-${i}`}
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
