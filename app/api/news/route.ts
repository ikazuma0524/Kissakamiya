// app/api/news/route.ts

export async function POST(req: Request) {
    const body = await req.json();
    const res = await fetch(`${process.env.MICROCMS_API_URL}/news`, {
      method: "POST",
      headers: {
        "X-API-KEY": process.env.MICROCMS_API_KEY || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    if (!res.ok) {
      return new Response("Failed to create news", { status: 500 });
    }
  
    return new Response("News created", { status: 201 });
  }
  