import { ChapterData } from '../../types';

export const chapter1Data: ChapterData = {
  id: 'ch1',
  number: 1,
  title: 'The Information System: An Accountant’s Perspective',
  subtitle: 'Information Environment, System Framework, AIS Subsystems, General Model & System Evolution',
  shortDescription: 'Places the subject of accounting information systems in perspective for accountants, covering information flows, system decomposition, the general model for AIS, and evolutionary models from manual to ERP.',
  totalPages: 11,
  fileSize: '2.1 MB',
  status: 'not_started',
  sections: [
    {
      id: 'sec1-1',
      title: '1.1. The Information Environment',
      content: [
        'Like other business resources (e.g. raw materials, capital, and labor), information is vital for the survival of a business organization. Thus, information is a business resource. Every business day, vast quantities of information flow to decision makers and other users to meet a variety of internal needs.',
        'In addition, information flows out from the organization to external users, such as customers, suppliers, and stakeholders who have an interest in the firm.',
        'The business organization can be divided horizontally into several levels of activity. Business operations form the base of the pyramid. These activities consist of the product-oriented work of the organization, such as manufacturing, sales, and distribution.',
        'Above the base level, the organization is divided into three management levels: operations management, middle management, and top management.',
        '• Operations management is directly responsible for controlling day-to-day operations.',
        '• Middle management is accountable for the short-term planning and coordination of activities necessary to accomplish organizational objectives.',
        '• Top management is responsible for longer-term planning and setting organizational objectives.',
        'Every individual in the organization, from business operations to top management, needs information to accomplish his or her tasks.'
      ]
    },
    {
      id: 'sec1-1-1',
      title: '1.1.1. What is a System?',
      content: [
        'A system is a set of interrelated components that interact to achieve a given goal. Some systems are naturally occurring, whereas others are artificial. Natural systems range from the atom to the universe. All life forms, plant and animal, are examples of natural systems. Artificial systems are manmade (from clocks and airplanes to social systems and information systems).',
        'Generally, a system is a group of two or more interrelated components or subsystems that serve a common purpose. A system is characterized by:',
        '1. Multiple Components: A system must contain more than one part or component.',
        '2. Relatedness: A common purpose relates the multiple parts of the system. Although each part functions independently of the others, all parts serve a common objective. If a particular component does not contribute to the common goal, then it is not part of the system.',
        '3. System versus Subsystem: The distinction between the terms system and subsystem is a matter of perspective. A system is called a subsystem when it is viewed in relation to the larger system of which it is a part. Likewise, a subsystem is called a system when it is the focus of attention.',
        '4. Purpose: A system must serve at least one purpose, but it may serve several. When a system ceases to serve a purpose, it should be replaced.',
        '5. System Decomposition: Decomposition is the process of dividing the system into smaller subsystem parts. This is a convenient way of representing, viewing, and understanding the relationships among subsystems. By decomposing a system, we can present the overall system as a hierarchy.',
        '6. Subsystem Interdependency: A system’s ability to achieve its goal depends on the effective functioning and harmonious interaction of its subsystems. If a vital subsystem fails or becomes defective, the overall system will fail to meet its objective.'
      ]
    },
    {
      id: 'sec1-1-2',
      title: '1.1.2. An Information Systems Framework',
      content: [
        'The information system is the set of formal procedures by which data are collected, processed into information, and distributed to users.',
        'Two broad classes of systems emerge from the decomposition of the information system: the Accounting Information System (AIS) and the Management Information System (MIS).',
        'The distinction between AIS and MIS centers on the concept of a transaction. The information system accepts input, called transactions, which are converted through various processes into output information that goes to users.',
        'A transaction is an event that affects or is of interest to the organization and is processed by its information system as a unit of work.',
        '• Financial transactions: Economic events that affect the assets and equities of the organization, are reflected in its accounts, and are measured in monetary terms (e.g., sales, inventory purchases, cash disbursements, cash receipts). Every business is legally bound to correctly process these.',
        '• Nonfinancial transactions: Events that do not meet the narrow definition of a financial transaction (e.g., adding a new supplier of raw materials to the list of valid vendors). The firm has no legal obligation to process nonfinancial transactions correctly or at all.'
      ]
    },
    {
      id: 'sec1-1-3',
      title: '1.1.3. AIS Subsystems',
      content: [
        'AIS subsystems process financial transactions and nonfinancial transactions that directly affect the processing of financial transactions. AIS is composed of three major subsystems:',
        '1. The Transaction Processing System (TPS): Supports daily business operations with numerous reports, documents, and messages for users throughout the organization. TPS consists of three transaction cycles: the revenue cycle, the expenditure cycle, and the conversion cycle.',
        '2. The General Ledger / Financial Reporting System (GL/FRS): Produces the traditional financial statements (income statement, balance sheet, cash flows, tax returns). Communicates primarily to external users. This type of reporting is called nondiscretionary reporting because the organization has few or no choices in the information it provides.',
        '3. The Management Reporting System (MRS): Provides internal management with special-purpose financial reports and information needed for decision making (budgets, variance reports, CVP analyses, current cost reports). This is called discretionary reporting because the organization can choose what information to report and how to present it.'
      ]
    },
    {
      id: 'sec1-1-4',
      title: '1.1.4. A General Model for AIS',
      content: [
        'The general model describes all information systems, regardless of their technological design. The elements are: (a) End users, (b) Data sources, (c) Data collection, (d) Data processing, (e) Database management, (f) Information generation, and (g) Feedback.',
        '• End Users: External users (creditors, stockholders, investors, regulatory agencies, tax authorities, suppliers, customers) and Internal users (management at all levels, operations personnel).',
        '• Data versus Information: Data are facts, which may or may not be processed and have no direct effect on the user. Information causes the user to take an action that he or she otherwise could not, or would not, have taken. Information is determined by the effect it has on the user, not its physical form.',
        '• Data Sources: Financial transactions that enter from external sources (sales, purchases, cash receipts, cash disbursements) or internal sources (movement of raw materials into WIP, labor/overhead application, transfer to finished goods, depreciation).',
        '• Data Collection: The first operational stage. The objective is to ensure data entering the system is valid, complete, and free from material errors. Two rules govern data collection: relevance and efficiency (collect data only once to avoid redundancy and inconsistency).',
        '• Data Processing: Ranges from simple to complex, including sales forecasting and posting/summarizing for accounting.',
        '• Database Management: Logical hierarchy includes Attribute (most elemental piece of potentially useful data), Record (complete set of attributes for a single occurrence), and File (complete set of records of an identical class). Tasks involve: storage, retrieval, and deletion.',
        '• Information Generation: Compiling, formatting, and presenting information. Useful information requires 5 characteristics: Relevance, Timeliness, Accuracy, Completeness, and Summarization.',
        '• Feedback: Output sent back to the system as a source of data to initiate or alter a process (e.g. inventory status report triggering reorder).'
      ]
    },
    {
      id: 'sec1-1-5',
      title: '1.1.5. Information System Objectives & Acquisition',
      content: [
        'Three fundamental objectives common to all systems:',
        '1. To support the stewardship function of management (properly managing firm resources and reporting resource utilization).',
        '2. To support management decision making.',
        '3. To support the firm’s day-to-day operations.',
        'Acquisition of Information Systems occurs via two methods:',
        '1. In-House Development: Building custom systems from scratch through the System Development Life Cycle (SDLC) for firms with unique needs.',
        '2. Commercial Software: Purchased from software vendors. Three basic types:',
        '   - Turnkey systems: Completely finished and tested systems ready for implementation.',
        '   - Backbone systems: Basic system structure with preprogrammed primary processing logic; vendor designs user interfaces to client needs.',
        '   - Vendor-supported systems: Custom systems that client organizations purchase commercially; vendor designs, implements, and maintains.'
      ]
    },
    {
      id: 'sec1-2',
      title: '1.2. The Evolution of Information System Models',
      content: [
        'Over the past 50 years, several models have represented AIS. Older models do not disappear immediately; multiple generations often coexist.',
        '1. The Manual Process Model: The oldest form, involving physical documents, journals, and ledgers. Facilitates understanding internal control activities (segregation of duties, supervision, independent verification, audit trails).',
        '2. The Flat-File Model: Associated with legacy systems (1960s–1980s). Stand-alone applications where users own their data files. Causes three major problems: Data Storage costs, Data Updating problems, and lack of Currency of Information. Also suffers from task-data dependency.',
        '3. The Database Model: Pools data into a common database managed by a Database Management System (DBMS). Eliminates data redundancy, enables single update, ensures current values, and provides task-data independence.',
        '4. The REA Model: Proposed in 1982 by William McCarthy. Models Resources, Events, and Agents. Replaces accounting artifacts (journals, ledgers, accounts receivable) with an event-driven relational database from which financial statements are derived directly.',
        '5. Enterprise Resource Planning (ERP) Systems: Large commercial software packages with integrated modules (Financial Accounting, Asset Mgmt, HR, Sales & Distribution, Inventory, Production Planning) that automate and integrate key business processes across the entire organization.'
      ]
    }
  ],
  summary: {
    learningObjectives: [
      'Understand the information environment and the vertical hierarchy of management information needs.',
      'Define a system, subsystem, and system decomposition.',
      'Distinguish between AIS and MIS, and between financial and nonfinancial transactions.',
      'Explain the three AIS subsystems: TPS, GL/FRS, and MRS.',
      'Master the elements of the General Model for AIS and the five characteristics of useful information.',
      'Trace the evolution of accounting systems from manual and flat-file to database, REA, and ERP systems.'
    ],
    keyConcepts: [
      'Information as a vital business resource',
      'System decomposition and subsystem interdependency',
      'Transaction definition (financial vs nonfinancial)',
      'Nondiscretionary (GL/FRS) vs Discretionary (MRS) reporting',
      'Data vs Information (effect on user action)',
      'Data hierarchy: Attribute -> Record -> File -> Database',
      'Five qualities of useful information: Relevance, Timeliness, Accuracy, Completeness, Summarization',
      'Commercial software types: Turnkey, Backbone, Vendor-supported',
      'Flat-file weaknesses: Storage redundancy, Updating cost, Currency lag, Task-data dependency',
      'REA Model: Resources, Events, Agents (event-driven, eliminates AR artifact)'
    ],
    importantTerms: [
      { term: 'Accounting Information System (AIS)', def: 'A system that processes financial and certain nonfinancial transactions that directly affect the processing of financial transactions.' },
      { term: 'Management Information System (MIS)', def: 'Processes nonfinancial transactions not normally handled by AIS, such as production planning, market research, and sales forecasting.' },
      { term: 'Transaction Processing System (TPS)', def: 'Subsystem of AIS central to operations, consisting of revenue, expenditure, and conversion cycles.' },
      { term: 'GL/FRS', def: 'General Ledger / Financial Reporting System producing mandatory legal financial statements (nondiscretionary).' },
      { term: 'MRS', def: 'Management Reporting System providing discretionary internal reports (budgets, variance reports) for decision making.' },
      { term: 'REA Model', def: 'An accounting framework proposed in 1982 modeling Resources, Events, and Agents, structuring data around business events rather than traditional journals and ledgers.' },
      { term: 'ERP System', def: 'Enterprise Resource Planning software that integrates all business processes across departments using unified modular packages.' }
    ],
    mainIdeas: [
      'Every level of management requires different granularity of information: operations needs detailed operational data, middle management needs tactical data, and top management requires summarized strategic information.',
      'The difference between data and information lies in the effect on user behavior: data are unrefined facts, whereas information reduces uncertainty and drives decisions.',
      'Flat files create data silos with high storage duplication and updating hazards. Relational database and ERP systems solve this through centralized, shared data models.'
    ],
    importantRelationships: [
      'Data collection rules: Relevance (capture only what adds info) + Efficiency (collect only once).',
      'Data hierarchy: Multiple attributes compose a record; multiple records of the same class compose a file; multiple files compose the database.',
      'Trade-off in Information Generation: Absolute accuracy is balanced against timeliness within the user\'s decision time frame.'
    ],
    chapterSummaryText: 
      'Chapter 1 establishes the conceptual foundation of Accounting Information Systems. Information is treated as an essential economic resource that flows vertically and horizontally across the enterprise. An information system is decomposed into AIS (handling financial and finance-related events) and MIS (handling nonfinancial operational areas). The AIS comprises three key subsystems: TPS, GL/FRS, and MRS. Under the general model, data proceeds from sources through collection, processing, database management, and information generation to end users. The evolution of systems demonstrates a progression from manual systems through flat-file legacy architectures to relational databases, REA modeling, and modern Enterprise Resource Planning (ERP) packages.',
    keyTakeaways: [
      'Information is a primary business resource.',
      'AIS produces both mandatory external reports (GL/FRS) and discretionary internal management reports (MRS).',
      'To be useful, information must possess relevance, timeliness, accuracy, completeness, and appropriate summarization.',
      'Legacy flat files suffer from data redundancy, multiple updates, lack of currency, and task-data dependency.',
      'ERP packages integrate business processes across functional silos using a unified database.'
    ]
  },
  pdfPages: [
    {
      pageNumber: 1,
      title: 'Chapter 1: The Information Environment & What is a System',
      sections: [
        {
          heading: '1.1. The Information Environment',
          paragraphs: [
            'Like other business resources (e.g. raw materials, capital, and labor), information is vital for the survival of a business organization. Thus, information is a business resource. Every business day, vast quantities of information flow to decision makers and other users to meet a variety of internal needs.',
            'In addition, information flows out from the organization to external users, such as customers, suppliers, and stakeholders who have an interest in the firm.'
          ],
          diagramDesc: 'Figure 1: Internal and External Flows of Information Pyramid (Top Management -> Middle Management -> Operations Management -> Operations Personnel; Flows with Customers, Suppliers, and Stakeholders).'
        },
        {
          heading: '1.1.1. What is a System?',
          paragraphs: [
            'System is a set of interrelated components that interact to achieve a given goal. Natural systems range from the atom to the universe. Artificial systems are manmade (clocks, airplanes, social and information systems).',
            'Generally, system is a group of two or more interrelated components or subsystems that serve a common purpose.'
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'System Characteristics & Information Systems Framework',
      sections: [
        {
          heading: 'System Characteristics',
          bullets: [
            'Multiple Components: Must contain more than one part.',
            'Relatedness: A common purpose relates the multiple parts.',
            'System versus Subsystem: Interchangeable terms depending on focus of attention.',
            'Purpose: Must serve at least one purpose; when it ceases to serve purpose, replace it.',
            'System Decomposition: Dividing the system into smaller subsystems in a hierarchy.',
            'Subsystem Interdependency: Ability to achieve goal depends on harmonious interaction.'
          ]
        },
        {
          heading: '1.1.2. An Information Systems Framework',
          paragraphs: [
            'The information system is the set of formal procedures by which data are collected, processed into information, and distributed to users.',
            'Notice that two broad classes of systems emerge: AIS and MIS.'
          ],
          diagramDesc: 'Figure 2: Information Systems -> AIS (GL/FRS, TPS [Expenditure, Conversion, Revenue], MRS) and MIS (Financial Management, Marketing, Human Resource Systems).'
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'Transactions & AIS Subsystems',
      sections: [
        {
          heading: 'Financial vs. Nonfinancial Transactions',
          paragraphs: [
            'A transaction is an event that affects or is of interest to the organization and is processed as a unit of work.',
            'Financial transactions: Economic events affecting assets and equities, measured in monetary terms. Legal obligation to process correctly.',
            'Nonfinancial transactions: Events that do not meet the narrow definition of a financial transaction (e.g., adding a new raw material supplier).'
          ]
        },
        {
          heading: '1.1.2.1. The Accounting Information System (AIS)',
          paragraphs: [
            'AIS processes financial transactions and nonfinancial transactions that directly affect financial transaction processing.',
            'Three major subsystems: (1) TPS, (2) GL/FRS, and (3) MRS.'
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'AIS Subsystems & General Model for AIS',
      sections: [
        {
          heading: '1.1.3. Roles of Subsystems',
          paragraphs: [
            'TPS consists of three transaction cycles: revenue cycle, expenditure cycle, and conversion cycle.',
            'GL/FRS produces traditional financial statements for external users (nondiscretionary reporting).',
            'MRS provides internal management with special-purpose reports (discretionary reporting).'
          ]
        },
        {
          heading: '1.1.4. A General Model for AIS',
          paragraphs: [
            'Elements of general model: (a) end users, (b) data sources, (c) data collection, (d) data processing, (e) database management, (f) information generation, and (g) feedback.'
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'General Model: Data vs Information & Data Collection',
      sections: [
        {
          heading: 'Data versus Information',
          paragraphs: [
            'Data are facts that have no direct effect on the user. Information causes the user to take an action that he or she otherwise could not, or would not, have taken.',
            'Information allows users to resolve conflicts, reduce uncertainty, and make decisions.'
          ],
          diagramDesc: 'Figure 4: General Model for AIS showing External/Internal Data Sources -> Data Collection -> Data Processing -> Information Generation -> End Users; with Database Management and Feedback loops.'
        },
        {
          heading: 'Data Collection Rules',
          bullets: [
            'Relevance: The information system should capture only relevant data.',
            'Efficiency: Procedures are designed to collect data only once, avoiding redundancy and inconsistency.'
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      title: 'Database Management & Data Hierarchy',
      sections: [
        {
          heading: 'Data Hierarchy',
          bullets: [
            'Data Attribute: Most elemental piece of potentially useful data in the database.',
            'Record: Complete set of attributes for a single occurrence within an entity class.',
            'Primary Key: Unique identifier attribute assigned to records (e.g. Customer Account Number).',
            'File: Complete set of records of an identical class (e.g. Accounts Receivable file).'
          ],
          diagramDesc: 'Figure 5: Data Hierarchy showing Attributes of Accounts Receivable -> Accounts Receivable Record -> Accounts Receivable File.'
        }
      ]
    },
    {
      pageNumber: 7,
      title: 'Information Generation Characteristics',
      sections: [
        {
          heading: 'Characteristics of Useful Information',
          bullets: [
            'Relevance: Contents must serve a purpose for decision-making.',
            'Timeliness: Must be no older than the time period of the action it supports.',
            'Accuracy: Free from material error. Designers balance accuracy and timeliness.',
            'Completeness: No essential piece of information should be missing.',
            'Summarization: Aggregated to match user level; higher management needs higher summarization.'
          ]
        },
        {
          heading: 'Database Management Tasks',
          bullets: [
            'Storage: Assigns keys and stores records in proper locations.',
            'Retrieval: Locates and extracts existing records for processing.',
            'Deletion: Permanently removes obsolete or redundant records.'
          ]
        }
      ]
    },
    {
      pageNumber: 8,
      title: 'Objectives & Acquisition of Information Systems',
      sections: [
        {
          heading: '1.1.5. Three Fundamental Objectives',
          bullets: [
            '1. To support the stewardship function of management.',
            '2. To support management decision making.',
            '3. To support the firm’s day-to-day operations.'
          ]
        },
        {
          heading: '1.1.6. Commercial Software Types',
          bullets: [
            'Turnkey systems: Completely finished and tested, ready for implementation.',
            'Backbone systems: Preprogrammed primary logic; vendor customizes user interfaces.',
            'Vendor-supported systems: Custom systems purchased commercially and maintained by vendor.'
          ]
        }
      ]
    },
    {
      pageNumber: 9,
      title: 'Evolution: Manual & Flat-File Models',
      sections: [
        {
          heading: '1.2.1. The Manual Process Model',
          paragraphs: [
            'Oldest form; physical documents, journals, and ledgers. Facilitates understanding internal control activities like segregation of duties, supervision, independent verification, and audit trails.'
          ]
        },
        {
          heading: '1.2.2. The Flat-File Model',
          paragraphs: [
            'Associated with legacy mainframe systems. Stand-alone applications where users own their data files.',
            'Three primary problems caused by data redundancy: Data Storage costs, Data Updating problems, and Currency of Information lag. Also causes Task-Data Dependency.'
          ]
        }
      ]
    },
    {
      pageNumber: 10,
      title: 'Evolution: Database Model & REA Model',
      sections: [
        {
          heading: '1.2.3. The Database Model',
          paragraphs: [
            'Pools data into a common database controlled by a Database Management System (DBMS). Solves flat-file issues by eliminating redundancy, allowing single updates, and providing task-data independence.'
          ]
        },
        {
          heading: '1.2.4. The REA Model',
          paragraphs: [
            'Proposed in 1982 by William McCarthy. Accounting framework modeling Resources, Events, and Agents.',
            'Resources: Assets of the firm (scarce and controlled). Does NOT include Accounts Receivable (an artifact).',
            'Events: Phenomena affecting resource changes (production, exchange, distribution).',
            'Agents: Individuals and departments participating in economic events (clerks, vendors, customers).'
          ]
        }
      ]
    },
    {
      pageNumber: 11,
      title: 'Evolution: ERP Systems',
      sections: [
        {
          heading: '1.2.5. Enterprise Resource Planning (ERP) Systems',
          paragraphs: [
            'Information system model that automates and integrates key business processes across the organization.',
            'Breaks down traditional functional barriers through shared data and common practices.',
            'ERP modules: Asset Management, Financial Accounting, Human Resources, Plant Maintenance, Production Planning, Quality Management, Sales & Distribution, Inventory Management.'
          ]
        }
      ]
    }
  ]
};
