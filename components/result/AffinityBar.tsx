interface AffinityBarProps {
  percentage: number;
}

const AffinityBar = ({ percentage }: AffinityBarProps) => {
  const getColor = () => {
    if (percentage >= 75) return "bg-affinity-high";
    if (percentage >= 50) return "bg-affinity-mid";
    return "bg-affinity-low";
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${getColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-bold text-foreground whitespace-nowrap">
        {percentage}%
      </span>
    </div>
  );
};

export default AffinityBar;
