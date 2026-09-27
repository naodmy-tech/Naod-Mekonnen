import { officialCourseOutline } from './courseOutline';
import { chapter1Data } from './chapters/chapter1';
import { chapter2Data } from './chapters/chapter2';
import { chapter3Data } from './chapters/chapter3';
import { chapter4Data } from './chapters/chapter4';
import { chapter5Data } from './chapters/chapter5';
import { chapter6Data } from './chapters/chapter6';
import { chapter7Data } from './chapters/chapter7';
import { comprehensiveQuestionBank } from './questionBank';
import { comprehensiveGlossary } from './glossaryData';
import { comprehensiveFlashcards } from './flashcardsData';
import { ChapterData } from '../types';

export const allChapters: ChapterData[] = [
  chapter1Data,
  chapter2Data,
  chapter3Data,
  chapter4Data,
  chapter5Data,
  chapter6Data,
  chapter7Data
];

export {
  officialCourseOutline,
  chapter1Data,
  chapter2Data,
  chapter3Data,
  chapter4Data,
  chapter5Data,
  chapter6Data,
  chapter7Data,
  comprehensiveQuestionBank,
  comprehensiveGlossary,
  comprehensiveFlashcards
};

export function getChapterById(id: string): ChapterData | undefined {
  return allChapters.find((ch) => ch.id === id);
}

export function getChapterByNumber(num: number): ChapterData | undefined {
  return allChapters.find((ch) => ch.number === num);
}

export function getQuestionsForChapter(num: number) {
  return comprehensiveQuestionBank.filter((q) => q.chapterNumber === num);
}
