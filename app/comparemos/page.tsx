import { useState } from "react";
import { candidates, type Candidate, getScoreColor } from "@/data/candidates";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, ShieldCheck, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

const CandidateSelector = ({
  selected,
  onSelect,
  exclude,
}: {
  selected: Candidate | null;
  onSelect: (c: Candidate) => void;
  exclude?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:bg-secondary"
      >
        {selected ? (
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {selected.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <span className="font-medium">{selected.name}</span>
          </div>
        ) : (
          <span className="text-muted-foreground">Seleccionar candidato</span>
        )}
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-20 rounded-lg border border-border bg-card shadow-lg overflow-hidden">
          {candidates
            .filter((c) => c.id !== exclude)
            .map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  onSelect(c);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                  {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                {c.name}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

const CompareRow = ({ label, left, right }: { label: string; left: React.ReactNode; right: React.ReactNode }) => (
  <div className="grid grid-cols-[1fr_1fr] gap-3 border-b border-border py-4 last:border-0">
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

const ComparePage = () => {
  const [candidateA, setCandidateA] = useState<Candidate | null>(candidates[0]);
  const [candidateB, setCandidateB] = useState<Candidate | null>(candidates[1]);

  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container-narrow py-6">
    <Link hredf="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-3.5 w-3.5" /> Volver
        </Link>

        <h1 className="text-xl font-bold mb-1">Comparar candidatos</h1>
        <p className="text-sm text-muted-foreground mb-6">Selecciona dos candidatos para una comparación detallada.</p>

        {/* Sticky selectors */}
        <div className="sticky top-14 z-30 bg-background py-3 grid grid-cols-2 gap-3 border-b border-border mb-4">
          <CandidateSelector selected={candidateA} onSelect={setCandidateA} exclude={candidateB?.id} />
          <CandidateSelector selected={candidateB} onSelect={setCandidateB} exclude={candidateA?.id} />
        </div>

        {candidateA && candidateB && (
          <div className="overflow-x-auto">
            {/* Transparency Score */}
            <div className="mb-6">
              <h3 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Transparencia</h3>
              <CompareRow
                label="Score"
                left={
                  <div className={getScoreColor(candidateA.transparencyScore)}>
                    <ShieldCheck className="h-3.5 w-3.5" /> {candidateA.transparencyScore}%
                  </div>
                }
                right={
                  <div className={getScoreColor(candidateB.transparencyScore)}>
                    <ShieldCheck className="h-3.5 w-3.5" /> {candidateB.transparencyScore}%
                  </div>
                }
              />
            </div>

            {/* Education */}
            <div className="mb-6">
              <h3 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Educación</h3>
              <CompareRow
                label="Educación"
                left={
                  <div className="space-y-2">
                    {candidateA.education.map((e, i) => (
                      <div key={i}>
                        <p className="text-sm font-medium">{e.degree}</p>
                        <p className="text-xs text-muted-foreground">{e.institution}</p>
                      </div>
                    ))}
                  </div>
                }
                right={
                  <div className="space-y-2">
                    {candidateB.education.map((e, i) => (
                      <div key={i}>
                        <p className="text-sm font-medium">{e.degree}</p>
                        <p className="text-xs text-muted-foreground">{e.institution}</p>
                      </div>
                    ))}
                  </div>
                }
              />
            </div>

            {/* Proposals - Security */}
            <div className="mb-6">
              <h3 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Propuestas — Seguridad</h3>
              <CompareRow
                label="Seguridad"
                left={
                  <div>
                    {candidateA.proposals.filter(p => p.category === "Seguridad").map((p, i) => (
                      <div key={i}>
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{p.description}</p>
                      </div>
                    ))}
                  </div>
                }
                right={
                  <div>
                    {candidateB.proposals.filter(p => p.category === "Seguridad").map((p, i) => (
                      <div key={i}>
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{p.description}</p>
                      </div>
                    ))}
                  </div>
                }
              />
            </div>

            {/* Income */}
            <div className="mb-6">
              <h3 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Declaración de ingresos</h3>
              <CompareRow
                label="Ingresos"
                left={
                  <div>
                    <p className="text-sm font-medium">{candidateA.income}</p>
                    <p className="text-xs text-muted-foreground">Patrimonio: {candidateA.assets}</p>
                  </div>
                }
                right={
                  <div>
                    <p className="text-sm font-medium">{candidateB.income}</p>
                    <p className="text-xs text-muted-foreground">Patrimonio: {candidateB.assets}</p>
                  </div>
                }
              />
            </div>

            {/* Records */}
            <div className="mb-6">
              <h3 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Antecedentes</h3>
              <CompareRow
                label="Records"
                left={
                  <div className="space-y-2">
                    {candidateA.records.map((r, i) => (
                      <div key={i} className="flex items-start gap-2">
                        {r.status === "Verificado" ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="h-3.5 w-3.5 text-[hsl(var(--score-medium))] shrink-0 mt-0.5" />
                        )}
                        <p className="text-xs text-muted-foreground">{r.description}</p>
                      </div>
                    ))}
                  </div>
                }
                right={
                  <div className="space-y-2">
                    {candidateB.records.map((r, i) => (
                      <div key={i} className="flex items-start gap-2">
                        {r.status === "Verificado" ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="h-3.5 w-3.5 text-[hsl(var(--score-medium))] shrink-0 mt-0.5" />
                        )}
                        <p className="text-xs text-muted-foreground">{r.description}</p>
                      </div>
                    ))}
                  </div>
                }
              />
            </div>
          </div>
        )}
      </motion.div>
    </Layout>
  );
};

export default ComparePage;
