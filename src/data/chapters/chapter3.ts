import { ChapterData } from '../../types';

export const chapter3Data: ChapterData = {
  id: 'ch3',
  number: 3,
  title: 'Ethics, Fraud, and Internal Control',
  subtitle: 'Business & Computer Ethics, Fraud Triangle & Schemes, SAS 78/COSO & Physical Controls',
  shortDescription: 'Examines business and computer ethics, common law fraud, employee vs management fraud, the fraud triangle, misappropriation schemes (lapping, ghost employees), and internal control frameworks including SAS 78, PDC model, and the six physical control categories.',
  totalPages: 11,
  fileSize: '2.5 MB',
  status: 'not_started',
  sections: [
    {
      id: 'sec3-1',
      title: '3.1. Ethical Issues in Business & Computer Ethics',
      content: [
        'Corporate scandals (Enron’s CFO Andy Fastow pocketing ~$40M, Tyco’s Kozowski, HealthSouth’s Scrushy, WorldCom’s Ebbers) highlight profound ethical breakdowns.',
        'Business ethics asks two central questions: (1) How do managers decide what is right in conducting business? and (2) Once managers recognize what is right, how do they achieve it?',
        'Ethical issues fall into four areas: Equity (executive salaries, comparable worth, product pricing); Rights (due process, screening, privacy, sexual harassment, diversity, whistleblowing); Honesty (conflicts of interest, record security, misleading ads, accurate reporting); and Exercise of Corporate Power (PACs, product safety, environmental issues, plant closures).',
        'Ethical Decision Principles: Proportionality (benefit must outweigh risks), Justice (benefits distributed fairly to risk-bearers), and Minimize Risk (avoid unnecessary risks).',
        'Computer Ethics: Analysis of the nature and social impact of computer technology and justifying policies for ethical use. Issues include Privacy (personal databases), Security vs. open access, Ownership of Intellectual Property (software piracy), Equity in Access (economic and linguistic divides), Environmental Issues (paper waste), Artificial Intelligence (accountability for expert systems), Unemployment & Displacement, and Misuse of Computers.'
      ],
      tableData: {
        headers: ['Ethical Area', 'Specific Business Practices and Decisions'],
        rows: [
          ['Equity', 'Executive Salaries, Comparable Worth, Product Pricing'],
          ['Rights', 'Corporate Due Process, Employee Health Screening, Employee Privacy, Sexual Harassment, Diversity, Equal Opportunity, Whistleblowing'],
          ['Honesty', 'Employee and Management Conflicts of Interest, Security of Organization Data, Misleading Advertising, Questionable Foreign Practices, Accurate Reporting of Shareholder Interests'],
          ['Exercise of Corporate Power', 'Political Action Committees (PACs), Product Safety, Environmental Issues, Divestment of Interests, Corporate Contributions, Downsizing and Plant Closures']
        ]
      }
    },
    {
      id: 'sec3-2',
      title: '3.2. Fraud and Accountants: Types & Motivations',
      content: [
        'Common Law Fraud requires five distinct legal conditions: (1) False representation (statement or nondisclosure), (2) Material fact (substantial inducing factor), (3) Intent to deceive, (4) Justifiable reliance by injured party, and (5) Injury or loss suffered by the victim.',
        'Two levels of fraud: Employee fraud (stealing an asset, converting it to cash, and concealing the crime to avoid detection) and Management fraud (more devious; misstating financial data, inflating earnings, escaping poor performance penalties, often above internal control structures and involving complex third-party transactions).',
        'Fraud-Motivating Forces (Fraud Triangle): Interaction of (1) Situational Pressures (debt, lifestyle, financial targets), (2) Opportunities (weak internal controls), and (3) Personal Characteristics / Ethics (rationalization). Low ethics + high pressure + high opportunity yields high fraud likelihood.',
        'Perpetrator Demographics: Non-managerial employees commit twice the incidents of managers and five times that of executives, but dollar losses are inversely related (executive fraud losses are exponentially larger). Male median losses are ~3x female losses. Older perpetrators (60+) cause ~29x larger losses than those under 25. Advanced degree holders steal significantly higher amounts than high school graduates.'
      ]
    },
    {
      id: 'sec3-3',
      title: '3.2.3. Fraud Schemes: Statements, Corruption & Misappropriation',
      content: [
        'Three broad categories of fraud systems:',
        '1. Fraudulent Statements: Typically management fraud involving financial misstatements (e.g., understating liabilities or inflating revenue to drive up stock prices).',
        '2. Corruption: Involves collusion with an outsider. Four principal types: (a) Bribery (giving/receiving value to influence lawful duties before an act), (b) Illegal Gratuities (giving value after an official act has occurred), (c) Conflicts of Interest (employee self-interest or acting for third party), and (d) Economic Extortion (threat of force or economic sanctions to obtain value).',
        '3. Asset Misappropriation: Theft of cash, inventory, supplies, equipment, or info. Common schemes: (a) Charges to Expense Accounts (offsetting stolen cash by debiting miscellaneous expense to keep assets = equities in balance), (b) Lapping (using Customer B’s check to cover stolen funds from Customer A, Customer C’s check for Customer B, in a rolling cycle), (c) Transaction Fraud (creating false purchase orders, fake invoices, or phantom/ghost employees on payroll).',
        'Computer Fraud Schemes across AIS Stages:',
        '• Data Collection stage: Simplest and most common; falsifying, deleting, or inserting fake transactions at data entry.',
        '• Data Processing stage: Program fraud (altering code, Trojan horses, viruses) and Operations fraud (misusing company computing power for private clients).',
        '• Database Management stage: Unauthorized remote access, alteration, deletion, or theft of database files.',
        '• Information Generation stage: Stealing or intercepting printed reports or digital transmission output.'
      ]
    },
    {
      id: 'sec3-4',
      title: '3.3. Internal Control Concepts, SAS 78 & Physical Controls',
      content: [
        'Internal Control System: Policies, practices, and procedures to achieve four broad objectives: (1) Safeguard assets, (2) Ensure accuracy and reliability of records, (3) Promote operational efficiency, and (4) Measure compliance with management policies.',
        'Four Guiding Assumptions: Management Responsibility, Reasonable Assurance (cost must not exceed benefits), Methods of Data Processing (objectives apply regardless of technology), and Inherent Limitations (error, collusion circumvention, management override, changing conditions).',
        'Exposures: Control weaknesses that increase risk to destruction of assets, theft, corruption of information, or system disruption.',
        'PDC Model: Preventive Controls (first line of defense, passive screening like prenumbered documents), Detective Controls (second line, alarms/discrepancy checks like price*qty recalculation), and Corrective Controls (reversing detected errors).',
        'SAS 78 / COSO Framework (5 Components): (1) Control Environment (tone at the top, integrity, ethics, board/audit committee oversight), (2) Risk Assessment, (3) Information & Communication, (4) Monitoring, and (5) Control Activities (IT controls & Physical controls).',
        'Six Categories of Physical Control Activities:',
        '1. Transaction Authorization: General (routine reorders at reorder point) vs. Specific (management approving credit limit overrides).',
        '2. Segregation of Duties: Three rules: Separate transaction authorization from processing; Separate asset custody from record-keeping; Structure to prevent collusion.',
        '3. Supervision: Compensating control when small staff size prevents complete segregation of duties.',
        '4. Accounting Records: Preserving source documents, journals, and ledgers to guarantee an audit trail.',
        '5. Access Control: Direct access (physical locks, safes, alarms) and Indirect access (controls over records/documents that authorize asset transfers).',
        '6. Independent Verification: Independent checks after the fact by uninvolved personnel (batch total reconciliation, physical inventory count vs records, subsidiary vs control account reconciliation, management reports).'
      ]
    }
  ],
  summary: {
    learningObjectives: [
      'Explain business ethics and computer ethics in modern corporate environments.',
      'Identify the five legal conditions required to prove common law fraud.',
      'Contrast employee fraud and management fraud characteristics.',
      'Analyze the fraud triangle: situational pressures, opportunities, and personal ethics.',
      'Identify fraud schemes including lapping, charges to expense accounts, and corruption.',
      'State the 4 internal control objectives, 4 assumptions, and PDC model.',
      'Explain the 5 components of SAS 78 and the 6 physical control activities.'
    ],
    keyConcepts: [
      'Business ethics four areas: Equity, Rights, Honesty, Corporate Power',
      'Computer ethics concerns (privacy, intellectual property, environmental impact)',
      'Common law fraud: False representation, Material fact, Intent, Justifiable reliance, Injury',
      'Employee fraud steps: Steal asset -> Convert to usable form -> Conceal',
      'Management fraud characteristics (above internal control, third-party maze)',
      'Fraud Triangle: Pressures, Opportunities, Ethics',
      'Lapping scheme (rolling embezzlement between customer receivable accounts)',
      'Four internal control objectives: Safeguard assets, Accurate records, Efficiency, Compliance',
      'Compensating control: Supervision when segregation is impractical',
      'Six physical controls: Authorization, Segregation of duties, Supervision, Accounting records, Access, Independent verification'
    ],
    importantTerms: [
      { term: 'Lapping', def: 'An asset misappropriation scheme where an employee uses customer checks from subsequent periods to conceal cash previously stolen from an earlier customer account.' },
      { term: 'Compensating Control', def: 'Close supervision used in small organizations to compensate for the absence of complete segregation of duties.' },
      { term: 'Reasonable Assurance', def: 'The internal control principle that no system is perfect and the cost of achieving improved control should not outweigh its expected benefits.' },
      { term: 'PDC Model', def: 'Preventive, Detective, and Corrective control structure.' },
      { term: 'SAS 78', def: 'Statement on Auditing Standards No. 78 specifying five internal control components: Control Environment, Risk Assessment, Information & Communication, Monitoring, and Control Activities.' },
      { term: 'Independent Verification', def: 'Review of transaction processing by individuals not directly involved in the transaction to identify errors after the fact.' }
    ],
    mainIdeas: [
      'Fraud requires concealment: stealing an asset creates a debit/credit imbalance that perpetrators hide via fictitious expenses, lapping, or unrecorded entries.',
      'Collusion between employees or with external parties bypasses standard segregation of duties, making independent verification critical.',
      'Internal controls provide reasonable, not absolute, assurance because human error, management override, and economic constraints remain present.'
    ],
    importantRelationships: [
      'Segregation of duties rule: Asset custody MUST be separated from record keeping, and authorization MUST be separated from processing.',
      'Supervision vs. Independent Verification: Supervision occurs in real-time during execution; verification is performed after the fact by an independent reviewer.'
    ],
    chapterSummaryText: 
      'Chapter 3 investigates ethics, fraud dynamics, and internal control structures. It details corporate ethical dimensions and computer-specific concerns. Business fraud requires five common law elements and is categorized into employee fraud and management fraud. The fraud triangle identifies situational pressure, opportunity, and personal ethics. Misappropriation schemes such as lapping and fraudulent expenses are countered by internal controls. Under SAS 78, internal control comprises five foundational components, enforced through IT application controls and six physical control activities.',
    keyTakeaways: [
      'Fraud requires five common law elements including intent and justifiable reliance.',
      'Management fraud occurs above normal control structures and creates financial statement illusions.',
      'Lapping conceals stolen cash using future customer receipts.',
      'Internal controls cannot guarantee total protection due to management override and collusion.',
      'Supervision acts as a vital compensating control when staff size is limited.'
    ]
  },
  pdfPages: [
    {
      pageNumber: 1,
      title: 'Chapter 3: Ethical Issues in Business',
      sections: [
        {
          heading: '3.1. Ethical Issues in Business',
          paragraphs: [
            'Scandals involving Enron’s Fastow ($40M), Tyco’s Kozowski, HealthSouth’s Scrushy, and WorldCom’s Ebbers show how executives enriched themselves while collapsing firms.',
            'Business ethics involves (1) deciding what is right and (2) achieving what is right.'
          ],
          table: {
            headers: ['Area', 'Practices'],
            rows: [
              ['Equity', 'Executive salaries, comparable worth, product pricing'],
              ['Rights', 'Due process, health screening, privacy, diversity, whistleblowing'],
              ['Honesty', 'Conflicts of interest, data security, misleading ads, accurate reporting'],
              ['Corporate Power', 'PACs, product safety, environmental issues, plant closures']
            ]
          }
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'Ethical Principles & Computer Ethics',
      sections: [
        {
          heading: '3.1.1.1. Ethical Decision Principles',
          bullets: [
            'Proportionality: Benefit from decision must outweigh risks.',
            'Justice: Benefits distributed fairly to risk-bearers.',
            'Minimize risk: Implement to minimize all risks and avoid unnecessary ones.'
          ]
        },
        {
          heading: '3.1.2. Computer Ethics',
          bullets: [
            'Privacy: Protecting personal data in large shared databases.',
            'Security: Balancing protection against freedom of access.',
            'Property Ownership: Software piracy and intellectual property.',
            'Equity in Access: Economic and language barriers.',
            'Environmental: Excessive paper printing and resource depletion.'
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'AI, Unemployment & Common Law Fraud',
      sections: [
        {
          heading: 'AI & Misuse',
          paragraphs: [
            'Expert systems reliance creates accountability questions for knowledge engineers and domain experts.',
            'Technological displacement causes unemployment.'
          ]
        },
        {
          heading: '3.2. Fraud and Accountants',
          bullets: [
            '1. False representation (statement or nondisclosure).',
            '2. Material fact (substantial factor inducing action).',
            '3. Intent to deceive.',
            '4. Justifiable reliance.',
            '5. Injury or loss to the victim.'
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'Employee vs Management Fraud & Fraud Triangle',
      sections: [
        {
          heading: 'Employee vs Management Fraud',
          paragraphs: [
            'Employee fraud involves 3 steps: (1) Stealing asset, (2) Converting to cash, (3) Concealing crime.',
            'Management fraud escapes detection until severe damage; misstates financial data above control structures.'
          ]
        },
        {
          heading: '3.2.1. Fraud-Motivating Forces',
          paragraphs: [
            'Interaction of Situational Pressures, Opportunities, and Personal Characteristics (Ethics).'
          ],
          diagramDesc: 'Figure 1: Fraud-Motivating Forces (High Pressure + High Opportunity + Low Ethics = Fraud).'
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'Perpetrators & Fraud Systems',
      sections: [
        {
          heading: '3.2.2. Perpetrator Demographics',
          paragraphs: [
            'Incidents: Employees commit 2x managers, 5x executives. Dollar losses: Inversely related (executives steal far more).',
            'Males median loss 3x females; age 60+ average loss 29x age 25 and under.'
          ]
        },
        {
          heading: '3.2.3. Fraud Categories',
          bullets: [
            'Fraudulent Statements: Understating liabilities, inflating revenue.',
            'Corruption: Bribery, Illegal Gratuities, Conflicts of Interest, Economic Extortion.',
            'Asset Misappropriation: Direct/indirect theft of cash, inventory, supplies.'
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      title: 'Misappropriation Schemes & Computer Fraud',
      sections: [
        {
          heading: 'Schemes',
          bullets: [
            'Charges to Expense Accounts: Charging stolen cash to operating expenses to balance assets = equities.',
            'Lapping: Concealing stolen cash by applying checks from Customer B to Customer A’s account sequentially.',
            'Transaction Fraud: Fictitious paychecks to nonexistent employees.'
          ]
        },
        {
          heading: 'Computer Fraud Stages',
          bullets: [
            'Data collection: Simplest method (falsifying input records).',
            'Data processing: Program fraud (altering logic/viruses) & Operations fraud (misusing hardware for personal gain).',
            'Database management: Remote unauthorized access and theft of records.'
          ]
        }
      ]
    },
    {
      pageNumber: 7,
      title: 'Internal Control Objectives & PDC Model',
      sections: [
        {
          heading: '3.3. Four Internal Control Objectives',
          bullets: [
            '1. Safeguard assets of the firm.',
            '2. Ensure accuracy and reliability of accounting records.',
            '3. Promote efficiency in operations.',
            '4. Measure compliance with management policies.'
          ]
        },
        {
          heading: '3.3.1. PDC Control Model',
          bullets: [
            'Preventive: Passive first line of defense (prenumbered documents).',
            'Detective: Alarms and comparisons (recalculating qty * price).',
            'Corrective: Reversing effects of detected errors.'
          ]
        }
      ]
    },
    {
      pageNumber: 8,
      title: 'SAS 78 Internal Control Framework',
      sections: [
        {
          heading: '3.3.2. SAS No. 78 (COSO) Components',
          bullets: [
            'Control Environment: Foundation (integrity, ethics, board oversight, philosophy).',
            'Risk Assessment: Identifying and analyzing risks relevant to financial reporting.',
            'Information & Communication: Valid transaction recording and timely classification.',
            'Monitoring: Assessment of control design and operation quality.',
            'Control Activities: Policies ensuring actions deal with risks (IT & Physical).'
          ]
        }
      ]
    },
    {
      pageNumber: 9,
      title: 'Risk Factors & Control Activities',
      sections: [
        {
          heading: 'Risk Assessment Factors',
          paragraphs: [
            'New operating environment, new personnel, rapid growth, new technology, new products, corporate restructuring, foreign market operations, new accounting principles.'
          ]
        },
        {
          heading: 'IT Controls',
          bullets: [
            'General controls: Data center, databases, systems development, program maintenance.',
            'Application controls: Integrity of specific systems (sales order, AP, payroll).'
          ]
        }
      ]
    },
    {
      pageNumber: 10,
      title: 'Physical Controls: Authorization, Segregation, Supervision',
      sections: [
        {
          heading: 'Six Physical Control Categories',
          bullets: [
            'Transaction Authorization: General authority for routine tasks (reorder points); Specific authority for non-routine (credit limit overrides).',
            'Segregation of Duties: (1) Separate authorization from processing; (2) Separate custody from record keeping; (3) Minimize collusion.',
            'Supervision: Compensating control when small staff size prevents complete segregation.'
          ]
        },
        {
          heading: 'Accounting Records & Audit Trail',
          paragraphs: [
            'Source documents, journals, and ledgers capture transaction essence and maintain audit trail for operations and year-end audits.'
          ]
        }
      ]
    },
    {
      pageNumber: 11,
      title: 'Access Control & Independent Verification',
      sections: [
        {
          heading: 'Access Control',
          paragraphs: [
            'Direct access: Physical locks, safes, alarms. Indirect access: Access to records and documents that authorize disposal or disbursement.'
          ]
        },
        {
          heading: 'Independent Verification',
          bullets: [
            'Reconciling batch totals during processing.',
            'Comparing physical assets with accounting records.',
            'Reconciling subsidiary accounts with control accounts.',
            'Reviewing management summary reports.'
          ]
        }
      ]
    }
  ]
};
