export type NavTab = 'home' | 'materials' | 'practice' | 'quiz' | 'progress' | 'more';

export type MoreSubTab = 
  | 'outline' 
  | 'summaries' 
  | 'downloads' 
  | 'bookmarks' 
  | 'notes' 
  | 'glossary' 
  | 'flashcards' 
  | 'study-session' 
  | 'reminders' 
  | 'achievements' 
  | 'settings' 
  | 'about'
  | 'search';

export interface CourseOutlineInfo {
  university: string;
  college: string;
  department: string;
  courseNumber: string;
  courseTitle: string;
  ectsCredits: number;
  creditHours: number;
  academicYear: string;
  semester: string;
  instructor: {
    name: string;
    title: string;
    department: string;
    university: string;
    email: string;
    phone: string;
  };
  objectives: string[];
  description: string;
  evaluationScheme: { item: string; weight: number }[];
  textbooks: string[];
  rolesOfInstructor: string;
  rolesOfStudents: string;
}

export interface ChapterSection {
  id: string;
  title: string;
  content: string[];
  diagramNote?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface PDFPage {
  pageNumber: number;
  title: string;
  sections: {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
    diagramDesc?: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
}

export interface ChapterSummary {
  learningObjectives: string[];
  keyConcepts: string[];
  importantTerms: { term: string; def: string }[];
  mainIdeas: string[];
  importantRelationships: string[];
  chapterSummaryText: string;
  keyTakeaways: string[];
}

export interface ChapterData {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  totalPages: number;
  fileSize: string;
  status: 'not_started' | 'in_progress' | 'completed';
  sections: ChapterSection[];
  summary: ChapterSummary;
  pdfPages: PDFPage[];
}

export interface PracticeQuestion {
  id: string;
  chapterNumber: number;
  chapterId: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface QuizAttempt {
  id: string;
  date: string;
  timestamp: number;
  mode: 'quick' | 'standard' | 'chapter' | 'comprehensive' | 'random';
  chapterFilter?: number;
  totalQuestions: number;
  score: number;
  percentage: number;
  timeSpentSeconds: number;
  userAnswers: { [questionId: string]: 'A' | 'B' | 'C' | 'D' | null };
  questions: PracticeQuestion[];
}

export interface BookmarkItem {
  id: string;
  type: 'chapter' | 'page' | 'summary' | 'question' | 'glossary';
  title: string;
  chapterNumber?: number;
  pageNumber?: number;
  reference: string;
  dateAdded: string;
  targetId?: string;
}

export interface StudentNote {
  id: string;
  title: string;
  content: string;
  chapterNumber?: number;
  updatedAt: string;
  createdAt: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  chapterNumber: number;
  category: string;
}

export interface Flashcard {
  id: string;
  chapterNumber: number;
  topic: string;
  front: string;
  back: string;
  isDifficult?: boolean;
}

export interface StudySessionLog {
  id: string;
  date: string;
  durationMinutes: number;
  chapterNumber: number;
  questionsAnswered: number;
  mode: string;
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface AppSettings {
  theme: 'light' | 'dark';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  studyRemindersEnabled: boolean;
  reminderTime: string;
  reminderFrequency: 'daily' | 'weekdays' | 'custom';
  deviceFrame: boolean;
}
