import React, { useState } from 'react';
import { 
  HelpCircle, 
  Filter, 
  Bookmark, 
  BookMarked, 
  RotateCcw, 
  CheckCircle, 
  ArrowRight, 
  Target,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { comprehensiveQuestionBank, allChapters } from '../data';
import { PracticeQuestion } from '../types';

export const PracticeQuestionsView: React.FC = () => {
  const { 
    practicedQuestionIds, 
    markQuestionPracticed, 
    isBookmarked, 
    addBookmark, 
    removeBookmark,
    setActiveTab
  } = useApp();

  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number>(0); // 0 means all
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<{ [qId: string]: 'A' | 'B' | 'C' | 'D' }>({});

  const filteredQuestions = comprehensiveQuestionBank.filter((q) => {
    const chapterMatch = selectedChapterFilter === 0 || q.chapterNumber === selectedChapterFilter;
    const diffMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    return chapterMatch && diffMatch;
  });

  const handleSelectOption = (questionId: string, option: 'A' | 'B' | 'C' | 'D') => {
    setUserSelectedAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
    markQuestionPracticed(questionId);
  };

  const handleResetSelections = () => {
    setUserSelectedAnswers({});
  };

  const toggleQuestionBookmark = (q: PracticeQuestion) => {
    const ref = `Question ${q.id}`;
    if (isBookmarked(ref)) {
      removeBookmark(ref);
    } else {
      addBookmark({
        type: 'question',
        title: `Ch. ${q.chapterNumber} Q: ${q.question.substring(0, 45)}...`,
        chapterNumber: q.chapterNumber,
        reference: ref,
        targetId: q.id
      });
    }
  };

  const attemptedInView = filteredQuestions.filter(q => userSelectedAnswers[q.id]).length;

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle size={14} />
          End-of-Chapter Practice
        </span>
        <h1 className="text-2xl font-black tracking-tight">Practice Questions</h1>
        <p className="text-xs text-amber-100 mt-1 max-w-xl leading-relaxed">
          Self-assessment questions drawn directly from the Wollo University AIS course material. 
          Answers are intentionally hidden to test your independent mastery.
        </p>

        {/* Notice badge */}
        <div className="mt-4 p-3 rounded-2xl bg-black/15 backdrop-blur-sm border border-white/20 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
            <span className="font-medium text-amber-100">
              Answers &amp; explanations are strictly evaluated in <strong>Quiz Mode</strong>.
            </span>
          </div>
          <button
            onClick={() => setActiveTab('quiz')}
            className="px-3 py-1.5 rounded-xl bg-white text-amber-900 font-bold text-xs shrink-0 flex items-center gap-1 shadow hover:bg-amber-50 transition-colors cursor-pointer"
          >
            <Target size={14} />
            <span>Launch Quiz</span>
          </button>
        </div>
      </div>

      {/* Filters and Stats Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Chapter selector */}
          <div className="flex items-center gap-2">
            <Filter size={15} className="text-slate-500" />
            <select
              value={selectedChapterFilter}
              onChange={(e) => setSelectedChapterFilter(Number(e.target.value))}
              className="text-xs font-bold py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value={0}>All Chapters ({comprehensiveQuestionBank.length} Questions)</option>
              {allChapters.map(ch => (
                <option key={ch.id} value={ch.number}>
                  Chapter {ch.number}: {ch.title.substring(0, 30)}...
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty selector */}
          <div className="flex items-center gap-1.5 text-xs">
            {['all', 'easy', 'medium', 'hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 py-1 rounded-xl font-bold uppercase text-[10px] transition-colors cursor-pointer ${
                  selectedDifficulty === diff
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {diff === 'all' ? 'All Levels' : diff}
              </button>
            ))}
          </div>
        </div>

        {/* Counter & Reset */}
        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400">
          <span>
            Showing <strong>{filteredQuestions.length}</strong> questions • Answered <strong>{attemptedInView}</strong>
          </span>
          {attemptedInView > 0 && (
            <button
              onClick={handleResetSelections}
              className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              <RotateCcw size={12} />
              <span>Clear selections</span>
            </button>
          )}
        </div>
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, index) => {
          const selected = userSelectedAnswers[q.id];
          const bookmarked = isBookmarked(`Question ${q.id}`);

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              {/* Question Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-black text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    Chapter {q.chapterNumber} • {q.topic}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    q.difficulty === 'easy'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : q.difficulty === 'medium'
                      ? 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                  }`}>
                    {q.difficulty}
                  </span>

                  <button
                    onClick={() => toggleQuestionBookmark(q)}
                    className={`p-1.5 rounded-lg border text-xs transition-colors ${
                      bookmarked
                        ? 'bg-amber-400 text-slate-900 border-amber-400'
                        : 'text-slate-400 hover:text-slate-600 border-slate-200 dark:border-slate-700'
                    }`}
                    title="Bookmark question"
                  >
                    {bookmarked ? <BookMarked size={14} /> : <Bookmark size={14} />}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-relaxed">
                {q.question}
              </p>

              {/* Options A, B, C, D (No answers shown) */}
              <div className="space-y-2 pt-1">
                {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                  const isChosen = selected === optKey;
                  return (
                    <button
                      key={optKey}
                      onClick={() => handleSelectOption(q.id, optKey)}
                      className={`w-full flex items-start gap-3 p-3 rounded-2xl text-left text-xs transition-all cursor-pointer ${
                        isChosen
                          ? 'bg-amber-500/15 border-2 border-amber-500 text-slate-900 dark:text-white font-semibold'
                          : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                        isChosen
                          ? 'bg-amber-500 text-white'
                          : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600'
                      }`}>
                        {optKey}
                      </span>
                      <span className="leading-relaxed pt-0.5">{q.options[optKey]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selection Status */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>
                  {selected ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle size={13} />
                      Your selection: Option {selected}
                    </span>
                  ) : (
                    <span>Choose an option to test your understanding</span>
                  )}
                </span>
                <span className="text-[10px] text-slate-400 italic">Self-Study Practice</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
