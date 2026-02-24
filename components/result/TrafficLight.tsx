interface TrafficLightProps {
  status: "clean" | "observed" | "alert";
}

const statusConfig = {
  clean: { label: "Limpio", activeIndex: 2 },
  observed: { label: "Observado", activeIndex: 1 },
  alert: { label: "Alerta", activeIndex: 0 },
};

const TrafficLight = ({ status }: TrafficLightProps) => {
  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1.5">
        {/* Red */}
        <div
          className={`w-3.5 h-3.5 rounded-full border transition-all ${
            config.activeIndex === 0
              ? "bg-traffic-red border-traffic-red shadow-sm"
              : "bg-traffic-red-bg border-border"
          }`}
        />
        {/* Amber */}
        <div
          className={`w-3.5 h-3.5 rounded-full border transition-all ${
            config.activeIndex === 1
              ? "bg-traffic-amber border-traffic-amber shadow-sm"
              : "bg-traffic-amber-bg border-border"
          }`}
        />
        {/* Green */}
        <div
          className={`w-3.5 h-3.5 rounded-full border transition-all ${
            config.activeIndex === 2
              ? "bg-traffic-green border-traffic-green shadow-sm"
              : "bg-traffic-green-bg border-border"
          }`}
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">{config.label}</span>
    </div>
  );
};

export default TrafficLight;
