'use client';
import SearchHero from "@/components/SearchHero";
import CategoryCards from "@/components/CategoryCards";
import PollsChart from "@/components/PollsChart";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => (
  <>
    <SearchHero />
    <CategoryCards />
    <PollsChart />

    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="container-narrow pb-16"
    >
      <Link
        href="/comparemos"
        className="data-card flex items-center justify-between group"
      >
        <div>
          <p className="font-semibold text-sm">Herramienta de comparación</p>
          <p className="text-xs text-muted-foreground">Compara a dos candidatos lado a lado en todos los aspectos.</p>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </Link>
    </motion.section>

    <footer className="border-t border-border py-8">
      <div className="container-narrow text-center">
        <p className="text-xs text-muted-foreground">
          Voto Transparente Perú 2026 — Plataforma independiente de datos electorales.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Los datos provienen de fuentes públicas y verificadas. No estamos afiliados a ningún partido político.
        </p>
      </div>
    </footer>
  </>
);

export default Index;
