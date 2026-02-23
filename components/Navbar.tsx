"use client";

import { Search, Vote } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md"
    >
      <div className="container-narrow flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Vote className="h-5 w-5 text-primary" />
          <span className="text-base font-bold tracking-tight">
            Voto Transparente
          </span>
          <span className="hidden sm:inline text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
            2026
          </span>
        </Link>

        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Buscar candidato</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;