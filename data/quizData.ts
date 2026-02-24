export interface QuizQuestion {
  id: number;
  category: string;
  icon: string;
  question: string;
  context: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Economía",
    icon: "TrendingUp",
    question: "¿Se debería aumentar el salario mínimo a S/. 1,500 en los próximos 2 años?",
    context: "Actualmente el salario mínimo es de S/. 1,025. Un aumento podría beneficiar a trabajadores pero impactar a pequeñas empresas.",
  },
  {
    id: 2,
    category: "Seguridad",
    icon: "Shield",
    question: "¿Las Fuerzas Armadas deberían apoyar a la Policía Nacional en zonas urbanas con alta criminalidad?",
    context: "La inseguridad ciudadana es la principal preocupación del 80% de peruanos según encuestas recientes.",
  },
  {
    id: 3,
    category: "Educación",
    icon: "GraduationCap",
    question: "¿El Estado debería garantizar internet gratuito en todas las escuelas públicas del país?",
    context: "Solo el 40% de escuelas rurales tiene acceso a internet. La brecha digital afecta a millones de estudiantes.",
  },
  {
    id: 4,
    category: "Salud",
    icon: "Heart",
    question: "¿Se debería implementar un sistema de salud universal que integre EsSalud, SIS y el sector privado?",
    context: "El 30% de peruanos no tiene acceso a ningún tipo de seguro de salud.",
  },
  {
    id: 5,
    category: "Minería",
    icon: "Mountain",
    question: "¿Se deberían flexibilizar los requisitos ambientales para acelerar proyectos mineros?",
    context: "La minería representa el 60% de exportaciones pero genera conflictos socioambientales en varias regiones.",
  },
  {
    id: 6,
    category: "Corrupción",
    icon: "Scale",
    question: "¿Los funcionarios públicos investigados por corrupción deberían ser impedidos de postular a cargos públicos?",
    context: "Perú ocupa el puesto 101 de 180 países en el Índice de Percepción de Corrupción de Transparencia Internacional.",
  },
  {
    id: 7,
    category: "Transporte",
    icon: "Train",
    question: "¿Se debería priorizar el transporte público masivo (metro, BRT) sobre la construcción de autopistas?",
    context: "Lima es la tercera ciudad con peor tráfico en Latinoamérica. El Metro de Lima tiene solo 2 líneas operativas.",
  },
  {
    id: 8,
    category: "Reforma Política",
    icon: "Vote",
    question: "¿Se debería permitir la reelección inmediata de congresistas?",
    context: "Actualmente los congresistas no pueden reelegirse. Algunos argumentan que esto impide la continuidad de políticas.",
  },
];

export type AnswerValue = "favor" | "contra" | "neutral";

export interface CandidateResult {
  id: string;
  name: string;
  party: string;
  affinity: number;
  antecedent: "clean" | "observed" | "alert";
  viability: "technical" | "populist";
  summary: string[];
  partyColor: string;
}

export const mockCandidates: CandidateResult[] = [
  {
    id: "alpha",
    name: "Candidato Alpha",
    party: "Movimiento Progreso Nacional",
    affinity: 87,
    antecedent: "clean",
    viability: "technical",
    summary: [
      "Propone reforma tributaria progresiva con reducción de IGV a productos de primera necesidad.",
      "Plan de inversión en infraestructura digital para conectar 10,000 colegios rurales en 3 años.",
      "Creación de un sistema integrado de salud con cobertura universal financiado por impuestos a la minería.",
    ],
    partyColor: "213 94% 54%",
  },
  {
    id: "beta",
    name: "Líder Beta",
    party: "Alianza Ciudadana",
    affinity: 72,
    antecedent: "observed",
    viability: "technical",
    summary: [
      "Impulsa la descentralización fiscal para dar mayor autonomía económica a las regiones.",
      "Propone alianzas público-privadas para construir 3 nuevas líneas de metro en Lima y Arequipa.",
      "Plan de seguridad ciudadana basado en tecnología de vigilancia e inteligencia artificial.",
    ],
    partyColor: "142 55% 49%",
  },
  {
    id: "gamma",
    name: "Gestor Gamma",
    party: "Frente Unido por el Cambio",
    affinity: 54,
    antecedent: "alert",
    viability: "populist",
    summary: [
      "Promete duplicar el salario mínimo en su primer año de gobierno sin plan de financiamiento claro.",
      "Propone nacionalizar recursos estratégicos sin definir mecanismos legales ni compensaciones.",
      "Plan de vivienda social con construcción de 500,000 viviendas sin estudios de factibilidad.",
    ],
    partyColor: "38 92% 50%",
  },
];
