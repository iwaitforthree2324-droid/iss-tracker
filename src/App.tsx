import { useState } from "react";
import { fetchIssPosition } from "./api/iss";
import type{ IssPositionResponse } from "./types/iss";
import { IssMap } from "./components/IssMap";
import type { CSSProperties } from "react";

function App() {
  const [data, setData] = useState<IssPositionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchIssPosition();
      setData(result);
    } catch {
      setError("Failure");
    } finally {
      setLoading(false);
    }
  };

  const lat = data ? Number(data.iss_position.latitude) : null;
  const lng = data ? Number(data.iss_position.longitude) : null;

const styles: { container: CSSProperties; card: CSSProperties } = {
  container: {
    minHeight: "100vh",            // 画面全体の高さ
    width: "100vw",                 // 画面全体の幅
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",       // 縦中央
    alignItems: "center",           // 横中央
    padding: 20,
    backgroundImage: "url(/src/assets/space.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    fontFamily: "'Orbitron', sans-serif",
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.6)", // 半透明で文字を読みやすく
    borderRadius: 12,
    padding: 20,
    maxWidth: 800,
    width: "90%",                      // 小さい画面でも対応
    boxShadow: "0 0 20px rgba(0,0,0,0.7)",
    textAlign: "center"                // 中央揃え
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>ISS Current Location</h1>

        <button onClick={handleClick} disabled={loading}>
          {loading ? "Loading..." : "Get current location"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {data && (
          <>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
            <p>
              Time: {new Date(data.timestamp * 1000).toLocaleString()}
            </p>

            {/* 地図表示 */}
            {lat !== null && lng !== null && (
              <IssMap lat={lat} lng={lng} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
