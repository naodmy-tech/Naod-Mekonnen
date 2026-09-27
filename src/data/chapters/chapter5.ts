import { ChapterData } from '../../types';

export const chapter5Data: ChapterData = {
  id: 'ch5',
  number: 5,
  title: 'Financial Reporting and Management Reporting Systems',
  subtitle: 'Data Coding Schemes, GLS/FRS 11 Steps, FRS Controls & MRS Responsibility Accounting',
  shortDescription: 'Examines data coding schemes (sequential, block, alphabetic), the General Ledger System and database files, the complete 11-step Financial Reporting process, internal controls over FRS, and the Management Reporting System (principles, problem structure, scheduled vs ad hoc reports, responsibility centers, and behavioral pitfalls).',
  totalPages: 11,
  fileSize: '2.6 MB',
  status: 'not_started',
  sections: [
    {
      id: 'sec5-1',
      title: '5.1. Data Coding Schemes in AIS',
      content: [
        'Data coding schemes solve the space, time, and error vulnerabilities of handling large transaction volumes. Uses in AIS: (a) Concisely represent complex information, (b) Provide accountability over completeness, (c) Identify unique transactions and accounts, and (d) Support the audit trail.',
        '1. Sequential Codes: Represent items in ascending or descending sequence. Common application: prenumbering source documents. Advantage: alerts management to gaps/lost documents. Disadvantage: carries no information beyond sequence; inserting requires renumbering subsequent items.',
        '2. Block Codes: Variation on sequential coding where specific ranges represent whole classes. Most common application: Chart of Accounts. Advantage: allows insertion of new accounts within a block without reorganizing the entire chart (e.g. adding account 626 for advertising expense in the 600 Operating Expense block). Disadvantage: code has no intrinsic meaning until matched to the chart.',
        '3. Alphabetic / Alphanumeric Codes: Uses letters or combinations. Exponentially increases data representation capacity. For example, a 3-character numeric block allows 1,000 items (10 blocks x 100), whereas 3-character alphabetic allows 17,576 items (26 blocks x 676). Disadvantages: difficulty rationalizing arbitrary codes and sorting difficulties.'
      ],
      tableData: {
        headers: ['Account Range', 'Classification', 'Example Chart of Accounts Items'],
        rows: [
          ['100 - 199', 'Current Assets', '110 Petty Cash, 120 Cash in Bank, 130 Accounts Receivable, 140 Inventory, 150 Supplies'],
          ['200 - 299', 'Fixed Assets', '210 Land, 220 Buildings, 230 Plant and Equipment'],
          ['300 - 399', 'Liabilities', '310 Accounts Payable, 320 Notes Payable'],
          ['400 - 499', 'Owner\'s Equity', '410 Capital Stock, 420 Retained Earnings'],
          ['500 - 599', 'Revenue', 'Sales Revenue, Service Revenue'],
          ['600 - 699', 'Operating Expense', '610 Salaries Expense, 626 Advertising Expense, 630 Utilities'],
          ['700 - 799', 'Cost of Sales', 'Cost of Goods Sold']
        ]
      }
    },
    {
      id: 'sec5-2',
      title: '5.2. The General Ledger System (GLS)',
      content: [
        'Summaries of transaction cycle activity flow into the GLS as input for financial and management reporting. Key elements: Journal Voucher, GLS Database, and GLS Procedures.',
        '• Journal Voucher: The source of input to the GL, representing summaries of routine transactions, adjusting entries, and closing entries.',
        '• GLS Database Files:',
        '  1. General Ledger Master File: Principal file based on chart of accounts (Account Number, Description, Class, Normal Balance, Beginning Balance, Period Debits, Period Credits, Current Balance).',
        '  2. General Ledger History File: Comparative financial data for prior periods.',
        '  3. Journal Voucher File: Total collection of JVs processed in the current period (replaces general journal).',
        '  4. Journal Voucher History File: Archive of past periods supporting stewardship audit trail.',
        '  5. Responsibility Center File: Revenues, expenditures, and resource utilization for organizational centers.',
        '  6. Budget Master File: Budgeted amounts for responsibility centers forming the basis of responsibility accounting.'
      ]
    },
    {
      id: 'sec5-3',
      title: '5.3. The Financial Reporting System (FRS): The 11 Steps',
      content: [
        'Financial reporting satisfies statutory stewardship requirements for external parties (nondiscretionary). The accounting process follows 11 chronological steps:',
        '1. Capture the transaction in the appropriate transaction file within transaction cycles.',
        '2. Record in special journal (frequent events) or general journal / journal voucher (infrequent events).',
        '3. Post transaction details to affected subsidiary ledger accounts.',
        '4. Post summarized journal vouchers to the general ledger control accounts.',
        '5. Prepare the unadjusted trial balance worksheet at period end to verify debit-credit equality.',
        '6. Make adjusting entries on the worksheet for errors and unrecorded events (depreciation, accruals).',
        '7. Journalize and post adjusting entries to the general ledger via journal vouchers.',
        '8. Prepare the adjusted trial balance containing all financial statement figures.',
        '9. Prepare financial statements: Balance Sheet, Income Statement, and Statement of Cash Flows.',
        '10. Journalize and post closing entries to close temporary revenue/expense accounts to Retained Earnings.',
        '11. Prepare the post-closing trial balance carrying forward permanent balance sheet accounts to the new fiscal year.'
      ]
    },
    {
      id: 'sec5-4',
      title: '5.4. Controlling the FRS & Internal Controls',
      content: [
        'Risks to the FRS include: defective audit trails, unauthorized GL access, GL accounts out of balance with subsidiary ledgers, and incorrect balances from bogus journal vouchers.',
        'Internal Controls over FRS:',
        '• Transaction Authorization: Journal vouchers must be formally approved by a responsible manager in the source department before posting.',
        '• Segregation of Duties: The GL updating clerk MUST NOT: (1) maintain special journals or subsidiary ledgers, (2) prepare journal vouchers, or (3) hold physical custody of assets.',
        '• Access Controls: Database security restricting GL update privileges to authorized personnel.',
        '• Accounting Records: Complete audit trail from source documents to financial statements allowing inquiry response and historical verification.',
        '• Independent Verification: FRS produces two key operational reports: (1) Journal Voucher Listing (details of each voucher posted), and (2) General Ledger Change Report (shows account balance effects).'
      ]
    },
    {
      id: 'sec5-5',
      title: '5.5. The Management Reporting System (MRS) & Behavioral Issues',
      content: [
        'Management reporting provides discretionary internal information to solve problems and support decisions.',
        'Management Principles Influencing MRS:',
        '• Formalization of Tasks: Structure the organization around tasks rather than unique individuals to ensure operational continuity.',
        '• Responsibility and Authority: Responsibility (obligation to achieve results) must be matched with authority (power to make decisions). Flows downward.',
        '• Span of Control: Number of subordinates directly supervised. Narrow span results in tall structures requiring detailed reports; broad span results in flat structures requiring summarized reports.',
        '• Management by Exception: Managers limit attention to areas at risk of going out of control (exceptions/variances) rather than reviewing every detail.',
        'Problem Structure: Structured (data, procedures, and objectives are known with certainty) vs. Unstructured.',
        'Types of Reports: Programmed (Scheduled [daily sales, quarterly reports] and On-Demand [triggered by events, e.g. reorder point]) vs. Ad Hoc (custom database queries generated without programmer assistance).',
        'Responsibility Accounting: Traces performance to individual managers holding them accountable only for controllable items. Centers include: (1) Cost Centers (controllable costs vs budget), (2) Profit Centers (costs and revenue generation, e.g. Ambessa Shoe Company branch manager), and (3) Investment Centers (costs, revenues, and return on investment capital).',
        'Behavioral Considerations: Promotes Goal Congruence (aligning manager goals with organizational profitability). Pitfalls include Information Overload (excessive unsummarized data leading to heuristic guesswork) and Inappropriate Performance Measures (over-reliance on single metrics like ROI causing manipulation).'
      ]
    }
  ],
  summary: {
    learningObjectives: [
      'Explain coding schemes: sequential, block, and alphabetic, and their AIS benefits.',
      'Explain the GLS database files (master, history, journal vouchers, responsibility, budget).',
      'Trace the 11 sequential steps of the financial reporting system (FRS).',
      'Identify potential FRS risks and the corresponding internal control activities.',
      'Analyze the management principles that shape the MRS (span of control, exception reporting).',
      'Distinguish responsibility centers: Cost, Profit, and Investment centers.',
      'Analyze behavioral issues in reporting: goal congruence, information overload, and ROI manipulation.'
    ],
    keyConcepts: [
      'Data coding: space conservation, audit trail, completeness check',
      'Chart of Accounts structured with numeric block coding',
      'Journal voucher as the primary authorization mechanism for GL updates',
      '11-step accounting cycle from transaction capture to post-closing trial balance',
      'Operational verification reports: JV Listing & GL Change Report',
      'Discretionary reporting (MRS) vs Nondiscretionary reporting (FRS)',
      'Management by Exception focuses attention on significant variances',
      'Scheduled vs On-Demand vs Ad Hoc management reports',
      'Responsibility centers: Cost vs Profit vs Investment centers',
      'Controllable vs Non-controllable costs principle',
      'Information overload resulting in reliance on informal heuristics',
      'Single performance metric pitfalls (ROI manipulation)'
    ],
    importantTerms: [
      { term: 'Journal Voucher', def: 'A document that identifies affected GL accounts and financial amounts, acting as the formal authorization to post transactions to the general ledger.' },
      { term: 'Block Coding', def: 'A coding scheme assigning whole numeric ranges to classes of items, extensively used in standard Charts of Accounts.' },
      { term: 'Discretionary Reporting', def: 'Internal management reporting (MRS) where the organization has freedom to choose what information to present and how to present it.' },
      { term: 'Nondiscretionary Reporting', def: 'Mandatory financial reporting (FRS) where format, timing, and content are governed by law, accounting standards, and regulatory bodies.' },
      { term: 'Management by Exception', def: 'The management philosophy that managers should focus their attention on significant deviations from plan or problem areas rather than normal operations.' },
      { term: 'Responsibility Center', def: 'An organizational unit whose manager is held accountable for specific financial activities (Cost, Profit, or Investment center).' },
      { term: 'Goal Congruence', def: 'Alignment where lower-level managers pursuing their personal or unit goals simultaneously achieve the strategic objectives of top management.' }
    ],
    mainIdeas: [
      'The general ledger serves as the central control summary of the entire accounting system, verifying that debits equal credits across all transaction cycles.',
      'Separation of duties in FRS mandates that individuals posting to the general ledger must have no access to subsidiary ledgers, source journals, or physical assets.',
      'In responsibility accounting, managers should only be evaluated on costs and revenues they directly control; allocating uncontrollable fixed overhead distorts managerial assessment.'
    ],
    importantRelationships: [
      'Span of control dictates report aggregation: narrow span needs detailed operational reports; broad span requires summarized executive dashboards.',
      'Information overload occurs when reports lack summarization, prompting managers to abandon formal reports for informal guesses.'
    ],
    chapterSummaryText: 
      'Chapter 5 explores the dual reporting framework of modern enterprises: the General Ledger / Financial Reporting System (GL/FRS) and the Management Reporting System (MRS). Coding schemes like block coding in charts of accounts structure the data flow. The GLS database relies on journal vouchers to execute an 11-step accounting cycle, protected by strict segregation of duties and operational verification reports. In contrast, the MRS provides discretionary information governed by management principles, responsibility center accounting (cost, profit, investment), and behavioral safeguards against information overload and metric manipulation.',
    keyTakeaways: [
      'Block coding creates organized charts of accounts with room for expansion.',
      'Journal vouchers require manager authorization before posting to the GL.',
      'The 11-step accounting cycle guarantees balance sheet account continuity across fiscal years.',
      'GL updating must be independent of subsidiary ledger record-keeping and asset custody.',
      'Responsibility reports must focus exclusively on controllable performance factors to maintain goal congruence.'
    ]
  },
  pdfPages: [
    {
      pageNumber: 1,
      title: 'Chapter 5: Data Coding Schemes',
      sections: [
        {
          heading: '5.1. Data Coding Schemes',
          paragraphs: [
            'Firms process huge volumes of transactions with similar attributes. Uncoded accounts consume recording space and are prone to errors.',
            'AIS uses: represent complex info concisely, provide accountability, identify unique records, support audit trail.'
          ]
        },
        {
          heading: '5.1.1. Sequential Codes',
          paragraphs: [
            'Used for prenumbered source documents to detect gaps. Disadvantage: no info content beyond order, difficult to insert.'
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'Block Codes & Chart of Accounts',
      sections: [
        {
          heading: '5.1.2. Block Codes',
          paragraphs: [
            'Restricts classes of items to specific ranges. Key application: Chart of Accounts (100 Current Assets, 200 Fixed Assets, 300 Liabilities, 400 Equity, 500 Revenue, 600 Operating Expense, 700 Cost of Sales).',
            'Allows insertions within a block without reorganizing entire structure.'
          ],
          table: {
            headers: ['Range', 'Account Category'],
            rows: [
              ['100-199', 'Current Assets (110 Petty Cash, 120 Cash, 130 AR, 140 Inventory)'],
              ['200-299', 'Fixed Assets (210 Land, 220 Buildings, 230 Equipment)'],
              ['300-399', 'Liabilities (310 Accounts Payable, 320 Notes Payable)'],
              ['400-499', 'Owner Equity (410 Capital Stock, 420 Retained Earnings)'],
              ['500-599', 'Revenue Accounts'],
              ['600-699', 'Operating Expense Accounts (626 Advertising)'],
              ['700-799', 'Cost of Sales']
            ]
          }
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'Alphabetic Codes & GLS Database',
      sections: [
        {
          heading: '5.1.3. Alphabetic Codes',
          paragraphs: [
            'Dramatically increases coding capacity (26 blocks x 676 = 17,576 items in 3 characters vs 1,000 for numeric). Drawback: sorting difficulties.'
          ]
        },
        {
          heading: '5.2. General Ledger System & Database',
          bullets: [
            'Journal Voucher: Primary input source for routine, adjusting, and closing entries.',
            'GL Master File: Based on chart of accounts (Account Number, Description, Class, Balances).',
            'GL History File: Historical comparative data.',
            'Journal Voucher File & History File: Current and past journal vouchers preserving audit trail.'
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'FRS Procedures & Relationship',
      sections: [
        {
          heading: '5.3. Financial Reporting System (FRS)',
          paragraphs: [
            'Management obligation to provide stewardship data to external parties (nondiscretionary). Produces standard financial statements, tax returns, regulatory filings.'
          ],
          diagramDesc: 'Figure 2: Financial Reporting Process (TPS Daily Procedures -> GLS Periodic Posting -> FRS End of Period Adjusting, Statements, and Post-Closing).'
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'The 11 Steps of Financial Reporting',
      sections: [
        {
          heading: 'Chronological Steps',
          bullets: [
            '1. Capture transaction in transaction file.',
            '2. Record in special journal.',
            '3. Post to subsidiary ledger.',
            '4. Post to general ledger via journal voucher.',
            '5. Prepare unadjusted trial balance.',
            '6. Make adjusting entries.',
            '7. Journalize and post adjusting entries.',
            '8. Prepare adjusted trial balance.',
            '9. Prepare financial statements (Balance Sheet, Income Statement, Cash Flows).',
            '10. Journalize and post closing entries.',
            '11. Prepare post-closing trial balance.'
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      title: 'Controlling the FRS',
      sections: [
        {
          heading: '5.4. Controlling the FRS',
          bullets: [
            'Risks: defective audit trail, unauthorized GL access, GL out of balance with subsidiary ledgers, incorrect account balances.',
            'Transaction Authorization: Journal vouchers properly approved by department manager.',
            'Segregation of Duties: GL staff must not hold journals/subsidiaries, prepare vouchers, or hold assets.'
          ]
        }
      ]
    },
    {
      pageNumber: 7,
      title: 'FRS Controls & Management Reporting System',
      sections: [
        {
          heading: 'Independent Verification Reports',
          bullets: [
            'Journal Voucher Listing: Details of every voucher posted to GL.',
            'General Ledger Change Report: Shows effects of postings on account balances.'
          ]
        },
        {
          heading: '5.5. Management Reporting System (MRS)',
          paragraphs: [
            'Discretionary reporting directing attention to timely problems. Influenced by management principles, decision level, problem structure, and behavioral considerations.'
          ]
        }
      ]
    },
    {
      pageNumber: 8,
      title: 'Management Principles & Problem Structure',
      sections: [
        {
          heading: 'Principles',
          bullets: [
            'Formalization of tasks: Structure around tasks, not individuals.',
            'Responsibility & Authority: Delegate authority downward matching responsibility.',
            'Span of control: Narrow (tall structure, detailed reports) vs. Broad (wide structure, summarized reports).',
            'Management by exception: Limit attention to abnormal variances and risk areas.'
          ]
        },
        {
          heading: 'Problem Structure',
          paragraphs: [
            'Structured: Data, procedures, and objectives are known with certainty. Unstructured: one or more elements uncertain.'
          ]
        }
      ]
    },
    {
      pageNumber: 9,
      title: 'Management Reports & Responsibility Accounting',
      sections: [
        {
          heading: 'Types of Management Reports',
          bullets: [
            'Programmed: Scheduled (daily sales, payroll reports) and On-Demand (triggered by event/reorder point).',
            'Ad Hoc: Direct inquiry reports generated using database query tools without programmer support.'
          ]
        },
        {
          heading: 'Responsibility Accounting',
          paragraphs: [
            'Managers are accountable ONLY for items (costs, revenues, investments) they control. Upward and downward flows: budgeting and variance reporting.'
          ]
        }
      ]
    },
    {
      pageNumber: 10,
      title: 'Responsibility Centers & Goal Congruence',
      sections: [
        {
          heading: 'Three Responsibility Centers',
          bullets: [
            'Cost Centers: Accountable for cost management within budget (e.g. production shop).',
            'Profit Centers: Cost control and revenue generation (e.g. Ambessa Shoe Company store branch).',
            'Investment Centers: Authority over costs, revenues, and capital investments (e.g. corporate division).'
          ]
        },
        {
          heading: 'Goal Congruence & Information Overload',
          paragraphs: [
            'Goal Congruence: Aligns supervisor and corporate goals. Information overload causes managers to disregard formal reports and rely on informal hunches.'
          ]
        }
      ]
    },
    {
      pageNumber: 11,
      title: 'Inappropriate Performance Measures',
      sections: [
        {
          heading: 'Behavioral Pitfalls',
          paragraphs: [
            'Evaluating managers solely on Return on Investment (ROI) incentivizes manipulation and short-term cuts.',
            'Performance measurement must incorporate multidimensional indicators: sales trends, cost of goods sold, operating expenses, product leadership, personnel development, employee attitudes, and public responsibility.'
          ]
        }
      ]
    }
  ]
};
