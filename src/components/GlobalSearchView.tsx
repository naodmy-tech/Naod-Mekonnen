import React, { useState } from 'react';
import { Search, BookOpen, BrainCircuit, HelpCircle, FileText, ArrowRight, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allChapters, comprehensiveQuestionBank, comprehensiveGlossary } from '../data';

export const GlobalSearchView: React.FC = () => {
  const { notes, setSelectedChapterId, setReaderMode, setActiveTab } = useApp();
  const [query, setQuery] = useState<string>('database');

  const qLower = query.trim().toLowerCase();

  // Search chapters & sections
  const matchedChapters = qLower ? allChapters.filter(ch =>
    ch.title.toLowerCase().includes(qLower) ||
    ch.shortDescription.toLowerCase().includes(qLower) ||
    ch.sections.some(s => s.title.toLowerCase().includes(qLower) || s.content.some(p => p.toLowerCase().includes(qLower)))
  ) : [];

  // Search glossary terms
  const matchedGlossary = qLower ? comprehensiveGlossary.filter(g =>
    g.term.toLowerCase().includes(qLower) ||
    g.definition.toLowerCase().includes(qLower)
  ) : [];

  // Search questions
  const matchedQuestions = qLower ? comprehensiveQuestionBank.filter(q =>
    q.question.toLowerCase().includes(qLower) ||
    q.topic.toLowerCase().includes(qLower) ||
    q.explanation.toLowerCase().includes(qLower)
  ) : [];

  // Search student notes
  const matchedNotes = qLower ? notes.filter(n =>
    n.title.toLowerCase().includes(qLower) ||
    n.content.toLowerCase().includes(qLower)
  ) : [];

  const totalResults = matchedChapters.length + matchedGlossary.length + matchedQuestions.length + matchedNotes.length;

  const navigateToChapter = (chapterId: string, mode: 'reading' | 'pdf' | 'summary' = 'reading') => {
    setSelectedChapterId(chapterId);
    setReaderMode(mode);
    setActiveTab('materials');
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <Search size={14} />
          Full-Text Index
        </span>
        <h1 className="text-2xl font-black tracking-tight">Search Course Content</h1>
        <p className="text-xs text-slate-300 mt-1">
          Search across all chapters, definitions, question bank, and personal notes.
        </p>

        {/* Search input bar */}
        <div className="mt-4 relative">
          <Search size={18} className="absolute left-4 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search concepts, e.g. database, fraud, internal control, DFD..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white text-slate-900 text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-sky-500 shadow-lg"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Suggested Quick Search Tags */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-slate-400 text-[11px] font-semibold">Suggested:</span>
        {['database', 'internal control', 'fraud', 'revenue cycle', 'expenditure', 'DFD', 'GLS', 'SDLC', 'TELOS', 'turnaround'].map(tag => (
          <button
            key={tag}
            onClick={() => setQuery(tag)}
            className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-100 hover:text-sky-700 text-[11px] font-semibold transition-colors cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
        Found <strong>{totalResults}</strong> result{totalResults !== 1 ? 's' : ''} for "{query}"
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {/* Chapters Results */}
        {matchedChapters.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>Course Chapters ({matchedChapters.length})</span>
            </h2>
            <div className="space-y-2.5">
              {matchedChapters.map(ch => (
                <div
                  key={ch.id}
                  onClick={() => navigateToChapter(ch.id)}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-sky-500 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase text-sky-600 dark:text-sky-400">
                      Chapter {ch.number}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {ch.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {ch.shortDescription}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Glossary Results */}
        {matchedGlossary.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <BrainCircuit size={14} />
              <span>Glossary Terms ({matchedGlossary.length})</span>
            </h2>
            <div className="space-y-2.5">
              {matchedGlossary.map(g => (
                <div
                  key={g.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-700 dark:text-indigo-400">
                      {g.term}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                      Chapter {g.chapterNumber}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {g.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Questions Results */}
        {matchedQuestions.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <HelpCircle size={14} />
              <span>Practice Questions ({matchedQuestions.length})</span>
            </h2>
            <div className="space-y-2.5">
              {matchedQuestions.map(q => (
                <div
                  key={q.id}
                  onClick={() => setActiveTab('practice')}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-amber-500 transition-all cursor-pointer shadow-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400">
                      Chapter {q.chapterNumber} • {q.topic}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      {q.difficulty}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {q.question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Student Notes Results */}
        {matchedNotes.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <FileText size={14} />
              <span>My Notes ({matchedNotes.length})</span>
            </h2>
            <div className="space-y-2.5">
              {matchedNotes.map(n => (
                <div
                  key={n.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1"
                >
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    {n.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {n.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
