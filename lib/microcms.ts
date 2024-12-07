export async function fetchNewsDetail(slug: string) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // タイムアウト10秒
  
    try {
      const res = await fetch(`${process.env.MICROCMS_API_URL}/news/${slug}`, {
        method: "GET",
        headers: {
          "X-API-KEY": process.env.MICROCMS_API_KEY || "",
        },
        signal: controller.signal,
      });
  
      if (!res.ok) {
        console.error(`HTTP Error: ${res.status}`);
        console.error(await res.text());
        throw new Error("Failed to fetch news detail");
      }
  
      return res.json();
    } catch (err) {
      console.error(`Fetch error: ${err}`);
      throw new Error("Failed to fetch news detail");
    } finally {
      clearTimeout(timeoutId);
    }
  }


export async function fetchNewsList() {
    const res = await fetch(`${process.env.MICROCMS_API_URL}/news`, {
      headers: {
        "X-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch news list");
    }
  
    return res.json();
  }