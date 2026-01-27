# 🔥 BLAZE: The Complete Guidebook

## The Definitive Reference for Building Lightning-fast, Autonomous, Zero-friction Engineering

**Version 1.0**
**Created by John — Founder of the BLAZE Movement**

---

# Preface: Why BLAZE Exists

Software development broke somewhere along the way.

We added process to prevent mistakes, and the process became the mistake. We created governance to ensure quality, and the governance crushed velocity. We built gates to catch problems, and the gates became the problem.

Meanwhile, a new generation of tools emerged — AI assistants that could generate code at unprecedented speed. And teams started "vibe coding" — shipping AI-generated code with fingers crossed, hoping it worked, knowing it probably wouldn't last.

BLAZE is the answer to both failures.

It's not more process. It's automated process that runs invisibly.
It's not slower governance. It's instant governance that helps instead of hinders.
It's not anti-AI. It's AI with guardrails that make it actually reliable.

BLAZE exists because we believe:

- **Everyone should be able to build.** Not just developers. Sales teams, support teams, customers, partners — anyone with a problem should be able to solve it.

- **Building fast and building safe aren't opposites.** They're the same thing, if your safety systems are fast enough.

- **The best documentation is active, not passive.** A wiki nobody reads is worthless. A guide that's there when you need it is priceless.

- **Compliance should be a byproduct, not a project.** If you're scrambling before audits, your systems failed you.

We don't vibe code. We BLAZE.

---

# Part I: The Philosophy

## Chapter 1: The Three Words

BLAZE is built on three concepts, each one word:

### Guide

The Guide helps you while you build.

It knows the rules, the patterns, the preferences. It's there in your IDE, in your terminal, in your browser. Ask it anything in plain English and it helps.

The Guide doesn't judge. It doesn't block. It teaches, suggests, and accelerates. When you're about to make a mistake, it warns you. When you're doing something new, it shows you the pattern. When you're stuck, it unsticks you.

The Guide is your companion, not your manager.

### Gate

The Gate checks your work before it ships.

It runs automatically on every change. Security scanning, testing, compliance checks, documentation verification — everything that matters, verified in seconds.

The Gate is fair. Same rules for everyone. Pass and you ship. Fail and you know exactly why.

The Gate is fast. If it takes more than a few minutes, something's wrong.

The Gate is not bureaucracy. It's automation that replaces bureaucracy.

### Guard

The Guard watches everything that's running.

Monitoring, alerting, responding. When something breaks, the Guard catches it — often before users notice. When something needs human attention, the Guard escalates it. When something needs a playbook, the Guard suggests it.

The Guard never sleeps. It watches so you don't have to.

---

## Chapter 2: The Audiences

BLAZE serves everyone who builds or benefits from building.

### Developers

Developers are the core users of BLAZE. They interact with the Guide through MCP integrations, CLI tools, and IDE extensions. They ship through the Gate. They sleep soundly because the Guard watches their code.

For developers, BLAZE means:
- Less time searching for "how we do things"
- Less time waiting for reviews
- Less time debugging production issues
- More time building what matters

### Internal Teams

Sales, Support, Marketing, Operations — these teams have problems that software can solve. Traditionally, they submit tickets and wait. With BLAZE, they build.

The Guide helps them create dashboards, automations, and tools through no-code and low-code interfaces. The Gate ensures their creations are safe. The Guard monitors their automations just like any other system.

For internal teams, BLAZE means:
- No more waiting months for simple tools
- No more spreadsheets running critical processes
- Real participation in how software serves them

### Customers

Customers use your product. But increasingly, they want to extend it — integrations, automations, custom workflows. BLAZE lets them build safely within your platform.

The Guide helps them through in-app builders and AI assistants. The Gate ensures they can only access their own data and safe operations. The Guard monitors their automations for failures.

For customers, BLAZE means:
- Solving their own problems without waiting for your roadmap
- Confidence that their automations won't break things
- A platform that grows with their needs

### Partners

Partners build integrations and extensions. BLAZE provides them with APIs, SDKs, and a clear path from development to marketplace.

The Guide helps them understand your platform. The Gate reviews their integrations for security and quality. The Guard monitors their apps in production.

For partners, BLAZE means:
- Clear standards, not mysterious rejection
- Fast iteration, not slow approval cycles
- Shared success through shared tooling

### Finance, Compliance, and Security

These teams don't build, but they govern building. BLAZE serves them through dashboards and automated reporting.

For operations teams, BLAZE means:
- Real-time visibility into spend, vendors, and risk
- One-click audit packages instead of scrambles
- Rules enforced automatically, not manually

---

## Chapter 3: The Lifecycle

Every piece of work moves through the same lifecycle:

```
Build → Ship → Run
  ↑              |
  └──── Learn ←──┘
```

### Build (Guide)

During building, the Guide is active. It helps with:
- Patterns and best practices
- Tool and library recommendations
- Security and compliance requirements
- Documentation standards
- Code review preparation

The Guide is advisory. It doesn't block building. It makes building better.

### Ship (Gate)

Before shipping, the Gate runs. It verifies:
- Security (vulnerability scanning, secret detection, dependency audit)
- Quality (tests, types, linting, coverage)
- Compliance (documentation, audit requirements, data handling)
- Standards (your team's specific rules)

The Gate is deterministic. Pass or fail, no judgment calls. If you need to bypass a rule, there's a process for that (Firebreaks), but the Gate itself doesn't bend.

### Run (Guard)

After shipping, the Guard monitors. It handles:
- Health monitoring and alerting
- Automatic incident detection
- Escalation when humans are needed
- Playbook suggestions for known issues
- Post-incident tracking

The Guard is vigilant. It catches issues before users report them.

### Learn (Feedback Loop)

Every incident, every near-miss, every "I wish we'd known" becomes an improvement. The rules evolve. The patterns grow. The Guide gets smarter.

This happens through Smoke Signals — proposals from anyone on the team to improve how BLAZE works.

---

## Chapter 4: The Rules Hierarchy

Not all rules are equal. BLAZE distinguishes between:

### Embers (Hard Rules)

Embers are non-negotiable. They exist because:
- Compliance requires them
- Security demands them
- We learned the hard way

Examples:
- All code must pass security scanning
- No secrets in repositories
- Customer data changes require audit logging
- Third-party dependencies must be approved

Breaking an Ember requires a Firebreak — explicit approval with documentation. Firebreaks are rare and tracked.

### Sparks (Preferences)

Sparks are how we prefer to work. They guide decisions but don't block them.

Examples:
- We prefer Supabase for databases
- We prefer TypeScript over JavaScript
- We ship small changes frequently
- We automate anything we do twice

Ignoring a Spark is fine if you have a reason. The Guide might ask why, but it won't stop you.

### Kindling (Patterns)

Kindling is accumulated wisdom. Proven approaches to common problems.

Examples:
- How we structure API endpoints
- How we handle errors
- How we write tests
- How we name things

Kindling is helpful, not prescriptive. Use it when it applies. Ignore it when it doesn't.

---

## Chapter 5: Greenfield Philosophy

BLAZE is for new work. Legacy systems require different approaches.

### The Hard Wall

New code BLAZEs. Legacy code stays legacy. There is no hybrid state.

When starting new work:
- Use BLAZE from the first line
- Follow the Guide's patterns
- Ship through the Gate
- Monitor with the Guard

When touching legacy code:
- Keep it running
- Don't add BLAZE to it
- Migrate it to BLAZE when ready, wholesale

The temptation to "just add a little BLAZE" to legacy systems leads to confusion, inconsistency, and eventually failure. Resist it.

### Migration Path

When ready to migrate legacy systems:
1. Build the replacement in BLAZE
2. Run both systems in parallel
3. Migrate users gradually
4. Retire the legacy system

The new system is born compliant, documented, and monitored. The old system dies without infecting the new.

---

## Chapter 6: The Tool Lifecycle

New tools and technologies follow a lifecycle:

### Discovery

Anyone can try anything. 

- 7-day sandbox
- Your cost, your environment
- No approval needed
- Full experimentation freedom

Discovery is sacred. Innovation requires exploration. The Gate doesn't interfere with discovery.

### Sandbox

You want to keep using it.

- 30-day extended trial
- Light security review
- Still your cost
- Share with teammates informally

Sandbox is for validation. Does this tool actually solve the problem? Is it worth the overhead?

### Approved

The team should use this.

- Full security and compliance review
- Added to the vendor registry
- Team cost allocation
- Official support begins

Approval is commitment. The tool is now part of your stack. It gets maintained.

### Standard

Everyone should have this by default.

- Added to base setup
- Company cost
- Full documentation
- Part of onboarding

Standard is default. New team members get it automatically. It's part of what we are.

### Deprecated / Rejected

It didn't work out.

- Migration path documented
- Sunset timeline set
- No new usage allowed
- Eventually removed

Deprecation is learning. Not everything works. That's okay. What matters is moving on cleanly.

---

## Chapter 7: The Firebreak Process

Sometimes rules need breaking. That's what Firebreaks are for.

### When to Request a Firebreak

- An Ember rule blocks something necessary
- The rule doesn't apply to this specific situation
- Following the rule would cause more harm than breaking it

### How to Request

Tell the Guide: "I need to bypass [rule] because [reason]."

The Guide helps you document:
- Which rule you're bypassing
- Why it's necessary
- What risks this creates
- How you'll mitigate those risks
- Whether this is temporary or permanent

### Approval

Firebreaks require human approval. The level depends on the rule:
- Standard Firebreak: Any senior developer
- Security Firebreak: Security team member
- Compliance Firebreak: Compliance team member

### Tracking

Every Firebreak is logged:
- Who requested it
- Who approved it
- Why it was needed
- When it expires (if temporary)

Firebreaks are not shameful. They're part of the system. But they should be rare.

---

## Chapter 8: The Smoke Signal Process

BLAZE improves through use. Smoke Signals are how anyone proposes improvements.

### What Can Be Proposed

- New Ember rules
- Modified or removed Ember rules
- New Sparks (preferences)
- New Kindling (patterns)
- Process improvements
- Tool recommendations

### How to Propose

Tell the Guide: "I think we should change [something] because [reason]."

The Guide helps you write a Smoke Signal with:
- Current state
- Proposed change
- Rationale
- Evidence (if any)

### Review Process

1. Smoke Signal posted for team visibility
2. Async discussion period (usually 1 week)
3. If consensus emerges, Keeper review
4. Keeper + Bot approve → Change merged
5. Change announced to all team members

### The Keepers

Keepers are humans who can ratify changes to BLAZE itself. They don't make rules alone — they ratify consensus.

Keeper responsibilities:
- Review Smoke Signals that reach consensus
- Ensure changes don't contradict existing rules
- Verify proper process was followed
- Approve alongside the bot

The bot ensures process. The Keeper ensures judgment.

---

## Chapter 9: Incident Response

When things go wrong, BLAZE provides structure.

### Alert Levels

**Level 1: Smoke Detected**
- Something's off, not yet impacting users
- Automated systems investigating
- Team notified (FYI only)
- Usually self-resolves

**Level 2: Small Fire**
- Real problem, contained scope
- On-call engineer paged
- 30-minute response expected
- Playbook suggested

**Level 3: Structure Fire**
- Significant impact, multiple systems or many users
- Fire Chief activated (senior on-call)
- War room opened
- Customer communication drafted

**Level 4: Four-Alarm Fire**
- Major incident, core functionality down
- Leadership notified
- All available engineers mobilized
- External communication (status page, customers)
- Post-incident review guaranteed

### Roles

**Fire Watch:** Monitors dashboards, responds to Level 1 (automated + rotating human)

**First Responder:** On-call engineer, handles Level 2

**Fire Chief:** Senior engineer, commands Level 3+ incidents

**Fire Marshal:** Runs post-incident reviews after Level 3+ incidents

### Playbooks

Every known incident type has a playbook. Playbooks contain:
- Symptoms (how to recognize this issue)
- Immediate actions (stop the bleeding)
- Root cause investigation (find the source)
- Escalation criteria (when to level up)
- Prevention (how to stop recurrence)

Playbooks are living documents. Every incident improves them.

---

## Chapter 10: Compliance and Audit

BLAZE makes compliance automatic.

### Continuous Documentation

Everything is logged:
- Every code change (who, what, when, why)
- Every approval (who approved what)
- Every deployment (what shipped where)
- Every access (who accessed what)
- Every vendor (what we use, why, risk level)

This isn't extra work. It's a byproduct of normal BLAZE operation.

### Audit Readiness

When auditors arrive:
1. Open the Operations Dashboard
2. Click "Generate Audit Package"
3. Select the time period and scope
4. Download the complete evidence package

The package includes:
- Access control logs
- Change management records
- Vendor assessments
- Security scan results
- Incident response records
- Approval chains

No scrambling. No engineer time wasted. The evidence exists because the system exists.

### SOC2 Alignment

BLAZE is designed with SOC2 Trust Service Criteria in mind:

**Security:** Gate runs security scans on every change. Guard monitors for threats.

**Availability:** Guard monitors uptime. Playbooks ensure quick recovery.

**Processing Integrity:** Gate validates code quality. Tests ensure correct behavior.

**Confidentiality:** Data access is scoped and logged. The Gate enforces access rules.

**Privacy:** Customer data handling is audited. The Gate enforces data rules.

---

## Chapter 11: Spend Management

BLAZE tracks costs automatically.

### Vendor Tracking

Every approved vendor is tracked:
- Monthly spend
- Trend over time
- Cost per user/team
- Contract terms
- Renewal dates

Anomalies trigger alerts:
- Unexpected spike in usage
- Approaching contract limits
- Unused tools still billing

### Budget Alignment

Teams see their spend:
- Real-time dashboard
- vs. budget allocation
- vs. previous period
- Breakdown by vendor

Finance sees company spend:
- All teams aggregated
- All vendors aggregated
- Forecasting based on trends
- Optimization opportunities

### Procurement Integration

New vendor requests include:
- Business justification
- Expected cost
- Security assessment
- Compliance check

Approvals are tracked. Renewals are surfaced before they happen.

---

# Part II: The Implementation

## Chapter 12: Technical Architecture

BLAZE is a platform with multiple interfaces.

### The Platform Layer

```
┌─────────────────────────────────────────────────────────────────────┐
│                        BLAZE PLATFORM                               │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │  Registry   │  │   Rules     │  │  Audit      │  │   Spend    │ │
│  │             │  │   Engine    │  │  Log        │  │   Tracker  │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘ │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │  Approval   │  │  Incident   │  │  Playbook   │  │   Metrics  │ │
│  │  Workflow   │  │  Manager    │  │  Library    │  │            │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Registry:** Source of truth for tools, vendors, MCPs, and their lifecycle status.

**Rules Engine:** Evaluates Embers (hard rules) and tracks Sparks (preferences).

**Audit Log:** Immutable record of all actions, approvals, and changes.

**Spend Tracker:** Real-time cost tracking by vendor, team, and project.

**Approval Workflow:** Routes requests to appropriate approvers, tracks decisions.

**Incident Manager:** Handles escalation, war rooms, and post-incident tracking.

**Playbook Library:** Stores and suggests incident response playbooks.

**Metrics:** Tracks BLAZE health (Gate pass rates, incident frequency, etc.).

### The Interface Layer

Different audiences access the platform through different interfaces:

**Guide MCP (Developers)**
- Integrates with Claude Code, VS Code, terminal
- Real-time assistance while coding
- Context-aware rule and pattern guidance
- Prepares code for Gate

**CLI Tool (Developers)**
- `blaze check` - Run Gate locally
- `blaze status` - See your pending items
- `blaze suggest` - Propose a Smoke Signal

**Portal (Internal Teams)**
- Web-based builder for non-developers
- AI-assisted tool creation
- Request tracking and visibility

**Operations Dashboard (Finance/Compliance)**
- Spend tracking and forecasting
- Audit package generation
- Vendor registry management

**Customer Builder (Customers)**
- In-app automation builder
- Scoped to their data and safe operations
- AI-assisted workflow creation

**Partner Portal (Partners)**
- SDK and API documentation
- Integration submission and review
- Marketplace management

### The Integration Layer

BLAZE connects to external systems:

**Source Control:** GitHub (primary), GitLab, Bitbucket
**CI/CD:** GitHub Actions (primary), CircleCI, Jenkins
**Monitoring:** Sentry, Datadog, PagerDuty
**Security:** Snyk, Dependabot, TruffleHog
**Communication:** Slack, Email
**Documentation:** Notion, Confluence

Integrations are modular. Add what you need, ignore what you don't.

---

## Chapter 13: The Guide MCP Specification

The Guide MCP is the primary developer interface.

### Core Capabilities

**Context Awareness**
- Knows what file you're editing
- Knows your project's tech stack
- Knows your team's patterns
- Knows recent changes and incidents

**Natural Language Interface**
- Responds to plain English
- Uses insider terms as flavor, never requirement
- Explains its reasoning when helpful

**Rule Knowledge**
- All Embers (hard rules) loaded
- All Sparks (preferences) loaded
- All Kindling (patterns) loaded
- Can explain why any rule exists

**Tool Coordination**
- Recommends helpful MCPs for current task
- Requires necessary MCPs for certain work
- Tracks which MCPs are installed
- Helps install missing MCPs

### Available Tools

```typescript
// Check if code passes Gate rules locally
blaze_check(file?: string): CheckResult

// Get the pattern for a specific task
blaze_pattern(task: string): Pattern

// Check if a dependency is approved
blaze_dependency_status(package: string): DependencyStatus

// Explain why a rule exists
blaze_explain_rule(rule: string): Explanation

// Prepare a Smoke Signal proposal
blaze_smoke_signal(proposal: string): SmokeSignalDraft

// Request a Firebreak
blaze_firebreak(rule: string, reason: string): FirebreakRequest

// Check what MCPs are needed for a task
blaze_mcp_requirements(task: string): MCPRequirements

// Get current incident status
blaze_incident_status(): IncidentStatus
```

### Example Interactions

**Getting help:**
```
User: "How should I structure this API endpoint?"

Guide: "For API endpoints, we follow a standard pattern:

1. Input validation with Zod schemas
2. Authentication check via middleware
3. Authorization check for the specific resource
4. Business logic in a separate service
5. Consistent error responses

Here's a template that matches our patterns:
[shows code template]

This will pass the Gate. Want me to explain any part?"
```

**Checking dependencies:**
```
User: "Can I use lodash?"

Guide: "Yes! Lodash is approved and commonly used.

If you only need one or two functions, consider importing 
just those: `import debounce from 'lodash/debounce'`

This keeps bundle size smaller, which aligns with our 
performance Spark."
```

**Preparing for Gate:**
```
User: "Check my code before I commit"

Guide: "Running checks...

✓ Security scan passed
✓ TypeScript compiles
✓ Tests passing (47/47)
✓ Coverage at 84% (threshold: 80%)
⚠ Missing JSDoc on exported function `processPayment`

The warning won't block your commit, but I'd recommend 
adding documentation since this is a payment function.

Ready to commit?"
```

---

## Chapter 14: The Gate Pipeline Specification

The Gate runs on every pull request.

### Pipeline Stages

```yaml
name: BLAZE Gate

on:
  pull_request:
    branches: [main, develop]

jobs:
  # Stage 1: Fast checks (< 1 minute)
  lint-and-types:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: TypeScript check
        run: npx tsc --noEmit
      - name: Lint check
        run: npm run lint

  # Stage 2: Security (< 2 minutes)
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Snyk vulnerability scan
        uses: snyk/actions/node@master
      - name: Secret detection
        uses: trufflesecurity/trufflehog@main
      - name: Dependency audit
        run: npm audit --audit-level=high

  # Stage 3: Tests (< 5 minutes)
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run tests with coverage
        run: npm test -- --coverage
      - name: Check coverage threshold
        run: npx nyc check-coverage --lines 80

  # Stage 4: BLAZE-specific checks
  blaze-compliance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check Ember rules
        run: npx blaze-gate check-embers
      - name: Validate documentation
        run: npx blaze-gate check-docs
      - name: Verify dependencies approved
        run: npx blaze-gate check-dependencies

  # Stage 5: Conditional human approval
  approval-check:
    needs: [lint-and-types, security, test, blaze-compliance]
    runs-on: ubuntu-latest
    outputs:
      needs_approval: ${{ steps.check.outputs.needs_approval }}
      approval_type: ${{ steps.check.outputs.approval_type }}
    steps:
      - name: Determine if human approval needed
        id: check
        run: npx blaze-gate check-approval-required

  human-approval:
    needs: approval-check
    if: needs.approval-check.outputs.needs_approval == 'true'
    runs-on: ubuntu-latest
    environment: ${{ needs.approval-check.outputs.approval_type }}
    steps:
      - name: Await approval
        run: echo "Approval received"

  # Final: All checks passed
  gate-passed:
    needs: [lint-and-types, security, test, blaze-compliance, approval-check]
    if: always() && !contains(needs.*.result, 'failure')
    runs-on: ubuntu-latest
    steps:
      - name: Record Gate passage
        run: npx blaze-gate record-passage
      - name: Update audit log
        run: npx blaze-gate audit-log
```

### Approval Triggers

Human approval is required when:

| Trigger | Approval Type | Approver |
|---------|---------------|----------|
| New unapproved dependency | Standard | Any senior developer |
| Changes to auth/payment code | Security | Security team member |
| New third-party integration | Compliance | Compliance + Engineering lead |
| Firebreak requested | Varies | Based on rule being bypassed |
| Database schema changes | Standard | Any senior developer |
| API contract changes | Standard | Any senior developer |

### Gate Outputs

Every Gate run produces:
- Pass/fail status
- Detailed report of all checks
- Time taken per stage
- Audit log entry
- (If failed) Specific guidance on how to fix

---

## Chapter 15: The Guard System Specification

The Guard monitors production systems.

### Monitoring Integration

The Guard connects to your monitoring stack:
- Sentry for error tracking
- Datadog/Prometheus for metrics
- PagerDuty for alerting
- Custom health endpoints

### Alert Processing

```
Incoming Alert
      │
      ▼
┌─────────────────┐
│ Classify Level  │
│ (1-4)           │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Match Playbook  │
│ (if exists)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Route to        │
│ Responder       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Track Progress  │
│ & Escalate      │
└─────────────────┘
```

### Automatic Actions

Level 1 alerts can trigger automatic remediation:
- Restart failed services
- Scale up resources
- Enable circuit breakers
- Clear caches

These actions are logged and can be disabled if needed.

### War Room Automation

Level 3+ incidents automatically:
- Create Slack channel #incident-YYYYMMDD-NNN
- Page Fire Chief
- Post incident summary
- Link relevant dashboards
- Start timeline tracking

### Post-Incident Process

After Level 3+ incidents:
1. Fire Marshal schedules review (within 48 hours)
2. Timeline auto-generated from logs
3. Review focuses on system improvement, not blame
4. Action items tracked to completion
5. Playbook updated if applicable

---

## Chapter 16: The Operations Dashboard

Finance and Compliance access BLAZE through the Operations Dashboard.

### Spend View

```
┌─────────────────────────────────────────────────────────────────┐
│ SPEND OVERVIEW                                     Jan 2026    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Total: $14,847        vs Budget: -8%        vs Last Month: +3% │
│                                                                 │
│ BY VENDOR                          │ BY TEAM                    │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ AWS              $8,200  (55%)     │ Platform       $9,100      │
│ Supabase         $2,100  (14%)     │ Product        $3,200      │
│ Vercel           $1,800  (12%)     │ Growth         $1,500      │
│ Sentry             $900   (6%)     │ Internal Tools $1,047      │
│ Other            $1,847  (13%)     │                            │
│                                                                 │
│ ANOMALIES                                                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ⚠ Vercel usage +40% vs last month (investigate?)               │
│ ✓ No other anomalies detected                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Compliance View

```
┌─────────────────────────────────────────────────────────────────┐
│ COMPLIANCE STATUS                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ SOC2 Readiness: ████████████████████████ 100% Ready            │
│                                                                 │
│ Last Audit: December 15, 2025                                   │
│ Next Audit: June 15, 2026 (139 days)                           │
│                                                                 │
│ EVIDENCE STATUS                                                 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ✓ Access control logs         Current through today            │
│ ✓ Change management records   Current through today            │
│ ✓ Security scan results       All passing                      │
│ ✓ Vendor assessments          47/47 complete                   │
│ ✓ Incident response records   3 incidents, all closed          │
│ ✓ Business continuity tests   Last test: Jan 15, 2026          │
│                                                                 │
│ [Generate Audit Package]                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Vendor Registry View

```
┌─────────────────────────────────────────────────────────────────┐
│ VENDOR REGISTRY                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Approved (47)  │  Pending (3)  │  Sandbox (12)  │  Rejected (5)│
│                                                                 │
│ SEARCH: [________________________] [Filter ▼]                   │
│                                                                 │
│ NAME          │ STATUS   │ SOC2 │ SPEND   │ OWNER    │ RENEWAL │
│ ━━━━━━━━━━━━━━┿━━━━━━━━━━┿━━━━━━┿━━━━━━━━━┿━━━━━━━━━━┿━━━━━━━━ │
│ AWS           │ Standard │ ✓    │ $8,200  │ Platform │ Mar '26 │
│ Supabase      │ Standard │ ✓    │ $2,100  │ Platform │ Feb '26 │
│ Vercel        │ Approved │ ✓    │ $1,800  │ Product  │ Apr '26 │
│ Sentry        │ Approved │ ✓    │ $900    │ Platform │ Jan '26 │
│ NewTool       │ Pending  │ ?    │ -       │ @sarah   │ -       │
│ ExperimentX   │ Sandbox  │ -    │ $12     │ @mike    │ 23 days │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Chapter 17: The Portal (Internal Teams)

Internal teams build through the Portal.

### Home View

```
┌─────────────────────────────────────────────────────────────────┐
│ 🔥 BLAZE PORTAL                            Welcome, Sarah      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ WHAT DO YOU WANT TO DO?                                         │
│                                                                 │
│ ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│ │                 │  │                 │  │                 │  │
│ │  BUILD          │  │  TRACK          │  │  BROWSE         │  │
│ │  something new  │  │  my requests    │  │  existing tools │  │
│ │                 │  │                 │  │                 │  │
│ └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                 │
│ RECENT ACTIVITY                                                 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ • Your "Stale Leads Dashboard" is running (47 views this week) │
│ • Feature request "Bulk SMS" moved to In Progress              │
│ • New tool available: "Call Recording Search" - check it out   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Build Flow

```
┌─────────────────────────────────────────────────────────────────┐
│ BUILD SOMETHING NEW                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ What do you need?                                               │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ I need a dashboard that shows leads that haven't been       ││
│ │ called in more than 3 days, sorted by value                 ││
│ └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                                 │
│ 🔥 I can build that! Here's what I'll create:                  │
│                                                                 │
│ A dashboard showing:                                            │
│ • Leads with no call activity in 3+ days                       │
│ • Sorted by deal value (highest first)                         │
│ • With quick-call buttons                                       │
│                                                                 │
│ This will take about 2 minutes.                                 │
│                                                                 │
│ [Build it now]    [Let me modify first]    [Request from dev]  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Track View

```
┌─────────────────────────────────────────────────────────────────┐
│ MY REQUESTS                                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ YOUR TOOLS (built by you)                                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ✓ Stale Leads Dashboard          Running    47 views/week      │
│ ✓ Daily Call Summary Email       Running    Sends 8am daily    │
│ ⚠ CRM Sync Automation            Error      Salesforce auth    │
│                                                                 │
│ FEATURE REQUESTS (to dev team)                                  │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ 🔵 Bulk SMS sending              In Progress   ~2 weeks        │
│ ⚪ Call recording transcription  Planned       Q2 roadmap      │
│ ✓ Lead scoring improvements      Shipped       Jan 15          │
│                                                                 │
│ [Submit new request]                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Chapter 18: Onboarding (IGNITE)

New team members go through IGNITE.

### Day One Script

```bash
# The only command a new hire needs
curl -fsSL https://blaze.yourcompany.com/ignite | bash
```

This script:
1. Detects their machine type (Mac/Linux/Windows)
2. Installs required tools (git, node, etc.)
3. Configures authentication
4. Clones relevant repositories
5. Installs BLAZE CLI and Guide MCP
6. Runs verification checks

### Guided Tour

After setup, the Guide introduces itself:

```
🔥 Welcome to BLAZE!

I'm your Guide. I'll help you build fast and ship with confidence.

Quick orientation:
• Say "help" anytime and I'll help
• Run `blaze check` before you commit
• Ask me about any of our patterns or rules

Ready for your first task? I'll walk you through making a small 
change to get familiar with how we work.

[Start First Flame]    [Explore on my own]
```

### First Flame

A guided first contribution:
1. Guide suggests a small, safe change (typo fix, doc improvement)
2. Developer makes the change with Guide assistance
3. Developer runs `blaze check` to see the Gate locally
4. Developer opens PR
5. Gate runs, (hopefully) passes
6. Merge with Guide celebration

This builds confidence and muscle memory in a safe context.

### Certification

After First Flame, developers are certified to:
- Commit and merge independently
- Use all standard tools
- Request Firebreaks if needed
- Raise Smoke Signals

Additional certifications available for:
- Fire Chief (incident command)
- Keeper (BLAZE governance)
- Sensitive area access (payments, etc.)

---

## Chapter 19: The Lore

BLAZE has a rich vocabulary for those who want it. None of it is required.

### The Full Glossary

| Term | Meaning | Required Knowledge? |
|------|---------|---------------------|
| BLAZE | The whole system | Yes |
| Guide | Helps you build | Yes |
| Gate | Checks before ship | Yes |
| Guard | Watches production | Yes |
| Torch | Source of all rules | No |
| Ember | Hard rule (must follow) | No |
| Spark | Preference (should follow) | No |
| Kindling | Pattern (helpful examples) | No |
| Firebreak | Exception to a rule | No |
| Smoke Signal | Proposal to change BLAZE | No |
| Keeper | Human who ratifies changes | No |
| Blazer | Anyone on the team | No |
| Fire Chief | Incident commander | No |
| Fire Marshal | Post-incident reviewer | No |
| Fire Watch | Monitoring rotation | No |
| First Responder | On-call engineer | No |
| IGNITE | Onboarding system | No |
| First Flame | First guided contribution | No |

### How Lore is Learned

The Guide uses plain English first, with lore terms as natural additions:

```
Guide: "That's a hard rule — we call these Embers — so you'll 
       need an exception. Want me to help you request one?"
```

Over time, team members naturally absorb the vocabulary through use.

---

## Chapter 20: Measuring Success

BLAZE tracks its own effectiveness.

### Key Metrics

**Velocity**
- Time from commit to production
- PRs merged per developer per week
- First-commit-to-merge time for new hires

**Quality**
- Gate pass rate on first attempt
- Production incidents per deploy
- Mean time to detect (MTTD)
- Mean time to resolve (MTTR)

**Compliance**
- Audit prep time (target: < 1 hour)
- Open compliance items (target: 0)
- Firebreak frequency (lower is better)

**Adoption**
- Guide queries per developer per day
- Portal tools built by non-developers
- Smoke Signals raised (engagement indicator)

### Success Targets

| Metric | Before BLAZE | Target | World-Class |
|--------|--------------|--------|-------------|
| Commit to prod | Days | Hours | Minutes |
| Gate first-pass rate | - | 80% | 95% |
| New hire first commit | 2 weeks | 1 day | 1 hour |
| Audit prep time | 2 weeks | 1 hour | 5 minutes |
| Incident MTTR | Hours | 15 min | 5 min |

---

# Part III: Getting Started

## Chapter 21: Implementation Phases

### Phase 1: Developer BLAZE (Weeks 1-4)

**Deliverables:**
- Guide MCP operational
- Gate running in CI/CD
- Guard connected to monitoring
- Initial Torch (rules, preferences, patterns)
- IGNITE script for new developers

**Success Criteria:**
- All new PRs go through Gate
- Developers using Guide daily
- One new hire onboarded through IGNITE

### Phase 2: Operations BLAZE (Weeks 5-8)

**Deliverables:**
- Operations Dashboard
- Spend tracking
- Vendor registry
- Audit export

**Success Criteria:**
- Finance can see spend in real-time
- Compliance can generate audit package
- All vendors tracked in registry

### Phase 3: Internal BLAZE (Weeks 9-12)

**Deliverables:**
- Portal for internal teams
- AI-assisted building
- Request tracking

**Success Criteria:**
- Non-developers building tools through Portal
- Feature requests visible to requesters
- At least 5 internal tools built through Portal

### Phase 4: Customer BLAZE (Weeks 13-16)

**Deliverables:**
- Customer-facing automation builder
- Scoped data access
- Integration marketplace foundation

**Success Criteria:**
- Customers building automations
- No security incidents from customer-built automations
- Customer satisfaction with builder

---

## Chapter 22: First Week Checklist

### Day 1: Foundation
- [ ] Create `blaze-core` repository
- [ ] Write initial TORCH.md with basic rules
- [ ] Set up repository protections

### Day 2: Guide
- [ ] Create Guide MCP skeleton
- [ ] Implement basic tools (check, explain, pattern)
- [ ] Test with one developer

### Day 3: Gate
- [ ] Create GitHub Actions workflow
- [ ] Implement security checks
- [ ] Implement test requirements

### Day 4: Guard
- [ ] Connect to existing monitoring
- [ ] Set up alert routing
- [ ] Create #blaze-alerts channel

### Day 5: Launch
- [ ] Team announcement
- [ ] Volunteer early adopters
- [ ] First PR through full BLAZE

---

## Chapter 23: The Torch Starter

Initial content for the Torch:

### Embers (Hard Rules)

```markdown
# BLAZE Embers

These rules must be followed. Exceptions require Firebreaks.

## Security
- No secrets in code repositories
- All dependencies must pass vulnerability scan
- Authentication required for all API endpoints
- Customer data access must be logged

## Quality
- All code must have type definitions
- Tests required for business logic
- Coverage minimum: 80% for new code

## Compliance
- Changes to customer data require audit log
- PII handling must follow data classification
- Third-party vendors must be in registry

## Process
- All production changes go through Gate
- Incidents Level 3+ require post-mortems
```

### Sparks (Preferences)

```markdown
# BLAZE Sparks

These are our preferences. Follow them when possible.

## Technology
- Prefer TypeScript over JavaScript
- Prefer Supabase for databases
- Prefer Redis for caching
- Prefer React for frontend

## Style
- Prefer small, focused PRs
- Prefer descriptive names over comments
- Prefer composition over inheritance
- Prefer explicit over implicit

## Process
- Ship daily when possible
- Automate anything done twice
- Document decisions, not just code
- Delete code joyfully
```

### Kindling (Patterns)

```markdown
# BLAZE Kindling

These are proven patterns for common tasks.

## API Endpoints
[Link to API pattern document]

## Error Handling
[Link to error handling pattern]

## Testing
[Link to testing pattern]

## Database Migrations
[Link to migration pattern]
```

---

# Appendix A: Glossary

Complete list of all BLAZE terminology with definitions.

[Full glossary content as listed in Chapter 19]

---

# Appendix B: FAQ

**Q: Do I have to memorize all the terms?**
A: No. Guide, Gate, Guard are the only three that matter. Everything else you'll learn naturally.

**Q: What if I need to break a rule?**
A: Request a Firebreak. The Guide helps you. It's part of the system.

**Q: Can I suggest changes to BLAZE?**
A: Yes! Raise a Smoke Signal. Anyone can propose improvements.

**Q: What about our legacy code?**
A: It stays legacy until migration. New code BLAZEs.

**Q: Is this just vibe coding?**
A: No. We don't vibe code. We BLAZE.

---

# Appendix C: Changelog

**v1.0 - January 2026**
- Initial release
- Created by John at PhoneBurner

---

*This document is the complete reference for BLAZE. Most people will never read it. That's okay. The Guide knows it all and is always ready to help.*

🔥
