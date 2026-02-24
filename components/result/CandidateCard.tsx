import { CandidateResult } from "@/data/quizData";
import TrafficLight from "./TrafficLight";
import ViabilityBadge from "./ViabilityBadge";
import AffinityBar from "./AffinityBar";
import { ChevronRight } from "lucide-react";

interface CandidateCardProps {
  candidate: CandidateResult;
  rank: number;
  onViewDetail: () => void;
}

const CandidateCard = ({ candidate, rank, onViewDetail }: CandidateCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Rank + Party logo placeholder */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold text-muted-foreground">#{rank}</span>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
            style={{
              backgroundColor: `hsl(${candidate.partyColor} / 0.12)`,
              color: `hsl(${candidate.partyColor})`,
            }}
          >
            {candidate.name.charAt(candidate.name.length - 1) === "a"
              ? "▲"
              : candidate.name.charAt(candidate.name.length - 1) === "a"
              ? "◆"
              : "●"}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-lg font-bold text-foreground">{candidate.name}</h3>
            <ViabilityBadge viability={candidate.viability} />
          </div>
          <p className="text-sm text-muted-foreground mb-3">{candidate.party}</p>

          {/* Affinity */}
          <AffinityBar percentage={candidate.affinity} />

          {/* Bottom row */}
          <div className="flex items-center justify-between mt-4">
            <TrafficLight status={candidate.antecedent} />
            <button
              onClick={onViewDetail}
              className="flex items-center gap-1 text-sm font-medium text-accent hover:underline transition-colors"
            >
              Ver Detalle
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
