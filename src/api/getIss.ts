import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*"); // CORS対応
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "取得失敗" });
  }
}
