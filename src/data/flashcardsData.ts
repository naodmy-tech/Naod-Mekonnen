import { Flashcard } from '../types';

export const comprehensiveFlashcards: Flashcard[] = [
  // Chapter 1 Flashcards
  {
    id: 'fc-1-1',
    chapterNumber: 1,
    topic: 'AIS Definition',
    front: 'What is an Accounting Information System (AIS)?',
    back: 'A formal system that processes financial transactions and nonfinancial transactions that directly affect financial transaction processing.'
  },
  {
    id: 'fc-1-2',
    chapterNumber: 1,
    topic: 'Financial Transaction',
    front: 'What constitutes a financial transaction?',
    back: 'An economic event that affects the assets and equities of the organization, is reflected in its accounts, and is measured in monetary terms.'
  },
  {
    id: 'fc-1-3',
    chapterNumber: 1,
    topic: 'AIS Subsystems',
    front: 'What are the three major subsystems of an AIS?',
    back: '1. Transaction Processing System (TPS)\n2. General Ledger / Financial Reporting System (GL/FRS)\n3. Management Reporting System (MRS)'
  },
  {
    id: 'fc-1-4',
    chapterNumber: 1,
    topic: 'Data vs Information',
    front: 'What is the operational distinction between data and information?',
    back: 'Data are raw unprocessed facts. Information causes the user to take an action that he or she otherwise would not have taken, resolving conflict and reducing uncertainty.'
  },
  {
    id: 'fc-1-5',
    chapterNumber: 1,
    topic: 'Commercial Software',
    front: 'What are the three basic types of commercial accounting software?',
    back: '1. Turnkey systems (completely finished, off-the-shelf)\n2. Backbone systems (basic processing logic with customizable interfaces)\n3. Vendor-supported systems (custom systems designed and maintained commercially by vendors)'
  },
  {
    id: 'fc-1-6',
    chapterNumber: 1,
    topic: 'REA Model',
    front: 'Why does the REA model omit Accounts Receivable (AR) from its database?',
    back: 'Under REA, AR is an accounting artifact record, not an economic resource. AR balances are derived directly from the difference between sales events and cash receipt events.'
  },

  // Chapter 2 Flashcards
  {
    id: 'fc-2-1',
    chapterNumber: 2,
    topic: 'Transaction Cycles',
    front: 'What are the three primary transaction cycles in TPS?',
    back: '1. Expenditure Cycle\n2. Conversion Cycle\n3. Revenue Cycle'
  },
  {
    id: 'fc-2-2',
    chapterNumber: 2,
    topic: 'Turnaround Document',
    front: 'What is a turnaround document?',
    back: 'A product document produced by one computer system that is sent to a third party (e.g., customer) and returned to become a source document for another system (e.g., remittance advice).'
  },
  {
    id: 'fc-2-3',
    chapterNumber: 2,
    topic: 'Computer File Types',
    front: 'What are the four types of magnetic files in computer-based accounting?',
    back: '1. Master Files (account data)\n2. Transaction Files (temporary update records)\n3. Reference Files (standards/tax tables/price lists)\n4. Archive Files (historical audit trail records)'
  },
  {
    id: 'fc-2-4',
    chapterNumber: 2,
    topic: 'DFD vs ERD',
    front: 'How do DFDs and ERDs differ in documenting an AIS?',
    back: 'DFDs model system processes and data flows, while ERDs model data entities and their relationship cardinalities. Every data store in a DFD maps to an ERD entity.'
  },
  {
    id: 'fc-2-5',
    chapterNumber: 2,
    topic: 'Batch vs Real-Time',
    front: 'What is the primary operational trade-off between batch and real-time processing?',
    back: 'Batch processing groups transactions creating a time lag but consumes fewer resources. Real-time processing has zero time lag and immediate visibility but requires direct access disks and higher resources.'
  },

  // Chapter 3 Flashcards
  {
    id: 'fc-3-1',
    chapterNumber: 3,
    topic: 'Common Law Fraud',
    front: 'What five conditions are required to establish common law fraud?',
    back: '1. False representation\n2. Material fact\n3. Intent to deceive\n4. Justifiable reliance\n5. Quantifiable injury or loss'
  },
  {
    id: 'fc-3-2',
    chapterNumber: 3,
    topic: 'Fraud Triangle',
    front: 'What are the three motivating forces of the Fraud Triangle?',
    back: '1. Situational Pressures (debt, targets)\n2. Perceived Opportunities (weak internal controls)\n3. Personal Characteristics / Ethics (rationalization)'
  },
  {
    id: 'fc-3-3',
    chapterNumber: 3,
    topic: 'Lapping',
    front: 'How does a lapping fraud scheme work?',
    back: 'An employee steals a check received from Customer A, and subsequently covers Customer A\'s balance using a check received from Customer B, rolling payments forward continuously.'
  },
  {
    id: 'fc-3-4',
    chapterNumber: 3,
    topic: 'Internal Control Objectives',
    front: 'What are the four broad objectives of internal control?',
    back: '1. Safeguard assets of the firm\n2. Ensure accuracy and reliability of accounting records\n3. Promote operational efficiency\n4. Measure compliance with management policies'
  },
  {
    id: 'fc-3-5',
    chapterNumber: 3,
    topic: 'PDC Model',
    front: 'What are the three levels of control in the PDC model?',
    back: '1. Preventive Controls (screen errors at entry)\n2. Detective Controls (sound alarms when standards are breached)\n3. Corrective Controls (reverse errors and fix underlying issues)'
  },
  {
    id: 'fc-3-6',
    chapterNumber: 3,
    topic: 'Compensating Control',
    front: 'What is a compensating control for the lack of segregation of duties in small businesses?',
    back: 'Close managerial supervision, which compensates for the lack of distinct personnel performing authorization, custody, and record keeping.'
  },

  // Chapter 4 Flashcards
  {
    id: 'fc-4-1',
    chapterNumber: 4,
    topic: 'Sales Returns',
    front: 'What document authorizes customer credit for returned merchandise?',
    back: 'The Credit Memo, approved after receiving the returned goods with a return slip, triggering restocking and a sales contra entry.'
  },
  {
    id: 'fc-4-2',
    chapterNumber: 4,
    topic: 'Mail Room Control',
    front: 'Why does the mail room require tight control in cash receipts?',
    back: 'Because the mail clerk handles both the physical cash/checks (asset) and the remittance advice (accounting record) simultaneously.'
  },
  {
    id: 'fc-4-3',
    chapterNumber: 4,
    topic: 'Blind Copy PO',
    front: 'Why does the receiving department receive a "blind copy" of the purchase order?',
    back: 'It omits quantities and prices to compel receiving clerks to physically inspect and count all arriving goods.'
  },
  {
    id: 'fc-4-4',
    chapterNumber: 4,
    topic: 'Three-Way Match',
    front: 'What three documents form the AP voucher packet?',
    back: '1. Purchase Order\n2. Receiving Report\n3. Vendor Invoice'
  },
  {
    id: 'fc-4-5',
    chapterNumber: 4,
    topic: 'Batch Production Documents',
    front: 'What is the role of the Bill of Materials (BOM) and Route Sheet?',
    back: 'BOM specifies raw material parts and quantities needed for a batch. Route Sheet specifies the sequence of operations, work centers, and standard machine/labor times.'
  },

  // Chapter 5 Flashcards
  {
    id: 'fc-5-1',
    chapterNumber: 5,
    topic: 'Block Coding',
    front: 'How does block coding structure a Chart of Accounts?',
    back: 'It reserves numeric ranges for account classifications (e.g. 100 Current Assets, 200 Fixed Assets, 300 Liabilities), allowing new accounts to be inserted without reorganizing the chart.'
  },
  {
    id: 'fc-5-2',
    chapterNumber: 5,
    topic: 'Journal Voucher',
    front: 'What is the function of a Journal Voucher in the GLS?',
    back: 'It is the formal document that summarizes routine transactions, adjusting entries, and closing entries, serving as the sole input to update the general ledger.'
  },
  {
    id: 'fc-5-3',
    chapterNumber: 5,
    topic: 'Management by Exception',
    front: 'What is the principle of Management by Exception?',
    back: 'Managers focus attention exclusively on operations or resources with significant variances or risks of going out of control, avoiding informational micromanagement.'
  },
  {
    id: 'fc-5-4',
    chapterNumber: 5,
    topic: 'Responsibility Centers',
    front: 'What are the three primary types of responsibility centers?',
    back: '1. Cost Centers (controllable costs)\n2. Profit Centers (controllable costs & revenues, e.g. Ambessa Shoe store)\n3. Investment Centers (costs, revenues, & return on capital assets)'
  },
  {
    id: 'fc-5-5',
    chapterNumber: 5,
    topic: 'Goal Congruence',
    front: 'What is Goal Congruence in AIS?',
    back: 'When internal reporting structures encourage lower-level managers pursuing their own objectives to simultaneously act in the best interests of the entire organization.'
  },

  // Chapter 6 Flashcards
  {
    id: 'fc-6-1',
    chapterNumber: 6,
    topic: 'Flat-File Problems',
    front: 'What are the four main problems of legacy flat-file systems?',
    back: '1. Data Storage redundancy\n2. Data Updating expenses\n3. Currency of Information delays\n4. Task-Data Dependency'
  },
  {
    id: 'fc-6-2',
    chapterNumber: 6,
    topic: 'Relational Restrict & Project',
    front: 'How do Restrict and Project operations differ in relational algebra?',
    back: 'Restrict extracts specified ROWS (filtering records based on conditions). Project extracts specified COLUMNS (filtering attributes to produce a virtual table).'
  },
  {
    id: 'fc-6-3',
    chapterNumber: 6,
    topic: 'Relational Join',
    front: 'What does a relational Join operation accomplish?',
    back: 'It combines two separate tables into a new physical table by concatenating matching rows that share a common key attribute.'
  },
  {
    id: 'fc-6-4',
    chapterNumber: 6,
    topic: 'DBA Responsibilities',
    front: 'What are the five core responsibility areas of the Database Administrator (DBA)?',
    back: '1. Database Planning\n2. Database Design (schema/subschemas)\n3. Implementation (security/access policies)\n4. Operation & Maintenance\n5. Change & Growth'
  },

  // Chapter 7 Flashcards
  {
    id: 'fc-7-1',
    chapterNumber: 7,
    topic: 'TELOS Framework',
    front: 'What does the acronym TELOS stand for in systems feasibility?',
    back: 'Technical, Economic, Legal, Operational, and Schedule feasibility.'
  },
  {
    id: 'fc-7-2',
    chapterNumber: 7,
    topic: 'Physical Tar Pit',
    front: 'What is the "physical tar pit" in systems analysis?',
    back: 'The risk during the survey of the current system of becoming bogged down in outdated physical procedures, stifling fresh design innovation for the new system.'
  },
  {
    id: 'fc-7-3',
    chapterNumber: 7,
    topic: 'Escapable Costs',
    front: 'What are escapable costs in cost-benefit analysis?',
    back: 'Costs directly tied to the old system that will genuinely disappear when the system ceases to exist; only these should be counted as cost savings.'
  },
  {
    id: 'fc-7-4',
    chapterNumber: 7,
    topic: 'Accountant in SDLC',
    front: 'In what three capacities do accountants participate in the SDLC?',
    back: '1. As Users (specifying accounting rules, audit trails, and algorithms)\n2. As Development Team Members (advising on internal controls and risks)\n3. As Auditors (verifying system auditability and data integrity)'
  }
];
