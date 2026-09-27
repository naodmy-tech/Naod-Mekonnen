import React from 'react';
import { 
  FileText, 
  BrainCircuit, 
  Download, 
  Bookmark, 
  Edit3, 
  BookOpen, 
  Clock, 
  Award, 
  Settings, 
  Info,
  ChevronRight,
  Search,
  Sparkles,
  ArrowLeft,
  Smartphone
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CourseOutlineView } from './CourseOutlineView';
import { BookmarksView } from './BookmarksView';
import { NotesView } from './NotesView';
import { GlobalSearchView } from './GlobalSearchView';
import { GlossaryView } from './GlossaryView';
import { FlashcardsView } from './FlashcardsView';
import { StudySessionView } from './StudySessionView';
import { DownloadManagerView } from './DownloadManagerView';
import { SettingsView } from './SettingsView';
import { AboutView } from './AboutView';
import { allChapters } from '../data';

export const MoreHubView: React.FC = () => {
  const { 
    moreSubTab, 
    setMoreSubTab, 
    bookmarks, 
    notes, 
    downloadedChapters,
    setSelectedChapterId,
    setReaderMode,
    setActiveTab,
    setIsInstallModalOpen
  } = useApp();

  const [activeSubView, setActiveSubView] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (moreSubTab) {
      setActiveSubView(moreSubTab);
    }
  }, [moreSubTab]);

  const moreMenuItems = [
    {
      id: 'outline',
      title: 'Official Course Outline',
      desc: 'Syllabus, grading weights, textbooks & policies',
      icon: FileText,
      color: 'from-sky-500 to-cyan-600',
      badge: 'Official'
    },
    {
      id: 'summaries',
      title: 'Chapter Summaries',
      desc: 'Objectives, key concepts & takeaways for all 7 chapters',
      icon: BrainCircuit,
      color: 'from-emerald-500 to-teal-600',
      badge: '7 Chapters'
    },
    {
      id: 'flashcards',
      title: 'Interactive Flashcards',
      desc: 'Active recall cards with 3D flip animation',
      icon: Sparkles,
      color: 'from-indigo-500 to-violet-600',
      badge: '35+ Cards'
    },
    {
      id: 'glossary',
      title: 'AIS Glossary',
      desc: 'Authoritative A-Z definitions from course handouts',
      icon: BookOpen,
      color: 'from-blue-600 to-indigo-700',
      badge: '50+ Terms'
    },
    {
      id: 'bookmarks',
      title: 'My Bookmarks',
      desc: 'Quickly access saved reading positions & concepts',
      icon: Bookmark,
      color: 'from-purple-500 to-pink-600',
      badge: bookmarks.length > 0 ? `${bookmarks.length} Saved` : undefined
    },
    {
      id: 'notes',
      title: 'Personal Study Notes',
      desc: 'Local student notebook associated with course chapters',
      icon: Edit3,
      color: 'from-teal-500 to-emerald-600',
      badge: notes.length > 0 ? `${notes.length} Notes` : undefined
    },
    {
      id: 'study-session',
      title: 'Study Mode & Reminders',
      desc: 'Pomodoro focus timer and daily study reminders',
      icon: Clock,
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'downloads',
      title: 'Offline Downloads Manager',
      desc: 'Manage cached original PDF materials and storage',
      icon: Download,
      color: 'from-cyan-600 to-teal-700',
      badge: `${downloadedChapters.length} Cached`
    },
    {
      id: 'install-mobile',
      title: 'Install on Mobile Phone',
      desc: 'Scan QR code or install 100% offline WebAPK on Android',
      icon: Smartphone,
      color: 'from-rose-600 to-orange-600',
      badge: 'Mobile App'
    },
    {
      id: 'search',
      title: 'Global Course Search',
      desc: 'Find any topic, concept, question, or note',
      icon: Search,
      color: 'from-slate-600 to-slate-800'
    },
    {
      id: 'settings',
      title: 'Settings & Appearance',
      desc: 'Theme palette, text size & data management',
      icon: Settings,
      color: 'from-slate-700 to-slate-900'
    },
    {
      id: 'about',
      title: 'About the Course & Developer',
      desc: 'Wollo University, Dr. Naod Mekonnen & APK details',
      icon: Info,
      color: 'from-sky-700 to-blue-900',
      badge: 'AcFn 4121'
    },
  ];

  // If a subview is selected, render it with a back button bar
  if (activeSubView) {
    let ComponentToRender = null;
    if (activeSubView === 'outline') ComponentToRender = CourseOutlineView;
    else if (activeSubView === 'bookmarks') ComponentToRender = BookmarksView;
    else if (activeSubView === 'notes') ComponentToRender = NotesView;
    else if (activeSubView === 'search') ComponentToRender = GlobalSearchView;
    else if (activeSubView === 'glossary') ComponentToRender = GlossaryView;
    else if (activeSubView === 'flashcards') ComponentToRender = FlashcardsView;
    else if (activeSubView === 'study-session') ComponentToRender = StudySessionView;
    else if (activeSubView === 'downloads') ComponentToRender = DownloadManagerView;
    else if (activeSubView === 'settings') ComponentToRender = SettingsView;
    else if (activeSubView === 'about') ComponentToRender = AboutView;
    else if (activeSubView === 'summaries') {
      ComponentToRender = () => (
        <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
          <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-3xl p-6 text-white shadow-md">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
              <BrainCircuit size={14} />
              High-Yield Synthesis
            </span>
            <h1 className="text-2xl font-black tracking-tight">Chapter Summaries</h1>
            <p className="text-xs text-emerald-100 mt-1">
              Select any chapter to read objectives, key concepts, definitions, and takeaways without opening the entire textbook.
            </p>
          </div>

          <div className="space-y-3">
            {allChapters.map(ch => (
              <div
                key={ch.id}
                onClick={() => {
                  setSelectedChapterId(ch.id);
                  setReaderMode('summary');
                  setActiveTab('materials');
                }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 shadow-sm flex items-center justify-between gap-3 cursor-pointer transition-all"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Chapter {ch.number}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {ch.shortDescription}
                  </p>
                </div>
                <ChevronRight size={18} className="text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <div className="max-w-4xl mx-auto px-4 pt-3">
          <button
            onClick={() => setActiveSubView(null)}
            className="flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to More Menu</span>
          </button>
        </div>
        {ComponentToRender && <ComponentToRender />}
      </div>
    );
  }

  // Master More Menu Hub
  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-800 via-sky-700 to-indigo-800 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <BookOpen size={14} />
          Resource Portal
        </span>
        <h1 className="text-2xl font-black tracking-tight">More Academic Tools</h1>
        <p className="text-xs text-sky-100 mt-1">
          Explore course outlines, flashcards, the glossary, personal notes, offline caching, and settings.
        </p>
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {moreMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'install-mobile') {
                  setIsInstallModalOpen(true);
                } else {
                  setActiveSubView(item.id);
                }
              }}
              className="flex items-center justify-between p-4 rounded-3xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-left shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item.badge}
                  </span>
                )}
                <ChevronRight size={16} className="text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
