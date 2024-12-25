import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';


// Montserrat フォントをインポート
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // 必要なフォントウェイトを指定
  variable: '--font-montserrat', // CSS変数名を指定
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}> {/* Montserrat を適用 */}
      <body>
        {children}
      </body>
    </html>
  );
}
