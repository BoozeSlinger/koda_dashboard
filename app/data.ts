export type Status = 'working' | 'thinking' | 'idle' | 'sub-agents';

export const agentStatus = {
  state: "thinking" as Status,
  lastActive: "Just now",
  currentTask: "Scaffolding dashboard components"
};

export const deliverables = [
  { id: 1, title: "Q1 Report", type: "PDF", url: "#", date: "2025-02-27" },
  { id: 2, title: "Competitor Analysis", type: "Doc", url: "#", date: "2025-02-26" },
  { id: 3, title: "Security Audit Log", type: "Audit", url: "#", date: "2025-02-25" },
];

export const actionLog = [
  { id: 1, action: "Started scaffolding project", timestamp: "10:00 AM" },
  { id: 2, action: "Initialized Next.js app", timestamp: "09:55 AM" },
  { id: 3, action: "Checked memory banks", timestamp: "09:50 AM" },
];

export const securityAudits = [
  { id: 1, issue: "Public API Key exposed in .env", severity: "High", status: "Open" },
  { id: 2, issue: "Unused port 8080 open", severity: "Medium", status: "Fixed" },
];
