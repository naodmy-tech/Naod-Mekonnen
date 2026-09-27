import { ChapterData } from '../../types';

export const chapter2Data: ChapterData = {
  id: 'ch2',
  number: 2,
  title: 'Introduction to Transaction Processing',
  subtitle: 'Transaction Cycles, Accounting Records, Documentation Techniques & Computer-Based Systems',
  shortDescription: 'Explores the transaction processing system (TPS) across expenditure, conversion, and revenue cycles, traditional and computer-based accounting records, DFDs, ERDs, flowcharts, batch vs real-time processing, and master file updates.',
  totalPages: 10,
  fileSize: '2.3 MB',
  status: 'not_started',
  sections: [
    {
      id: 'sec2-1',
      title: '2.1. An Overview of Transaction Processing',
      content: [
        'The Transaction Processing System (TPS) is an activity consisting of three major subsystems: revenue cycle, expenditure cycle, and conversion cycle. While each cycle performs different specific tasks, they all capture financial transactions, record effects in accounting records, and provide transaction information in support of day-to-day operations.',
        'The three cycles exist in all types of businesses—both profit-seeking and not-for-profit:',
        '1. Expenditure Cycle: Incurs expenditures in exchange for resources (cash for materials, property, and labor). Consists of a physical component (acquisition) and a financial component (cash disbursement). Subsystems include: (a) Purchases/Accounts Payable, (b) Cash Disbursements, (c) Payroll, and (d) Fixed Assets.',
        '2. Conversion Cycle: Provides value added through products or services. Composed of two major subsystems: (a) The production system (planning, scheduling, and control of physical product through manufacturing), and (b) The cost accounting system (monitors flow of cost information for inventory valuation, budgeting, cost control, and make-or-buy decisions).',
        '3. Revenue Cycle: Sells finished goods to customers through cash sales, credit sales, and cash collections. Subsystems include: (a) Sales order processing (preparing sales orders, granting credit, shipping, billing, and accounting entries), and (b) Cash receipts (collecting cash, depositing, and recording payments).'
      ]
    },
    {
      id: 'sec2-2',
      title: '2.2. Accounting Records: Manual and Computer-Based',
      content: [
        'Manual Systems rely on documents, journals, and ledgers to maintain an audit trail:',
        '• Documents: Evidence of economic events. (1) Source Documents created at beginning to capture data; (2) Product Documents resulting from processing, such as a payroll check; (3) Turnaround Documents: product documents of one system that become source documents for another system (e.g. remittance advice).',
        '• Journals: Chronological entries. (1) Special journals for high-volume routine classes (cash receipts, cash disbursements, purchases, payroll); (2) General journals for nonrecurring, infrequent transactions (depreciation, closing entries, adjustments) using journal vouchers.',
        '• Ledgers: Book of accounts indicating increases, decreases, and balances. (1) General Ledger summarizing control accounts (AR, AP, Inventory) for financial reporting; (2) Subsidiary Ledgers kept in operating departments for detailed daily tracking (AR sub-ledger, AP sub-ledger, inventory ledger).',
        '• Audit Trail: Enables tracing transactions from source documents to financial statements and back, crucial for day-to-day inquiries and the annual financial audit.',
        'Computer-Based Systems represent records in four magnetic file types:',
        '• Master File: Contains account data updated by transactions (e.g. GL master, AR subsidiary ledger).',
        '• Transaction File: Temporary file of transaction records used to update master files (e.g. sales orders, cash receipts).',
        '• Reference File: Stores data used as standards for processing (e.g. tax tables, customer credit files, price lists, authorized vendors).',
        '• Archive File: Permanent historical records of past transactions retained for audit trail (prior journals, ledgers, written-off accounts).'
      ]
    },
    {
      id: 'sec2-3',
      title: '2.3. Documentation Techniques',
      content: [
        'Six basic documentation techniques used by accountants and auditors:',
        '1. Data Flow Diagrams (DFDs): Use symbols to represent entities (external objects labeled as nouns), processes (verbs/actions triggered by data), data stores (files/records), and labeled arrows (data flows). DFDs model system processes.',
        '2. Entity Relationship Diagrams (ERDs): Model data entities (resources, events, agents) and relationships. Cardinality is the numerical mapping between entity instances: One-to-One (1:1), One-to-Many (1:M), Many-to-Many (M:M). DFDs and ERDs reconcile through data stores representing data entities.',
        '3. Document Flowcharts: Depict elements of manual systems including documents, departments, journals/ledgers, and clerical/physical activities.',
        '4. System Flowcharts: Portray computer aspects, showing input data, transaction files, programs, master files, and output reports.',
        '5. Program Flowcharts: Describe the step-by-step logic within computer programs, used by IT auditors to verify programming code.',
        '6. Record Layout Diagrams: Reveal the internal structure of records in a file or database table (field names, data types, and primary key).'
      ]
    },
    {
      id: 'sec2-4',
      title: '2.4. Computer-Based Accounting Systems: Batch vs Real-Time',
      content: [
        'Computer-based accounting systems fall into two broad classes: batch systems and real-time systems.',
        '• Batch Systems: Group transactions into batches for processing. There is always a time lag between occurrence and recording (minutes to weeks). Require fewer resources (less expensive storage, simpler maintenance). Efficient for high volume routine transactions where time delay causes no harm.',
        '• Real-Time Systems: Process transactions individually at the moment the event occurs. No time lag. Require direct access storage devices (magnetic disks) and more programming/hardware resources. Essential when immediate current data is critical (e.g. airline reservations, instant credit approval).',
        '• Updating Master Files: Involves reading transaction records, using secondary keys (e.g. Customer Number, Inventory Number) to retrieve corresponding master file records, recalculating current balances or stock on hand, and writing back updated master records.'
      ],
      tableData: {
        headers: ['Distinguishing Feature', 'Batch Processing', 'Real-Time Processing'],
        rows: [
          ['Information Time Frame', 'Lag exists between when economic event occurs and when it is recorded.', 'Processing takes place when the economic event occurs (no lag).'],
          ['Resources Required', 'Generally, fewer resources (hardware, programming, and training).', 'More resources required (direct access files, specialized network hardware).'],
          ['Operational Efficiency', 'Certain records are processed after the event to avoid operational delays.', 'All records pertaining to the event are processed immediately; can cause bottlenecks in massive volumes.']
        ]
      }
    }
  ],
  summary: {
    learningObjectives: [
      'Identify the three transaction cycles: expenditure, conversion, and revenue.',
      'Explain manual accounting records (documents, journals, ledgers, audit trail).',
      'Distinguish computer files: master, transaction, reference, and archive files.',
      'Master the 6 documentation techniques: DFD, ERD, document flowcharts, system flowcharts, program flowcharts, and record layouts.',
      'Contrast batch processing and real-time processing across time frames, resources, and operational trade-offs.',
      'Explain how master files are updated from transaction files using primary and secondary keys.'
    ],
    keyConcepts: [
      'TPS as the primary foundation of accounting records',
      'Physical vs financial phase in transaction cycles',
      'Turnaround documents (e.g., remittance advice)',
      'General ledger control accounts vs subsidiary ledgers',
      'Audit trail continuity from source document to financial statements',
      'Magnetic file types: Master, Transaction, Reference, Archive',
      'DFD symbols (Entity, Process, Data store, Flowline) vs ERD cardinality (1:1, 1:M, M:M)',
      'Batch processing time lag vs Real-time instant updating',
      'Master file update mechanics: PK and SK relations'
    ],
    importantTerms: [
      { term: 'Turnaround Document', def: 'A product document of one system that becomes a source document for another system (e.g., customer remittance slip returned with check).' },
      { term: 'Audit Trail', def: 'Accounting records that allow tracing transactions from source documents through journals and ledgers to financial statements, and vice versa.' },
      { term: 'Master File', def: 'A permanent computer file containing account summary data updated from transactions (e.g., GL master, inventory master).' },
      { term: 'Transaction File', def: 'A temporary file containing transaction records used to update master files.' },
      { term: 'Reference File', def: 'A file storing standard lookup data for processing transactions (e.g., tax tables, price lists, customer credit limits).' },
      { term: 'Archive File', def: 'A file containing past transactions retained for historical audit trail purposes.' },
      { term: 'Cardinality', def: 'The numeric mapping between entity instances in an ER diagram (1:1, 1:M, or M:M).' }
    ],
    mainIdeas: [
      'Every transaction cycle consists of physical activities (moving materials, goods, services) and financial activities (cash disbursement or receipt).',
      'Documentation techniques bridge the gap between business operations, computer programs, and external audit verification.',
      'The choice between batch and real-time processing is a trade-off between resource efficiency and information immediacy.'
    ],
    importantRelationships: [
      'DFD depicts system processes; ERD depicts data relationships. Every DFD data store maps to an ERD entity.',
      'Sales Order Transaction contains Primary Key (Sales Order #) and Secondary Keys (Customer #, Inventory #) to link to AR Master and Inventory Master files.'
    ],
    chapterSummaryText: 
      'Chapter 2 analyzes transaction processing mechanisms in business organizations. The transaction processing system comprises the expenditure, conversion, and revenue cycles. In manual environments, accounting relies on source, product, and turnaround documents, specialized and general journals, and control and subsidiary ledgers that preserve the audit trail. In computer-based architectures, these are represented by master, transaction, reference, and archive files. Accountants document systems using DFDs, ERDs, document/system flowcharts, program flowcharts, and record layouts. Computer processing modes are split into batch (time lag, lower cost) and real-time (instantaneous, resource intensive).',
    keyTakeaways: [
      'TPS captures transactions and supplies raw data for GL/FRS and MRS.',
      'Turnaround documents improve data capture efficiency by returning computer-generated documents as source inputs.',
      'The audit trail is vital for operational customer inquiries and financial statement verification.',
      'ERD cardinality reflects business rules and organizational policies.',
      'Master file updates require reading transactions, retrieving master records via secondary keys, adjusting balances, and saving.'
    ]
  },
  pdfPages: [
    {
      pageNumber: 1,
      title: 'Chapter 2: Overview of TPS & Expenditure Cycle',
      sections: [
        {
          heading: '2.1. Overview of Transaction Processing',
          paragraphs: [
            'TPS is an activity consisting of three major subsystems: revenue cycle, expenditure cycle, and conversion cycle. All three cycles capture financial transactions, record effects in accounting records, and supply data for management reports and financial statements.',
            'The three cycles exist in all organizations: incurring expenditures for resources, providing value added through conversion, and receiving revenue.'
          ]
        },
        {
          heading: '2.1.1. The Expenditure Cycle',
          bullets: [
            'Purchases/Accounts Payable: Identifies inventory needs, places vendor orders, increases inventory and establishes AP.',
            'Cash Disbursements: Authorizes payment when due, disburses funds, reduces cash and accounts payable.',
            'Payroll: Collects labor usage, computes payroll, and disburses paychecks.',
            'Fixed Asset System: Processes acquisition, maintenance, and disposal of capital assets.'
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'Conversion Cycle & Revenue Cycle',
      sections: [
        {
          heading: '2.1.2. The Conversion Cycle',
          paragraphs: [
            'Production system: Plans, schedules, and controls physical product manufacturing.',
            'Cost accounting system: Monitors production cost information for valuation, budgeting, cost control, and decisions.'
          ],
          diagramDesc: 'Figure 1: Relationship between Transaction Cycles (Expenditure -> Labor, Materials, Plant -> Conversion -> Finished Goods -> Revenue -> Cash).'
        },
        {
          heading: '2.1.3. The Revenue Cycle',
          bullets: [
            'Sales order processing: Preparing sales orders, credit check, shipping, billing, and accounting entries.',
            'Cash receipts: Collecting payments, bank deposits, and recording to AR and cash accounts.'
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'Manual Accounting Records: Documents, Journals & Ledgers',
      sections: [
        {
          heading: 'a. Documents',
          bullets: [
            'Source Documents: Capture and formalize transaction data at inception.',
            'Product Documents: Result of transaction processing (e.g., payroll check).',
            'Turnaround Documents: Product documents of one system that become source documents for another.'
          ]
        },
        {
          heading: 'b. Journals',
          bullets: [
            'Special journals: High-volume routine transactions (cash receipts, disbursements, purchases, payroll).',
            'General journals: Nonrecurring, infrequent, dissimilar transactions using journal vouchers.'
          ]
        },
        {
          heading: 'c. Ledgers',
          bullets: [
            'General Ledger: Summarizes activity for control accounts (AR, AP, Inventory) for financial reporting.',
            'Subsidiary Ledgers: Kept in departments for detailed daily tracking (AR, AP, inventory, payroll).'
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'Computer Files & Documentation Techniques',
      sections: [
        {
          heading: '2.2.2. Computer-Based Systems Files',
          bullets: [
            'Master File: Contains account data (GL, subsidiary ledgers); updated from transactions.',
            'Transaction File: Temporary file used to change or update master files.',
            'Reference File: Stores standards for processing (tax tables, price lists, customer credit files).',
            'Archive File: Historical records of past transactions retained for audit trail.'
          ]
        },
        {
          heading: '2.3. Documentation Techniques',
          paragraphs: [
            'Accountants use 6 techniques: DFD, ERD, document flowcharts, system flowcharts, program flowcharts, record layout diagrams.'
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'Data Flow Diagrams (DFDs)',
      sections: [
        {
          heading: '2.3.1. Data Flow Diagrams',
          paragraphs: [
            'DFD uses 4 symbols: Entity (noun, external boundary), Process (verb, triggered by data), Data Store (accounting records/files), and Flowline (arrows showing data flow).'
          ],
          diagramDesc: 'Figure 2: DFD Symbol Set; Figure 3: Example DFD of Sales Order Processing System (Customer -> Receive Order -> Check Credit -> Ship Goods -> Bill Customer -> Update AR Records -> Post GL).'
        }
      ]
    },
    {
      pageNumber: 6,
      title: 'Entity Relationship Diagrams (ERDs)',
      sections: [
        {
          heading: '2.3.2. Entity Relationship Diagrams',
          paragraphs: [
            'ERDs represent relationships between entities (resources, events, agents). Cardinality is the numerical mapping between instances (1:1, 1:M, M:M).'
          ],
          diagramDesc: 'Figure 4: ERD Symbols (Salesperson 1 Assigned 1 Company Car; Customer 1 Places M Sales Order; Vendor M Supply M Inventory).'
        }
      ]
    },
    {
      pageNumber: 7,
      title: 'Flowchart Symbols: Document & System',
      sections: [
        {
          heading: '2.3.3. Document and System Flowcharts',
          paragraphs: [
            'Document flowcharts depict manual systems (documents, journals, ledgers, departments). System flowcharts portray computer processes, media (magnetic tape, disks, terminals).'
          ],
          diagramDesc: 'Figure 5 & 6: Symbol Set for Document Flowcharts (terminal, document, manual op, file, journal) and System Flowcharts (hard copy, computer process, disk pack, tape).'
        }
      ]
    },
    {
      pageNumber: 8,
      title: 'Program Flowcharts & Batch vs Real-Time',
      sections: [
        {
          heading: '2.3.5. Record Layout & 2.4. Computer Systems',
          paragraphs: [
            'Record layout diagram reveals internal structure (fields, data types, length, primary key).',
            'Batch systems assemble transactions into groups; time lag exists between occurrence and recording. Real-time systems process events individually with no lag.'
          ],
          table: {
            headers: ['Distinguishing Feature', 'Batch', 'Real-Time'],
            rows: [
              ['Information Time Frame', 'Lag exists', 'Processing at event (no lag)'],
              ['Resources', 'Fewer resources required', 'More resources required'],
              ['Operational Efficiency', 'Certain records processed after event', 'All records processed immediately']
            ]
          }
        }
      ]
    },
    {
      pageNumber: 9,
      title: 'Trade-offs & Legacy vs Modern Systems',
      sections: [
        {
          heading: 'Efficiency vs Effectiveness',
          paragraphs: [
            'Immediate access critical -> Real-time processing (e.g. airline booking). When time lag causes no harm and batch efficiency saves resources -> Batch processing is superior.',
            'Legacy systems: Mainframe-based, batch oriented, flat files or hierarchical databases. Modern systems: Client-server, real-time, relational databases.'
          ]
        }
      ]
    },
    {
      pageNumber: 10,
      title: 'Updating Master Files from Transactions',
      sections: [
        {
          heading: '2.4.3. Master File Update Steps',
          bullets: [
            '1. A sales order record is read by the system.',
            '2. ACCOUNT NUMBER searches AR master file and retrieves AR record.',
            '3. Update calculates new customer balance by adding INVOICE AMOUNT to CURRENT BALANCE.',
            '4. INVENTORY NUMBER searches inventory master file.',
            '5. Reduces inventory by deducting QUANTITY SOLD from QUANTITY ON HAND.',
            '6. A new sales order record is read and repeated.'
          ],
          diagramDesc: 'Figure 9: Record Structures for Sales Orders Transaction File (PK: Sales Order #, SK: Account #, Inventory #) pointing to AR Master and Inventory Master.'
        }
      ]
    }
  ]
};
