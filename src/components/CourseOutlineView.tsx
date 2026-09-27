import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle, 
  ZoomIn, 
  ZoomOut, 
  Search, 
  Share2, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  User, 
  CheckSquare, 
  BookMarked,
  Printer
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { officialCourseOutline, allChapters } from '../data';

export const CourseOutlineView: React.FC = () => {
  const { downloadedChapters, downloadChapter, isBookmarked, addBookmark, removeBookmark, showToast } = useApp();
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [outlineSearch, setOutlineSearch] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'syllabus' | 'document'>('syllabus');

  const isDownloaded = downloadedChapters.includes('outline');
  const bookmarkRef = 'Course Outline AcFn 4121';
  const bookmarked = isBookmarked(bookmarkRef);

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(bookmarkRef);
    } else {
      addBookmark({
        type: 'chapter',
        title: 'Official Course Outline - AcFn 4121',
        reference: bookmarkRef
      });
    }
  };

  const filteredChapters = allChapters.filter(ch => 
    ch.title.toLowerCase().includes(outlineSearch.toLowerCase()) ||
    ch.sections.some(s => s.title.toLowerCase().includes(outlineSearch.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-sky-100 mb-2">
              <FileText size={14} />
              <span>Official Course Outline</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Accounting Information Systems
            </h1>
            <p className="text-sky-100 text-xs font-medium mt-1">
              Course Code: AcFn 4121 • 5 ETCTS Credits • 3 Credit Hours
            </p>
            <p className="text-sky-200/90 text-xs mt-0.5">
              Wollo University • College of Business and Economics
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-col items-end gap-2 shrink-0">
            {isDownloaded ? (
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
                <CheckCircle size={15} />
                <span>Available Offline ✓</span>
              </span>
            ) : (
              <button
                onClick={() => downloadChapter('outline')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-sky-800 font-bold text-xs hover:bg-sky-50 shadow transition-colors cursor-pointer"
              >
                <Download size={15} />
                <span>Download Outline</span>
              </button>
            )}

            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-colors ${
                bookmarked 
                  ? 'bg-amber-400 text-slate-900 border-amber-300' 
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
            >
              <BookMarked size={16} />
              <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'syllabus'
                ? 'bg-white text-sky-900 shadow'
                : 'text-sky-100 hover:bg-white/10'
            }`}
          >
            Formatted Syllabus
          </button>
          <button
            onClick={() => setActiveTab('document')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'document'
                ? 'bg-white text-sky-900 shadow'
                : 'text-sky-100 hover:bg-white/10'
            }`}
          >
            Document Viewer Mode
          </button>
        </div>
      </div>

      {/* SYLLABUS TAB */}
      {activeTab === 'syllabus' && (
        <div className="space-y-6">
          {/* Institutional Metadata Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-4 flex items-center gap-2">
              <GraduationCap size={18} />
              <span>Course Metadata &amp; Instructor</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2.5">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">University:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{officialCourseOutline.university}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">College:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{officialCourseOutline.college}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Department:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{officialCourseOutline.department}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Course:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{officialCourseOutline.courseTitle} ({officialCourseOutline.courseNumber})</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Academic Year / Sem:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{officialCourseOutline.academicYear} • {officialCourseOutline.semester}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Credit Load:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">5 ETCTS (3 Credit Hours)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Instructor:</span>
                  <span className="font-bold text-sky-700 dark:text-sky-300">{officialCourseOutline.instructor.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Email:</span>
                  <a href={`mailto:${officialCourseOutline.instructor.email}`} className="font-bold text-sky-600 hover:underline">
                    {officialCourseOutline.instructor.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Objectives */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <BookOpen size={16} className="text-sky-600 dark:text-sky-400" />
                <span>Course Description</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {officialCourseOutline.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckSquare size={16} className="text-cyan-600 dark:text-cyan-400" />
                <span>Course Objectives &amp; Competences Acquired</span>
              </h3>
              <ul className="space-y-2">
                {officialCourseOutline.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Evaluation Scheme */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Calendar size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span>Assessment &amp; Evaluation Scheme (100%)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {officialCourseOutline.evaluationScheme.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center">
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">
                    {item.weight}%
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {item.item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Contents Breakdown (7 Chapters) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Course Contents (7 Chapters)
              </h3>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search topics in outline..."
                  value={outlineSearch}
                  onChange={(e) => setOutlineSearch(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full sm:w-56"
                />
              </div>
            </div>

            <div className="space-y-3">
              {filteredChapters.map((ch) => (
                <div 
                  key={ch.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                      Chapter {ch.number}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {ch.totalPages} Pages
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2">
                    {ch.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {ch.sections.map((sec) => (
                      <div key={sec.id} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                        <span className="truncate">{sec.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Textbooks & Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen size={16} className="text-sky-600" />
                <span>Text and Reference Books</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {officialCourseOutline.textbooks.map((tb, idx) => (
                  <li key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <strong>{tb}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <User size={16} className="text-cyan-600" />
                <span>Roles and Policies</span>
              </h4>
              <div className="text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <p><strong>Roles of Instructor:</strong> {officialCourseOutline.rolesOfInstructor}</p>
                <p><strong>Roles of Students:</strong> {officialCourseOutline.rolesOfStudents}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DOCUMENT VIEWER MODE (Simulating original university PDF document) */}
      {activeTab === 'document' && (
        <div className="space-y-4">
          {/* Document Controls Bar */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel(prev => Math.max(70, prev - 15))}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 min-w-[50px] text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(150, prev + 15))}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-semibold">Page 1-2 of 2</span>
              <button 
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 hidden sm:flex items-center gap-1 font-semibold"
              >
                <Printer size={15} />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Realistic University PDF Page 1 */}
          <div 
            className="bg-white text-black p-8 rounded-2xl shadow-xl border border-slate-300 max-w-3xl mx-auto font-serif transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            {/* University Logo Header */}
            <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
              <div className="w-14 h-14 mx-auto mb-2 rounded-full border-2 border-sky-800 flex items-center justify-center bg-sky-50 text-sky-900 font-bold text-xs tracking-wider">
                WU
              </div>
              <h2 className="text-lg font-bold uppercase tracking-wide">Wollo University</h2>
              <h3 className="text-sm font-semibold">College of Business and Economics</h3>
              <h4 className="text-xs font-medium">Department of Accounting and Finance</h4>
            </div>

            {/* Course Table Matrix */}
            <table className="w-full text-xs border-collapse border border-slate-400 mb-6 font-sans">
              <tbody>
                <tr>
                  <td className="border border-slate-400 p-2 font-bold bg-slate-100 w-1/3">Course Number</td>
                  <td className="border border-slate-400 p-2">AcFn 4121</td>
                </tr>
                <tr>
                  <td className="border border-slate-400 p-2 font-bold bg-slate-100">Course Title</td>
                  <td className="border border-slate-400 p-2 font-bold">Accounting Information Systems</td>
                </tr>
                <tr>
                  <td className="border border-slate-400 p-2 font-bold bg-slate-100">ETCTS / Credit Hours</td>
                  <td className="border border-slate-400 p-2">5 ETCTS Credits / 3 Credit Hours</td>
                </tr>
                <tr>
                  <td className="border border-slate-400 p-2 font-bold bg-slate-100">Academic Year / Sem</td>
                  <td className="border border-slate-400 p-2">2026 / 1st Semester (2019 E.C.)</td>
                </tr>
                <tr>
                  <td className="border border-slate-400 p-2 font-bold bg-slate-100">Instructor Name</td>
                  <td className="border border-slate-400 p-2 font-bold">Naod Mekonnen (PhD)</td>
                </tr>
                <tr>
                  <td className="border border-slate-400 p-2 font-bold bg-slate-100">Course Objectives</td>
                  <td className="border border-slate-400 p-2 space-y-1">
                    {officialCourseOutline.objectives.map((o, idx) => (
                      <div key={idx}>• {o}</div>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-400 p-2 font-bold bg-slate-100">Course Description</td>
                  <td className="border border-slate-400 p-2 leading-relaxed">
                    {officialCourseOutline.description}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Assessment scheme table */}
            <h4 className="text-xs font-bold uppercase mb-2">Assessment and Evaluation Scheme</h4>
            <table className="w-full text-xs border-collapse border border-slate-400 mb-6 font-sans text-center">
              <thead>
                <tr className="bg-slate-100 font-bold">
                  <th className="border border-slate-400 p-1.5">Mid Exam</th>
                  <th className="border border-slate-400 p-1.5">Quiz 1</th>
                  <th className="border border-slate-400 p-1.5">Assignment 1</th>
                  <th className="border border-slate-400 p-1.5">Final Exam</th>
                  <th className="border border-slate-400 p-1.5">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-400 p-1.5">25%</td>
                  <td className="border border-slate-400 p-1.5">5%</td>
                  <td className="border border-slate-400 p-1.5">20%</td>
                  <td className="border border-slate-400 p-1.5">50%</td>
                  <td className="border border-slate-400 p-1.5 font-bold">100%</td>
                </tr>
              </tbody>
            </table>

            <div className="text-[11px] text-slate-500 text-right pt-4 border-t border-slate-200">
              Page 1 of 2 • Department of Accounting and Finance • Wollo University
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
