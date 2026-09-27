import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  AppSettings, 
  BookmarkItem, 
  StudentNote, 
  QuizAttempt, 
  StudySessionLog, 
  AchievementBadge,
  NavTab,
  MoreSubTab 
} from '../types';
import { allChapters, comprehensiveQuestionBank } from '../data';

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'light',
  fontSize: 'medium',
  studyRemindersEnabled: false,
  reminderTime: '19:00',
  reminderFrequency: 'daily',
  deviceFrame: false, // Default full responsive, toggleable to realistic Android phone view
};

const DEFAULT_ACHIEVEMENTS: AchievementBadge[] = [
  { id: 'ach-welcome', title: 'AIS Scholar', description: 'Started your journey at Wollo University', icon: '🎓', unlocked: true, unlockedAt: '2026-09-27' },
  { id: 'ach-first-ch', title: 'First Milestone', description: 'Completed Chapter 1 of AIS', icon: '📘', unlocked: false },
  { id: 'ach-five-ch', title: 'Deep Thinker', description: 'Completed 5 chapters in the course', icon: '📚', unlocked: false },
  { id: 'ach-all-ch', title: 'Master of AIS', description: 'Completed all 7 course chapters', icon: '🏆', unlocked: false },
  { id: 'ach-first-quiz', title: 'Knowledge Tested', description: 'Completed your first interactive quiz', icon: '🎯', unlocked: false },
  { id: 'ach-perfect-quiz', title: 'Academic Excellence', description: 'Scored 100% on any quiz mode', icon: '💯', unlocked: false },
  { id: 'ach-streak-7', title: 'Dedicated Learner', description: 'Studied for 7 continuous sessions', icon: '🔥', unlocked: false },
  { id: 'ach-questions-50', title: 'Problem Solver', description: 'Practiced 50+ multiple choice questions', icon: '🧠', unlocked: false },
  { id: 'ach-offline-ready', title: 'Offline Ready', description: 'Downloaded all course materials for offline study', icon: '⬇️', unlocked: false },
];

export interface ChapterProgress {
  status: 'not_started' | 'in_progress' | 'completed';
  lastReadPage: number;
  lastReadDate: string;
  readPercentage: number;
}

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  moreSubTab: MoreSubTab;
  setMoreSubTab: (subTab: MoreSubTab) => void;
  
  // Active reading state
  selectedChapterId: string;
  setSelectedChapterId: (id: string) => void;
  readerMode: 'reading' | 'pdf' | 'summary';
  setReaderMode: (mode: 'reading' | 'pdf' | 'summary') => void;
  
  // Chapter progress
  chapterProgress: { [chapterId: string]: ChapterProgress };
  updateChapterProgress: (chapterId: string, progress: Partial<ChapterProgress>) => void;
  markChapterStatus: (chapterId: string, status: 'not_started' | 'in_progress' | 'completed') => void;
  
  // Downloads
  downloadedChapters: string[]; // chapterIds or 'outline'
  isDownloading: { [id: string]: number }; // progress percentage 0-100
  downloadChapter: (id: string) => void;
  deleteDownload: (id: string) => void;
  downloadAll: () => void;
  clearAllDownloads: () => void;
  
  // Bookmarks
  bookmarks: BookmarkItem[];
  addBookmark: (bookmark: Omit<BookmarkItem, 'id' | 'dateAdded'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (reference: string) => boolean;
  
  // Notes
  notes: StudentNote[];
  addNote: (title: string, content: string, chapterNumber?: number) => void;
  updateNote: (id: string, title: string, content: string, chapterNumber?: number) => void;
  deleteNote: (id: string) => void;
  
  // Quizzes & Practice
  quizAttempts: QuizAttempt[];
  recordQuizAttempt: (attempt: Omit<QuizAttempt, 'id' | 'date' | 'timestamp'>) => void;
  practicedQuestionIds: string[];
  markQuestionPracticed: (id: string) => void;
  
  // Flashcards
  difficultFlashcards: string[];
  toggleDifficultFlashcard: (id: string) => void;
  
  // Study Session
  studyLogs: StudySessionLog[];
  logStudySession: (durationMinutes: number, chapterNumber: number, questionsAnswered: number, mode: string) => void;
  
  // Achievements
  achievements: AchievementBadge[];
  
  // Settings
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  resetAllProgress: () => void;
  resetQuizHistory: () => void;
  
  // Welcome & Splash
  hasSeenWelcome: boolean;
  setHasSeenWelcome: (seen: boolean) => void;
  showSplash: boolean;
  setShowSplash: (show: boolean) => void;
  
  // Last read quick continue
  lastReadChapterId: string;
  
  // Notification toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
  // Install Modal
  isInstallModalOpen: boolean;
  setIsInstallModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [moreSubTab, setMoreSubTab] = useState<MoreSubTab>('outline');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ch1');
  const [readerMode, setReaderMode] = useState<'reading' | 'pdf' | 'summary'>('reading');
  
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  
  // Settings
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_settings');
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  const [hasSeenWelcome, setHasSeenWelcomeState] = useState<boolean>(() => {
    try {
      return localStorage.getItem('wu_ais_welcome_seen') === 'true';
    } catch {
      return false;
    }
  });

  const setHasSeenWelcome = (seen: boolean) => {
    setHasSeenWelcomeState(seen);
    localStorage.setItem('wu_ais_welcome_seen', seen ? 'true' : 'false');
  };

  // Chapter Progress
  const [chapterProgress, setChapterProgress] = useState<{ [chapterId: string]: ChapterProgress }>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_progress');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    const initial: { [chapterId: string]: ChapterProgress } = {};
    allChapters.forEach(ch => {
      initial[ch.id] = {
        status: ch.number === 1 ? 'in_progress' : 'not_started',
        lastReadPage: 1,
        lastReadDate: '2026-09-27',
        readPercentage: ch.number === 1 ? 25 : 0
      };
    });
    return initial;
  });

  const [lastReadChapterId, setLastReadChapterId] = useState<string>(() => {
    return localStorage.getItem('wu_ais_last_read_ch') || 'ch1';
  });

  // Downloads state
  const [downloadedChapters, setDownloadedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_downloads');
      return saved ? JSON.parse(saved) : ['outline', 'ch1']; // Ch1 and outline pre-packaged for instant offline study
    } catch {
      return ['outline', 'ch1'];
    }
  });

  const [isDownloading, setIsDownloading] = useState<{ [id: string]: number }>({});

  // Bookmarks
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_bookmarks');
      return saved ? JSON.parse(saved) : [
        {
          id: 'bm-init-1',
          type: 'chapter',
          title: 'General Model for AIS (Figure 4)',
          chapterNumber: 1,
          pageNumber: 5,
          reference: 'Chapter 1, Section 1.1.4',
          dateAdded: '2026-09-27',
          targetId: 'ch1'
        },
        {
          id: 'bm-init-2',
          type: 'summary',
          title: 'SAS 78 Internal Control Framework',
          chapterNumber: 3,
          pageNumber: 8,
          reference: 'Chapter 3, Section 3.3.2',
          dateAdded: '2026-09-27',
          targetId: 'ch3'
        }
      ];
    } catch {
      return [];
    }
  });

  // Student Notes
  const [notes, setNotes] = useState<StudentNote[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_notes');
      return saved ? JSON.parse(saved) : [
        {
          id: 'note-1',
          title: 'Key distinction: AIS vs MIS',
          content: 'AIS focuses strictly on financial transactions (economic exchanges affecting assets/equities in monetary terms) and nonfinancial transactions directly affecting financial events. MIS handles operational planning like factory scheduling.',
          chapterNumber: 1,
          createdAt: '2026-09-27T10:00:00Z',
          updatedAt: '2026-09-27T10:00:00Z'
        },
        {
          id: 'note-2',
          title: 'Internal Control PDC Model mnemonic',
          content: 'Preventive = first line (e.g. prenumbered forms, passwords). Detective = alarm (e.g. recalculated price*qty). Corrective = fixes problem after alarm.',
          chapterNumber: 3,
          createdAt: '2026-09-27T11:00:00Z',
          updatedAt: '2026-09-27T11:00:00Z'
        }
      ];
    } catch {
      return [];
    }
  });

  // Quiz Attempts
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_quiz_attempts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Practiced Questions
  const [practicedQuestionIds, setPracticedQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_practiced_q');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Difficult flashcards
  const [difficultFlashcards, setDifficultFlashcards] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_diff_flashcards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Study logs
  const [studyLogs, setStudyLogs] = useState<StudySessionLog[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_study_logs');
      return saved ? JSON.parse(saved) : [
        {
          id: 'log-1',
          date: '2026-09-27',
          durationMinutes: 25,
          chapterNumber: 1,
          questionsAnswered: 8,
          mode: 'Reading & Practice'
        }
      ];
    } catch {
      return [];
    }
  });

  // Achievements
  const [achievements, setAchievements] = useState<AchievementBadge[]>(() => {
    try {
      const saved = localStorage.getItem('wu_ais_achievements');
      return saved ? JSON.parse(saved) : DEFAULT_ACHIEVEMENTS;
    } catch {
      return DEFAULT_ACHIEVEMENTS;
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('wu_ais_settings', JSON.stringify(settings));
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('wu_ais_progress', JSON.stringify(chapterProgress));
  }, [chapterProgress]);

  useEffect(() => {
    localStorage.setItem('wu_ais_downloads', JSON.stringify(downloadedChapters));
  }, [downloadedChapters]);

  useEffect(() => {
    localStorage.setItem('wu_ais_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('wu_ais_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('wu_ais_quiz_attempts', JSON.stringify(quizAttempts));
  }, [quizAttempts]);

  useEffect(() => {
    localStorage.setItem('wu_ais_practiced_q', JSON.stringify(practicedQuestionIds));
  }, [practicedQuestionIds]);

  useEffect(() => {
    localStorage.setItem('wu_ais_diff_flashcards', JSON.stringify(difficultFlashcards));
  }, [difficultFlashcards]);

  useEffect(() => {
    localStorage.setItem('wu_ais_study_logs', JSON.stringify(studyLogs));
  }, [studyLogs]);

  useEffect(() => {
    localStorage.setItem('wu_ais_achievements', JSON.stringify(achievements));
  }, [achievements]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Progress update helpers
  const updateChapterProgress = (chapterId: string, progress: Partial<ChapterProgress>) => {
    setChapterProgress(prev => {
      const existing = prev[chapterId] || {
        status: 'not_started',
        lastReadPage: 1,
        lastReadDate: new Date().toISOString().split('T')[0],
        readPercentage: 0
      };
      return {
        ...prev,
        [chapterId]: {
          ...existing,
          ...progress,
          lastReadDate: new Date().toISOString().split('T')[0]
        }
      };
    });
    setLastReadChapterId(chapterId);
    localStorage.setItem('wu_ais_last_read_ch', chapterId);
  };

  const markChapterStatus = (chapterId: string, status: 'not_started' | 'in_progress' | 'completed') => {
    updateChapterProgress(chapterId, {
      status,
      readPercentage: status === 'completed' ? 100 : status === 'in_progress' ? 50 : 0
    });
    showToast(`Chapter status updated to: ${status === 'completed' ? 'Completed ✓' : status === 'in_progress' ? 'In Progress' : 'Not Started'}`);
    
    // Check achievements
    if (status === 'completed') {
      unlockAchievement('ach-first-ch');
      const completedCount = Object.values({
        ...chapterProgress,
        [chapterId]: { ...chapterProgress[chapterId], status }
      }).filter(p => p.status === 'completed').length;
      if (completedCount >= 5) unlockAchievement('ach-five-ch');
      if (completedCount >= 7) unlockAchievement('ach-all-ch');
    }
  };

  const unlockAchievement = (id: string) => {
    setAchievements(prev => prev.map(a => {
      if (a.id === id && !a.unlocked) {
        showToast(`🏆 Achievement Unlocked: ${a.title}!`);
        return { ...a, unlocked: true, unlockedAt: new Date().toISOString().split('T')[0] };
      }
      return a;
    }));
  };

  // Downloads
  const downloadChapter = (id: string) => {
    if (downloadedChapters.includes(id)) {
      showToast('This material is already available offline ✓');
      return;
    }
    // Simulate fast realistic download progress
    setIsDownloading(prev => ({ ...prev, [id]: 10 }));
    let progress = 10;
    const interval = setInterval(() => {
      progress += 25;
      if (progress >= 100) {
        clearInterval(interval);
        setIsDownloading(prev => {
          const next = { ...prev };
          delete next[id];
          return next;
        });
        setDownloadedChapters(prev => [...prev, id]);
        showToast('Downloaded successfully! Available Offline ✓');
        
        // check all downloaded
        const allIds = ['outline', ...allChapters.map(c => c.id)];
        if (allIds.every(i => downloadedChapters.includes(i) || i === id)) {
          unlockAchievement('ach-offline-ready');
        }
      } else {
        setIsDownloading(prev => ({ ...prev, [id]: progress }));
      }
    }, 180);
  };

  const deleteDownload = (id: string) => {
    setDownloadedChapters(prev => prev.filter(item => item !== id));
    showToast('Download removed from local cache.');
  };

  const downloadAll = () => {
    const allIds = ['outline', ...allChapters.map(c => c.id)];
    allIds.forEach((id, idx) => {
      if (!downloadedChapters.includes(id)) {
        setTimeout(() => downloadChapter(id), idx * 250);
      }
    });
  };

  const clearAllDownloads = () => {
    setDownloadedChapters([]);
    showToast('All downloaded offline files cleared.');
  };

  // Bookmarks
  const addBookmark = (bm: Omit<BookmarkItem, 'id' | 'dateAdded'>) => {
    const newItem: BookmarkItem = {
      ...bm,
      id: 'bm-' + Date.now(),
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setBookmarks(prev => [newItem, ...prev]);
    showToast('Bookmark added ✓');
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
    showToast('Bookmark removed.');
  };

  const isBookmarked = (reference: string) => {
    return bookmarks.some(b => b.reference === reference);
  };

  // Notes
  const addNote = (title: string, content: string, chapterNumber?: number) => {
    const newNote: StudentNote = {
      id: 'note-' + Date.now(),
      title: title.trim() || 'Untitled Note',
      content,
      chapterNumber,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setNotes(prev => [newNote, ...prev]);
    showToast('Note saved locally ✓');
  };

  const updateNote = (id: string, title: string, content: string, chapterNumber?: number) => {
    setNotes(prev => prev.map(n => {
      if (n.id === id) {
        return {
          ...n,
          title: title.trim() || 'Untitled Note',
          content,
          chapterNumber,
          updatedAt: new Date().toISOString()
        };
      }
      return n;
    }));
    showToast('Note updated ✓');
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
    showToast('Note deleted.');
  };

  // Quizzes
  const recordQuizAttempt = (attempt: Omit<QuizAttempt, 'id' | 'date' | 'timestamp'>) => {
    const fullAttempt: QuizAttempt = {
      ...attempt,
      id: 'qa-' + Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      timestamp: Date.now()
    };
    setQuizAttempts(prev => [fullAttempt, ...prev]);
    unlockAchievement('ach-first-quiz');
    if (attempt.percentage === 100) {
      unlockAchievement('ach-perfect-quiz');
    }
    logStudySession(
      Math.max(1, Math.round(attempt.timeSpentSeconds / 60)),
      attempt.chapterFilter || 1,
      attempt.totalQuestions,
      `Quiz (${attempt.mode})`
    );
  };

  const markQuestionPracticed = (id: string) => {
    if (!practicedQuestionIds.includes(id)) {
      const updated = [...practicedQuestionIds, id];
      setPracticedQuestionIds(updated);
      if (updated.length >= 50) {
        unlockAchievement('ach-questions-50');
      }
    }
  };

  // Flashcards
  const toggleDifficultFlashcard = (id: string) => {
    setDifficultFlashcards(prev => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from difficult review list');
        return prev.filter(x => x !== id);
      } else {
        showToast('Marked as difficult for review ★');
        return [...prev, id];
      }
    });
  };

  // Study log
  const logStudySession = (durationMinutes: number, chapterNumber: number, questionsAnswered: number, mode: string) => {
    const newLog: StudySessionLog = {
      id: 'session-' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      durationMinutes,
      chapterNumber,
      questionsAnswered,
      mode
    };
    setStudyLogs(prev => [newLog, ...prev]);
  };

  // Settings
  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    showToast('Settings saved.');
  };

  const resetAllProgress = () => {
    const initial: { [chapterId: string]: ChapterProgress } = {};
    allChapters.forEach(ch => {
      initial[ch.id] = {
        status: 'not_started',
        lastReadPage: 1,
        lastReadDate: new Date().toISOString().split('T')[0],
        readPercentage: 0
      };
    });
    setChapterProgress(initial);
    setPracticedQuestionIds([]);
    showToast('Course reading progress has been reset.');
  };

  const resetQuizHistory = () => {
    setQuizAttempts([]);
    showToast('Quiz history cleared.');
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        moreSubTab,
        setMoreSubTab,
        selectedChapterId,
        setSelectedChapterId,
        readerMode,
        setReaderMode,
        chapterProgress,
        updateChapterProgress,
        markChapterStatus,
        downloadedChapters,
        isDownloading,
        downloadChapter,
        deleteDownload,
        downloadAll,
        clearAllDownloads,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        notes,
        addNote,
        updateNote,
        deleteNote,
        quizAttempts,
        recordQuizAttempt,
        practicedQuestionIds,
        markQuestionPracticed,
        difficultFlashcards,
        toggleDifficultFlashcard,
        studyLogs,
        logStudySession,
        achievements,
        settings,
        updateSettings,
        resetAllProgress,
        resetQuizHistory,
        hasSeenWelcome,
        setHasSeenWelcome,
        showSplash,
        setShowSplash,
        lastReadChapterId,
        toastMessage,
        showToast,
        isInstallModalOpen,
        setIsInstallModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
