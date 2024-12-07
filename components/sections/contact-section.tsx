"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",       // 追加
    email: "",      // 追加
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("送信中...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("メールが送信されました！");
      } else {
        throw new Error("送信エラー");
      }
    } catch (error) {
      console.error(error);
      setStatus("メール送信に失敗しました。");
    }
  };

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="お名前"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="件名"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="メッセージ"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          送信
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
}
