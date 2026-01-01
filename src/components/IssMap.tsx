import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

type Props = {
  lat: number;
  lng: number;
};

// マーカーアイコン（Vite対策）
const icon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export function IssMap({ lat, lng }: Props) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={3}
      style={{ height: "400px", width: "100%", marginTop: 20 }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]} icon={icon}>
        <Popup>International Space Station</Popup>
      </Marker>
    </MapContainer>
  );
}
