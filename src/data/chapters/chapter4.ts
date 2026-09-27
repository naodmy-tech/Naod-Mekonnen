import { ChapterData } from '../../types';

export const chapter4Data: ChapterData = {
  id: 'ch4',
  number: 4,
  title: 'Transaction Cycles',
  subtitle: 'The Revenue Cycle, The Expenditure Cycle & The Conversion Cycle',
  shortDescription: 'Comprehensive examination of the three primary transaction cycles: Revenue (sales order, sales returns, cash receipts), Expenditure (purchases, cash disbursements, payroll, fixed assets), and Conversion (continuous, make-to-order, and batch manufacturing models), along with their detailed internal control matrices.',
  totalPages: 37,
  fileSize: '3.4 MB',
  status: 'not_started',
  sections: [
    {
      id: 'sec4-1',
      title: '4.1. The Revenue Cycle',
      content: [
        'Revenue transactions split into two phases: (1) The physical phase, involving the transfer of assets or services from seller to buyer; and (2) The financial phase, involving receipt of cash by the seller.',
        'Two major subsystems: Sales Order Processing Subsystem and Cash Receipts Subsystem.',
        'Three processes that constitute the revenue cycle:',
        '1. Sales Order Procedures: Receiving and processing customer orders, credit check, filling the order in the warehouse, shipping products to customer, billing at the proper time, and accounting for the transaction (updating AR, Inventory, Sales, and General Ledger).',
        '2. Sales Return Procedures: Reversing the sales transaction when merchandise is returned due to shipping wrong items, defective goods, shipping damage, or late transit. Involves preparing a return slip, approving a credit memo, restocking goods, recording sales contra entry, and updating AR, inventory, and GL.',
        '3. Cash Receipts Procedures: Applying to the future collection event: receiving and securing cash/checks, depositing in bank, matching payment with customer remittance advice, updating AR subsidiary ledger, recording cash receipts journal, and performing bank reconciliations.'
      ],
      tableData: {
        headers: ['Control Activity', 'Sales Processing Controls', 'Cash Receipts Controls'],
        rows: [
          ['Transaction Authorization', 'Credit checking; Inventory return policy approval', 'Remittance list (cash prelist) to verify customer checks match remittance advices'],
          ['Segregation of Duties', 'Separate credit department from processing; separate inventory control from warehouse; separate AR sub-ledger from GL', 'Separate cash receipts (custody) from AR and cash account (record keeping); separate AR sub-ledger from GL'],
          ['Supervision', 'Supervising order handling and shipping activities', 'Mail room supervision: the employee opening mail has access to both cash and remittance advice'],
          ['Accounting Records', 'Sales orders, sales journals, AR subsidiary ledger, AR control (GL), inventory sub-ledger, inventory (GL), sales (GL)', 'Remittance advices, checks, remittance list, cash receipts journal, AR subsidiary ledger, AR control, cash account'],
          ['Access Control', 'Physical access to inventory; access to accounting records and files', 'Physical access to cash; access to accounting records and cash journals'],
          ['Independent Verification', 'Shipping department (reconciles stock release with goods), billing department, general ledger department', 'Cash receipts, general ledger reconciliation, periodic bank reconciliation']
        ]
      }
    },
    {
      id: 'sec4-2',
      title: '4.2. Physical Systems & Real-Time Sales Processing',
      content: [
        'Physical revenue cycle systems encompass manual systems and computer-based systems:',
        '• Manual Sales Order Systems: In manual environments, maintaining physical files of source documents is critical to the audit trail. In each department, after task completion, documents are filed as evidence.',
        '• Real-Time Computer-Based Sales Order Processing: Interactive computer terminals replace manual procedures and paper documents. Provides real-time input and output with batch updating of select master files.',
        'Advantages of Real-Time Processing:',
        '1. Greatly shortens the cash cycle by reducing processing delays.',
        '2. Gives the firm a competitive advantage in the marketplace through rapid order fulfillment.',
        '3. Current inventory levels allow sales staff to determine immediately whether items are in stock.',
        '4. Drastically reduces clerical errors (invalid account numbers, miscalculations) through real-time editing.',
        '5. Significantly reduces physical paperwork and filing overhead.'
      ]
    },
    {
      id: 'sec4-3',
      title: '4.3. The Expenditure Cycle',
      content: [
        'The objective of the expenditure cycle is to convert the organization’s cash into the physical materials and human resources needed to conduct business. Splitting into physical acquisition phase and financial cash disbursement phase.',
        'Four Major Subsystems:',
        '1. Purchases Processing Subsystem: Identifies inventory needs (purchase requisition), selects authorized vendor and places order (purchase order; sends blind copy to receiving), receives inventory (receiving report), and recognizes liability (AP voucher packet matching invoice, PO, and receiving report).',
        '2. Cash Disbursements Subsystem: Processes payment of obligations created in purchases. Objective: ensure only valid creditors receive timely, correct payment. Early payments forgo interest; late payments forfeit cash discounts and hurt credit standing.',
        '3. Payroll Processing Subsystem: Special-case purchase of labor. Distinct because: payroll procedures vary across employee classes (hourly vs salaried), requires deductions/tax withholdings, occurs as discrete periodic batches, and requires dedicated controls (imprest bank account).',
        '4. Fixed Asset Subsystem: Manages non-routine capital transactions: (1) Asset acquisition under formal management approval, (2) Maintenance of cost, description, and location records, (3) Calculation and recording of depreciation schedules, (4) Planning future asset investments, and (5) Recording retirement and disposal.'
      ]
    },
    {
      id: 'sec4-4',
      title: '4.4. The Conversion Cycle & Production Controls',
      content: [
        'The conversion cycle transforms input resources (raw materials, labor, and overhead) into finished products or services. Apparent and formal in manufacturing firms.',
        'Three Manufacturing Methods:',
        '1. Continuous Processing: Creates homogeneous products via continuous standard procedures (cement, chemicals).',
        '2. Make-to-Order Processing: Discrete products fabricated according to specific customer orders and specifications.',
        '3. Batch Processing: Discrete batches of identical products requiring identical materials and steps (automobiles, canned goods, textbooks). Focus of this course.',
        'Four Basic Processes of Batch Production:',
        '• Plan and Control Production: Initiated by sales orders/forecasts; prepares Bill of Materials (BOM), Route Sheet, Production Schedule, Work Orders, Move Tickets, and Materials Requisitions.',
        '• Perform Production Operations: Physical manufacturing using materials released from warehouse.',
        '• Maintain Inventory Control: Tracks Raw Materials (RM) and Finished Goods (FG) stock levels; issues purchase requisitions when stock hits reorder point.',
        '• Perform Cost Accounting: Reconciles materials requisitions and job time cards with standard costs to record WIP, Finished Goods, and variance accounts.'
      ],
      tableData: {
        headers: ['Control Class', 'Control Points in the Conversion System'],
        rows: [
          ['Transaction Authorization', 'Work orders, move tickets, and materials requisitions authorize production and resource movements.'],
          ['Segregation of Duties', '1. Inventory control separate from RM and FG inventory physical custody.\n2. Cost accounting separate from work centers.\n3. GL department separate from other accounting functions.'],
          ['Supervision', 'Supervisors oversee usage of raw materials and employee timekeeping (job tickets).'],
          ['Access Control', 'Limit physical access to finished goods and raw materials warehouses; require formal requisitions.'],
          ['Accounting Records', 'Work orders, cost sheets, move tickets, job tickets, materials requisitions, WIP records, FG inventory files.'],
          ['Independent Verification', 'Cost accounting reconciles all costs of production; General Ledger reconciles the overall system.']
        ]
      }
    }
  ],
  summary: {
    learningObjectives: [
      'Describe the two phases of the revenue cycle and its three main processes.',
      'Explain the DFD flow of sales order processing, sales returns, and cash receipts.',
      'Apply the 6 internal control activities to sales processing and cash receipts.',
      'Explain the four subsystems of the expenditure cycle: purchases, disbursements, payroll, and fixed assets.',
      'Contrast continuous, make-to-order, and batch production in the conversion cycle.',
      'Identify batch production documents: BOM, Route Sheet, Work Order, Move Ticket, and Materials Requisition.',
      'Master the conversion cycle internal control matrix.'
    ],
    keyConcepts: [
      'Two phases of transaction cycles: Physical phase & Financial phase',
      'Sales return credit memo and contra-entry mechanics',
      'Cash receipts cash prelist (remittance list) control in mailroom',
      'Advantages of real-time sales order processing',
      'Three-way matching in AP: Purchase Order, Receiving Report, Vendor Invoice',
      'Imprest payroll bank accounts for payroll risk mitigation',
      'Fixed asset non-routine transactions (acquisition, maintenance, disposal)',
      'Batch production four processes: Plan/control, Operations, Inventory control, Cost accounting',
      'Bill of Materials (BOM) & Route Sheet documentation'
    ],
    importantTerms: [
      { term: 'Cash Prelist (Remittance List)', def: 'A control document prepared in the mailroom listing all cash and checks received, used to verify customer checks against remittance advices before funds transfer.' },
      { term: 'Credit Memo', def: 'A document authorizing customer credit to accounts receivable following an approved sales return.' },
      { term: 'Blind Copy', def: 'A copy of the purchase order sent to the receiving department containing item descriptions but omitting quantities to force physical counting.' },
      { term: 'Voucher Packet', def: 'A formal file containing purchase requisition, purchase order, receiving report, and vendor invoice verifying that a liability is legitimate before payment.' },
      { term: 'Bill of Materials (BOM)', def: 'Document specifying the types and quantities of raw materials and subassemblies required to manufacture one batch of finished product.' },
      { term: 'Route Sheet', def: 'Specifies the sequence of manufacturing operations and standard machine and labor times for each work center.' },
      { term: 'Move Ticket', def: 'Authorizes and records the physical movement of work-in-process batches from one work center to the next.' }
    ],
    mainIdeas: [
      'In sales processing, separating credit approval from sales order creation prevents granting excessive credit to high-risk customers.',
      'Mailroom supervision is critical because the employee who opens incoming mail possesses both physical cash assets and accounting remittance documents.',
      'In the conversion cycle, cost accounting acts as an independent check by comparing actual labor and material requisitions against production standards.'
    ],
    importantRelationships: [
      'Purchases vs. Cash Disbursements: Purchases records the physical receipt and creates the account payable; cash disbursements liquidates the payable upon due date.',
      'Three-way match in AP prevents paying for goods not ordered (PO) or goods not received (Receiving Report).'
    ],
    chapterSummaryText: 
      'Chapter 4 covers the operational heart of AIS across the Revenue, Expenditure, and Conversion cycles. The revenue cycle manages sales order processing, returns, and cash receipts, leveraging real-time processing to shorten the cash cycle. The expenditure cycle controls physical procurement, three-way matching in accounts payable, cash disbursements, payroll processing, and capital fixed asset lifecycles. The conversion cycle focuses on batch production models driven by bills of materials and route sheets, with rigorous internal controls governing material requisitions, WIP cost accounting, and finished goods inventory.',
    keyTakeaways: [
      'Revenue cycle separates credit checking from sales processing to mitigate bad debts.',
      'Mailroom personnel must be supervised because custody of cash coincides with remittance documentation.',
      'Three-way matching in AP protects against fraudulent or mistaken disbursements.',
      'Payroll uses dedicated imprest accounts and job tickets to track labor cost allocation.',
      'Batch production depends on BOM, route sheets, work orders, and move tickets to maintain inventory and cost accounting integrity.'
    ]
  },
  pdfPages: [
    {
      pageNumber: 1,
      title: 'Slide 1-3: Chapter 4 Title & Revenue Cycle Activities',
      sections: [
        {
          heading: 'Revenue Cycle Overview',
          bullets: [
            'Physical phase: transfer of assets or services to buyer.',
            'Financial phase: receipt of cash by seller.',
            'Subsystems: Sales Order Processing Subsystem and Cash Receipts Subsystem.',
            'Three processes: Sales order procedures, Sales return procedures, Cash receipts procedures.'
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'Slide 4: DFD of Sales Order Processing System',
      sections: [
        {
          heading: 'Sales Order DFD Steps',
          bullets: [
            'Customer order received -> Sales order prepared.',
            'Credit checked against credit records -> Approved.',
            'Stock release sent to warehouse -> Goods picked.',
            'Packing slip & bill of lading sent to shipping -> Goods dispatched with carrier.',
            'Shipping notice sent to billing -> Customer invoice prepared and mailed.',
            'AR subsidiary ledger updated -> AR summary sent to GL.',
            'Inventory subsidiary ledger updated -> Inventory summary sent to GL.'
          ],
          diagramDesc: 'DFD illustrates complete data flow from Customer through Sales, Credit, Warehouse, Shipping, Billing, AR, and General Ledger.'
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'Slide 5-6: Sales Return Procedures & DFD',
      sections: [
        {
          heading: 'Sales Returns',
          bullets: [
            'Reasons for returns: wrong merchandise, defective items, shipping damage, delivery delays.',
            'Customer sends back goods with packing slip.',
            'Receiving prepares Return Slip.',
            'Credit department reviews and prepares Credit Memo.',
            'Warehouse restocks goods into inventory.',
            'Sales journal receives sales contra entry; AR sub ledger and GL accounts updated.'
          ]
        }
      ]
    },
    {
      pageNumber: 7,
      title: 'Slide 7-8: Cash Receipts Procedures & DFD',
      sections: [
        {
          heading: 'Cash Receipts Tasks',
          bullets: [
            '1. Receiving and securing cash.',
            '2. Depositing cash in bank.',
            '3. Matching payment with customer and adjusting accounts.',
            '4. Accounting for and reconciling financial details.'
          ],
          diagramDesc: 'DFD shows Customer -> Mail Room (Remittance Advice & List) -> Deposit in Bank -> AR Records update -> Cash Receipts Journal -> GL Post -> Bank Reconciliation.'
        }
      ]
    },
    {
      pageNumber: 9,
      title: 'Slide 9-10: Revenue Cycle Controls Matrix',
      sections: [
        {
          heading: 'Revenue Cycle Internal Control Table',
          bullets: [
            'Authorization: Credit checking in sales; Cash prelist (remittance list) in cash receipts.',
            'Segregation: Credit separate from sales; Inventory separate from warehouse; Cash custody separate from AR record keeping.',
            'Supervision: Mailroom supervision is vital because clerk has access to both cash and remittance advice.',
            'Accounting Records: Sales orders, AR ledgers, cash receipts journals, audit trail.',
            'Independent Verification: Shipping verifies goods against packing slip; billing verifies shipping notice; GL reconciles AR summary.'
          ]
        }
      ]
    },
    {
      pageNumber: 15,
      title: 'Slide 15-17: Computer-Based Real-Time Sales Processing',
      sections: [
        {
          heading: 'Real-Time Advantages',
          bullets: [
            'Shortens cash cycle significantly.',
            'Competitive advantage in rapid fulfillment.',
            'Current inventory allows immediate stock checks.',
            'Real-time input editing prevents clerical errors (invalid accounts, quantity errors).',
            'Dramatically reduces paper documents.'
          ]
        }
      ]
    },
    {
      pageNumber: 19,
      title: 'Slide 19-22: Expenditure Cycle & Purchases Processing',
      sections: [
        {
          heading: 'Expenditure Cycle & Purchases',
          bullets: [
            'Converts cash into materials and labor.',
            '4 Subsystems: Purchases, Cash disbursements, Payroll, Fixed assets.',
            'Purchases steps: Identify inventory needs (Purchase Requisition), select vendor and issue Purchase Order, receive goods (Blind Copy PO used by receiving to count), recognize liability (AP matches invoice, PO, receiving report into Voucher Packet).'
          ]
        }
      ]
    },
    {
      pageNumber: 23,
      title: 'Slide 23-24: Cash Disbursements System',
      sections: [
        {
          heading: 'Cash Disbursements Logic',
          bullets: [
            'Objective: ensure only valid creditors receive timely, correct payment.',
            'Timing trade-off: Early payment forfeits interest; late payment loses purchase discounts and impairs credit.',
            'Process: Review open AP voucher file -> Prepare check -> Record in check register -> Update AP sub-ledger -> Post journal voucher to GL.'
          ]
        }
      ]
    },
    {
      pageNumber: 25,
      title: 'Slide 25-26: Payroll Processing System',
      sections: [
        {
          heading: 'Payroll Specifics',
          bullets: [
            'Specialized purchase system: purchasing labor rather than physical goods.',
            'Differing rules for hourly vs salaried employees and complex tax/benefit deductions.',
            'Discrete periodic events (weekly, biweekly, monthly).',
            'Requires strict controls: time cards, job tickets, payroll register, separate imprest payroll bank account.'
          ]
        }
      ]
    },
    {
      pageNumber: 27,
      title: 'Slide 27-29: Fixed Asset System',
      sections: [
        {
          heading: 'Fixed Assets Objectives & DFD',
          bullets: [
            'Non-routine transactions involving capital assets.',
            'Objectives: Management approval for acquisition; maintain cost and location records; maintain depreciation schedules; plan investments; record disposal.',
            'Three task categories: Asset acquisition, Asset maintenance, Asset disposal.'
          ]
        }
      ]
    },
    {
      pageNumber: 31,
      title: 'Slide 31-37: Conversion Cycle & Production Controls',
      sections: [
        {
          heading: 'Batch Production & Controls',
          bullets: [
            'Three methods: Continuous (chemicals), Make-to-order (custom), Batch (discrete groups like cars, appliances).',
            '4 Processes: Plan/control production (BOM, Route sheet, Work order, Move ticket, Materials requisition), Perform production, Maintain inventory, Cost accounting.',
            'Controls: Inventory control separate from RM/FG custody; Cost accounting separate from work centers; GL separate.'
          ]
        }
      ]
    }
  ]
};
