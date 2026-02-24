"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, AnswerValue } from "@/data/quizData";
import QuizCard from "@/components/quiz/QuizCard";
import ProgressBar from "@/components/quiz/ProgressBar";
import { ArrowLeft } from "lucide-react";

const Quiz = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [direction, setDirection] = useState(1);

  const progress = ((currentIndex) / quizQuestions.length) * 100;
  const isLast = currentIndex === quizQuestions.length - 1;

  const handleAnswer = (value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [quizQuestions[currentIndex].id]: value }));
    setDirection(1);

    if (isLast) {
      // Navigate to results
      setTimeout(() => router.push("/resultados"), 400);
    } else {
      setTimeout(() => setCurrentIndex((i) => i + 1), 300);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <ProgressBar progress={progress} current={currentIndex + 1} total={quizQuestions.length} />
          </div>
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <QuizCard
                question={quizQuestions[currentIndex]}
                onAnswer={handleAnswer}
                selectedAnswer={answers[quizQuestions[currentIndex].id]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
