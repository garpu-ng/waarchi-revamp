import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio — WaArchi",
  description: "WaArchi Studio — Architekturvisualisierung aus NRW.",
};

export default function StudioPage() {
  return (
    <div className="wa-page">
      <h1>Studio</h1>
      <p>
        WaArchi ist ein auf Architekturvisualisierung spezialisiertes Studio aus
        Nordrhein-Westfalen. Wir erstellen fotorealistische 3D-Renderings für
        Architekten, Bauträger und Privatpersonen.
      </p>
      <p>
        Mit einem tiefen Verständnis für Licht, Material und Raum bringen wir
        Architekturprojekte zum Leben — noch bevor der erste Stein gesetzt wird.
      </p>
      <p>
        Unsere Arbeit umfasst Außen- und Innenraumvisualisierungen, aeriale
        Perspektiven sowie stimmungsvolle Umgebungsdarstellungen — stets mit dem
        Ziel, die Architektur in ihrem besten Licht zu zeigen.
      </p>

      <p style={{ marginTop: "3rem" }}>
        <a href="mailto:hallo@waarchi.de">hallo@waarchi.de</a>
      </p>
    </div>
  );
}
