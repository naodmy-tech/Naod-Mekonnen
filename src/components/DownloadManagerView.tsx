import React, { useState } from 'react';
import { Download, CheckCircle, Trash2, HardDrive, RefreshCw, AlertTriangle, FileText, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allChapters } from '../data';

export const DownloadManagerView: React.FC = () => {
  const { 
    downloadedChapters, 
    isDownloading, 
    downloadChapter, 
    deleteDownload, 
    downloadAll, 
    clearAllDownloads 
  } = useApp();

  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [showClearAllModal, setShowClearAllModal] = useState<boolean>(false);

  const allItems = [
    { id: 'outline', title: 'Official Course Outline (AcFn 4121)', size: '1.2 MB', isOutline: true },
    ...allChapters.map(ch => ({
      id: ch.id,
      title: `Chapter ${ch.number}: ${ch.title}`,
      size: ch.fileSize,
      isOutline: false
    }))
  ];

  const totalCachedCount = allItems.filter(item => downloadedChapters.includes(item.id)).length;

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 to-emerald-700 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <HardDrive size={14} />
          Offline Cache Manager
        </span>
        <h1 className="text-2xl font-black tracking-tight">Offline Downloads</h1>
        <p className="text-xs text-emerald-100 mt-1 max-w-xl">
          Store original PDF lectures and the course syllabus locally on your device for studying without internet.
        </p>

        {/* Global Controls */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/20">
          <div className="text-xs text-emerald-100 font-semibold">
            {totalCachedCount} of {allItems.length} items available offline
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadAll}
              className="px-4 py-2 rounded-xl bg-white text-emerald-900 font-bold text-xs shadow hover:bg-emerald-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download size={14} />
              <span>Download All Materials</span>
            </button>

            {totalCachedCount > 0 && (
              <button
                onClick={() => setShowClearAllModal(true)}
                className="px-3 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-100 font-semibold text-xs border border-rose-300/30 transition-colors"
              >
                Clear Cache
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal: Delete Single Item */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 mx-auto flex items-center justify-center">
              <AlertTriangle size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Delete Downloaded Material?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                This will remove the offline copy from your device storage. You can re-download it later.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteDownload(confirmDeleteId);
                  setConfirmDeleteId(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow hover:bg-rose-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal: Clear All */}
      {showClearAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 mx-auto flex items-center justify-center">
              <AlertTriangle size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Clear All Offline Materials?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                All downloaded PDFs and local chapter packages will be cleared from cache storage.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowClearAllModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  clearAllDownloads();
                  setShowClearAllModal(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow hover:bg-rose-500"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Downloads Item List */}
      <div className="space-y-3">
        {allItems.map((item) => {
          const isCached = downloadedChapters.includes(item.id);
          const downloadProgress = isDownloading[item.id];

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                  item.isOutline
                    ? 'bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300'
                    : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300'
                }`}>
                  {item.isOutline ? <FileText size={20} /> : <BookOpen size={20} />}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[11px] text-slate-500 font-medium">
                      File Size: {item.size}
                    </span>
                    <span className="text-slate-300">•</span>
                    {isCached ? (
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle size={12} />
                        Available Offline ✓
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
                        Download Required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Status and Action Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                {downloadProgress !== undefined ? (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-700 text-xs font-bold">
                    <RefreshCw size={13} className="animate-spin text-sky-600" />
                    <span>{downloadProgress}%</span>
                  </div>
                ) : isCached ? (
                  <button
                    onClick={() => setConfirmDeleteId(item.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Delete local download"
                  >
                    <Trash2 size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => downloadChapter(item.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-1 shadow transition-colors cursor-pointer"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
