import { CandidateResult } from "@/data/quizData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import TrafficLight from "./TrafficLight";
import ViabilityBadge from "./ViabilityBadge";

interface CandidateModalProps {
  candidate: CandidateResult | null;
  onClose: () => void;
}

const CandidateModal = ({ candidate, onClose }: CandidateModalProps) => {
  if (!candidate) return null;

  return (
    <Dialog open={!!candidate} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: `hsl(${candidate.partyColor} / 0.12)`,
                color: `hsl(${candidate.partyColor})`,
              }}
            >
              ●
            </div>
            <div>
              <DialogTitle className="text-lg">{candidate.name}</DialogTitle>
              <DialogDescription>{candidate.party}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <TrafficLight status={candidate.antecedent} />
            <ViabilityBadge viability={candidate.viability} />
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Resumen del Plan de Gobierno
            </h4>
            <ol className="space-y-3">
              {candidate.summary.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateModal;
