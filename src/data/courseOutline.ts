import { CourseOutlineInfo } from '../types';

export const officialCourseOutline: CourseOutlineInfo = {
  university: 'Wollo University',
  college: 'College of Business and Economics',
  department: 'Department of Accounting and Finance',
  courseNumber: 'AcFn 4121',
  courseTitle: 'Accounting Information Systems',
  ectsCredits: 5,
  creditHours: 3,
  academicYear: '2026 (2019 E.C.)',
  semester: '1st Semester',
  instructor: {
    name: 'Naod Mekonnen (PhD)',
    title: 'Assistant Professor / Senior Lecturer',
    department: 'Department of Accounting and Finance',
    university: 'Wollo University',
    email: 'naodmy@gmail.com',
    phone: '+251 911 079 315',
  },
  objectives: [
    'Analyze, document and evaluate business activities performed by firms within major transaction cycles;',
    'Identify AIS control and security threats and recommend preventing/mitigating strategies;',
    'Understand the models, techniques, and tools for Information Systems Analysis and Design in general and AIS in particular;',
    'Develop skills in documenting Accounting Systems (DFDs, ERDs, Flowcharts);',
    'Develop understanding about fundamental concepts of database technology and data modeling and apply the knowledge gained to develop AIS data model;',
    'Develop working knowledge about database applications and enterprise resource planning systems.'
  ],
  description: 
    'The course is designed to instill the knowledge and skills Accountants require to improve the design and function of Accounting Information Systems through harnessing the current state-of-the-art Information Technology. The course introduces the techniques and methodologies used to design and develop Information Systems in general and Accounting Systems in particular. It also familiarizes students with Database Management Systems, internal controls, transaction cycles, and the systems development life cycle.',
  evaluationScheme: [
    { item: 'Mid Examination', weight: 25 },
    { item: 'Quiz 1', weight: 5 },
    { item: 'Course Assignment 1 / Group Case Studies', weight: 20 },
    { item: 'Final Examination', weight: 50 },
  ],
  textbooks: [
    'James A. Hall, 2019. Accounting Information Systems, 10th Edition, South-Western Cengage Learning.',
    'Marshall B. Romney, Paul J. Steinbart, Scott L. Summers, & David A. Wood, 2024. Accounting Information Systems (16th ed., Global ed.). Pearson.'
  ],
  rolesOfInstructor: 
    'The instructor will come to class regularly on time and deliver the lecture in a well-organized manner. Besides, at the end of each class, reading assignments for the next class are assigned. The instructor ensures that proper assessments are given and provides prompt feedback for each assessment.',
  rolesOfStudents: 
    'The success of this course depends on the students\' individual and collective contribution to class discussions. Students are expected to participate voluntarily, or will be called upon, to contribute to set exercises and problems. Students are also expected to read the assigned readings and prepare cases before each class. Students must attempt assignments on their own. Copying the works of others is considered a serious academic offense and leads to disciplinary action.'
};
