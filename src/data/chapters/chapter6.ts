import { ChapterData } from '../../types';

export const chapter6Data: ChapterData = {
  id: 'ch6',
  number: 6,
  title: 'Database Management Systems',
  subtitle: 'Flat-File vs. Database Approach, DBMS Elements, DBA Functions & Relational Algebra',
  shortDescription: 'Explores the database approach to managing organizational data resources, contrasting flat-file legacy limitations with centralized database advantages, detailing the roles of the DBMS and DBA, and analyzing the relational database model (tables, restrict, project, join, ER modeling).',
  totalPages: 7,
  fileSize: '1.9 MB',
  status: 'not_started',
  sections: [
    {
      id: 'sec6-1',
      title: '6.1. Flat-File vs. Database Approach',
      content: [
        'Many legacy systems are characterized by the flat-file approach where individual users own private data files. This creates significant problems:',
        '1. Data Storage: Capturing identical data across multiple departments incurs high collection and storage costs. Data may be duplicated dozens, hundreds, or thousands of times.',
        '2. Data Updating: Changes (such as customer address updates) must be performed independently on each user’s private files, increasing administrative costs.',
        '3. Currency of Information: Failure to disseminate updates causes decisions to be made using stale, outdated data.',
        '4. Task-Data Dependency: Users cannot obtain additional information as needs change because data access is constrained to the files they directly own and control.'
      ]
    },
    {
      id: 'sec6-2',
      title: '6.2. The Database Approach & DBMS',
      content: [
        'The database approach pools organizational data into a common repository shared by all authorized users, solving flat-file limitations through data sharing (the absence of private ownership).',
        'Characteristics of the Database Approach:',
        '• No Data Redundancy: Each data element is stored only once, eliminating duplication and slashing storage expenses.',
        '• Single Update: Any change requires only a single update procedure, ensuring instant consistency.',
        '• Current Values: Modifications by one user immediately become visible to all other authorized users.',
        '• Task-Data Independence: Users have access to the complete domain of organizational data within authorized limits.',
        'The Database Management System (DBMS):',
        'Stands between user application programs and the physical database. DBMS controls access by authenticating user authority, executing validated data requests, and denying unauthorized queries.'
      ]
    },
    {
      id: 'sec6-3',
      title: '6.4. Three Conceptual Models & Elements of Database Environment',
      content: [
        'Three conceptual database architectures have evolved in business:',
        '1. Hierarchical Model: Navigational structured model organizing data into tree-like parent-child relationships.',
        '2. Network Model: Navigational structured model permitting complex many-to-many relationships via predefined pointers.',
        '3. Relational Model: Proposed by E.F. Codd in the late 1960s based on relational algebra and set theory. Highly flexible, allowing users to create new and dynamic query paths.',
        'Elements of the Database Environment:',
        '• Users: Access via (1) Application Programs (batch or real-time calls to DBMS) or (2) Direct Query (built-in ad hoc query facility).',
        '• DBMS Software: Provides Program Development tools, Backup and Recovery (restoring earlier states after disk failures or corruption), Usage Reporting (tracking access patterns), and Database Access Languages (DDL, DML, Query Language).',
        '• Database Administrator (DBA): Individual or department responsible for managing the shared database resource across planning, design, implementation, maintenance, and growth.',
        '• Physical Database: The lowest physical level consisting of magnetic spots on disks.'
      ],
      tableData: {
        headers: ['DBA Responsibility Area', 'Key Tasks and Functions'],
        rows: [
          ['Database Planning', 'Develop database strategy, define database environment, define data requirements, develop data dictionary.'],
          ['Design', 'Design logical schema, external user subschemas, internal physical view, and database security controls.'],
          ['Implementation', 'Determine access policies, implement security controls, specify test procedures, establish programming standards.'],
          ['Operation & Maintenance', 'Evaluate performance, reorganize database as user needs expand, review operating standards and procedures.'],
          ['Change & Growth', 'Plan for future capacity change, evaluate new database technology.'],
        ]
      }
    },
    {
      id: 'sec6-4',
      title: '6.6. The Relational Database Model & Relational Algebra',
      content: [
        'E.F. Codd established that a system is relational if it: (a) Represents data as two-dimensional tables (relations) of rows (tuples/records) and columns (attributes), and (b) Supports the relational algebra functions of Restrict, Project, and Join.',
        '• Restrict: Extracts specified rows from a table based on conditions, creating a virtual table subset.',
        '• Project: Extracts specified attributes (columns) from a table, eliminating unneeded fields to create a virtual table.',
        '• Join: Builds a new physical table by concatenating matching rows from two separate tables sharing a common key attribute.',
        'Core Relational Concepts:',
        '• Entity: Anything about which the organization captures data (physical like Inventory or Customer, or conceptual like Sales or Accounts Receivable). Named as a singular noun.',
        '• Occurrence: The number of individual instances or records pertaining to an entity (e.g. 100 employees = 100 occurrences).',
        '• Attributes: Data elements that define an entity (Customer Number, Customer Name, Address, Credit Limit). Every record must have a primary key attribute to guarantee unique identification.'
      ]
    }
  ],
  summary: {
    learningObjectives: [
      'Compare the flat-file approach with the database approach to data management.',
      'Explain the role of the Database Management System (DBMS) as an access controller.',
      'Distinguish between hierarchical, network, and relational database architectures.',
      'Identify the four elements of the database environment.',
      'Detail the five functional areas of the Database Administrator (DBA).',
      'Explain the relational algebra functions: Restrict, Project, and Join.',
      'Define entity, occurrence, and attribute in relational data modeling.'
    ],
    keyConcepts: [
      'Flat-file pitfalls: Data redundancy, updating bottlenecks, currency lag, task-data dependency',
      'Database advantages: Single update, no redundancy, task-data independence',
      'DBMS access control layer and languages (DDL, DML, SQL/Query Language)',
      'Navigational (hierarchical, network) vs Relational architectures',
      'DBA role and responsibilities across the database lifecycle',
      'Relational algebra operations: Restrict (rows), Project (columns), Join (merging tables)',
      'Entity-Relationship modeling: Entities, Occurrences, and Unique Primary Key Attributes'
    ],
    importantTerms: [
      { term: 'Task-Data Dependency', def: 'The condition in flat-file environments where a user\'s information set is restricted to the specific private data files they own and control.' },
      { term: 'Database Management System (DBMS)', def: 'Software that stands between user programs and the physical database to enforce access authorization, security, and data manipulation.' },
      { term: 'Database Administrator (DBA)', def: 'The person or department responsible for planning, designing, implementing, maintaining, and controlling access to the organizational database.' },
      { term: 'Restrict', def: 'A relational algebra operation that extracts specified rows (tuples) from a table based on filtering criteria.' },
      { term: 'Project', def: 'A relational algebra operation that extracts specified columns (attributes) from a table.' },
      { term: 'Join', def: 'A relational algebra operation that combines two tables into a new table by matching records sharing a common key attribute.' }
    ],
    mainIdeas: [
      'Centralizing data in a relational database breaks down organizational silos and guarantees that changes entered anywhere are immediately available everywhere.',
      'Access security is delegated to the DBMS and DBA, ensuring users only see the specific data views (subschemas) authorized for their roles.',
      'Relational algebra operations allow end users and applications to extract exactly the rows and columns required without modifying underlying physical tables.'
    ],
    importantRelationships: [
      'Flat-file model has data ownership by user; Database model has data pooled and managed organization-wide by the DBMS.',
      'Entity = table; Occurrence = row/tuple; Attribute = column/field; Primary Key = unique row identifier.'
    ],
    chapterSummaryText: 
      'Chapter 6 examines database management systems as the core data engine of modern AIS. Moving away from the data silos, redundancy, and task-data dependency of legacy flat-file environments, the database approach pools data into a centrally governed architecture. The DBMS acts as an authorization buffer between users and the physical disk. The Database Administrator oversees planning, logical design, security, and performance. In the relational model founded by E.F. Codd, data is structured into two-dimensional tables manipulated via Restrict, Project, and Join operations.',
    keyTakeaways: [
      'The database model eliminates data redundancy and supports single updates.',
      'DBMS provides programmatic access and interactive ad hoc queries.',
      'The DBA manages security, schemas, and operational performance.',
      'Relational models operate through two-dimensional tables rather than inflexible hardwired navigational pointers.',
      'Restrict filters rows, Project filters columns, and Join integrates related tables.'
    ]
  },
  pdfPages: [
    {
      pageNumber: 1,
      title: 'Chapter 6: Flat-File vs Database Approach',
      sections: [
        {
          heading: '6.1. Flat-File Legacy Problems',
          paragraphs: [
            'Users own their data files in flat-file architectures. Causes data redundancy and 4 core problems:',
            'a. Data Storage: Storing identical data across departments multiplies storage costs.',
            'b. Data Updating: Changes must be made separately in each department’s files.'
          ],
          diagramDesc: 'Figure 1: Flat-File Data Management showing User 1, 2, 3 transactions interacting with separate files containing duplicated data element B.'
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'Currency of Info, Task-Data Dependency & Database Concept',
      sections: [
        {
          heading: 'Flat-File Issues (Cont\'d)',
          bullets: [
            'c. Currency of Information: Failure to update all copies results in decisions based on stale data.',
            'd. Task-Data Dependency: Inability to obtain data outside user’s own private files.'
          ]
        },
        {
          heading: '6.2. The Database Approach',
          bullets: [
            'No data redundancy: Stored once, cutting costs.',
            'Single update: Keeps database current at low cost.',
            'Current values: Instant visibility across enterprise.'
          ],
          diagramDesc: 'Figure 2: The Database Concept showing Users 1, 2, 3 accessing a shared pooled Database.'
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'The DBMS & Three Conceptual Models',
      sections: [
        {
          heading: '6.3. The DBMS Role',
          paragraphs: [
            'The DBMS stands between user programs and physical database to validate authorization and deny illegal access.',
            '6.4. Three Models: Hierarchical, Network (navigational structured paths), and Relational (E.F. Codd late 1960s, relational algebra).'
          ],
          diagramDesc: 'Figure 3: Database Concept with DBMS intermediary between Programs and Database.'
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'Elements of Database Environment & Users',
      sections: [
        {
          heading: '6.5. Four Elements of Database Environment',
          bullets: [
            '1. Users: Access via user application programs or direct query facility.',
            '2. DBMS: Provides controlled access environment.',
            '3. Database Administrator (DBA): Manages database resource.',
            '4. Physical Database: Lowest level on magnetic media.'
          ],
          diagramDesc: 'Figure 4: Detailed Elements of the Database Concept (Users, Programs, DBMS [DDL, DML, QL], DBA, Operating System, Physical DB).'
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'DBMS Features & Database Administrator (DBA)',
      sections: [
        {
          heading: 'DBMS Capabilities & DBA Functions',
          bullets: [
            'DBMS: Program development, backup/recovery, usage reporting, access languages.',
            'DBA Functions: Planning, Design (schema, subschemas), Implementation, Maintenance, and Growth.'
          ],
          table: {
            headers: ['DBA Area', 'Specific Duties'],
            rows: [
              ['Planning', 'Strategy, environment, data requirements, dictionary'],
              ['Design', 'Logical schema, subschemas, internal view, controls'],
              ['Implementation', 'Access policy, security controls, test procedures'],
              ['Maintenance', 'Evaluate performance, reorganize database'],
              ['Growth', 'Plan capacity, evaluate new technology']
            ]
          }
        }
      ]
    },
    {
      pageNumber: 6,
      title: 'Relational Model: Tables & Relational Algebra',
      sections: [
        {
          heading: '6.6. The Relational Database Model',
          paragraphs: [
            'E.F. Codd principles: 2D tables (Customer table with Cust Num [PK], Name, Address, Balance) and relational algebra.',
            'Restrict: Extracts specified rows.',
            'Project: Extracts specified columns.',
            'Join: Combines two tables on common key.'
          ],
          diagramDesc: 'Figure 5 & 6: Relational Customer table and diagrams illustrating Restrict (horizontal slice), Project (vertical slice), and Join (merged tables).'
        }
      ]
    },
    {
      pageNumber: 7,
      title: 'Relational Concepts: Entity, Occurrence, Attributes & ERD',
      sections: [
        {
          heading: '6.7. Concepts & ERD',
          bullets: [
            'Entity: Physical or conceptual object about which data is captured (singular noun, e.g. Customer, Product).',
            'Occurrence: Number of instances/records for an entity.',
            'Attributes: Data elements that define an entity; unique to that entity.',
            'Primary Key: Unique identifier attribute.'
          ],
          diagramDesc: 'Figure 7: Data Model Using ERD (Customer --Buys--> Product; Customer --Sends--> Payment).'
        }
      ]
    }
  ]
};
