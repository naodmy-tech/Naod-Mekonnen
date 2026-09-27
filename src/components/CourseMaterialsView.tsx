import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FileText, 
  Download, 
  CheckCircle, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  ZoomIn, 
  ZoomOut, 
  Bookmark, 
  BookMarked,
  Check, 
  Share2, 
  Maximize2, 
  Minimize2, 
  HelpCircle, 
  BrainCircuit, 
  Search,
  ArrowLeft,
  CheckSquare,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allChapters, getChapterById } from '../data';

export const CourseMaterialsView: React.FC = () => {
  const { 
    selectedChapterId, 
    setSelectedChapterId, 
    readerMode, 
    setReaderMode, 
    chapterProgress, 
    updateChapterProgress, 
    markChapterStatus,
    downloadedChapters,
    downloadChapter,
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    settings,
    setActiveTab
  } = useApp();

  const [activeView, setActiveView] = useState<'list' | 'reader'>('list');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [pdfSearchTerm, setPdfSearchTerm] = useState<string>('');

  const currentChapter = getChapterById(selectedChapterId) || allChapters[0];
  const progress = chapterProgress[currentChapter.id] || {
    status: 'not_started',
    lastReadPage: 1,
    lastReadDate: '2026-09-27',
    readPercentage: 0
  };

  const isDownloaded = downloadedChapters.includes(currentChapter.id);

  useEffect(() => {
    if (progress.lastReadPage) {
      setCurrentPage(progress.lastReadPage);
    }
  }, [selectedChapterId]);

  const handleOpenChapter = (chapterId: string, mode: 'reading' | 'pdf' | 'summary' = 'reading') => {
    setSelectedChapterId(chapterId);
    setReaderMode(mode);
    setActiveView('reader');
    updateChapterProgress(chapterId, {
      status: progress.status === 'not_started' ? 'in_progress' : progress.status
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > currentChapter.totalPages) return;
    setCurrentPage(newPage);
    const readPct = Math.round((newPage / currentChapter.totalPages) * 100);
    updateChapterProgress(currentChapter.id, {
      lastReadPage: newPage,
      readPercentage: Math.max(progress.readPercentage, readPct)
    });
  };

  const togglePageBookmark = () => {
    const ref = `Chapter ${currentChapter.number}, Page ${currentPage}`;
    if (isBookmarked(ref)) {
      removeBookmark(ref);
    } else {
      addBookmark({
        type: 'page',
        title: `${currentChapter.title} (Page ${currentPage})`,
        chapterNumber: currentChapter.number,
        pageNumber: currentPage,
        reference: ref,
        targetId: currentChapter.id
      });
    }
  };

  // Font size class mapping
  const fontSizeClass = {
    small: 'text-xs leading-relaxed',
    medium: 'text-sm leading-relaxed',
    large: 'text-base leading-relaxed',
    xlarge: 'text-lg leading-relaxed'
  }[settings.fontSize || 'medium'];

  // LIST VIEW: ALL CHAPTERS
  if (activeView === 'list') {
    return (
      <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-indigo-700 rounded-3xl p-6 text-white shadow-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen size={14} />
            Course Curriculum
          </span>
          <h1 className="text-2xl font-black tracking-tight">Course Materials</h1>
          <p className="text-xs text-sky-100 mt-1">
            Official lecture handouts, diagrams, and original PDF materials for all 7 chapters of AcFn 4121.
          </p>
        </div>

        {/* Chapters Cards */}
        <div className="space-y-4">
          {allChapters.map((ch) => {
            const prog = chapterProgress[ch.id] || { status: 'not_started', lastReadPage: 1, readPercentage: 0 };
            const downloaded = downloadedChapters.includes(ch.id);

            return (
              <div
                key={ch.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-extrabold text-sm flex items-center justify-center">
                      {ch.number}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        Chapter {ch.number}
                      </span>
                      <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                        {ch.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {downloaded ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle size={13} />
                        Available Offline ✓
                      </span>
                    ) : (
                      <button
                        onClick={() => downloadChapter(ch.id)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-[11px] font-semibold transition-colors cursor-pointer"
                      >
                        <Download size={13} />
                        Download ({ch.fileSize})
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ch.shortDescription}
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    <span>
                      Status: <strong className="text-slate-700 dark:text-slate-200 capitalize">{prog.status.replace('_', ' ')}</strong>
                    </span>
                    <span>{prog.readPercentage}% Read • Page {prog.lastReadPage}/{ch.totalPages}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        prog.status === 'completed'
                          ? 'bg-emerald-500'
                          : 'bg-gradient-to-r from-sky-500 to-cyan-500'
                      }`}
                      style={{ width: `${Math.max(prog.readPercentage, 3)}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenChapter(ch.id, 'reading')}
                      className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-colors cursor-pointer"
                    >
                      <BookOpen size={14} />
                      <span>{prog.status === 'not_started' ? 'Start Reading' : 'Continue Reading'}</span>
                    </button>

                    <button
                      onClick={() => handleOpenChapter(ch.id, 'pdf')}
                      className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <FileText size={14} />
                      <span>Original PDF</span>
                    </button>

                    <button
                      onClick={() => handleOpenChapter(ch.id, 'summary')}
                      className="px-3 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 text-teal-700 dark:text-teal-300 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <BrainCircuit size={14} />
                      <span>Summary</span>
                    </button>
                  </div>

                  <button
                    onClick={() => markChapterStatus(ch.id, prog.status === 'completed' ? 'in_progress' : 'completed')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      prog.status === 'completed'
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                        : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    <CheckSquare size={14} />
                    <span>{prog.status === 'completed' ? 'Completed ✓' : 'Mark as Completed'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // READER VIEW
  const activePdfPage = currentChapter.pdfPages.find(p => p.pageNumber === currentPage) || currentChapter.pdfPages[0];
  const pageBookmarked = isBookmarked(`Chapter ${currentChapter.number}, Page ${currentPage}`);

  return (
    <div className={`space-y-4 pb-20 max-w-4xl mx-auto px-3 sm:px-4 pt-3 ${isFullScreen ? 'fixed inset-0 z-50 bg-white dark:bg-slate-900 overflow-y-auto p-4' : ''}`}>
      {/* Reader Top Navigation Bar */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-14 z-30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('list')}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            title="Back to Chapter List"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="truncate">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Chapter {currentChapter.number}
            </span>
            <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate">
              {currentChapter.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={togglePageBookmark}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-colors ${
              pageBookmarked
                ? 'bg-amber-400 text-slate-900 border-amber-300'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
            title="Bookmark this section"
          >
            {pageBookmarked ? <BookMarked size={16} /> : <Bookmark size={16} />}
          </button>

          <button
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-colors"
            title={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
          >
            {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Reader Sub-Mode Tabs */}
      <div className="flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
        <button
          onClick={() => setReaderMode('reading')}
          className={`flex-1 py-2 rounded-xl text-center transition-all cursor-pointer ${
            readerMode === 'reading'
              ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          Lecture Notes
        </button>
        <button
          onClick={() => setReaderMode('pdf')}
          className={`flex-1 py-2 rounded-xl text-center transition-all cursor-pointer ${
            readerMode === 'pdf'
              ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          Original PDF Simulator
        </button>
        <button
          onClick={() => setReaderMode('summary')}
          className={`flex-1 py-2 rounded-xl text-center transition-all cursor-pointer ${
            readerMode === 'summary'
              ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          Chapter Summary
        </button>
      </div>

      {/* MODE 1: LECTURE NOTES (Clean structured text) */}
      {readerMode === 'reading' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
              Wollo University • Course Notes
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              Chapter {currentChapter.number}: {currentChapter.title}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {currentChapter.subtitle}
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${fontSizeClass}`}>
            {currentChapter.sections.map((sec) => (
              <div key={sec.id} className="space-y-3 pt-2">
                <h3 className="text-base font-black text-sky-800 dark:text-sky-300 border-l-4 border-sky-500 pl-3">
                  {sec.title}
                </h3>

                {sec.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.tableData && (
                  <div className="my-4 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200">
                        <tr>
                          {sec.tableData.headers.map((h, i) => (
                            <th key={i} className="p-3 border-b border-slate-200 dark:border-slate-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {sec.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 whitespace-pre-line">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick links to practice questions & next chapter */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => markChapterStatus(currentChapter.id, 'completed')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              <Check size={16} />
              <span>Mark as Completed</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('practice');
              }}
              className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              <HelpCircle size={16} />
              <span>Practice Questions for Ch. {currentChapter.number}</span>
            </button>
          </div>
        </div>
      )}

      {/* MODE 2: ORIGINAL PDF SIMULATOR (Page-by-page, zoom, search, download) */}
      {readerMode === 'pdf' && (
        <div className="space-y-4">
          {/* PDF Page Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Pagination */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 disabled:opacity-40 text-slate-700 dark:text-slate-300"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Page {currentPage} of {currentChapter.totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= currentChapter.totalPages}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 disabled:opacity-40 text-slate-700 dark:text-slate-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setZoomLevel(prev => Math.max(75, prev - 15))}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 min-w-[45px] text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(140, prev + 15))}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
            </div>

            {/* Offline badge or download */}
            <div>
              {isDownloaded ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle size={14} />
                  Available Offline ✓
                </span>
              ) : (
                <button
                  onClick={() => downloadChapter(currentChapter.id)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  Download for Offline Use
                </button>
              )}
            </div>
          </div>

          {/* Render PDF simulated page */}
          <div 
            className="bg-white text-slate-900 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-300 font-serif max-w-3xl mx-auto transition-transform duration-200 min-h-[600px] flex flex-col justify-between"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            <div>
              {/* PDF Document Header */}
              <div className="flex items-center justify-between border-b border-slate-300 pb-2 mb-6 text-xs text-slate-500 font-sans">
                <span>Accounting Information Systems (Wollo University)</span>
                <span>Page {currentPage} of {currentChapter.totalPages}</span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-4 font-sans">
                {activePdfPage?.title || `Page ${currentPage}`}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
                {activePdfPage?.sections.map((s, idx) => (
                  <div key={idx} className="space-y-2">
                    {s.heading && (
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-sans">
                        {s.heading}
                      </h3>
                    )}
                    {s.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="list-disc pl-5 space-y-1">
                        {s.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {s.diagramDesc && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 my-3 font-sans text-xs">
                        <span className="font-bold text-sky-800 block mb-1">
                          [Original Document Diagram / Flowchart]
                        </span>
                        <p className="text-slate-700 italic">{s.diagramDesc}</p>
                      </div>
                    )}
                    {s.table && (
                      <div className="overflow-x-auto my-3 border border-slate-200 rounded-lg">
                        <table className="w-full text-xs font-sans">
                          <thead className="bg-slate-100 font-bold">
                            <tr>
                              {s.table.headers.map((h, i) => (
                                <th key={i} className="p-2 border-b border-slate-200">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {s.table.rows.map((row, rI) => (
                              <tr key={rI}>
                                {row.map((c, cI) => (
                                  <td key={cI} className="p-2">{c}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-300 pt-3 text-[11px] text-slate-400 font-sans flex justify-between">
              <span>Department of Accounting and Finance</span>
              <span>AcFn 4121 • Wollo University</span>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: CHAPTER SUMMARY (7-component academic summary) */}
      {readerMode === 'summary' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
              <BrainCircuit size={15} />
              Chapter Academic Summary
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              Chapter {currentChapter.number}: {currentChapter.title}
            </h1>
          </div>

          {/* 1. Learning Objectives */}
          <div className="space-y-2">
            <h3 className="text-sm font-black text-sky-800 dark:text-sky-300 uppercase tracking-wider flex items-center gap-2">
              <CheckSquare size={16} />
              <span>Learning Objectives</span>
            </h3>
            <ul className="space-y-1.5 pl-1">
              {currentChapter.summary.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Key Concepts */}
          <div className="space-y-2">
            <h3 className="text-sm font-black text-cyan-800 dark:text-cyan-300 uppercase tracking-wider">
              Key Concepts
            </h3>
            <div className="flex flex-wrap gap-2">
              {currentChapter.summary.keyConcepts.map((kc, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-200 border border-cyan-100 dark:border-cyan-800">
                  {kc}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Important Terms */}
          <div className="space-y-2">
            <h3 className="text-sm font-black text-indigo-800 dark:text-indigo-300 uppercase tracking-wider">
              Important Terms &amp; Definitions
            </h3>
            <div className="space-y-2">
              {currentChapter.summary.importantTerms.map((t, i) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="font-extrabold text-xs text-indigo-700 dark:text-indigo-400 block mb-0.5">
                    {t.term}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{t.def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Main Ideas */}
          <div className="space-y-2">
            <h3 className="text-sm font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              Main Ideas
            </h3>
            <ul className="space-y-1.5">
              {currentChapter.summary.mainIdeas.map((idea, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Important Relationships/Processes */}
          <div className="space-y-2">
            <h3 className="text-sm font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              Important Relationships &amp; Processes
            </h3>
            <ul className="space-y-1.5">
              {currentChapter.summary.importantRelationships.map((rel, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{rel}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Chapter Summary Text */}
          <div className="space-y-2 p-4 rounded-2xl bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700">
            <h3 className="text-sm font-black text-sky-900 dark:text-sky-300 uppercase tracking-wider">
              Academic Chapter Synthesis
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {currentChapter.summary.chapterSummaryText}
            </p>
          </div>

          {/* 7. Key Takeaways */}
          <div className="space-y-2">
            <h3 className="text-sm font-black text-purple-800 dark:text-purple-300 uppercase tracking-wider">
              Key Takeaways
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentChapter.summary.keyTakeaways.map((kt, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-950 dark:text-purple-200 text-xs font-medium border border-purple-100 dark:border-purple-900">
                  ✓ {kt}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
