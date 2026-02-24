'use client';
import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { candidates } from "@/data/candidates";
import { motion, AnimatePresence } from "framer-motion";

const SearchHero = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = query.length > 1
    ? candidates.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.party.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="border-b border-border bg-card">
      <div className="container-narrow py-14 sm:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-bold mb-2"
        >
          Elecciones Perú 2026
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm mb-8"
        >
          Información verificada, imparcial y transparente sobre cada candidato.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative mx-auto max-w-lg"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca a tu candidato o partido..."
            className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm shadow-sm outline-none ring-primary/20 transition-shadow focus:ring-2 focus:shadow-md"
          />

          <AnimatePresence>
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-border bg-card shadow-lg z-10 overflow-hidden"
              >
                {results.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      router.push(`/candidato/${c.id}`);
                      setQuery("");
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-secondary"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.party}</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchHero;
