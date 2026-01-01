export default async function handler(_req: any, res: any) {
  try {
    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "取得失敗" });
  }
}
