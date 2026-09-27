import React from 'react';
import { Bookmark, Trash2, ArrowRight, BookOpen, FileText, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BookmarkItem } from '../types';

export const BookmarksView: React.FC = () => {
  const { bookmarks, removeBookmark, setSelectedChapterId, setReaderMode, setActiveTab } = useApp();

  const handleOpenBookmark = (bm: BookmarkItem) => {
    if (bm.chapterNumber) {
      setSelectedChapterId(`ch${bm.chapterNumber}`);
      if (bm.type === 'summary') {
        setReaderMode('summary');
      } else if (bm.type === 'page') {
        setReaderMode('pdf');
      } else {
        setReaderMode('reading');
      }
      setActiveTab('materials');
    } else if (bm.type === 'question') {
      setActiveTab('practice');
    }
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-700 to-purple-700 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <Bookmark size={14} />
          Saved References
        </span>
        <h1 className="text-2xl font-black tracking-tight">My Bookmarks</h1>
        <p className="text-xs text-purple-100 mt-1">
          Quickly return to bookmarked pages, chapter sections, and review questions.
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 text-center space-y-3 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 mx-auto flex items-center justify-center">
            <Bookmark size={28} />
          </div>
          <h2 className="text-base font-extrabold text-slate-800 dark:text-white">
            No bookmarks yet.
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
            Bookmark important pages, diagrams, and topics while you study to review them here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarks.map((bm) => (
            <div
              key={bm.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                  {bm.type === 'page' ? <FileText size={18} /> : bm.type === 'question' ? <HelpCircle size={18} /> : <BookOpen size={18} />}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {bm.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {bm.reference} • Added on {bm.dateAdded}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => handleOpenBookmark(bm)}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Open</span>
                  <ArrowRight size={13} />
                </button>
                <button
                  onClick={() => removeBookmark(bm.reference || bm.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Remove bookmark"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
