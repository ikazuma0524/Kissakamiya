declare module 'nodemailer';

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Nodemailer の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // SSL/TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // メールの内容
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO, // 管理者のメールアドレス
      subject: `お問い合わせ: ${subject}`,
      text: `
        お名前: ${name}
        メールアドレス: ${email}
        
        メッセージ:
        ${message}
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "メールが送信されました。" }), {
      status: 200,
    });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return new Response(JSON.stringify({ message: "メール送信に失敗しました。" }), {
      status: 500,
    });
  }
}
