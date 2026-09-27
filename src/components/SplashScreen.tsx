import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, ShieldCheck, ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(1);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 1600);
    const t2 = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-950 text-white select-none overflow-hidden">
      {/* Background ambient technological grid & circuits */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Top University Crest Tag */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-6 text-center z-10"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-semibold tracking-widest uppercase text-sky-200">
          <ShieldCheck size={14} className="text-cyan-400" />
          Wollo University • CBE
        </span>
      </motion.div>

      {/* Central Emblem & Course Identity */}
      <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto z-10 px-4">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, type: 'spring' }}
          className="relative mb-6"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-sky-400 p-0.5 shadow-2xl shadow-cyan-500/30">
            <div className="w-full h-full rounded-[22px] bg-slate-900/90 backdrop-blur-md flex items-center justify-center relative overflow-hidden">
              {/* Rotating radar glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent animate-pulse" />
              <div className="flex items-center justify-center gap-1">
                <Database className="text-cyan-400 w-10 h-10" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg border-2 border-slate-900 font-bold text-xs">
            4th
          </div>
        </motion.div>

        {/* Title & Program */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            Accounting Information Systems
          </h1>
          <p className="text-sky-200 text-sm font-medium tracking-wide">
            Fourth Year Accounting and Finance
          </p>
          <p className="text-cyan-300 font-bold text-xs uppercase tracking-widest mt-1">
            Wollo University
          </p>
        </motion.div>

        {/* Developer Credit Animation (Transitions in Stage 2) */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-8 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl w-full"
            >
              <div className="text-[11px] uppercase tracking-wider text-sky-300 font-semibold mb-0.5">
                Course Instructor &amp; Developer
              </div>
              <div className="text-base font-bold text-white tracking-wide">
                Naod Mekonnen (PhD)
              </div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">
                Department of Accounting and Finance
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Controls & Skip Button */}
      <div className="w-full max-w-md flex flex-col items-center gap-3 pb-6 z-10">
        <div className="flex items-center gap-1.5 text-xs text-sky-300/80">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Academic Year 2019 E.C. • Semester I</span>
        </div>

        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-sky-500/30"
        >
          <span>Enter Course</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
