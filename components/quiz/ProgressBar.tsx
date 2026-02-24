
'use client';
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  current: number;
  total: number;
}

const ProgressBar = ({ progress, current, total }: ProgressBarProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full gradient-navy rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
        {current}/{total}
      </span>
    </div>
  );
};

export default ProgressBar;
