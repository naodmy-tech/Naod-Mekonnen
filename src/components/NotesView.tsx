import React, { useState } from 'react';
import { Edit3, Plus, Trash2, Search, BookOpen, Save, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allChapters } from '../data';
import { StudentNote } from '../types';

export const NotesView: React.FC = () => {
  const { notes, addNote, updateNote, deleteNote } = useApp();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [editingNote, setEditingNote] = useState<StudentNote | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  // Form states
  const [formTitle, setFormTitle] = useState<string>('');
  const [formContent, setFormContent] = useState<string>('');
  const [formChapter, setFormChapter] = useState<number>(1);

  const filteredNotes = notes.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startCreate = () => {
    setFormTitle('');
    setFormContent('');
    setFormChapter(1);
    setEditingNote(null);
    setIsCreating(true);
  };

  const startEdit = (note: StudentNote) => {
    setFormTitle(note.title);
    setFormContent(note.content);
    setFormChapter(note.chapterNumber || 1);
    setEditingNote(note);
    setIsCreating(false);
  };

  const handleSave = () => {
    if (!formTitle.trim() && !formContent.trim()) return;

    if (editingNote) {
      updateNote(editingNote.id, formTitle, formContent, formChapter);
      setEditingNote(null);
    } else {
      addNote(formTitle, formContent, formChapter);
      setIsCreating(false);
    }
    setFormTitle('');
    setFormContent('');
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-3xl p-6 text-white shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
              <Edit3 size={14} />
              Offline Notebook
            </span>
            <h1 className="text-2xl font-black tracking-tight">My Study Notes</h1>
            <p className="text-xs text-emerald-100 mt-1">
              Personalized summaries, mnemonic devices, and study reminders saved locally.
            </p>
          </div>

          <button
            onClick={startCreate}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white text-emerald-900 font-bold text-xs shadow hover:bg-emerald-50 transition-colors cursor-pointer shrink-0"
          >
            <Plus size={16} />
            <span>New Note</span>
          </button>
        </div>
      </div>

      {/* Editor Modal / Card */}
      {(isCreating || editingNote) && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-emerald-500 shadow-xl space-y-4 animate-fade-in">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white">
              {editingNote ? 'Edit Study Note' : 'Create New Study Note'}
            </h2>
            <button
              onClick={() => {
                setIsCreating(false);
                setEditingNote(null);
              }}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Note Title
              </label>
              <input
                type="text"
                placeholder="e.g. Key distinction between DFD and Flowchart"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="w-full text-xs font-semibold p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Associated Course Chapter
              </label>
              <select
                value={formChapter}
                onChange={(e) => setFormChapter(Number(e.target.value))}
                className="w-full text-xs font-semibold p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              >
                {allChapters.map(ch => (
                  <option key={ch.id} value={ch.number}>
                    Chapter {ch.number}: {ch.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Content &amp; Observations
              </label>
              <textarea
                rows={5}
                placeholder="Type your study notes here..."
                value={formContent}
                onChange={(e) => setFormContent(e.target.value)}
                className="w-full text-xs p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed font-sans"
              />
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={() => {
                  setIsCreating(false);
                  setEditingNote(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow"
              >
                <Save size={14} />
                <span>Save Note</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
        <input
          type="text"
          placeholder="Search personal notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
        />
      </div>

      {/* Notes List */}
      {filteredNotes.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 text-center space-y-3 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <Edit3 size={28} />
          </div>
          <h2 className="text-base font-extrabold text-slate-800 dark:text-white">
            Your study notes will appear here.
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
            Click "New Note" above to write down key concepts, formulas, and mnemonic hints.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    Chapter {note.chapterNumber}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {new Date(note.updatedAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => startEdit(note)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Edit"
                  >
                    <Edit3 size={15} />
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                {note.title}
              </h3>

              <p className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
