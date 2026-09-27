import React, { useState } from 'react';
import { BookOpen, Search, Bookmark, BookMarked, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { comprehensiveGlossary, allChapters } from '../data';
import { GlossaryTerm } from '../types';

export const GlossaryView: React.FC = () => {
  const { isBookmarked, addBookmark, removeBookmark } = useApp();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [chapterFilter, setChapterFilter] = useState<number>(0);

  // Alphabet list
  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filteredTerms = comprehensiveGlossary.filter((item) => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'ALL' || item.term.toUpperCase().startsWith(selectedLetter);
    const matchesChapter = chapterFilter === 0 || item.chapterNumber === chapterFilter;
    return matchesSearch && matchesLetter && matchesChapter;
  });

  const toggleTermBookmark = (item: GlossaryTerm) => {
    const ref = `Glossary: ${item.term}`;
    if (isBookmarked(ref)) {
      removeBookmark(ref);
    } else {
      addBookmark({
        type: 'glossary',
        title: item.term,
        chapterNumber: item.chapterNumber,
        reference: ref
      });
    }
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-700 via-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <BookOpen size={14} />
          Terminology Repository
        </span>
        <h1 className="text-2xl font-black tracking-tight">AIS Glossary</h1>
        <p className="text-xs text-sky-100 mt-1 max-w-xl">
          Comprehensive dictionary of authoritative Accounting Information Systems concepts extracted directly from Wollo University course lectures.
        </p>

        {/* Search */}
        <div className="mt-4 relative">
          <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search terminology or definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
      </div>

      {/* Alphabet Quick Filter */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`w-7 h-7 rounded-xl font-bold text-xs shrink-0 transition-colors cursor-pointer ${
              selectedLetter === letter
                ? 'bg-sky-600 text-white'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Chapter Filter */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-slate-400" />
          <select
            value={chapterFilter}
            onChange={(e) => setChapterFilter(Number(e.target.value))}
            className="py-1 px-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold"
          >
            <option value={0}>All Chapters ({comprehensiveGlossary.length} Terms)</option>
            {allChapters.map(ch => (
              <option key={ch.id} value={ch.number}>
                Chapter {ch.number}
              </option>
            ))}
          </select>
        </div>

        <span className="text-slate-500 font-medium">
          Showing <strong>{filteredTerms.length}</strong> terms
        </span>
      </div>

      {/* Term Cards */}
      <div className="space-y-3">
        {filteredTerms.map((item) => {
          const bookmarked = isBookmarked(`Glossary: ${item.term}`);
          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-extrabold text-sky-800 dark:text-sky-300">
                    {item.term}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Chapter {item.chapterNumber}
                  </span>
                </div>

                <button
                  onClick={() => toggleTermBookmark(item)}
                  className={`p-1.5 rounded-lg border text-xs transition-colors ${
                    bookmarked
                      ? 'bg-amber-400 text-slate-900 border-amber-300'
                      : 'text-slate-400 hover:text-slate-600 border-slate-200 dark:border-slate-700'
                  }`}
                  title="Bookmark term"
                >
                  {bookmarked ? <BookMarked size={14} /> : <Bookmark size={14} />}
                </button>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {item.definition}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
