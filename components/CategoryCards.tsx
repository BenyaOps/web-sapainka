'use client';
import { Shield, TrendingUp, Heart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Seguridad", icon: Shield, description: "Propuestas contra la inseguridad" },
  { name: "Economía", icon: TrendingUp, description: "Planes de crecimiento económico" },
  { name: "Salud", icon: Heart, description: "Reforma del sistema de salud" },
  { name: "Educación", icon: GraduationCap, description: "Mejoras en educación pública" },
];

const CategoryCards = () => (
  <section className="container-narrow py-10">
    <h2 className="mb-1 text-lg font-semibold">Propuestas por categoría</h2>
    <p className="mb-6 text-sm text-muted-foreground">Compara las propuestas de cada candidato en los temas clave.</p>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.05 }}
          className="data-card flex cursor-pointer flex-col items-center gap-3 py-6 text-center"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <cat.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold">{cat.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{cat.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CategoryCards;
