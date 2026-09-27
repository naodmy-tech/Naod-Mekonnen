import React from 'react';
import { 
  BookOpen, 
  FileText, 
  BrainCircuit, 
  HelpCircle, 
  Target, 
  Bookmark, 
  BarChart2, 
  Download, 
  Search, 
  Info, 
  ArrowRight, 
  Flame, 
  Layers,
  Sparkles,
  ChevronRight,
  Smartphone,
  QrCode
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allChapters, getChapterById } from '../data';

export const HomeDashboard: React.FC = () => {
  const { 
    lastReadChapterId, 
    chapterProgress, 
    setSelectedChapterId, 
    setReaderMode, 
    setActiveTab, 
    setMoreSubTab,
    downloadedChapters,
    quizAttempts,
    setIsInstallModalOpen
  } = useApp();

  const lastChapter = getChapterById(lastReadChapterId) || allChapters[0];
  const lastProgress = chapterProgress[lastChapter.id] || {
    status: 'in_progress',
    lastReadPage: 1,
    lastReadDate: '2026-09-27',
    readPercentage: 25
  };

  const completedChaptersCount = Object.values(chapterProgress).filter(p => p.status === 'completed').length;
  const inProgressChaptersCount = Object.values(chapterProgress).filter(p => p.status === 'in_progress').length;
  const overallPercentage = Math.round((completedChaptersCount / allChapters.length) * 100);

  const handleContinueReading = () => {
    setSelectedChapterId(lastChapter.id);
    setReaderMode('reading');
    setActiveTab('materials');
  };

  // Nav cards with color styling
  const sectionCards = [
    {
      title: 'Course Materials',
      subtitle: '7 Full Chapters & Original Notes',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      badge: '7 Chapters',
      action: () => {
        setActiveTab('materials');
        setReaderMode('reading');
      }
    },
    {
      title: 'Course Outline',
      subtitle: 'Official Syllabus & Grading Scheme',
      icon: FileText,
      color: 'from-sky-500 to-cyan-600',
      badge: 'Official',
      action: () => {
        setActiveTab('more');
        setMoreSubTab('outline');
      }
    },
    {
      title: 'Chapter Summaries',
      subtitle: 'Key Concepts & Takeaways',
      icon: BrainCircuit,
      color: 'from-emerald-500 to-teal-600',
      badge: 'High Yield',
      action: () => {
        setActiveTab('more');
        setMoreSubTab('summaries');
      }
    },
    {
      title: 'Practice Questions',
      subtitle: 'Substantial Question Bank',
      icon: HelpCircle,
      color: 'from-amber-500 to-orange-600',
      badge: 'No Answers Leaked',
      action: () => {
        setActiveTab('practice');
      }
    },
    {
      title: 'Interactive Quizzes',
      subtitle: 'Timed Tests, Scoring & Review',
      icon: Target,
      color: 'from-rose-500 to-pink-600',
      badge: '5 Quiz Modes',
      action: () => {
        setActiveTab('practice');
      }
    },
    {
      title: 'My Bookmarks',
      subtitle: 'Saved Pages, Concepts & Terms',
      icon: Bookmark,
      color: 'from-violet-500 to-purple-600',
      badge: 'Offline',
      action: () => {
        setActiveTab('more');
        setMoreSubTab('bookmarks');
      }
    },
    {
      title: 'My Progress',
      subtitle: 'Reading Stats & Quiz Performance',
      icon: BarChart2,
      color: 'from-cyan-600 to-blue-700',
      badge: `${overallPercentage}% Done`,
      action: () => {
        setActiveTab('progress');
      }
    },
    {
      title: 'Offline Downloads',
      subtitle: 'Local Storage & PDF Cache',
      icon: Download,
      color: 'from-teal-600 to-emerald-700',
      badge: `${downloadedChapters.length} Cached`,
      action: () => {
        setActiveTab('more');
        setMoreSubTab('downloads');
      }
    },
    {
      title: 'Global Search',
      subtitle: 'Find Chapters, Terms & Notes',
      icon: Search,
      color: 'from-slate-600 to-slate-800',
      badge: 'Instant',
      action: () => {
        setActiveTab('more');
        setMoreSubTab('search');
      }
    },
    {
      title: 'About the Course',
      subtitle: 'Wollo Univ. & Dr. Naod Mekonnen',
      icon: Info,
      color: 'from-sky-700 to-indigo-900',
      badge: 'AcFn 4121',
      action: () => {
        setActiveTab('more');
        setMoreSubTab('about');
      }
    },
  ];

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Continue Learning Spotlight Card */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-sky-400/20 to-transparent rounded-bl-full pointer-events-none" />
        
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            <Sparkles size={14} />
            Continue Learning
          </span>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
            Page {lastProgress.lastReadPage} of {lastChapter.totalPages}
          </span>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
            Chapter {lastChapter.number}: {lastChapter.title}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
            {lastChapter.shortDescription}
          </p>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span>Reading Progress</span>
            <span className="text-sky-600 dark:text-sky-400 font-bold">{lastProgress.readPercentage}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(5, lastProgress.readPercentage)}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleContinueReading}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all cursor-pointer"
        >
          <span>Continue Reading</span>
          <ArrowRight size={16} />
        </button>
      </section>

      {/* Quick Mobile App Install Banner */}
      <section 
        onClick={() => setIsInstallModalOpen(true)}
        className="p-4 rounded-3xl bg-gradient-to-r from-indigo-900 via-sky-900 to-slate-900 text-white border border-sky-500/30 shadow-md flex items-center justify-between gap-3 cursor-pointer hover:border-sky-400 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-105 transition-transform">
            <Smartphone size={22} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm text-white group-hover:text-cyan-300 transition-colors">
                Install on Your Mobile Phone
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                APK / PWA
              </span>
            </div>
            <p className="text-xs text-sky-200/80 mt-0.5">
              Add to home screen or scan QR code for 100% offline study.
            </p>
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsInstallModalOpen(true);
          }}
          className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md shadow-sky-500/20 shrink-0 flex items-center gap-1.5 cursor-pointer"
        >
          <QrCode size={14} />
          <span>Get App</span>
        </button>
      </section>

      {/* Motivational Banner */}
      <section className="bg-gradient-to-r from-sky-800 via-sky-700 to-cyan-800 rounded-3xl p-5 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Flame size={16} />
              <span>Academic Excellence</span>
            </div>
            <h3 className="text-xl font-black tracking-tight text-white">
              "Keep learning. Keep progressing."
            </h3>
            <p className="text-xs text-sky-100/90 mt-1">
              Master AIS transactions, control activities, and system designs for your degree at Wollo University.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shrink-0">
            <div className="text-center">
              <div className="text-lg font-black text-amber-300">
                {completedChaptersCount}/7
              </div>
              <div className="text-[10px] text-sky-100 uppercase tracking-wider font-semibold">
                Completed
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-lg font-black text-cyan-300">
                {quizAttempts.length}
              </div>
              <div className="text-[10px] text-sky-100 uppercase tracking-wider font-semibold">
                Quizzes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Sections Grid */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers size={18} className="text-sky-600 dark:text-sky-400" />
            <span>Course Sections</span>
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            10 Study Portals
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {sectionCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={item.action}
                className="group relative flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200/90 dark:border-slate-800 transition-all text-left shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md shadow-sky-500/10 shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-sm group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item.badge}
                  </span>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Quick Summary of Course Structure */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Wollo University Course Structure (AcFn 4121)
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          The course covers 7 foundational chapters: The Information System, Transaction Processing, Ethics &amp; Internal Controls, Revenue/Expenditure/Conversion Cycles, Financial &amp; Management Reporting, Database Management Systems, and Managing the SDLC.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
            5 ETCTS Credits
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
            3 Credit Hours
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
            Mid 25% • Final 50%
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
            100% Offline Ready
          </span>
        </div>
      </section>
    </div>
  );
};
