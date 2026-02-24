import { QuizQuestion, AnswerValue } from "@/data/quizData";
import { ThumbsUp, ThumbsDown, Minus } from "lucide-react";
import { TrendingUp, Shield, GraduationCap, Heart, Mountain, Scale, Train, Vote } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Shield, GraduationCap, Heart, Mountain, Scale, Train, Vote,
};

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (value: AnswerValue) => void;
  selectedAnswer?: AnswerValue;
}

const QuizCard = ({ question, onAnswer }: QuizCardProps) => {
  const Icon = iconMap[question.icon] || TrendingUp;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      {/* Category badge */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-secondary">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">{question.category}</span>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
        {question.question}
      </h2>

      {/* Context */}
      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
        {question.context}
      </p>

      {/* Answer buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => onAnswer("favor")}
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-background hover:bg-traffic-green-bg hover:border-traffic-green transition-all active:scale-95 group"
        >
          <ThumbsUp className="h-6 w-6 text-muted-foreground group-hover:text-traffic-green transition-colors" />
          <span className="text-sm font-medium text-foreground">A favor</span>
        </button>

        <button
          onClick={() => onAnswer("neutral")}
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-background hover:bg-secondary transition-all active:scale-95 group"
        >
          <Minus className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="text-sm font-medium text-foreground">Neutral</span>
        </button>

        <button
          onClick={() => onAnswer("contra")}
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-background hover:bg-traffic-red-bg hover:border-traffic-red transition-all active:scale-95 group"
        >
          <ThumbsDown className="h-6 w-6 text-muted-foreground group-hover:text-traffic-red transition-colors" />
          <span className="text-sm font-medium text-foreground">En contra</span>
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
