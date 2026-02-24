import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, ChevronRight, BarChart3, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-navy opacity-[0.03]" />
        <div className="container mx-auto px-4 pt-20 pb-24 md:pt-32 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-affinity-high animate-pulse-gentle" />
              Elecciones Generales · Abril 2026
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
              Transparencia{" "}
              <span className="text-accent">2026</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance leading-relaxed">
              43 partidos, 1 sola decisión. Encuentra tu match electoral basado en propuestas y datos reales.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/quiz")}
                className="gradient-navy text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap className="mr-2 h-5 w-5" />
                Realizar Test de Afinidad
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-xl mx-auto mt-16 grid grid-cols-3 gap-6"
          >
            {[
              { icon: Users, label: "Candidatos", value: "43" },
              { icon: BarChart3, label: "Preguntas", value: "8" },
              { icon: ShieldCheck, label: "Datos verificados", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 Transparencia 2026</span>
          <div className="flex gap-6">
            <button className="hover:text-foreground transition-colors">Metodología</button>
            <a
              href="https://www.jne.gob.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Fuentes Oficiales (JNE)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
