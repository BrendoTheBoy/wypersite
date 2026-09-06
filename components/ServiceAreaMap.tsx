"use client";

import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const GUELPH: [number, number] = [43.5448, -80.2482];

const towns = [
  {
    name: "Guelph",
    position: [43.5448, -80.2482] as [number, number],
    blurb:
      "Homes and storefronts across the city, from downtown stone to south-end subdivisions.",
  },
  {
    name: "Fergus",
    position: [43.7053, -80.3776] as [number, number],
    blurb:
      "Centre Wellington houses and the St. Andrew Street shops along the Grand.",
  },
  {
    name: "Elora",
    position: [43.6825, -80.4319] as [number, number],
    blurb: "Village homes and the Mill Street storefronts that sit above the gorge.",
  },
  {
    name: "Rockwood",
    position: [43.6122, -80.1442] as [number, number],
    blurb: "Village streets and rural properties a short drive east of Guelph.",
  },
  {
    name: "Cambridge",
    position: [43.3616, -80.3144] as [number, number],
    blurb: "Galt storefronts and neighbourhood glass across the Grand River.",
  },
] as const;

const pinIcon = L.divIcon({
  className: "wyper-map-pin",
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42" aria-hidden="true"><path d="M16 1.8c-7.3 0-13.2 5.9-13.2 13.2 0 9.6 13.2 25.2 13.2 25.2s13.2-15.6 13.2-25.2C29.2 7.7 23.3 1.8 16 1.8z" fill="#003057"/><circle cx="16" cy="15" r="5.6" fill="#5CE1E6"/></svg>`,
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -36],
});

export default function ServiceAreaMap() {
  return (
    <MapContainer
      center={GUELPH}
      zoom={10}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={GUELPH}
        radius={25000}
        pathOptions={{
          color: "#003057",
          weight: 3,
          fillColor: "#5CE1E6",
          fillOpacity: 0.25,
        }}
      />
      {towns.map((town) => (
        <Marker key={town.name} position={town.position} icon={pinIcon}>
          <Popup>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-lilita), sans-serif",
                fontSize: "1.25rem",
                color: "#003057",
              }}
            >
              {town.name}
            </p>
            <p
              style={{
                margin: "0.35rem 0 0",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.9375rem",
                color: "#003057",
              }}
            >
              {town.blurb}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
