import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Target, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Trophy,
  BarChart,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { comprehensiveQuestionBank, allChapters } from '../data';
import { PracticeQuestion, QuizAttempt } from '../types';

export const QuizView: React.FC = () => {
  const { recordQuizAttempt, setActiveTab } = useApp();

  // Quiz state machine: 'setup' | 'in_progress' | 'results' | 'review'
  const [quizState, setQuizState] = useState<'setup' | 'in_progress' | 'results' | 'review'>('setup');
  
  // Setup configuration
  const [selectedMode, setSelectedMode] = useState<'quick' | 'standard' | 'chapter' | 'comprehensive' | 'random'>('quick');
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active quiz state
  const [quizQuestions, setQuizQuestions] = useState<PracticeQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: 'A' | 'B' | 'C' | 'D' | null }>({});
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Result metrics
  const [finalScore, setFinalScore] = useState<number>(0);
  const [finalPercentage, setFinalPercentage] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [unansweredCount, setUnansweredCount] = useState<number>(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && quizState === 'in_progress') {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, quizState]);

  const handleStartQuiz = () => {
    let pool: PracticeQuestion[] = [];
    if (selectedMode === 'chapter') {
      pool = comprehensiveQuestionBank.filter(q => q.chapterNumber === selectedChapter);
    } else {
      pool = [...comprehensiveQuestionBank];
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const targetCount = selectedMode === 'quick' ? 10 : selectedMode === 'standard' ? 20 : Math.min(questionCount, shuffled.length);
    const chosen = shuffled.slice(0, targetCount);

    setQuizQuestions(chosen);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setElapsedSeconds(0);
    setIsTimerRunning(true);
    setQuizState('in_progress');
  };

  const handleSelectAnswer = (option: 'A' | 'B' | 'C' | 'D') => {
    const activeQ = quizQuestions[currentQuestionIndex];
    if (!activeQ) return;
    setUserAnswers(prev => ({
      ...prev,
      [activeQ.id]: option
    }));
  };

  const handleSubmitQuiz = () => {
    setIsTimerRunning(false);

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    quizQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (!ans) {
        unanswered++;
      } else if (ans === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = quizQuestions.length;
    const scorePct = total > 0 ? Math.round((correct / total) * 100) : 0;

    setCorrectCount(correct);
    setIncorrectCount(incorrect);
    setUnansweredCount(unanswered);
    setFinalScore(correct);
    setFinalPercentage(scorePct);

    // Record in global context
    recordQuizAttempt({
      mode: selectedMode,
      chapterFilter: selectedMode === 'chapter' ? selectedChapter : undefined,
      totalQuestions: total,
      score: correct,
      percentage: scorePct,
      timeSpentSeconds: elapsedSeconds,
      userAnswers,
      questions: quizQuestions
    });

    if (scorePct >= 75) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }

    setQuizState('results');
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
  };

  // 1. SETUP VIEW
  if (quizState === 'setup') {
    return (
      <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
        {/* Banner */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 rounded-3xl p-6 text-white shadow-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            <Target size={14} />
            Interactive Testing
          </span>
          <h1 className="text-2xl font-black tracking-tight">AIS Knowledge Quiz</h1>
          <p className="text-xs text-rose-100 mt-1 max-w-xl leading-relaxed">
            Test your comprehension of Accounting Information Systems with real-time scoring, percentage grading, and in-depth answer reviews.
          </p>
        </div>

        {/* Quiz Mode Selector */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 dark:text-white">
            Select Quiz Mode
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'quick', title: 'Quick Quiz', desc: '10 randomized questions for a rapid check', count: 10 },
              { id: 'standard', title: 'Standard Quiz', desc: '20 comprehensive questions covering core chapters', count: 20 },
              { id: 'chapter', title: 'Chapter Quiz', desc: 'Focus specifically on one selected chapter', count: 12 },
              { id: 'comprehensive', title: 'Comprehensive Quiz', desc: 'Curated mix across all 7 course chapters', count: 25 },
              { id: 'random', title: 'Random Quiz', desc: 'Randomized sampling from the complete question bank', count: 15 },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedMode(m.id as any);
                  setQuestionCount(m.count);
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedMode === m.id
                    ? 'border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/40 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {m.title}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-xs">
                    {m.count} Qs
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {m.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Chapter selector if Chapter Quiz */}
          {selectedMode === 'chapter' && (
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Choose Specific Chapter:
              </label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(Number(e.target.value))}
                className="w-full text-xs font-bold p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
              >
                {allChapters.map(ch => (
                  <option key={ch.id} value={ch.number}>
                    Chapter {ch.number}: {ch.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Start Quiz CTA */}
          <button
            onClick={handleStartQuiz}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-sm shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Start Interactive Quiz</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // 2. IN PROGRESS VIEW
  if (quizState === 'in_progress') {
    const currentQ = quizQuestions[currentQuestionIndex];
    const chosenAnswer = userAnswers[currentQ?.id];

    return (
      <div className="space-y-4 pb-20 max-w-3xl mx-auto px-4 pt-4">
        {/* Quiz Progress & Timer Bar */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-14 z-30">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-extrabold text-xs flex items-center justify-center">
              {currentQuestionIndex + 1}/{quizQuestions.length}
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 hidden sm:inline">
              Chapter {currentQ?.chapterNumber}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold">
            <Clock size={14} className="text-rose-500" />
            <span>{formatTime(elapsedSeconds)}</span>
          </div>

          <button
            onClick={handleSubmitQuiz}
            className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow transition-colors cursor-pointer"
          >
            Submit Quiz
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 px-1">
          {quizQuestions.map((q, idx) => {
            const hasAnswered = !!userAnswers[q.id];
            const isCurrent = idx === currentQuestionIndex;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-rose-600 text-white ring-2 ring-rose-400'
                    : hasAnswered
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Current Question Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Question {currentQuestionIndex + 1} • {currentQ?.topic}
            </span>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {currentQ?.difficulty}
            </span>
          </div>

          <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-relaxed">
            {currentQ?.question}
          </h3>

          {/* Options */}
          <div className="space-y-2.5 pt-2">
            {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
              const isSelected = chosenAnswer === optKey;
              return (
                <button
                  key={optKey}
                  onClick={() => handleSelectAnswer(optKey)}
                  className={`w-full flex items-start gap-3 p-3.5 rounded-2xl text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-500/15 border-2 border-rose-500 text-slate-900 dark:text-white font-semibold'
                      : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                    isSelected
                      ? 'bg-rose-500 text-white'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600'
                  }`}>
                    {optKey}
                  </span>
                  <span className="leading-relaxed pt-0.5">
                    {currentQ?.options[optKey]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next / Previous Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-semibold text-xs disabled:opacity-40 flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            {currentQuestionIndex < quizQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center gap-1 shadow cursor-pointer"
              >
                <span>Finish &amp; Submit</span>
                <Check size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 3. RESULTS VIEW
  if (quizState === 'results') {
    const isPassing = finalPercentage >= 65;

    return (
      <div className="space-y-6 pb-20 max-w-2xl mx-auto px-4 pt-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-xl shadow-rose-500/30">
            {isPassing ? <Trophy size={40} /> : <Target size={40} />}
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
              Quiz Completed
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
              Score: {finalScore} / {quizQuestions.length}
            </h2>
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500 mt-2">
              {finalPercentage}%
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {isPassing ? 'Outstanding performance! Keep up the great work.' : 'Review your incorrect answers and try again to improve.'}
            </p>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
              <div className="text-emerald-700 dark:text-emerald-300 font-black text-lg">
                {correctCount}
              </div>
              <div className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-200">
                Correct
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900">
              <div className="text-rose-700 dark:text-rose-300 font-black text-lg">
                {incorrectCount}
              </div>
              <div className="text-[11px] font-semibold text-rose-800 dark:text-rose-200">
                Incorrect
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <div className="text-slate-700 dark:text-slate-300 font-black text-lg">
                {unansweredCount}
              </div>
              <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                Unanswered
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
            <Clock size={14} />
            <span>Time Used: <strong>{formatTime(elapsedSeconds)}</strong></span>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => setQuizState('review')}
              className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-md shadow-rose-500/20 transition-all cursor-pointer"
            >
              Review Answers &amp; Explanations
            </button>

            <div className="flex gap-2">
              <button
                onClick={handleStartQuiz}
                className="flex-1 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <RotateCcw size={15} />
                <span>Try Again</span>
              </button>

              <button
                onClick={() => {
                  setQuizState('setup');
                  setActiveTab('home');
                }}
                className="flex-1 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. REVIEW MODE (Showing answers, user selection vs correct, explanations)
  return (
    <div className="space-y-4 pb-20 max-w-3xl mx-auto px-4 pt-4">
      {/* Review Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-14 z-30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuizState('results')}
            className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Quiz Answer Review
            </h2>
            <p className="text-[11px] text-slate-500">
              Score: {finalScore}/{quizQuestions.length} ({finalPercentage}%)
            </p>
          </div>
        </div>

        <button
          onClick={() => setQuizState('setup')}
          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold"
        >
          New Quiz
        </button>
      </div>

      {/* Questions list with feedback */}
      <div className="space-y-4">
        {quizQuestions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-slate-900 rounded-3xl p-5 border shadow-sm space-y-3 ${
                isCorrect 
                  ? 'border-emerald-200 dark:border-emerald-900/60' 
                  : 'border-rose-200 dark:border-rose-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  Question {idx + 1} (Chapter {q.chapterNumber})
                </span>
                {isCorrect ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={16} />
                    Correct
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                    <XCircle size={16} />
                    {userAns ? 'Incorrect' : 'Unanswered'}
                  </span>
                )}
              </div>

              <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                {q.question}
              </p>

              {/* Options */}
              <div className="space-y-2 pt-1">
                {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                  const isUserSelection = userAns === optKey;
                  const isActualCorrect = q.correctAnswer === optKey;

                  let borderClass = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40';
                  if (isActualCorrect) {
                    borderClass = 'border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-bold';
                  } else if (isUserSelection && !isActualCorrect) {
                    borderClass = 'border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 font-bold';
                  }

                  return (
                    <div
                      key={optKey}
                      className={`p-3 rounded-2xl text-xs flex items-start gap-2.5 ${borderClass}`}
                    >
                      <span className="font-extrabold w-5 shrink-0">{optKey}.</span>
                      <span className="leading-relaxed">{q.options[optKey]}</span>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Explanation */}
              <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 text-xs space-y-1">
                <span className="font-extrabold text-sky-800 dark:text-sky-300 block">
                  Authoritative Explanation (Teaching Material):
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {q.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
