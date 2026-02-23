// app/candidate/[id]/page.tsx
import { notFound } from "next/navigation";
import { getCandidateById } from "@/data/candidates";
import CandidatePageClient from "./CandidatePageClient";

type PageProps = {
  params: { id: string };
};

export default function CandidatePage({ params }: PageProps) {
  const candidate = getCandidateById(params.id);

  if (!candidate) notFound();

  return <CandidatePageClient candidate={candidate} />;
}