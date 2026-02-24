'use client';
import { candidates } from "@/data/candidates";
import { motion } from "framer-motion";
import Link from "next/link";

const PollsChart = () => {
  const sorted = [...candidates].sort((a, b) => b.pollPercentage - a.pollPercentage);
  const max = Math.max(...sorted.map((c) => c.pollPercentage));

  return (
    <section className="container-narrow py-10">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Agregado de encuestas</h2>
          <p className="text-sm text-muted-foreground">Promedio ponderado de las principales encuestadoras.</p>
        </div>
        <span className="text-xs text-muted-foreground">Feb 2026</span>
      </div>
      <div className="space-y-4">
        {sorted.map((c, i) => (
          <Link href={`/candidato/${c.id}`} key={c.id}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="group flex items-center gap-4"
            >
              <div className="w-32 sm:w-44 shrink-0">
                <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.partyAbbr}</p>
              </div>
              <div className="flex-1 h-7 rounded-md bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(c.pollPercentage / max) * 100}%` }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                  className="h-full rounded-md bg-primary/80"
                />
              </div>
              <span className="w-14 text-right text-sm font-semibold tabular-nums">{c.pollPercentage}%</span>
            </motion.div>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Fuente: Agregado propio basado en Ipsos, Datum e IEP. Los datos no representan predicción de resultados.
      </p>
    </section>
  );
};

export default PollsChart;
