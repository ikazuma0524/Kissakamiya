// lib/client.ts
import { createClient } from 'microcms-js-sdk';

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is not defined');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_API_KEY is not defined');
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  retry: true // ネットワークエラー時のリトライを有効化
});

// APIレスポンスの型定義
export type MicroCMSResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

// 記事の型定義
export type Article = {
  id: string;
  title: string;
  published: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};