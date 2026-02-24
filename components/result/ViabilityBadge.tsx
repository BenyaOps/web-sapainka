interface ViabilityBadgeProps {
  viability: "technical" | "populist";
}

const ViabilityBadge = ({ viability }: ViabilityBadgeProps) => {
  const isTechnical = viability === "technical";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isTechnical
          ? "bg-traffic-green-bg text-traffic-green"
          : "bg-traffic-amber-bg text-traffic-amber"
      }`}
    >
      {isTechnical ? "Propuesta Técnica" : "Populismo Detectado"}
    </span>
  );
};

export default ViabilityBadge;
