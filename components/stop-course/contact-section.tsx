"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section>
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
            <p className="mb-6 text-gray-600">
              S-TOPコースについて、詳しい情報や個別相談をご希望の方は
              お気軽にお問い合わせください。
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              お問い合わせはこちら
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}