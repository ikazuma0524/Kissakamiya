"use client";

import { useState } from "react";

export default function AdminNewsPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "",
    publishedAt: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to create news");
      alert("お知らせが作成されました！");
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました。");
    }
  };

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">お知らせ管理</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="タイトル"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="content"
          placeholder="内容"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={6}
          required
        ></textarea>
        <input
          type="text"
          name="slug"
          placeholder="スラッグ (URL用)"
          value={formData.slug}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="publishedAt"
          value={formData.publishedAt}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          お知らせを作成
        </button>
      </form>
    </main>
  );
}
