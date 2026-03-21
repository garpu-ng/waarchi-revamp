import type { Metadata } from "next";
import Carousel from "@/components/Carousel";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "WaArchi Studio — Architekturvisualisierung NRW",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Scrolling carousel — mirrors mir.no top strip */}
      <Carousel />

      {/* Intro tagline */}
      <div className="intro-text">
        <p className="wa-intro-heading">
          WaArchi bedeutet Qualität.
          <br />
          Wir erstellen fotorealistische Architekturvisualisierungen.
        </p>
      </div>

      {/* 12-column project grid */}
      <WorkGrid />
    </>
  );
}
