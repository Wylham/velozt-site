import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SolutionPage } from "@/components/solutions/SolutionPage";
import { getSolution, solutions } from "@/content/solutions";

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  if (!solution) return {};
  return { title: solution.navLabel, description: solution.description, alternates: { canonical: `/solucoes/${solution.slug}` } };
}

export default async function SolutionRoute({ params }: { params: Promise<{ slug: string }> }) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();
  return <><Header /><SolutionPage solution={solution} /><Footer /></>;
}
