export interface Candidate {
  id: string;
  name: string;
  party: string;
  partyAbbr: string;
  photo: string;
  transparencyScore: number;
  pollPercentage: number;
  experience: { year: string; role: string; institution: string }[];
  education: { degree: string; institution: string; year: string }[];
  proposals: {
    category: string;
    title: string;
    description: string;
    source: string;
  }[];
  records: {
    type: string;
    description: string;
    status: "Verificado" | "Pendiente";
    year: string;
  }[];
  income: string;
  assets: string;
}

export const candidates: Candidate[] = [
  {
    id: "garcia-luna",
    name: "María García Luna",
    party: "Partido Progreso Nacional",
    partyAbbr: "PPN",
    photo: "",
    transparencyScore: 82,
    pollPercentage: 28.4,
    experience: [
      { year: "2021-2026", role: "Congresista de la República", institution: "Congreso del Perú" },
      { year: "2018-2021", role: "Alcaldesa Provincial", institution: "Municipalidad de Arequipa" },
      { year: "2014-2018", role: "Regidora Municipal", institution: "Municipalidad de Arequipa" },
    ],
    education: [
      { degree: "Maestría en Políticas Públicas", institution: "Universidad del Pacífico", year: "2013" },
      { degree: "Licenciatura en Derecho", institution: "PUCP", year: "2008" },
    ],
    proposals: [
      { category: "Seguridad", title: "Policía Comunitaria 2.0", description: "Implementación de 500 nuevas comisarías inteligentes con tecnología de vigilancia.", source: "https://planprogreso.pe/seguridad" },
      { category: "Economía", title: "Formalización MYPE", description: "Reducción de trámites al 50% para micro y pequeñas empresas.", source: "https://planprogreso.pe/economia" },
      { category: "Salud", title: "Telemedicina Nacional", description: "Conexión de 1,200 postas médicas rurales con hospitales de referencia.", source: "https://planprogreso.pe/salud" },
      { category: "Educación", title: "Tablets para Todos", description: "Distribución de 2M de dispositivos con contenido offline.", source: "https://planprogreso.pe/educacion" },
    ],
    records: [
      { type: "Civil", description: "Demanda por incumplimiento contractual", status: "Verificado", year: "2019" },
      { type: "Declaración Jurada", description: "Inconsistencia en declaración de bienes 2020", status: "Pendiente", year: "2020" },
    ],
    income: "S/ 185,000 anuales",
    assets: "S/ 1,200,000",
  },
  {
    id: "torres-mendez",
    name: "Carlos Torres Méndez",
    party: "Alianza Ciudadana",
    partyAbbr: "AC",
    photo: "",
    transparencyScore: 74,
    pollPercentage: 22.1,
    experience: [
      { year: "2019-2026", role: "Gobernador Regional", institution: "Gobierno Regional de La Libertad" },
      { year: "2015-2019", role: "Alcalde Distrital", institution: "Municipalidad de Trujillo" },
      { year: "2010-2015", role: "Gerente General", institution: "Empresa Agroindustrial del Norte" },
    ],
    education: [
      { degree: "MBA", institution: "ESAN", year: "2012" },
      { degree: "Ingeniería Industrial", institution: "UNI", year: "2005" },
    ],
    proposals: [
      { category: "Seguridad", title: "Plan Mano Firme", description: "Aumento del presupuesto policial en 40% y creación de brigadas especiales.", source: "https://alianzaciudadana.pe/seguridad" },
      { category: "Economía", title: "Corredores Económicos", description: "Creación de 5 zonas económicas especiales en regiones.", source: "https://alianzaciudadana.pe/economia" },
      { category: "Salud", title: "Hospital Regional Moderno", description: "Construcción de 15 hospitales regionales categoría III.", source: "https://alianzaciudadana.pe/salud" },
      { category: "Educación", title: "Escuelas Bicentenario", description: "Renovación de infraestructura de 5,000 colegios públicos.", source: "https://alianzaciudadana.pe/educacion" },
    ],
    records: [
      { type: "Penal", description: "Investigación por negociación incompatible (archivada)", status: "Verificado", year: "2021" },
      { type: "Civil", description: "Proceso por deuda tributaria", status: "Pendiente", year: "2022" },
    ],
    income: "S/ 240,000 anuales",
    assets: "S/ 3,500,000",
  },
  {
    id: "quispe-huaman",
    name: "Rosa Quispe Huamán",
    party: "Movimiento Tierra y Libertad",
    partyAbbr: "MTL",
    photo: "",
    transparencyScore: 91,
    pollPercentage: 15.7,
    experience: [
      { year: "2020-2026", role: "Congresista de la República", institution: "Congreso del Perú" },
      { year: "2016-2020", role: "Directora Ejecutiva", institution: "ONG Desarrollo Rural Perú" },
      { year: "2010-2016", role: "Docente Universitaria", institution: "UNSAAC" },
    ],
    education: [
      { degree: "Doctorado en Sociología", institution: "UNMSM", year: "2015" },
      { degree: "Maestría en Desarrollo Rural", institution: "UNSAAC", year: "2009" },
      { degree: "Licenciatura en Antropología", institution: "UNSAAC", year: "2005" },
    ],
    proposals: [
      { category: "Seguridad", title: "Justicia Intercultural", description: "Integración de rondas campesinas al sistema de seguridad ciudadana.", source: "https://tierraylibertad.pe/seguridad" },
      { category: "Economía", title: "Banca Comunal", description: "Creación de cooperativas de ahorro y crédito en 500 comunidades.", source: "https://tierraylibertad.pe/economia" },
      { category: "Salud", title: "Medicina Intercultural", description: "Red de centros de salud con enfoque intercultural en zonas rurales.", source: "https://tierraylibertad.pe/salud" },
      { category: "Educación", title: "EIB Universal", description: "Educación Intercultural Bilingüe obligatoria en regiones con lenguas originarias.", source: "https://tierraylibertad.pe/educacion" },
    ],
    records: [
      { type: "Declaración Jurada", description: "Declaraciones completas y consistentes", status: "Verificado", year: "2024" },
    ],
    income: "S/ 120,000 anuales",
    assets: "S/ 450,000",
  },
  {
    id: "fernandez-castro",
    name: "Jorge Fernández Castro",
    party: "Fuerza Democrática",
    partyAbbr: "FD",
    photo: "",
    transparencyScore: 65,
    pollPercentage: 18.3,
    experience: [
      { year: "2022-2026", role: "Ministro de Economía", institution: "Gobierno del Perú" },
      { year: "2016-2022", role: "Director Ejecutivo", institution: "Grupo Inversiones del Pacífico" },
      { year: "2010-2016", role: "Economista Senior", institution: "Banco Central de Reserva" },
    ],
    education: [
      { degree: "PhD en Economía", institution: "University of Chicago", year: "2009" },
      { degree: "Licenciatura en Economía", institution: "Universidad del Pacífico", year: "2004" },
    ],
    proposals: [
      { category: "Seguridad", title: "Seguridad Inteligente", description: "Sistema nacional de videovigilancia con IA en 50 ciudades.", source: "https://fuerzademocratica.pe/seguridad" },
      { category: "Economía", title: "Perú Digital", description: "Transformación digital del Estado y eliminación del 80% de trámites presenciales.", source: "https://fuerzademocratica.pe/economia" },
      { category: "Salud", title: "Seguro Universal Plus", description: "Ampliación del SIS con cobertura de enfermedades catastróficas.", source: "https://fuerzademocratica.pe/salud" },
      { category: "Educación", title: "Becas Talento", description: "50,000 becas integrales anuales para educación superior.", source: "https://fuerzademocratica.pe/educacion" },
    ],
    records: [
      { type: "Civil", description: "Conflicto de intereses durante gestión ministerial", status: "Pendiente", year: "2023" },
      { type: "Tributario", description: "Procedimiento de fiscalización SUNAT", status: "Pendiente", year: "2022" },
      { type: "Declaración Jurada", description: "Omisión de activos en el extranjero", status: "Verificado", year: "2024" },
    ],
    income: "S/ 520,000 anuales",
    assets: "S/ 8,200,000",
  },
];

export const getCandidateById = (id: string) => candidates.find((c) => c.id === id);

export const getScoreColor = (score: number) => {
  if (score >= 80) return "score-high";
  if (score >= 60) return "score-medium";
  return "score-low";
};
