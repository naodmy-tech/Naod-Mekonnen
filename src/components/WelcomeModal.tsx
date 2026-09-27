import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, CheckCircle, ArrowRight, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WelcomeModal: React.FC = () => {
  const { hasSeenWelcome, setHasSeenWelcome } = useApp();

  if (hasSeenWelcome) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-sky-100 dark:border-slate-800 overflow-hidden"
      >
        {/* Modal Banner */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 p-6 text-white relative">
          <button 
            onClick={() => setHasSeenWelcome(true)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
            <BookOpen className="text-white" size={26} />
          </div>
          <span className="text-xs uppercase font-bold tracking-wider text-sky-100">
            Wollo University • AcFn 4121
          </span>
          <h2 className="text-xl sm:text-2xl font-black mt-1 leading-snug">
            Welcome to Accounting Information Systems
          </h2>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4 text-slate-700 dark:text-slate-300 text-sm">
          <p className="leading-relaxed font-medium">
            This application provides the official Accounting Information Systems learning materials, course outline, chapter summaries, practice questions, quizzes, and study tools for <strong>Fourth Year Accounting and Finance</strong> students at Wollo University.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sky-50 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700">
              <CheckCircle className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" size={16} />
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-100 text-xs">Offline-First</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">All lectures, outline &amp; quizzes work without internet.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-50 dark:bg-slate-800/60 border border-cyan-100 dark:border-slate-700">
              <Award className="text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" size={16} />
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-100 text-xs">Question Bank</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">End-of-chapter practice and interactive graded quizzes.</p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
            Instructor &amp; Developer: <strong>Naod Mekonnen (PhD)</strong> • Department of Accounting and Finance
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setHasSeenWelcome(true)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 active:from-sky-700 active:to-cyan-700 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-all cursor-pointer"
            >
              <span>Start Learning</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setHasSeenWelcome(true)}
              className="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Skip
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
