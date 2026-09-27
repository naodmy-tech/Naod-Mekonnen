import { GlossaryTerm } from '../types';

export const comprehensiveGlossary: GlossaryTerm[] = [
  {
    id: 'term-ais',
    term: 'Accounting Information System (AIS)',
    definition: 'A subsystem of the organization\'s information system that processes financial transactions and nonfinancial transactions that directly affect the processing of financial transactions.',
    chapterNumber: 1,
    category: 'Foundations'
  },
  {
    id: 'term-mis',
    term: 'Management Information System (MIS)',
    definition: 'An information system that processes nonfinancial transactions that are not normally processed by traditional AIS, such as production scheduling, sales forecasting, and market research.',
    chapterNumber: 1,
    category: 'Foundations'
  },
  {
    id: 'term-tps',
    term: 'Transaction Processing System (TPS)',
    definition: 'The central operational subsystem of AIS that converts economic events into financial transactions, records them in accounting records (journals/ledgers), and distributes information across three transaction cycles.',
    chapterNumber: 1,
    category: 'Foundations'
  },
  {
    id: 'term-glfrs',
    term: 'General Ledger / Financial Reporting System (GL/FRS)',
    definition: 'An integrated subsystem that compiles summaries of transaction cycle activities, updates general ledger control accounts, and produces mandatory external financial statements and tax filings.',
    chapterNumber: 1,
    category: 'Reporting'
  },
  {
    id: 'term-mrs',
    term: 'Management Reporting System (MRS)',
    definition: 'An internal AIS subsystem providing special-purpose discretionary financial reports (budgets, variance reports, CVP analyses) needed by management for planning, controlling, and decision making.',
    chapterNumber: 1,
    category: 'Reporting'
  },
  {
    id: 'term-financial-trans',
    term: 'Financial Transaction',
    definition: 'An economic event that directly affects the assets and equities of the organization, is reflected in its accounts, and is measured in monetary terms.',
    chapterNumber: 1,
    category: 'Transactions'
  },
  {
    id: 'term-nonfinancial-trans',
    term: 'Nonfinancial Transaction',
    definition: 'An event processed by an enterprise information system that does not meet the narrow definition of a financial transaction (e.g. adding a new vendor or updating customer contact info).',
    chapterNumber: 1,
    category: 'Transactions'
  },
  {
    id: 'term-data-vs-info',
    term: 'Data vs. Information',
    definition: 'Data are unprocessed raw facts that have no direct effect on the user. Information is data that has been processed to cause a user to take action, resolve conflict, or reduce uncertainty.',
    chapterNumber: 1,
    category: 'Foundations'
  },
  {
    id: 'term-data-hierarchy',
    term: 'Data Hierarchy (Attribute, Record, File)',
    definition: 'The logical structure of database contents: an Attribute is the most elemental piece of data; a Record is a complete set of attributes for a single occurrence; a File is a complete set of records of an identical class.',
    chapterNumber: 1,
    category: 'Database'
  },
  {
    id: 'term-turnkey',
    term: 'Turnkey System',
    definition: 'A completely finished, pretested commercial software package that is ready for immediate implementation by client organizations with standard business processes.',
    chapterNumber: 1,
    category: 'Acquisition'
  },
  {
    id: 'term-backbone',
    term: 'Backbone System',
    definition: 'A compromise commercial software package with preprogrammed primary processing logic where the vendor customizes user interfaces to fit client specifications.',
    chapterNumber: 1,
    category: 'Acquisition'
  },
  {
    id: 'term-rea',
    term: 'REA Model (Resources, Events, Agents)',
    definition: 'An event-driven accounting framework proposed in 1982 by William McCarthy that structures relational database data around business events rather than traditional journals, ledgers, or chart of accounts.',
    chapterNumber: 1,
    category: 'Models'
  },
  {
    id: 'term-erp',
    term: 'Enterprise Resource Planning (ERP)',
    definition: 'An integrated multi-module software package that automates and integrates core business processes (finance, HR, manufacturing, supply chain) across the entire organization using a shared database.',
    chapterNumber: 1,
    category: 'Systems'
  },
  {
    id: 'term-audit-trail',
    term: 'Audit Trail',
    definition: 'A verifiable network of source documents, journals, ledgers, and computer files that allows tracing transactions from initiation through financial statements, and vice versa.',
    chapterNumber: 2,
    category: 'Controls'
  },
  {
    id: 'term-turnaround-doc',
    term: 'Turnaround Document',
    definition: 'A product document produced by one computer system that is sent to a third party (e.g. customer) and returned to become a source document for another system (e.g. remittance advice).',
    chapterNumber: 2,
    category: 'Documentation'
  },
  {
    id: 'term-master-file',
    term: 'Master File',
    definition: 'A permanent computer file containing cumulative account data (such as the general ledger or accounts receivable subsidiary ledger) that is updated by transactions.',
    chapterNumber: 2,
    category: 'Database'
  },
  {
    id: 'term-transaction-file',
    term: 'Transaction File',
    definition: 'A temporary file of transaction records created to update or alter data in a corresponding master file.',
    chapterNumber: 2,
    category: 'Database'
  },
  {
    id: 'term-reference-file',
    term: 'Reference File',
    definition: 'A computer file storing standard lookup guidelines and benchmark parameters (tax tables, price lists, customer credit limits) used during transaction processing.',
    chapterNumber: 2,
    category: 'Database'
  },
  {
    id: 'term-dfd',
    term: 'Data Flow Diagram (DFD)',
    definition: 'A system documentation technique using standardized symbols (entities, processes, data stores, data flows) to model the logical flow and transformation of data across business processes.',
    chapterNumber: 2,
    category: 'Documentation'
  },
  {
    id: 'term-erd',
    term: 'Entity Relationship Diagram (ERD)',
    definition: 'A conceptual data modeling diagram depicting entities (resources, events, agents) and their relationships, defined by cardinality (1:1, 1:M, M:M).',
    chapterNumber: 2,
    category: 'Documentation'
  },
  {
    id: 'term-batch-processing',
    term: 'Batch Processing',
    definition: 'A data processing approach where transactions are collected and assembled into batches for delayed processing, resulting in an operational time lag but utilizing fewer resources.',
    chapterNumber: 2,
    category: 'Processing'
  },
  {
    id: 'term-realtime-processing',
    term: 'Real-Time Processing',
    definition: 'A data processing method where transactions are processed individually at the immediate moment of occurrence, eliminating time lags and shortening cash cycles.',
    chapterNumber: 2,
    category: 'Processing'
  },
  {
    id: 'term-fraud',
    term: 'Common Law Fraud',
    definition: 'A false representation of a material fact made with intent to deceive, upon which the victim justifiably relies, resulting in quantifiable injury or economic loss.',
    chapterNumber: 3,
    category: 'Fraud'
  },
  {
    id: 'term-employee-fraud',
    term: 'Employee Fraud',
    definition: 'Non-management misappropriation of assets characterized by three sequential steps: stealing an asset, converting it to usable cash, and concealing the crime.',
    chapterNumber: 3,
    category: 'Fraud'
  },
  {
    id: 'term-mgmt-fraud',
    term: 'Management Fraud',
    definition: 'Deceptive financial misstatement perpetrated above internal control structures to inflate stock prices, boost bonuses, or conceal impending insolvency.',
    chapterNumber: 3,
    category: 'Fraud'
  },
  {
    id: 'term-fraud-triangle',
    term: 'Fraud Triangle',
    definition: 'A behavioral framework stating that fraud occurs through the convergence of three motivating forces: situational pressures, perceived opportunities, and personal ethics/rationalization.',
    chapterNumber: 3,
    category: 'Fraud'
  },
  {
    id: 'term-lapping',
    term: 'Lapping',
    definition: 'An asset misappropriation scheme where stolen cash from customer account payments is concealed by repeatedly applying payments received from subsequent customers.',
    chapterNumber: 3,
    category: 'Fraud'
  },
  {
    id: 'term-pdc-model',
    term: 'PDC Model (Preventive, Detective, Corrective)',
    definition: 'A tripartite internal control model: Preventive controls passively screen errors; Detective controls sound alarms upon departure from standards; Corrective controls reverse detected errors.',
    chapterNumber: 3,
    category: 'Controls'
  },
  {
    id: 'term-sas-78',
    term: 'SAS 78 / COSO Internal Control Framework',
    definition: 'Authoritative auditing framework specifying five control components: Control Environment, Risk Assessment, Information and Communication, Monitoring, and Control Activities.',
    chapterNumber: 3,
    category: 'Controls'
  },
  {
    id: 'term-compensating-control',
    term: 'Compensating Control (Supervision)',
    definition: 'Management supervision employed in small firms where limited staff size makes complete segregation of duties impossible, compensating for structural weaknesses.',
    chapterNumber: 3,
    category: 'Controls'
  },
  {
    id: 'term-blind-copy',
    term: 'Blind Copy Purchase Order',
    definition: 'A copy of the purchase order delivered to receiving that intentionally omits quantities and prices to compel receiving workers to physically count and inspect incoming merchandise.',
    chapterNumber: 4,
    category: 'Purchases'
  },
  {
    id: 'term-voucher-packet',
    term: 'Voucher Packet',
    definition: 'A documented file containing purchase requisition, purchase order, receiving report, and vendor invoice verifying that a liability is legitimate before payment authorization.',
    chapterNumber: 4,
    category: 'Purchases'
  },
  {
    id: 'term-cash-prelist',
    term: 'Cash Prelist (Remittance List)',
    definition: 'A control document prepared in the mail room listing all customer checks received, used by internal verification to reconcile bank deposits against AR postings.',
    chapterNumber: 4,
    category: 'Revenue'
  },
  {
    id: 'term-bom',
    term: 'Bill of Materials (BOM)',
    definition: 'A manufacturing document detailing the specific components, raw materials, and subassembly quantities needed to build a single batch of finished goods.',
    chapterNumber: 4,
    category: 'Conversion'
  },
  {
    id: 'term-route-sheet',
    term: 'Route Sheet',
    definition: 'A document outlining the sequential manufacturing path, work centers, and standard machine and labor hours necessary to process a production batch.',
    chapterNumber: 4,
    category: 'Conversion'
  },
  {
    id: 'term-move-ticket',
    term: 'Move Ticket',
    definition: 'An authorization document that accompanies WIP batches between manufacturing departments, recording labor operations and transfer custody.',
    chapterNumber: 4,
    category: 'Conversion'
  },
  {
    id: 'term-block-coding',
    term: 'Block Coding',
    definition: 'A data coding scheme that reserves numerical ranges for whole classes of accounts or items, allowing seamless insertions without restructuring (e.g. Chart of Accounts).',
    chapterNumber: 5,
    category: 'Coding'
  },
  {
    id: 'term-journal-voucher',
    term: 'Journal Voucher',
    definition: 'The authoritative document providing summary financial amounts and affected accounts, acting as the sole input to update the general ledger.',
    chapterNumber: 5,
    category: 'Reporting'
  },
  {
    id: 'term-span-of-control',
    term: 'Span of Control',
    definition: 'The number of subordinates reporting directly to a manager; narrow spans require detailed operational reports, while broad spans necessitate aggregated exception reports.',
    chapterNumber: 5,
    category: 'Management'
  },
  {
    id: 'term-management-by-exception',
    term: 'Management by Exception',
    definition: 'A management principle where managers limit attention to potential problem areas and significant variances from budget rather than micromanaging normal operations.',
    chapterNumber: 5,
    category: 'Management'
  },
  {
    id: 'term-responsibility-center',
    term: 'Responsibility Center',
    definition: 'An organizational business unit organized as a Cost Center, Profit Center, or Investment Center where the unit manager is held accountable strictly for controllable results.',
    chapterNumber: 5,
    category: 'Reporting'
  },
  {
    id: 'term-goal-congruence',
    term: 'Goal Congruence',
    definition: 'The condition where lower-level managers pursuing their personal or departmental goals simultaneously promote the overarching strategic objectives of the firm.',
    chapterNumber: 5,
    category: 'Management'
  },
  {
    id: 'term-info-overload',
    term: 'Information Overload',
    definition: 'A dysfunctional state occurring when managers receive more unsummarized data than they can assimilate, leading them to ignore formal reports and rely on informal hunches.',
    chapterNumber: 5,
    category: 'Management'
  },
  {
    id: 'term-task-data-dependency',
    term: 'Task-Data Dependency',
    definition: 'The major limitation of the legacy flat-file model where a user cannot obtain new information because they are limited strictly to the private files they own and manage.',
    chapterNumber: 6,
    category: 'Database'
  },
  {
    id: 'term-dba',
    term: 'Database Administrator (DBA)',
    definition: 'The executive specialist or team tasked with overall database planning, schema design, security implementation, operational performance monitoring, and capacity growth.',
    chapterNumber: 6,
    category: 'Database'
  },
  {
    id: 'term-relational-restrict',
    term: 'Restrict (Relational Algebra)',
    definition: 'A relational database operation that extracts specified rows (tuples) from a table based on logical criteria, generating a virtual table.',
    chapterNumber: 6,
    category: 'Database'
  },
  {
    id: 'term-relational-project',
    term: 'Project (Relational Algebra)',
    definition: 'A relational database operation that extracts specified columns (attributes) from a table while eliminating duplicate rows, creating a virtual table.',
    chapterNumber: 6,
    category: 'Database'
  },
  {
    id: 'term-relational-join',
    term: 'Join (Relational Algebra)',
    definition: 'A relational database operation that links and combines rows from two separate tables sharing a common primary or foreign key into a new consolidated table.',
    chapterNumber: 6,
    category: 'Database'
  },
  {
    id: 'term-sdlc',
    term: 'Systems Development Life Cycle (SDLC)',
    definition: 'A formal sequence of phases (Systems Strategy, Project Initiation, Construct, and Maintenance) used to identify system requirements and build/deploy new systems.',
    chapterNumber: 7,
    category: 'SDLC'
  },
  {
    id: 'term-telos',
    term: 'TELOS Feasibility Framework',
    definition: 'An evaluation methodology assessing project viability across five dimensions: Technical, Economic, Legal, Operational, and Schedule feasibility.',
    chapterNumber: 7,
    category: 'SDLC'
  },
  {
    id: 'term-physical-tar-pit',
    term: 'Physical Tar Pit',
    definition: 'The trap in systems analysis where an analyst becomes excessively absorbed in documenting the current manual system, stifling innovative, forward-thinking system designs.',
    chapterNumber: 7,
    category: 'SDLC'
  },
  {
    id: 'term-escapable-costs',
    term: 'Escapable Costs',
    definition: 'Costs directly tied to an existing legacy system that will genuinely vanish when the system is replaced; only escapable costs can be counted as savings in cost-benefit studies.',
    chapterNumber: 7,
    category: 'SDLC'
  },
  {
    id: 'term-npv',
    term: 'Net Present Value (NPV)',
    definition: 'A capital budgeting calculation deducting the present value of all system investment costs from the present value of expected future benefits over the system\'s useful life.',
    chapterNumber: 7,
    category: 'SDLC'
  }
];
