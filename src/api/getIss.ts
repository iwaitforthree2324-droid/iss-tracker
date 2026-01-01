// src/api/getIss.ts
export default async function handler(_req: any, res: any) {
  try {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();

    // フロントに返す
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "取得失敗" });
  }
}
