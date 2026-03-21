import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — WaArchi",
};

export default function KontaktPage() {
  return (
    <div className="wa-page">
      <h1>Kontakt</h1>
      <p>
        Für Anfragen, Angebote oder allgemeine Fragen — schreib uns einfach.
        Wir melden uns innerhalb von 24 Stunden.
      </p>
      <p>
        <a href="mailto:hallo@waarchi.de">hallo@waarchi.de</a>
      </p>

      <div style={{ marginTop: "3rem" }}>
        <p style={{ fontSize: "0.8rem", color: "#aaa", lineHeight: 1.6 }}>
          WaArchi Studio<br />
          Nordrhein-Westfalen, Deutschland<br />
          USt-IdNr.: auf Anfrage
        </p>
      </div>
    </div>
  );
}
