import React from 'react';
import { 
  BarChart2, 
  CheckCircle, 
  Clock, 
  Award, 
  Flame, 
  BookOpen, 
  HelpCircle, 
  Target, 
  TrendingUp,
  Bookmark,
  Calendar,
  CheckSquare
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allChapters } from '../data';

export const LearningProgressView: React.FC = () => {
  const { 
    chapterProgress, 
    markChapterStatus, 
    quizAttempts, 
    practicedQuestionIds, 
    bookmarks, 
    studyLogs,
    achievements,
    setActiveTab,
    setMoreSubTab
  } = useApp();

  const completedCount = Object.values(chapterProgress).filter(p => p.status === 'completed').length;
  const inProgressCount = Object.values(chapterProgress).filter(p => p.status === 'in_progress').length;
  const overallPercentage = Math.round((completedCount / allChapters.length) * 100);

  // Average and best quiz scores
  const quizScores = quizAttempts.map(q => q.percentage);
  const avgQuizScore = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
  const bestQuizScore = quizScores.length > 0 ? Math.max(...quizScores) : 0;

  // Total study minutes today
  const totalStudyMinutes = studyLogs.reduce((acc, log) => acc + log.durationMinutes, 0);

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-700 via-sky-600 to-blue-700 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <BarChart2 size={14} />
          Student Analytics
        </span>
        <h1 className="text-2xl font-black tracking-tight">Learning Progress</h1>
        <p className="text-xs text-sky-100 mt-1 max-w-xl">
          Track your chapter milestones, reading progression, quiz scores, and academic achievements.
        </p>

        {/* Big Progress Bar */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Overall Course Progress</span>
            <span className="text-cyan-300 text-sm">{overallPercentage}%</span>
          </div>
          <div className="w-full h-3.5 bg-black/25 rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-cyan-300 to-sky-400 rounded-full transition-all duration-700"
              style={{ width: `${Math.max(5, overallPercentage)}%` }}
            />
          </div>
          <div className="text-[11px] text-sky-100/90 font-medium">
            <strong>{completedCount} of 7 chapters completed</strong> • {inProgressCount} in progress
          </div>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="w-10 h-10 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 mx-auto flex items-center justify-center mb-2">
            <BookOpen size={20} />
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {completedCount}/7
          </div>
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Chapters Done
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-300 mx-auto flex items-center justify-center mb-2">
            <HelpCircle size={20} />
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {practicedQuestionIds.length}
          </div>
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Questions Practiced
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-300 mx-auto flex items-center justify-center mb-2">
            <Target size={20} />
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {avgQuizScore}%
          </div>
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Avg Quiz Score
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 mx-auto flex items-center justify-center mb-2">
            <Clock size={20} />
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {totalStudyMinutes}m
          </div>
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Study Time Logged
          </div>
        </div>
      </div>

      {/* Chapter-by-Chapter Breakdown */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckSquare size={16} className="text-sky-600" />
          <span>Chapter Completion Status</span>
        </h2>

        <div className="space-y-3">
          {allChapters.map(ch => {
            const p = chapterProgress[ch.id] || { status: 'not_started', readPercentage: 0, lastReadPage: 1 };
            return (
              <div 
                key={ch.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center ${
                    p.status === 'completed'
                      ? 'bg-emerald-500 text-white'
                      : p.status === 'in_progress'
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {ch.number}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Chapter {ch.number}: {ch.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Page {p.lastReadPage} of {ch.totalPages} • {p.readPercentage}% Read
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={p.status}
                    onChange={(e) => markChapterStatus(ch.id, e.target.value as any)}
                    className="text-xs font-bold py-1.5 px-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    <option value="not_started">Not Started</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed ✓</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Academic Achievements Badge Showcase */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Award size={16} className="text-amber-500" />
            <span>Academic Achievement Badges</span>
          </h2>
          <span className="text-xs text-slate-500 font-semibold">
            {achievements.filter(a => a.unlocked).length} of {achievements.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                ach.unlocked
                  ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60 grayscale'
              }`}
            >
              <div className="text-2xl mb-1">{ach.icon}</div>
              <h4 className="text-xs font-black text-slate-900 dark:text-white">
                {ach.title}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                {ach.description}
              </p>
              {ach.unlocked && (
                <span className="inline-block mt-1.5 text-[9px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                  Unlocked ✓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quiz History Table */}
      {quizAttempts.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp size={16} className="text-rose-500" />
            <span>Recent Quiz Attempts</span>
          </h3>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {quizAttempts.slice(0, 5).map((att) => (
              <div key={att.id} className="py-2.5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-100 capitalize">
                    {att.mode} Quiz
                  </span>
                  <span className="text-slate-400 text-[11px] block">
                    {att.date} • {Math.round(att.timeSpentSeconds / 60)}m {att.timeSpentSeconds % 60}s
                  </span>
                </div>
                <div className="text-right">
                  <span className={`font-black text-sm ${
                    att.percentage >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
                  }`}>
                    {att.score}/{att.totalQuestions} ({att.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
