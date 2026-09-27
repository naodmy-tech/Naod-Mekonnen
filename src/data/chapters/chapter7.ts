import { ChapterData } from '../../types';

export const chapter7Data: ChapterData = {
  id: 'ch7',
  number: 7,
  title: 'Managing the Systems Development Life Cycle',
  subtitle: 'SDLC 5 Phases, TELOS Feasibility, Cost-Benefit Analysis & The Accountant’s Role',
  shortDescription: 'Analyzes the five phases of the Systems Development Life Cycle (Systems Strategy, Project Initiation, In-House Development, Commercial Packages, and Maintenance & Support), TELOS feasibility criteria, cost-benefit calculations (NPV and Payback), and the crucial oversight roles played by accountants.',
  totalPages: 11,
  fileSize: '2.7 MB',
  status: 'not_started',
  sections: [
    {
      id: 'sec7-1',
      title: '7.1. The Systems Development Life Cycle (SDLC)',
      content: [
        'The SDLC is a logical sequence of activities used to identify new systems needs and develop systems to support those needs while mitigating financial and operational risks.',
        'Five Phases of the SDLC:',
        '1. Phase 1: Systems Strategy (Macro planning, aligning with business objectives, legacy system assessment, user feedback).',
        '2. Phase 2: Project Initiation (Systems analysis, conceptual design alternatives, feasibility evaluation, and system selection).',
        '3. Phase 3: In-House Development (Constructing and delivering custom applications).',
        '4. Phase 4: Commercial Packages (Purchasing, configuring, testing, and rolling out prewritten software).',
        '5. Phase 5: Maintenance and Support (Ongoing modifications, user help desk, and knowledge management).',
        'Participants in SDLC: (1) Systems Professionals (analysts, designers, programmers who build the system), (2) End Users (managers, accountants, operations personnel for whom it is built), and (3) Stakeholders (accountants, internal/external auditors, steering committee).'
      ]
    },
    {
      id: 'sec7-2',
      title: '7.1.1. Phase 1: Systems Strategy & TELOS Feasibility',
      content: [
        'The Systems Steering Committee provides strategic oversight and includes the CEO, CFO, CIO, user department heads, and internal auditors.',
        'Assessing Strategic Needs: Derived from corporate vision, mission, industry analysis, and core competencies mapped against existing legacy systems.',
        'User Feedback Process: (1) Recognizing the problem (reactive management waits for crisis; proactive management looks for subtle symptoms early), (2) Defining the problem (avoid jumping from symptoms like slow turnover or late shipments to false causes), (3) Specifying system objectives, (4) Preliminary Project Feasibility using TELOS, and (5) Preparing a formal project proposal.',
        'The TELOS Feasibility Framework:',
        '• T - Technical Feasibility: Can the system be built using available existing technology, or is new technology required?',
        '• E - Economic Feasibility: Are adequate funds committed in comparison to other competing capital investments?',
        '• L - Legal Feasibility: Does the system comply with privacy statutes, regulations, and legal boundaries?',
        '• O - Operational Feasibility: Are existing procedures and personnel skills compatible, or can staff be retrained?',
        '• S - Schedule Feasibility: Can the project be delivered within the designated time frame?'
      ]
    },
    {
      id: 'sec7-3',
      title: '7.1.2. Phase 2: Project Initiation, Systems Analysis & Selection',
      content: [
        'Systems Analysis is a two-step process: (1) Survey Step of current procedures (advantages: identifies elements to keep and root causes; disadvantage: getting caught in the "physical tar pit" and stifling innovation), and (2) Analysis Step resulting in a formal systems analysis report.',
        'Conceptualization of Alternative Designs: Creating plausible alternative system concepts using high-level DFDs to highlight functional differences rather than similarities.',
        'Systems Evaluation & Selection: Employs detailed TELOS and Cost-Benefit Analysis:',
        '• Costs: One-Time Costs (hardware/software acquisition, site preparation, design, programming, data conversion, training) vs. Recurring Costs (hardware/software maintenance, insurance, supplies, personnel).',
        '• Benefits: Tangible Benefits (Cost-reducing benefits like inventory reductions; Revenue-increasing benefits like higher sales from rapid order processing) vs. Intangible Benefits (customer goodwill, employee satisfaction).',
        '• Escapable Costs Rule: Only escapable costs (costs that directly cease to exist with the old system) should be counted as savings.',
        '• Financial Evaluation Methods: (1) Net Present Value (NPV: deducting present value of costs from present value of benefits over useful life) and (2) Payback Method (break-even analysis of total costs and recurring benefits).'
      ],
      tableData: {
        headers: ['One-Time Costs', 'Recurring Costs'],
        rows: [
          ['Hardware acquisition', 'Hardware maintenance contracts'],
          ['Site preparation', 'Software maintenance and updates'],
          ['Software acquisition / licensing', 'Insurance premiums'],
          ['Systems design & architecture', 'Consumable supplies'],
          ['Programming and testing', 'Operating personnel salaries'],
          ['Data conversion from old system', 'System ongoing administration'],
          ['Training personnel', 'Telecommunications & cloud fees']
        ]
      }
    },
    {
      id: 'sec7-4',
      title: '7.1.3 - 7.1.4. In-House vs Commercial Software & Maintenance',
      content: [
        'In-House Development: Selected for unique, proprietary operations. Consists of Construct (modeling, programming, testing) and Deliver (screen formats, report layouts, database creation, user rollout).',
        'Commercial Software Packages: Favored for standardized business processes. Driven by 4 factors: (1) Lower initial cost, (2) Industry-specific vendors, (3) Small businesses unable to afford internal IT, and (4) Distributed data processing trends. Software options: Turnkey systems, Backbone systems, and Vendor-supported systems.',
        'Phase 5: Maintenance and Support: User help desk, software patch deployment, and Knowledge Management (4 processes: Gathering data, Organizing into context, Refining for value, and Disseminating to users).'
      ]
    },
    {
      id: 'sec7-5',
      title: '7.2. The Accountant’s Role in Managing the SDLC',
      content: [
        'Accountants are vital to the SDLC for two reasons: (1) Systems development is a major financial transaction that consumes significant corporate capital and must be controlled; and (2) The quality of the final AIS directly dictates the accuracy and integrity of financial reporting.',
        'Three Roles of the Accountant in SDLC:',
        '1. As Users: Specify accounting rules, internal control requirements (audit trails), and calculation algorithms (depreciation models).',
        '2. As Development Team Members: Advise on control implications, risks, and process integration.',
        '3. As Auditors: Ensure the system is auditable by verifying built-in audit features and data integrity controls.',
        'Accountant\'s Responsibilities across Phases:',
        '• Systems Strategy: Reviewing plans to prevent unneeded or ineffective system investments.',
        '• Conceptual Design: Ensuring control implications and legal/statutory conventions are integrated into alternative designs.',
        '• Systems Selection: Ensuring only true escapable costs are counted, realistic useful lives and interest discount rates are applied, and intangible benefits are realistically valued.'
      ]
    }
  ],
  summary: {
    learningObjectives: [
      'Describe the five phases of the Systems Development Life Cycle (SDLC).',
      'Explain the roles of systems professionals, end users, and stakeholders.',
      'Apply the TELOS feasibility framework (Technical, Economic, Legal, Operational, Schedule).',
      'Distinguish the advantages and disadvantages of surveying the current system (the "physical tar pit").',
      'Categorize one-time vs recurring costs and tangible vs intangible benefits.',
      'Explain how NPV and the Payback method evaluate information systems investments.',
      'Detail the accountant’s specific roles as user, team member, and auditor throughout the SDLC.'
    ],
    keyConcepts: [
      'SDLC as a risk mitigation and resource management framework',
      'Steering Committee composition and strategic mandate',
      'Reactive vs Proactive management in problem recognition',
      'TELOS feasibility evaluation (preliminary and detailed)',
      'Physical tar pit danger in systems analysis survey',
      'One-time costs vs Recurring operational costs',
      'Escapable costs requirement in cost-benefit studies',
      'Net Present Value (NPV) and Payback method',
      'Commercial software drivers (cost, industry packages, small firm accessibility)',
      'Accountant threefold role: User, Development Team Member, Auditor',
      'Accountant oversight in Systems Selection'
    ],
    importantTerms: [
      { term: 'SDLC', def: 'Systems Development Life Cycle: a structured sequence of activities (Systems Strategy, Project Initiation, In-house/Commercial Construct, Maintenance) to acquire and implement information systems.' },
      { term: 'TELOS', def: 'Acronym for evaluating project feasibility: Technical, Economic, Legal, Operational, and Schedule feasibility.' },
      { term: 'Physical Tar Pit', def: 'The tendency of systems analysts during the survey step to become bogged down in the mechanics of the current physical system, stifling innovative design ideas.' },
      { term: 'Escapable Costs', def: 'Costs directly related to the existing system that will cease to exist when the system is replaced; only these should be counted as cost savings in feasibility analyses.' },
      { term: 'Net Present Value (NPV)', def: 'A capital budgeting method that discounts future net cash flows back to present value using the firm\'s cost of capital to assess project profitability.' },
      { term: 'Knowledge Management', def: 'The systematic process of gathering, organizing, refining, and disseminating organizational information to maintain system support.' }
    ],
    mainIdeas: [
      'Systems development is a capital manufacturing process that produces intangible intellectual assets; it requires strict authorization, budgeting, and project accounting.',
      'Cost-benefit analysis must exclude "junk costs" and focus strictly on escapable expenditures and verified tangible benefits.',
      'Accountants must participate from the inception of systems strategy and conceptual design rather than attempting to audit controls after system rollout.'
    ],
    importantRelationships: [
      'Preliminary TELOS is conducted during Phase 1 project proposals; detailed TELOS is conducted during Phase 2 systems evaluation and selection.',
      'High-level DFDs are used in conceptual design to highlight the critical operational differences between competing proposals.'
    ],
    chapterSummaryText: 
      'Chapter 7 focuses on managing the Systems Development Life Cycle (SDLC) as a strategic capital expenditure. The SDLC guides organizations through Systems Strategy, Project Initiation, Construct (In-house or Commercial), and Maintenance. Feasibility is continuously evaluated under the TELOS model, backed by cost-benefit analysis separating one-time from recurring expenses and verifying escapable savings. Accountants play indispensable roles as users dictating accounting rules, development team members designing internal controls, and auditors verifying audit trails and financial viability.',
    keyTakeaways: [
      'SDLC structures system acquisition to minimize business and financial risks.',
      'TELOS assesses Technical, Economic, Legal, Operational, and Schedule constraints.',
      'Cost-benefit calculations must utilize escapable costs and realistic discount rates.',
      'Accountants protect the integrity of financial data by contributing to SDLC as users, developers, and auditors.'
    ]
  },
  pdfPages: [
    {
      pageNumber: 1,
      title: 'Chapter 7: Managing the SDLC & 5 Phases',
      sections: [
        {
          heading: '7.1. The Systems Development Life Cycle',
          paragraphs: [
            'SDLC reduces financial and operational risks through planning, execution, and control.',
            'Five Phases: 1. Systems Strategy, 2. Project Initiation, 3. In-House Development, 4. Commercial Packages, 5. Maintenance & Support.'
          ],
          diagramDesc: 'Figure 1: Systems Development Life Cycle flow showing Business Needs/Strategy -> Strategy -> Project Initiation -> Construct -> Maintenance & Support.'
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'SDLC Phases & Participants',
      sections: [
        {
          heading: 'SDLC Participants',
          bullets: [
            'Systems professionals: Analysts, designers, and programmers who build the system.',
            'End users: Those for whom the system is built (managers, operations, accountants).',
            'Stakeholders: Individuals with an interest (internal/external auditors, steering committee).'
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'Phase 1: Systems Strategy & Information Needs',
      sections: [
        {
          heading: '7.1.1. Phase One: Systems Strategy',
          paragraphs: [
            'Steering Committee (CEO, CFO, CIO, user heads, internal auditor) links systems projects to strategic business goals.',
            'Assessing Needs: Vision and mission, industry forces, core competencies, legacy systems, user feedback.'
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'Legacy Systems, User Feedback & Problem Definition',
      sections: [
        {
          heading: 'Recognizing & Defining Problems',
          bullets: [
            'Reactive management: Responds only at crisis state; produces hurried, suboptimal solutions.',
            'Proactive management: Looks for subtle signs early; allows thorough system study.',
            'Defining the Problem: Avoid jumping from symptoms (returns, delays) to false problem definitions.'
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'System Objectives & TELOS Feasibility',
      sections: [
        {
          heading: 'The TELOS Feasibility Criteria',
          bullets: [
            'Technical Feasibility: Availability and capability of technology.',
            'Economic Feasibility: Availability of funds in view of competing capital projects.',
            'Legal Feasibility: Compliance with statutes, privacy laws, and regulatory rules.',
            'Operational Feasibility: Compatibility with existing procedures and employee skills.',
            'Schedule Feasibility: Ability to deliver within acceptable timeframe.'
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      title: 'Project Proposal & Phase 2 Systems Analysis',
      sections: [
        {
          heading: '7.1.2. Phase 2: Project Initiation & Systems Analysis',
          bullets: [
            'Survey Step: Evaluates current system. Advantage: preserves good elements and finds root causes. Disadvantage: "physical tar pit" that stifles fresh thinking.',
            'Analysis Step: Formal report outlining problems, user requirements, and recommendations.'
          ]
        }
      ]
    },
    {
      pageNumber: 7,
      title: 'Conceptual Design & Systems Selection',
      sections: [
        {
          heading: '7.1.2.2. Conceptualization of Alternative Designs',
          paragraphs: [
            'Presents multiple plausible alternatives using high-level DFDs to highlight critical differences (e.g. batch vs EDI purchasing).'
          ],
          diagramDesc: 'Figure 2: Alternative Conceptual Designs for a Purchasing System (Option A: Batch System vs Option B: EDI System).'
        }
      ]
    },
    {
      pageNumber: 8,
      title: 'Cost-Benefit Analysis: Costs & Benefits',
      sections: [
        {
          heading: 'Cost-Benefit Evaluation',
          table: {
            headers: ['One-Time Costs', 'Recurring Costs'],
            rows: [
              ['Hardware & software acquisition', 'Hardware & software maintenance'],
              ['Site preparation', 'Insurance & supplies'],
              ['Systems design, programming, testing', 'Operating personnel salaries'],
              ['Data conversion & training', 'Ongoing system maintenance']
            ]
          },
          bullets: [
            'Tangible benefits: Cost-reducing (inventory savings) and revenue-increasing (higher sales).',
            'Intangible benefits: Customer satisfaction, faster service.'
          ]
        }
      ]
    },
    {
      pageNumber: 9,
      title: 'Escapable Costs, NPV, Payback & Selection Report',
      sections: [
        {
          heading: 'Evaluation Rules & Methods',
          bullets: [
            'Escapable Costs: Only costs that truly vanish when the old system is retired can be counted as savings.',
            'Net Present Value (NPV): Present value of benefits minus present value of costs over useful life.',
            'Payback Method: Break-even analysis determining when profits start.',
            'Systems Selection Report: Final deliverable submitted to steering committee.'
          ]
        }
      ]
    },
    {
      pageNumber: 10,
      title: 'In-House vs Commercial Software & Maintenance',
      sections: [
        {
          heading: 'Construct Options & Maintenance',
          bullets: [
            'In-house development: Construct (modeling, code, test) and Deliver (screens, database, rollout).',
            'Commercial software drivers: Low cost, industry packages, small firm accessibility, distributed processing.',
            'Maintenance: Help desk, user training, and Knowledge Management (gathering, organizing, refining, disseminating).'
          ]
        }
      ]
    },
    {
      pageNumber: 11,
      title: 'The Accountant’s Role in Managing the SDLC',
      sections: [
        {
          heading: 'Accountant’s Roles',
          bullets: [
            'As Users: Specify accounting rules, internal controls, audit trails, and financial algorithms.',
            'As Development Team Members: Advise on risk and operational control.',
            'As Auditors: Ensure auditable systems with built-in audit features.',
            'In Systems Selection: Verify escapable costs, discount rates, useful lives, and intangible values.'
          ]
        }
      ]
    }
  ]
};
