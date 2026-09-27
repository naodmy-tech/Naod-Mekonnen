import { PracticeQuestion } from '../types';

export const comprehensiveQuestionBank: PracticeQuestion[] = [
  // CHAPTER 1 QUESTIONS
  {
    id: 'q1-1',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Information Environment',
    difficulty: 'easy',
    question: 'Which of the following levels in the organizational pyramid is directly responsible for controlling day-to-day operations?',
    options: {
      A: 'Top Management',
      B: 'Middle Management',
      C: 'Operations Management',
      D: 'Strategic Planning Committee'
    },
    correctAnswer: 'C',
    explanation: 'Operations management is directly responsible for controlling day-to-day operations at the operational level of the organization.'
  },
  {
    id: 'q1-2',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'System Definition',
    difficulty: 'easy',
    question: 'A system is best defined as:',
    options: {
      A: 'A computer hardware installation used by corporate accountants',
      B: 'A set of interrelated components that interact to achieve a given goal or common purpose',
      C: 'A manual ledger used to record daily debit and credit transactions',
      D: 'A legal corporation registered under government regulations'
    },
    correctAnswer: 'B',
    explanation: 'A system is characterized as a group of two or more interrelated components or subsystems that serve a common purpose.'
  },
  {
    id: 'q1-3',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'AIS vs MIS',
    difficulty: 'medium',
    question: 'What is the primary factor that distinguishes an Accounting Information System (AIS) from a Management Information System (MIS)?',
    options: {
      A: 'The brand of computer hardware and servers utilized',
      B: 'The concept of a transaction: whether events are financial (or directly affect financial processing) vs nonfinancial',
      C: 'The geographic location of the company headquarters',
      D: 'Whether the system was developed in-house or purchased commercially'
    },
    correctAnswer: 'B',
    explanation: 'The distinction between AIS and MIS centers on the concept of a transaction. AIS processes financial transactions and nonfinancial events directly affecting financial processing, whereas MIS processes nonfinancial operations like production planning.'
  },
  {
    id: 'q1-4',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Transactions',
    difficulty: 'medium',
    question: 'Which of the following is considered a nonfinancial transaction that a firm has no legal obligation to process correctly?',
    options: {
      A: 'Sale of goods to a customer on 30-day credit',
      B: 'Cash disbursement for monthly employee payroll',
      C: 'Adding a new raw materials supplier to the list of approved vendors',
      D: 'Payment of corporate income taxes to the revenue authority'
    },
    correctAnswer: 'C',
    explanation: 'Adding a new supplier is a business event processed by an information system, but it is not an economic exchange affecting assets/equities in monetary terms, so it is a nonfinancial transaction.'
  },
  {
    id: 'q1-5',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'AIS Subsystems',
    difficulty: 'easy',
    question: 'Which AIS subsystem is responsible for producing mandatory legal reports such as income statements, balance sheets, and tax returns?',
    options: {
      A: 'Transaction Processing System (TPS)',
      B: 'Management Reporting System (MRS)',
      C: 'General Ledger / Financial Reporting System (GL/FRS)',
      D: 'Human Resource Management System (HRMS)'
    },
    correctAnswer: 'C',
    explanation: 'The GL/FRS produces traditional financial statements and legal documents for external users, termed nondiscretionary reporting.'
  },
  {
    id: 'q1-6',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Reporting Nature',
    difficulty: 'medium',
    question: 'Management reporting is referred to as "discretionary reporting" because:',
    options: {
      A: 'It is mandated by external tax authorities and securities commissions',
      B: 'The organization can choose what information to report and how to present it',
      C: 'Managers are forbidden from sharing reports with their subordinates',
      D: 'It requires approval from an independent certified public accountant'
    },
    correctAnswer: 'B',
    explanation: 'MRS reporting is discretionary because the organization has autonomy over which reports to create, what data to include, and how to format them for internal decision making.'
  },
  {
    id: 'q1-7',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Data vs Information',
    difficulty: 'hard',
    question: 'In the general model for AIS, how is "information" distinguished from "data"?',
    options: {
      A: 'Information is printed on paper, while data exists only in digital form',
      B: 'Information causes the user to take an action that he or she otherwise would not have taken',
      C: 'Data always has a dollar value attached to it, while information does not',
      D: 'Information refers only to historical accounting records over five years old'
    },
    correctAnswer: 'B',
    explanation: 'Data are unprocessed or raw facts having no direct effect, while information causes the user to take action, resolve conflicts, and reduce uncertainty.'
  },
  {
    id: 'q1-8',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Data Hierarchy',
    difficulty: 'medium',
    question: 'In the database hierarchy, which element represents a complete set of attributes for a single occurrence within an entity class?',
    options: {
      A: 'Data Attribute',
      B: 'Record',
      C: 'File',
      D: 'Database'
    },
    correctAnswer: 'B',
    explanation: 'A record is a complete set of attributes for a single occurrence (e.g., one customer’s name, address, and balance in Accounts Receivable).'
  },
  {
    id: 'q1-9',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Information Characteristics',
    difficulty: 'medium',
    question: 'When a system designer balances the requirement for information to be free from material errors with the user\'s decision time frame, they are balancing:',
    options: {
      A: 'Summarization and Relevance',
      B: 'Accuracy and Timeliness',
      C: 'Completeness and Storage',
      D: 'Efficiency and Redundancy'
    },
    correctAnswer: 'B',
    explanation: 'Perfect accuracy often takes too long to achieve within a decision time frame, so designers seek a balance between being as accurate as possible yet timely enough to be useful.'
  },
  {
    id: 'q1-10',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Commercial Software',
    difficulty: 'hard',
    question: 'Commercial software packages that are completely finished, pre-tested, and ready for immediate implementation are known as:',
    options: {
      A: 'Backbone systems',
      B: 'Vendor-supported systems',
      C: 'Turnkey systems',
      D: 'In-house legacy systems'
    },
    correctAnswer: 'C',
    explanation: 'Turnkey systems are completely finished and tested systems ready for implementation off-the-shelf.'
  },
  {
    id: 'q1-11',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'Evolution of AIS',
    difficulty: 'hard',
    question: 'Which of the following is NOT one of the three significant data management problems inherent in the flat-file legacy model?',
    options: {
      A: 'Data Storage duplication',
      B: 'Data Updating problems across separate user files',
      C: 'Currency of Information lags',
      D: 'Lack of primary key indexing in relational tables'
    },
    correctAnswer: 'D',
    explanation: 'The three core problems of the flat-file model are data storage, data updating, and currency of information (along with task-data dependency).'
  },
  {
    id: 'q1-12',
    chapterNumber: 1,
    chapterId: 'ch1',
    topic: 'REA Model',
    difficulty: 'hard',
    question: 'Under William McCarthy\'s 1982 REA model, why is Accounts Receivable (AR) omitted from the event-driven database?',
    options: {
      A: 'Because credit sales are illegal under the REA framework',
      B: 'Because AR is an accounting artifact record whose value can be derived directly from sales events and cash receipt events',
      C: 'Because the REA model only applies to non-profit entities',
      D: 'Because relational databases cannot store monetary numbers'
    },
    correctAnswer: 'B',
    explanation: 'In the REA model, AR is viewed as an artifact record rather than an economic resource. AR balances are derived from the difference between sales to customers and cash received in payment.'
  },

  // CHAPTER 2 QUESTIONS
  {
    id: 'q2-1',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Transaction Cycles',
    difficulty: 'easy',
    question: 'The three transaction cycles that comprise the Transaction Processing System (TPS) are:',
    options: {
      A: 'The revenue cycle, expenditure cycle, and conversion cycle',
      B: 'The budget cycle, audit cycle, and tax cycle',
      C: 'The planning cycle, programming cycle, and review cycle',
      D: 'The marketing cycle, financing cycle, and investment cycle'
    },
    correctAnswer: 'A',
    explanation: 'TPS is partitioned into the revenue cycle, expenditure cycle, and conversion cycle across all organizations.'
  },
  {
    id: 'q2-2',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Expenditure Cycle',
    difficulty: 'medium',
    question: 'Which of the following subsystems is part of the expenditure cycle?',
    options: {
      A: 'Sales order processing',
      B: 'Cost accounting system',
      C: 'Fixed asset system',
      D: 'Management reporting system'
    },
    correctAnswer: 'C',
    explanation: 'The expenditure cycle includes purchases/AP, cash disbursements, payroll, and the fixed asset system.'
  },
  {
    id: 'q2-3',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Documents',
    difficulty: 'easy',
    question: 'A product document of one system that becomes a source document for another system (such as a customer bill containing a tear-off remittance slip) is called a:',
    options: {
      A: 'Source document',
      B: 'Turnaround document',
      C: 'Reference document',
      D: 'Journal voucher'
    },
    correctAnswer: 'B',
    explanation: 'A turnaround document is a product document produced by one system that is returned to become a source document for another.'
  },
  {
    id: 'q2-4',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Ledgers',
    difficulty: 'medium',
    question: 'What is the primary function of subsidiary ledgers in accounting transaction processing?',
    options: {
      A: 'To publish summary figures directly to external shareholders and tax authorities',
      B: 'To provide detailed individual account tracking (such as specific customer or vendor balances) supporting daily operations and verifying GL accuracy',
      C: 'To replace the need for source documents and journals completely',
      D: 'To calculate corporate income tax obligations annually'
    },
    correctAnswer: 'B',
    explanation: 'Subsidiary ledgers provide daily detailed records (AR, AP, Inventory) that support routine operations and reconcile with general ledger control accounts.'
  },
  {
    id: 'q2-5',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Computer File Types',
    difficulty: 'medium',
    question: 'In a computer-based accounting system, which type of magnetic file stores standard data used as guidelines for processing, such as tax tables or authorized price lists?',
    options: {
      A: 'Transaction file',
      B: 'Reference file',
      C: 'Master file',
      D: 'Archive file'
    },
    correctAnswer: 'B',
    explanation: 'A reference file stores standards used in processing, such as tax tables, customer credit lists, and price catalogs.'
  },
  {
    id: 'q2-6',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'DFD Symbols',
    difficulty: 'easy',
    question: 'In a Data Flow Diagram (DFD), external objects at the system boundary (such as Customer or Supplier) must always be labeled as:',
    options: {
      A: 'Verbs',
      B: 'Nouns',
      C: 'Mathematical operators',
      D: 'Account balances'
    },
    correctAnswer: 'B',
    explanation: 'In DFDs, entities represent external sources or destinations of data and should always be labeled as nouns (e.g. Customer, Supplier).'
  },
  {
    id: 'q2-7',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'ERD Cardinality',
    difficulty: 'hard',
    question: 'If an organization maintains a strict policy where each salesperson is assigned exactly one company automobile, what is the cardinality between Salesperson and Automobile in an ER diagram?',
    options: {
      A: 'One-to-One (1:1)',
      B: 'One-to-Many (1:M)',
      C: 'Many-to-Many (M:M)',
      D: 'Zero-to-Many (0:M)'
    },
    correctAnswer: 'A',
    explanation: 'A 1:1 cardinality indicates that one record in the Salesperson entity is linked to at most one record in the Company Automobile entity.'
  },
  {
    id: 'q2-8',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Batch vs Real-Time',
    difficulty: 'medium',
    question: 'Which statement accurately describes a major characteristic difference between batch processing and real-time processing?',
    options: {
      A: 'Batch systems process records instantaneously with zero time lag',
      B: 'Batch systems assemble transactions into groups resulting in a time lag, but demand fewer resources than real-time systems',
      C: 'Real-time processing requires sequential magnetic tape storage',
      D: 'Real-time processing is always cheaper to develop and maintain than batch processing'
    },
    correctAnswer: 'B',
    explanation: 'Batch processing groups transactions together and experiences a time lag between occurrence and recording, but requires fewer computing and maintenance resources.'
  },
  {
    id: 'q2-9',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Master File Updates',
    difficulty: 'hard',
    question: 'During a sales order update procedure in a computer-based system, which key field in the sales order transaction record is used to retrieve the corresponding customer record in the Accounts Receivable master file?',
    options: {
      A: 'Sales Order Number (Primary Key)',
      B: 'Account Number (Secondary Key)',
      C: 'Inventory Number (Secondary Key)',
      D: 'Invoice Date'
    },
    correctAnswer: 'B',
    explanation: 'Account Number serves as the secondary key in the sales order record, matching the primary key of the AR master file to locate and update the customer balance.'
  },
  {
    id: 'q2-10',
    chapterNumber: 2,
    chapterId: 'ch2',
    topic: 'Documentation Flowcharts',
    difficulty: 'medium',
    question: 'Accountants frequently use program flowcharts for which of the following tasks?',
    options: {
      A: 'Calculating monthly employee withholding taxes',
      B: 'Conducting IT audits to compare program logic against actual programming code',
      C: 'Preparing marketing brochures for external customers',
      D: 'Filing paper vouchers in physical file cabinets'
    },
    correctAnswer: 'B',
    explanation: 'Program flowcharts describe the detailed step-by-step logic of programs, allowing IT auditors to verify program correctness and logic integrity.'
  },

  // CHAPTER 3 QUESTIONS
  {
    id: 'q3-1',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Business Ethics',
    difficulty: 'easy',
    question: 'Which of the following is classified under the ethical area of "Equity" in business ethics?',
    options: {
      A: 'Corporate Political Action Committees (PACs)',
      B: 'Executive Salaries and Product Pricing',
      C: 'Employee Privacy and Health Screening',
      D: 'Misleading Advertising'
    },
    correctAnswer: 'B',
    explanation: 'Equity issues in business include executive salaries, comparable worth, and product pricing.'
  },
  {
    id: 'q3-2',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Ethical Principles',
    difficulty: 'medium',
    question: 'The ethical principle stating that the benefits of a decision must outweigh the risks is known as:',
    options: {
      A: 'The Principle of Justice',
      B: 'The Principle of Proportionality',
      C: 'The Principle of Minimizing Risk',
      D: 'The Principle of Reasonable Assurance'
    },
    correctAnswer: 'B',
    explanation: 'Proportionality holds that the benefit resulting from a business decision must outweigh the attendant risks.'
  },
  {
    id: 'q3-3',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Common Law Fraud',
    difficulty: 'hard',
    question: 'Under common law, which of the following is NOT one of the five conditions required to legally establish fraud?',
    options: {
      A: 'False representation',
      B: 'Material fact',
      C: 'Written contract signed before a notary public',
      D: 'Justifiable reliance by the injured party'
    },
    correctAnswer: 'C',
    explanation: 'The five common law fraud conditions are: False representation, Material fact, Intent, Justifiable reliance, and Injury or loss. A notarized written contract is not a requirement.'
  },
  {
    id: 'q3-4',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Employee vs Management Fraud',
    difficulty: 'medium',
    question: 'Employee fraud typically involves which three sequential steps?',
    options: {
      A: 'Authorizing, recording, and reconciling',
      B: 'Stealing an asset, converting the asset to usable form (cash), and concealing the crime',
      C: 'Filing a tax return, auditing records, and claiming depreciation',
      D: 'Planning, programming, and testing'
    },
    correctAnswer: 'B',
    explanation: 'Employee fraud involves stealing the asset, converting it to cash or usable form, and concealing the crime to avoid detection.'
  },
  {
    id: 'q3-5',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Fraud Triangle',
    difficulty: 'easy',
    question: 'The three fraud-motivating forces that interact to produce fraudulent behavior (the Fraud Triangle) are:',
    options: {
      A: 'Situational pressures, opportunities, and personal characteristics (ethics)',
      B: 'Assets, liabilities, and owner equity',
      C: 'Relevance, timeliness, and accuracy',
      D: 'Hardware, software, and databases'
    },
    correctAnswer: 'A',
    explanation: 'Fraud results from the interplay of situational pressures, perceived opportunities, and personal ethics/characteristics.'
  },
  {
    id: 'q3-6',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Fraud Demographics',
    difficulty: 'medium',
    question: 'Studies on fraud perpetrator demographics show that regarding the number of fraud incidents vs. the dollar value of losses:',
    options: {
      A: 'Executives commit the most incidents and have the smallest losses',
      B: 'Non-managerial employees commit twice the incidents of managers, but dollar losses per incident are inversely related (executives cause far higher losses)',
      C: 'Gender and age have no correlation with fraud loss magnitude',
      D: 'Perpetrators with high school education steal more on average than those with advanced degrees'
    },
    correctAnswer: 'B',
    explanation: 'Employees commit five times as many incidents as executives, but the dollar amounts are inversely related: executive fraud involves drastically larger losses.'
  },
  {
    id: 'q3-7',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Lapping Scheme',
    difficulty: 'hard',
    question: 'The fraudulent scheme where an employee steals Customer A’s check and conceals the missing funds by applying Customer B’s subsequent check to Customer A’s account is called:',
    options: {
      A: 'Kiting',
      B: 'Lapping',
      C: 'Bribery',
      D: 'Economic extortion'
    },
    correctAnswer: 'B',
    explanation: 'Lapping involves using customer checks received in payment of their accounts to conceal cash previously stolen from an earlier customer account.'
  },
  {
    id: 'q3-8',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Corruption Schemes',
    difficulty: 'medium',
    question: 'What distinguishes an "illegal gratuity" from "bribery"?',
    options: {
      A: 'Bribery involves physical force, while illegal gratuity does not',
      B: 'Bribery occurs to influence an official before an act, while an illegal gratuity occurs after an official act has taken place',
      C: 'Illegal gratuities only occur in the public sector',
      D: 'Bribery is legal under certain commercial conditions'
    },
    correctAnswer: 'B',
    explanation: 'An illegal gratuity involves giving something of value because of an official act that has already been taken (after the fact), whereas bribery attempts to influence the decision beforehand.'
  },
  {
    id: 'q3-9',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Internal Control Objectives',
    difficulty: 'easy',
    question: 'Which of the following is NOT one of the four broad objectives of an internal control system?',
    options: {
      A: 'To safeguard assets of the firm',
      B: 'To ensure the accuracy and reliability of accounting records and information',
      C: 'To guarantee that the firm achieves a 25% annual return on investment',
      D: 'To promote efficiency in the firm’s operations'
    },
    correctAnswer: 'C',
    explanation: 'The four objectives are: safeguard assets, ensure accuracy/reliability of records, promote operational efficiency, and measure compliance with management policies.'
  },
  {
    id: 'q3-10',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'PDC Model',
    difficulty: 'medium',
    question: 'In the Preventive–Detective–Corrective (PDC) control model, a well-designed source document that prevents blank fields from being submitted is an example of a:',
    options: {
      A: 'Preventive control',
      B: 'Detective control',
      C: 'Corrective control',
      D: 'Compensating control'
    },
    correctAnswer: 'A',
    explanation: 'Preventive controls are passive techniques that reduce the frequency of undesirable occurrences by screening them out at inception.'
  },
  {
    id: 'q3-11',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'Physical Controls: Segregation',
    difficulty: 'hard',
    question: 'In small business organizations that lack sufficient personnel to achieve complete segregation of duties, management must compensate for this control weakness with:',
    options: {
      A: 'Independent external auditing on a daily basis',
      B: 'Close supervision (acting as a compensating control)',
      C: 'Eliminating all computer technology and returning to manual paper journals',
      D: 'Permitting employees to share passwords and user IDs'
    },
    correctAnswer: 'B',
    explanation: 'In small firms lacking personnel for segregation, management compensates with close supervision, which is termed a compensating control.'
  },
  {
    id: 'q3-12',
    chapterNumber: 3,
    chapterId: 'ch3',
    topic: 'SAS 78 Framework',
    difficulty: 'hard',
    question: 'According to Statement on Auditing Standards (SAS) No. 78, what serves as the foundational component for the other four internal control components?',
    options: {
      A: 'Monitoring',
      B: 'Control Activities',
      C: 'The Control Environment',
      D: 'Information and Communication'
    },
    correctAnswer: 'C',
    explanation: 'The control environment sets the tone of the organization, reflecting ethical values and management philosophy, and is the foundation for all other internal control components.'
  },

  // CHAPTER 4 QUESTIONS
  {
    id: 'q4-1',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Revenue Cycle Phases',
    difficulty: 'easy',
    question: 'Every revenue cycle transaction is split into which two distinct phases?',
    options: {
      A: 'The physical phase (transfer of goods/services) and the financial phase (receipt of cash)',
      B: 'The planning phase and the budgeting phase',
      C: 'The production phase and the inspection phase',
      D: 'The advertising phase and the contracting phase'
    },
    correctAnswer: 'A',
    explanation: 'Revenue cycle transactions consist of a physical phase (transfer of goods/services to customer) and a financial phase (cash collection).'
  },
  {
    id: 'q4-2',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Sales Returns',
    difficulty: 'medium',
    question: 'Upon receiving returned defective merchandise from a customer, which accounting document is formally prepared and approved to authorize a credit to the customer’s Accounts Receivable balance?',
    options: {
      A: 'Bill of Lading',
      B: 'Purchase Requisition',
      C: 'Credit Memo',
      D: 'Stock Release'
    },
    correctAnswer: 'C',
    explanation: 'A Credit Memo is prepared to authorize a credit adjustment to the customer’s account receivable and record a contra sales entry.'
  },
  {
    id: 'q4-3',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Revenue Cycle Controls: Cash Receipts',
    difficulty: 'hard',
    question: 'Why is close supervision critically required in the mail room when processing cash receipts?',
    options: {
      A: 'Because the mailroom clerk prepares the general ledger journal vouchers',
      B: 'Because the individual opening the mail has physical access both to cash (the asset) and to the remittance advice (the accounting record)',
      C: 'Because mailroom workers are legally responsible for customer credit approval',
      D: 'Because the bank will not accept cash deposits without a mailroom supervisor signature'
    },
    correctAnswer: 'B',
    explanation: 'In the mail room, the employee has access to both the asset (cash/checks) and the source record (remittance advice), creating an incompatible function requiring supervision.'
  },
  {
    id: 'q4-4',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Purchases Processing',
    difficulty: 'medium',
    question: 'Why does the purchasing department send a "blind copy" of the purchase order to the receiving department?',
    options: {
      A: 'To conceal supplier pricing information from the public',
      B: 'To force receiving personnel to physically inspect and count all incoming goods rather than relying on quantities stated on the PO',
      C: 'To prevent delivery truck drivers from knowing what goods are on board',
      D: 'To reduce paper printing costs'
    },
    correctAnswer: 'B',
    explanation: 'The blind copy omits quantities and prices, forcing receiving workers to physically count and inspect incoming merchandise before preparing the receiving report.'
  },
  {
    id: 'q4-5',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Accounts Payable Voucher Packet',
    difficulty: 'hard',
    question: 'Before approving an invoice for payment, Accounts Payable conducts a "three-way match" comparing which three documents?',
    options: {
      A: 'Sales order, picking slip, and deposit slip',
      B: 'Purchase requisition, general journal, and bank statement',
      C: 'Purchase order, receiving report, and vendor\'s invoice',
      D: 'Time card, job ticket, and payroll register'
    },
    correctAnswer: 'C',
    explanation: 'The AP voucher packet requires matching the Purchase Order (authorizing the purchase), Receiving Report (verifying physical receipt), and Vendor Invoice (billing details).'
  },
  {
    id: 'q4-6',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Cash Disbursements Timing',
    difficulty: 'medium',
    question: 'In cash disbursements management, making vendor payments too early causes the firm to:',
    options: {
      A: 'Lose cash purchase discounts',
      B: 'Damage its credit standing with suppliers',
      C: 'Forgo interest income that could have been earned on those funds',
      D: 'Violate tax authority statutes'
    },
    correctAnswer: 'C',
    explanation: 'Paying obligations prematurely forfeits interest that could have been earned; paying late forfeits discounts and impairs credit standing.'
  },
  {
    id: 'q4-7',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Payroll Processing',
    difficulty: 'medium',
    question: 'Payroll processing is considered a special-case purchases system because:',
    options: {
      A: 'It involves purchasing labor rather than raw materials or physical inventory',
      B: 'It does not involve any cash disbursements',
      C: 'Payroll transactions are continuous rather than periodic batches',
      D: 'Employees are external vendors governed by commercial sales treaties'
    },
    correctAnswer: 'A',
    explanation: 'Payroll is a special purchase of human labor with distinct procedures for employee classes, withholdings, and periodic disbursements.'
  },
  {
    id: 'q4-8',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Fixed Asset System',
    difficulty: 'medium',
    question: 'Which of the following is NOT one of the three primary task categories of a fixed asset system?',
    options: {
      A: 'Asset acquisition',
      B: 'Asset maintenance (depreciation)',
      C: 'Asset disposal',
      D: 'Daily retail shelf restocking'
    },
    correctAnswer: 'D',
    explanation: 'Fixed assets involve non-routine transactions grouped into: asset acquisition, asset maintenance, and asset disposal.'
  },
  {
    id: 'q4-9',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Conversion Cycle Methods',
    difficulty: 'easy',
    question: 'Which manufacturing method is characterized by producing discrete groups of identical products requiring the same raw materials and operations (e.g. automobiles, appliances, textbooks)?',
    options: {
      A: 'Continuous processing',
      B: 'Make-to-order processing',
      C: 'Batch processing',
      D: 'Ad hoc processing'
    },
    correctAnswer: 'C',
    explanation: 'Batch processing manufactures discrete batches of identical products, representing the primary manufacturing model studied in AIS.'
  },
  {
    id: 'q4-10',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Batch Production Documents',
    difficulty: 'hard',
    question: 'In batch manufacturing, what document specifies the exact sequence of manufacturing operations and the standard machine/labor time for each work center?',
    options: {
      A: 'Bill of Materials (BOM)',
      B: 'Route Sheet',
      C: 'Materials Requisition',
      D: 'Packing Slip'
    },
    correctAnswer: 'B',
    explanation: 'The Route Sheet specifies the sequence of manufacturing operations, work centers, and standard setup/labor times.'
  },
  {
    id: 'q4-11',
    chapterNumber: 4,
    chapterId: 'ch4',
    topic: 'Conversion Controls',
    difficulty: 'medium',
    question: 'Which of the following represents an essential segregation of duties control in the conversion cycle?',
    options: {
      A: 'Combining warehouse inventory custody with inventory record-keeping',
      B: 'Separating inventory control (record keeping) from raw materials and finished goods inventory physical custody',
      C: 'Allowing production line workers to approve work orders',
      D: 'Permitting machine operators to maintain cost accounting ledgers'
    },
    correctAnswer: 'B',
    explanation: 'Segregation of duties requires inventory control (records) to be separate from the physical custody of raw materials and finished goods.'
  },

  // CHAPTER 5 QUESTIONS
  {
    id: 'q5-1',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Data Coding Schemes',
    difficulty: 'easy',
    question: 'Which data coding scheme is most commonly used in accounting to construct a standard Chart of Accounts?',
    options: {
      A: 'Sequential coding',
      B: 'Block coding',
      C: 'Random coding',
      D: 'Mnemonic coding'
    },
    correctAnswer: 'B',
    explanation: 'Numeric block coding restricts specific ranges to account classes (e.g., 100 Current Assets, 200 Fixed Assets) and is the basis of Charts of Accounts.'
  },
  {
    id: 'q5-2',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Block Codes Advantage',
    difficulty: 'medium',
    question: 'What is a major operational advantage of block coding in a Chart of Accounts?',
    options: {
      A: 'The meaning of each code number is universally understood without reference to any chart',
      B: 'New account codes can be inserted within a block classification without reorganizing the entire coding structure',
      C: 'It eliminates the need for general ledger master files',
      D: 'It requires zero digital storage space'
    },
    correctAnswer: 'B',
    explanation: 'Block coding allows inserting new accounts (e.g., advertising expense 626 into the 600 Operating Expense range) without renumbering other accounts.'
  },
  {
    id: 'q5-3',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Journal Voucher',
    difficulty: 'easy',
    question: 'In the General Ledger System (GLS), what document serves as the formal source of input that authorizes entries to GL accounts?',
    options: {
      A: 'Bill of Lading',
      B: 'Journal Voucher',
      C: 'Purchase Requisition',
      D: 'Employee Job Ticket'
    },
    correctAnswer: 'B',
    explanation: 'The journal voucher is the formal document authorizing entries to the general ledger, summarizing routine transactions, adjustments, and closing entries.'
  },
  {
    id: 'q5-4',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'GLS Database Files',
    difficulty: 'medium',
    question: 'Which file in the GLS database contains budgeted amounts for revenues, expenditures, and other resources across responsibility centers?',
    options: {
      A: 'General ledger history file',
      B: 'Budget master file',
      C: 'Journal voucher file',
      D: 'Transaction log file'
    },
    correctAnswer: 'B',
    explanation: 'The budget master file contains budgeted figures for responsibility centers, used in responsibility accounting and variance analyses.'
  },
  {
    id: 'q5-5',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Financial Reporting Steps',
    difficulty: 'hard',
    question: 'In the 11 sequential steps of the financial reporting system, which step immediately follows the preparation of the unadjusted trial balance?',
    options: {
      A: 'Prepare financial statements',
      B: 'Make adjusting entries on the worksheet',
      C: 'Post closing entries to the general ledger',
      D: 'Prepare post-closing trial balance'
    },
    correctAnswer: 'B',
    explanation: 'Step 5 is preparing the unadjusted trial balance; Step 6 is making adjusting entries on the worksheet for unrecorded events like depreciation.'
  },
  {
    id: 'q5-6',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'FRS Closing Entries',
    difficulty: 'medium',
    question: 'What is the purpose of step 10 in the FRS process (journalizing and posting closing entries)?',
    options: {
      A: 'To close permanent balance sheet accounts to zero',
      B: 'To close out temporary income statement accounts (revenues and expenses) and transfer net income or loss to retained earnings',
      C: 'To delete all customer transaction records from the database',
      D: 'To calculate daily petty cash balances'
    },
    correctAnswer: 'B',
    explanation: 'Closing entries close temporary revenue and expense accounts and transfer net income/loss to retained earnings.'
  },
  {
    id: 'q5-7',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Segregation in FRS',
    difficulty: 'hard',
    question: 'To maintain proper segregation of duties over the general ledger, an individual with access authority to update GL accounts must NOT:',
    options: {
      A: 'Review accounting textbooks',
      B: 'Have record-keeping responsibility for special journals/subsidiary ledgers, prepare journal vouchers, or have custody of physical assets',
      C: 'Attend corporate staff meetings',
      D: 'Communicate with external auditors'
    },
    correctAnswer: 'B',
    explanation: 'GL clerks must be separate from subsidiary ledgers/special journals, journal voucher preparation, and asset custody.'
  },
  {
    id: 'q5-8',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'FRS Verification Reports',
    difficulty: 'medium',
    question: 'Which operational report produced by the FRS provides relevant details about each journal voucher posted to verify the accuracy of the posting process?',
    options: {
      A: 'Journal voucher listing',
      B: 'Move ticket register',
      C: 'Receiving report log',
      D: 'Stock release memo'
    },
    correctAnswer: 'A',
    explanation: 'The journal voucher listing provides relevant details about each JV posted to the general ledger as an independent verification control.'
  },
  {
    id: 'q5-9',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Management Principles in MRS',
    difficulty: 'medium',
    question: 'The management principle of "formalization of tasks" dictates that:',
    options: {
      A: 'All employees must wear formal business attire',
      B: 'Management should structure the firm around the tasks it performs rather than around individuals with unique skills',
      C: 'Reports must be printed on official letterhead',
      D: 'Only senior executives are permitted to make decisions'
    },
    correctAnswer: 'B',
    explanation: 'Formalization of tasks structures the firm around tasks so operational performance and stability do not depend on specific individuals.'
  },
  {
    id: 'q5-10',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Span of Control',
    difficulty: 'hard',
    question: 'How does a manager’s span of control impact the reporting structure of an organization?',
    options: {
      A: 'Managers with narrow spans require summarized reports, while managers with broad spans require highly detailed reports',
      B: 'Managers with narrow spans of control require detailed reports, whereas managers with broad spans operate most effectively with summarized information',
      C: 'Span of control has no relationship with report summarization',
      D: 'Broad spans of control eliminate the need for general ledgers'
    },
    correctAnswer: 'B',
    explanation: 'Narrow spans (few subordinates) allow close involvement and detailed reports; broad spans (many subordinates) require summarized exception reports.'
  },
  {
    id: 'q5-11',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Responsibility Centers',
    difficulty: 'medium',
    question: 'A retail branch manager (such as the branch manager of Ambessa Shoe Company) who is evaluated on both cost control and store sales revenue operates a(n):',
    options: {
      A: 'Cost Center',
      B: 'Profit Center',
      C: 'Investment Center',
      D: 'Expense Sunk Center'
    },
    correctAnswer: 'B',
    explanation: 'A profit center manager has responsibility for both cost control and revenue generation.'
  },
  {
    id: 'q5-12',
    chapterNumber: 5,
    chapterId: 'ch5',
    topic: 'Behavioral Considerations',
    difficulty: 'hard',
    question: 'When corporate management evaluates division performance solely on the single criterion of Return on Investment (ROI), what dysfunctional behavior often occurs?',
    options: {
      A: 'Immediate bankruptcy of the entire enterprise',
      B: 'The ROI criterion becomes the object of manipulation (e.g., cutting essential maintenance or rejecting profitable investments above cost of capital)',
      C: 'Excessive reporting of unadjusted trial balances',
      D: 'Automated conversion to real-time batch processing'
    },
    correctAnswer: 'B',
    explanation: 'Using ROI as the sole performance metric causes managers to manipulate numbers, avoid necessary capital investments, or sacrifice long-term health for short-term ratios.'
  },

  // CHAPTER 6 QUESTIONS
  {
    id: 'q6-1',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Flat-File Weaknesses',
    difficulty: 'easy',
    question: 'In a flat-file environment, what is the term for the condition where a user cannot obtain new information because they are limited to the data files they personally own and control?',
    options: {
      A: 'Single update constraint',
      B: 'Task-data dependency',
      C: 'Data redundancy',
      D: 'Relational algebra project'
    },
    correctAnswer: 'B',
    explanation: 'Task-data dependency occurs when users are unable to obtain needed information because their access is constrained by private file ownership.'
  },
  {
    id: 'q6-2',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Database Characteristics',
    difficulty: 'medium',
    question: 'Which of the following is a key advantage of the database approach over flat files?',
    options: {
      A: 'Each department keeps private duplicate copies of all files',
      B: 'Single update: data elements exist in only one place, requiring a single update procedure',
      C: 'Elimination of computer hardware',
      D: 'Data is organized strictly as hierarchical trees without keys'
    },
    correctAnswer: 'B',
    explanation: 'In the database approach, data redundancy is eliminated, so each data element exists once and requires only a single update procedure.'
  },
  {
    id: 'q6-3',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'DBMS Role',
    difficulty: 'easy',
    question: 'What is the primary purpose of the Database Management System (DBMS)?',
    options: {
      A: 'To physically manufacture computer storage disks',
      B: 'To provide controlled access to the database by validating and authorizing user data requests',
      C: 'To perform year-end external financial statement audits',
      D: 'To replace human managers in setting corporate strategies'
    },
    correctAnswer: 'B',
    explanation: 'The DBMS stands between user applications and the physical database to enforce access rules, validate permissions, and execute data operations.'
  },
  {
    id: 'q6-4',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Database Models',
    difficulty: 'medium',
    question: 'Why are early hierarchical and network databases described as "navigational" or "structured" models?',
    options: {
      A: 'Because they were originally invented for marine navigation',
      B: 'Because users are forced to navigate between data elements using predefined, inflexible structured paths',
      C: 'Because they allow ad hoc query paths at any time without database administration',
      D: 'Because they do not require magnetic disk storage'
    },
    correctAnswer: 'B',
    explanation: 'Early models are navigational because data relationships rely on predefined pointers forcing users to navigate along fixed paths.'
  },
  {
    id: 'q6-5',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Database Administrator (DBA)',
    difficulty: 'medium',
    question: 'Which of the following is a function performed by the Database Administrator (DBA) in the "Design" phase?',
    options: {
      A: 'Writing company promotional advertisements',
      B: 'Designing the logical schema, external subschemas, and internal view of the database',
      C: 'Auditing executive expense reimbursements',
      D: 'Selling software to external competitors'
    },
    correctAnswer: 'B',
    explanation: 'The DBA is responsible for designing the logical schema, external user views (subschemas), internal views, and security controls.'
  },
  {
    id: 'q6-6',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Relational Model: Restrict',
    difficulty: 'hard',
    question: 'In relational algebra, which operation extracts specified ROWS (tuples) from a table based on a given condition?',
    options: {
      A: 'Project',
      B: 'Restrict',
      C: 'Join',
      D: 'Normalize'
    },
    correctAnswer: 'B',
    explanation: 'Restrict extracts specified rows (horizontal subset) from a table based on filtering criteria.'
  },
  {
    id: 'q6-7',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Relational Model: Project',
    difficulty: 'hard',
    question: 'In relational algebra, which operation extracts specified COLUMNS (attributes) from a table to create a virtual table view?',
    options: {
      A: 'Project',
      B: 'Restrict',
      C: 'Join',
      D: 'Decompose'
    },
    correctAnswer: 'A',
    explanation: 'Project extracts specified columns (vertical subset) from a table.'
  },
  {
    id: 'q6-8',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Relational Model: Join',
    difficulty: 'medium',
    question: 'The relational algebra operation that builds a new physical table by combining matching rows from two tables sharing a common key attribute is called a:',
    options: {
      A: 'Restrict',
      B: 'Project',
      C: 'Join',
      D: 'Sort'
    },
    correctAnswer: 'C',
    explanation: 'Join combines two tables into a unified table by matching records that share common key attributes.'
  },
  {
    id: 'q6-9',
    chapterNumber: 6,
    chapterId: 'ch6',
    topic: 'Relational Concepts: Occurrence',
    difficulty: 'medium',
    question: 'If an organization currently employs 100 individuals, in relational database terminology the Employee entity consists of 100:',
    options: {
      A: 'Attributes',
      B: 'Occurrences (records)',
      C: 'Schemas',
      D: 'Data Dictionaries'
    },
    correctAnswer: 'B',
    explanation: 'The term occurrence describes the number of individual instances or records pertaining to an entity (100 employees = 100 occurrences).'
  },

  // CHAPTER 7 QUESTIONS
  {
    id: 'q7-1',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'SDLC Definition',
    difficulty: 'easy',
    question: 'What is the Systems Development Life Cycle (SDLC)?',
    options: {
      A: 'A computer hardware warranty provided by computer vendors',
      B: 'A logical sequence of activities used to identify new systems needs and develop systems to support those needs',
      C: 'The annual financial statement audit period',
      D: 'The depreciation schedule for computer peripherals'
    },
    correctAnswer: 'B',
    explanation: 'The SDLC is a structured model of activities for identifying system needs, designing solutions, implementing systems, and maintaining them.'
  },
  {
    id: 'q7-2',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'SDLC Phases',
    difficulty: 'medium',
    question: 'Which of the following correctly lists the five phases of the SDLC?',
    options: {
      A: 'Strategy, Initiation, In-House/Commercial Construct, Maintenance & Support',
      B: 'Journalizing, Posting, Trial Balance, Adjusting, Closing',
      C: 'Marketing, Production, Billing, Collecting, Auditing',
      D: 'Planning, Designing, Manufacturing, Delivering, Destroying'
    },
    correctAnswer: 'A',
    explanation: 'The five phases are Phase 1: Systems Strategy, Phase 2: Project Initiation, Phase 3: In-House Development, Phase 4: Commercial Packages, and Phase 5: Maintenance & Support.'
  },
  {
    id: 'q7-3',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Systems Steering Committee',
    difficulty: 'medium',
    question: 'The internal steering committee that provides guidance and oversight for systems projects typically includes:',
    options: {
      A: 'Only external third-party software programmers',
      B: 'CEO, CFO, CIO, senior management from user areas, and the internal auditor',
      C: 'Only factory assembly workers',
      D: 'Only junior data entry clerks'
    },
    correctAnswer: 'B',
    explanation: 'The steering committee comprises executive leadership (CEO, CFO, CIO), user area heads, and internal audit to align systems with business strategy.'
  },
  {
    id: 'q7-4',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Management Philosophy',
    difficulty: 'medium',
    question: 'Regarding problem recognition in systems planning, what is the key drawback of "reactive management"?',
    options: {
      A: 'It spends too much time doing long-range planning',
      B: 'It responds to problems only when they reach a crisis state, resulting in hurried analysis, shortcuts in design, and suboptimal solutions',
      C: 'It replaces computer systems too early before problems emerge',
      D: 'It refuses to purchase commercial software'
    },
    correctAnswer: 'B',
    explanation: 'Reactive management waits for crisis before acting, creating intense pressure that causes hurried analysis, poor user involvement, and suboptimal designs.'
  },
  {
    id: 'q7-5',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'TELOS Feasibility',
    difficulty: 'easy',
    question: 'In the TELOS feasibility evaluation framework, what does the letter "E" represent?',
    options: {
      A: 'Environmental feasibility',
      B: 'Economic feasibility (availability of funds in view of competing capital projects)',
      C: 'Engineering feasibility',
      D: 'Educational feasibility'
    },
    correctAnswer: 'B',
    explanation: 'TELOS stands for Technical, Economic, Legal, Operational, and Schedule feasibility.'
  },
  {
    id: 'q7-6',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'TELOS: Operational',
    difficulty: 'medium',
    question: 'Assessing whether a firm\'s existing operating procedures and personnel skills are compatible with a new system, or whether staff can be retrained, evaluates:',
    options: {
      A: 'Technical feasibility',
      B: 'Legal feasibility',
      C: 'Operational feasibility',
      D: 'Schedule feasibility'
    },
    correctAnswer: 'C',
    explanation: 'Operational feasibility examines the compatibility between current human skills/procedures and the operational requirements of the proposed system.'
  },
  {
    id: 'q7-7',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Systems Analysis: Survey Step',
    difficulty: 'hard',
    question: 'During the survey step of systems analysis, what is meant by the "physical tar pit" disadvantage?',
    options: {
      A: 'Physical computer hard drives overheating from excessive processing',
      B: 'The tendency of the analyst to get bogged down in the physical details of the current system, which stifles new and innovative design ideas',
      C: 'The accumulation of unrecyclable computer paper in office basements',
      D: 'Excessive hardware maintenance fees'
    },
    correctAnswer: 'B',
    explanation: 'The physical tar pit refers to becoming overly absorbed in the mechanics of the old system, which impairs fresh thinking and innovation for the new system.'
  },
  {
    id: 'q7-8',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Cost-Benefit: Cost Types',
    difficulty: 'medium',
    question: 'In cost-benefit analysis for a new AIS, which of the following is classified as a RECURRING cost?',
    options: {
      A: 'Initial hardware acquisition',
      B: 'Site preparation and remodeling',
      C: 'Software maintenance contracts and operating personnel salaries',
      D: 'Initial programming and system design'
    },
    correctAnswer: 'C',
    explanation: 'Recurring costs include continuous operating and maintenance expenses over the life of the system (maintenance contracts, insurance, supplies, personnel).'
  },
  {
    id: 'q7-9',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Escapable Costs',
    difficulty: 'hard',
    question: 'In evaluating cost savings from an existing system to a new system, what is the crucial rule regarding "escapable costs"?',
    options: {
      A: 'All historic sunk costs must be capitalized into the new system balance sheet',
      B: 'Only costs that are directly related to the old system and will truly cease to exist when it is replaced should be counted as cost savings',
      C: 'Escapable costs should be ignored because they cannot be measured in cash',
      D: 'Any overhead expense allocated by corporate headquarters is automatically escapable'
    },
    correctAnswer: 'B',
    explanation: 'Escapable costs are directly tied to the old system and vanish when it is retired. Non-escapable costs continue and must not be counted as savings.'
  },
  {
    id: 'q7-10',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Financial Evaluation Methods',
    difficulty: 'medium',
    question: 'Under the Net Present Value (NPV) method of evaluating competing information systems:',
    options: {
      A: 'Projects with negative net present values are preferred',
      B: 'The present value of costs is deducted from the present value of benefits over the system\'s life, and the project with the greatest positive NPV is optimal',
      C: 'Time value of money is completely ignored',
      D: 'Only intangible benefits are calculated'
    },
    correctAnswer: 'B',
    explanation: 'NPV discounts future net cash flows back to present value using the firm\'s cost of capital. Positive NPV projects are feasible, and highest NPV is optimal.'
  },
  {
    id: 'q7-11',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Accountant Role in SDLC',
    difficulty: 'hard',
    question: 'How are accountants involved in the Systems Development Life Cycle (SDLC)?',
    options: {
      A: 'Solely by calculating tax deductions five years after installation',
      B: 'In three primary ways: as Users (specifying rules and controls), as Development Team Members (advising on risks), and as Auditors (verifying auditability)',
      C: 'Exclusively as computer hardware technicians assembling server racks',
      D: 'Accountants are prohibited from participating in systems development'
    },
    correctAnswer: 'B',
    explanation: 'Accountants contribute to SDLC as users (specifying needs/controls), as team members (evaluating control implications), and as auditors (ensuring system auditability).'
  },
  {
    id: 'q7-12',
    chapterNumber: 7,
    chapterId: 'ch7',
    topic: 'Accountant in Systems Selection',
    difficulty: 'hard',
    question: 'During the Systems Selection phase, what is an essential responsibility of the accountant regarding economic feasibility?',
    options: {
      A: 'Ensure that only escapable costs are used in calculating savings, realistic interest rates discount cash flows, and realistic useful lives are applied',
      B: 'Ensure that all prewritten software is rejected in favor of building in-house',
      C: 'Guarantee that the project is completed in under two weeks',
      D: 'Authorize all vendor advertising campaigns'
    },
    correctAnswer: 'A',
    explanation: 'Accountants must ensure economic analyses are sound: only genuine escapable costs are claimed, discount rates are realistic, and useful life estimates are valid.'
  }
];
