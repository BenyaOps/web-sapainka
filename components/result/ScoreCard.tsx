import { CandidateResult } from "@/data/quizData";
import { Share2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ScorecardProps {
  candidates: CandidateResult[];
}

const Scorecard = ({ candidates }: ScorecardProps) => {
  const { toast } = useToast();
  const top3 = candidates.slice(0, 3);

  const handleShare = async () => {
    const text = `🗳️ Mi Match Electoral - Transparencia 2026\n\n${top3
      .map((c, i) => `#${i + 1} ${c.name} (${c.affinity}%)`)
      .join("\n")}\n\nDescubre tu match: transparencia2026.pe`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(text);
      toast({ title: "¡Copiado!", description: "Resultado copiado al portapapeles." });
    }
  };

  return (
    <div className="rounded-2xl border-2 border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Tu Scorecard</h3>
          <p className="text-sm text-muted-foreground">Comparte tu resultado</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-1" />
            Compartir
          </Button>
        </div>
      </div>

      {/* Scorecard visual */}
      <div className="gradient-navy rounded-xl p-5 text-primary-foreground">
        <div className="text-center mb-4">
          <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Transparencia 2026</p>
          <p className="text-sm font-medium opacity-80">Mi Match Electoral</p>
        </div>

        <div className="space-y-3">
          {top3.map((c, i) => (
            <div key={c.id} className="flex items-center gap-3">
              <span className="text-2xl font-extrabold opacity-40">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-xs opacity-60">{c.party}</p>
              </div>
              <span className="text-lg font-bold">{c.affinity}%</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            transparencia2026.pe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
