"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { getScoreColor } from "@/data/candidates";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

// Ajusta este tipo si ya lo tienes exportado desde tu data layer
type Candidate = ReturnType<typeof import("@/data/candidates").getCandidateById> extends infer T
  ? Exclude<T, null | undefined>
  : never;

export default function CandidatePageClient({ candidate }: { candidate: Candidate }) {
  const initials = candidate.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container-narrow py-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Volver
        </Link>

        {/* Header */}
        <div className="flex items-center gap-5 mb-8">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold">{candidate.name}</h1>
            <p className="text-sm text-muted-foreground">{candidate.party}</p>
          </div>
          <div className={getScoreColor(candidate.transparencyScore)}>
            <ShieldCheck className="h-3.5 w-3.5" />
            {candidate.transparencyScore}%
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="perfil">
          <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 mb-6">
            <TabsTrigger
              value="perfil"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-3"
            >
              Perfil
            </TabsTrigger>
            <TabsTrigger
              value="propuestas"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-3"
            >
              Propuestas
            </TabsTrigger>
            <TabsTrigger
              value="antecedentes"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-3"
            >
              Antecedentes
            </TabsTrigger>
          </TabsList>

          {/* Perfil Tab */}
          <TabsContent value="perfil" className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Experiencia</h3>
              <div className="relative border-l-2 border-border pl-6 space-y-6">
                {candidate.experience.map((exp: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <p className="text-xs text-muted-foreground">{exp.year}</p>
                    <p className="text-sm font-medium">{exp.role}</p>
                    <p className="text-xs text-muted-foreground">{exp.institution}</p>
                    <div className="absolute -left-[7px] mt-[-2.5rem] h-3 w-3 rounded-full border-2 border-primary bg-card" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Educación</h3>
              <div className="space-y-2">
                {candidate.education.map((edu: any, i: number) => (
                  <div key={i} className="data-card p-3">
                    <p className="text-sm font-medium">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">
                      {edu.institution} · {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Propuestas Tab */}
          <TabsContent value="propuestas" className="space-y-3">
            {candidate.proposals.map((p: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="data-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary mb-2">
                      {p.category}
                    </span>
                    <h4 className="text-sm font-semibold">{p.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{p.description}</p>
                  </div>

                  {/* Para links externos, <a> está perfecto en Next */}
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          {/* Antecedentes Tab */}
          <TabsContent value="antecedentes">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 font-medium text-muted-foreground text-xs">Tipo</th>
                    <th className="pb-3 font-medium text-muted-foreground text-xs">Descripción</th>
                    <th className="pb-3 font-medium text-muted-foreground text-xs">Año</th>
                    <th className="pb-3 font-medium text-muted-foreground text-xs">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {candidate.records.map((r: any, i: number) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-3 pr-4 text-xs font-medium">{r.type}</td>
                      <td className="py-3 pr-4 text-xs text-muted-foreground">{r.description}</td>
                      <td className="py-3 pr-4 text-xs">{r.year}</td>
                      <td className="py-3">
                        {r.status === "Verificado" ? (
                          <span className="status-verified">
                            <CheckCircle2 className="h-3 w-3" /> Verificado
                          </span>
                        ) : (
                          <span className="status-pending">
                            <Clock className="h-3 w-3" /> Pendiente
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="data-card p-4">
                <p className="text-xs text-muted-foreground">Ingresos declarados</p>
                <p className="text-sm font-semibold mt-1">{candidate.income}</p>
              </div>
              <div className="data-card p-4">
                <p className="text-xs text-muted-foreground">Patrimonio declarado</p>
                <p className="text-sm font-semibold mt-1">{candidate.assets}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </Layout>
  );
}