import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { mockCandidates } from "@/data/quizData";
import CandidateCard from "@/components/result/CandidateCard";
import CandidateModal from "@/components/result/CandidateModal";
import Scorecard from "@/components/result/ScoreCard";
import { CandidateResult } from "@/data/quizData";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  const router = useRouter();
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateResult | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-sm font-semibold text-foreground">Tus Resultados</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/quiz")}
            className="text-muted-foreground"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Repetir
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
            Tu Match Ideal
          </h2>
          <p className="text-muted-foreground">
            Basado en tus respuestas, estos candidatos se alinean más con tu posición.
          </p>
        </motion.div>

        {/* Candidate cards */}
        <div className="space-y-4 mb-12">
          {mockCandidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <CandidateCard
                candidate={candidate}
                rank={index + 1}
                onViewDetail={() => setSelectedCandidate(candidate)}
              />
            </motion.div>
          ))}
        </div>

        {/* Scorecard viral */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Scorecard candidates={mockCandidates} />
        </motion.div>
      </div>

      {/* Modal */}
      <CandidateModal
        candidate={selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
      />
    </div>
  );
};

export default Results;
