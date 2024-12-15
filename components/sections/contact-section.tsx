export function ContactSection() {
  return (
    <section className="relative w-full py-20 bg-gray-100">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white/70 backdrop-blur-md backdrop-brightness-95 border border-white/50 rounded-lg p-8 text-center shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
          <p className="text-gray-700 mb-6">
            ご予約はお電話のみです。
          </p>
          <a
            href="tel:0172-33-2798"
            className="text-2xl font-semibold text-blue-700 hover:text-blue-800 transition-colors"
          >
            ☎️ 0172-33-2798
          </a>
        </div>
      </div>
    </section>
  );
}
