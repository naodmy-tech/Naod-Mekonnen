import React, { useState } from 'react';
import { 
  BrainCircuit, 
  RotateCw, 
  ChevronRight, 
  ChevronLeft, 
  Shuffle, 
  Star, 
  StarOff, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { comprehensiveFlashcards, allChapters } from '../data';
import { Flashcard } from '../types';

export const FlashcardsView: React.FC = () => {
  const { difficultFlashcards, toggleDifficultFlashcard } = useApp();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedChapter, setSelectedChapter] = useState<number>(0); // 0 = all
  const [onlyDifficult, setOnlyDifficult] = useState<boolean>(false);
  const [deck, setDeck] = useState<Flashcard[]>(comprehensiveFlashcards);

  // Filter deck based on chapter & difficult toggle
  const filteredCards = deck.filter(c => {
    const chapterMatch = selectedChapter === 0 || c.chapterNumber === selectedChapter;
    const diffMatch = !onlyDifficult || difficultFlashcards.includes(c.id);
    return chapterMatch && diffMatch;
  });

  const activeCard = filteredCards[currentIndex] || filteredCards[0];
  const isCardDifficult = activeCard ? difficultFlashcards.includes(activeCard.id) : false;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...filteredCards].sort(() => 0.5 - Math.random());
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="space-y-6 pb-20 max-w-2xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <BrainCircuit size={14} />
          Active Recall Memory
        </span>
        <h1 className="text-2xl font-black tracking-tight">Interactive Flashcards</h1>
        <p className="text-xs text-blue-100 mt-1">
          Review core definitions, acronyms, and control frameworks with interactive flip cards.
        </p>
      </div>

      {/* Filter and Shuffle Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <select
            value={selectedChapter}
            onChange={(e) => {
              setSelectedChapter(Number(e.target.value));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="text-xs font-bold py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value={0}>All Chapters ({comprehensiveFlashcards.length} Cards)</option>
            {allChapters.map(ch => (
              <option key={ch.id} value={ch.number}>
                Chapter {ch.number}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setOnlyDifficult(!onlyDifficult);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
              onlyDifficult
                ? 'bg-amber-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Star size={13} className={onlyDifficult ? 'fill-white' : ''} />
            <span>Difficult ({difficultFlashcards.length})</span>
          </button>
        </div>

        <button
          onClick={handleShuffle}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1"
          title="Shuffle Deck"
        >
          <Shuffle size={14} />
          <span>Shuffle</span>
        </button>
      </div>

      {filteredCards.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 text-center space-y-3 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 mx-auto flex items-center justify-center">
            <StarOff size={28} />
          </div>
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
            No difficult cards flagged.
          </h2>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Click the star icon while reviewing any flashcard to mark it as difficult for focused study.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Active Flashcard Container (Click to flip) */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer select-none perspective-1000 min-h-[300px] flex items-center justify-center"
          >
            <div
              className={`w-full h-full min-h-[300px] rounded-3xl p-7 border transition-all duration-500 shadow-xl flex flex-col justify-between ${
                isFlipped
                  ? 'bg-gradient-to-br from-indigo-900 via-indigo-800 to-sky-950 border-indigo-500 text-white'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                  isFlipped 
                    ? 'bg-white/20 text-indigo-100' 
                    : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                }`}>
                  Chapter {activeCard.chapterNumber} • {activeCard.topic}
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => toggleDifficultFlashcard(activeCard.id)}
                    className={`p-1.5 rounded-xl border transition-colors ${
                      isCardDifficult
                        ? 'bg-amber-400 text-slate-900 border-amber-300'
                        : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-400'
                    }`}
                    title={isCardDifficult ? 'Difficult card' : 'Mark as difficult'}
                  >
                    <Star size={15} className={isCardDifficult ? 'fill-slate-900' : ''} />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="my-6 text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest block mb-2 opacity-60">
                  {isFlipped ? 'ANSWER / DEFINITION' : 'QUESTION / CONCEPT'}
                </span>
                <p className={`font-extrabold leading-relaxed ${isFlipped ? 'text-sm sm:text-base text-sky-100 whitespace-pre-line' : 'text-base sm:text-lg text-slate-900 dark:text-white'}`}>
                  {isFlipped ? activeCard.back : activeCard.front}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[11px] opacity-60 pt-2 border-t border-current/10">
                <span className="flex items-center gap-1">
                  <RotateCw size={12} />
                  <span>Tap anywhere to flip</span>
                </span>
                <span>
                  Card {currentIndex + 1} of {filteredCards.length}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              className="flex-1 py-3 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1 shadow-sm hover:bg-slate-50 cursor-pointer"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="py-3 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 shadow cursor-pointer"
            >
              <RotateCw size={14} />
              <span>Flip</span>
            </button>

            <button
              onClick={handleNext}
              className="flex-1 py-3 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1 shadow-sm hover:bg-slate-50 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
