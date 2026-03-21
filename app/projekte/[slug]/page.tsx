import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — WaArchi Studio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Find prev/next for navigation
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];

  return (
    <>
      {/* Header */}
      <div className="wa-project-header">
        <Link href="/" className="wa-back">← Alle Projekte</Link>
        <h1>{project.title}</h1>
        <p className="wa-project-meta">
          {project.client} &nbsp;·&nbsp; {project.category} &nbsp;·&nbsp; {project.year}
        </p>
        <p style={{ fontSize: "0.95rem", color: "#555", maxWidth: "560px", lineHeight: 1.7 }}>
          {project.description}
        </p>
      </div>

      {/* Full-width image stack */}
      <div className="wa-project-images">
        {project.images.map((src, i) => (
          <div
            key={i}
            style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}
          >
            <Image
              src={src}
              alt={`${project.title} — Bild ${i + 1}`}
              fill
              priority={i === 0}
              sizes="calc(100vw - 160px)"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "4svh 4svw",
          borderTop: "1px solid #eee",
        }}
      >
        {prev ? (
          <Link href={`/projekte/${prev.slug}`} style={{ fontSize: "0.75rem", color: "#555", textDecoration: "none" }}>
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/projekte/${next.slug}`} style={{ fontSize: "0.75rem", color: "#555", textDecoration: "none" }}>
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </>
  );
}
