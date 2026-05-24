export const profile = {
  name: "Purvi Patil",
  title: "Site Reliability Engineer",
  location: "Pune, India",
  email: "patilpurvi955@gmail.com",
  phone: "+91 7709713848",
  summary:
    "Site Reliability Engineer with hands-on experience in production support, monitoring, and incident management for high-availability systems. Proven ability to analyze complex system issues, perform root cause analysis (RCA), and optimize application and database performance. Skilled in leveraging observability tools, CI/CD pipelines, and automation to improve system reliability and reduce downtime. Adept at collaborating with cross-functional teams to enhance system stability, ensure 99.9% uptime, and drive continuous improvement in production environments.",
};

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const experiences = [
  {
    role: "Analyst – SRE / Production Support",
    client: "Client: Dell Technologies",
    company: "eClerx Services Ltd.",
    location: "Mumbai, India",
    period: "Jan 2025 – Present",
    current: true,
    points: [
      "Provided technical support for web applications built on ASP.NET MVC and JavaScript — troubleshooting application issues, debugging backend logic, and ensuring stable performance across diverse user environments.",
      "Contributed to maintaining and enhancing test automation frameworks, enabling faster release cycles, reducing testing effort by 30%, and improving defect detection during deployments.",
      "Supported the implementation and maintenance of a User Management System for HR and payroll operations — resolving functional issues, validating workflows, and reducing manual data entry by 50%.",
      "Managed application configurations using XStudio, performing database-driven updates and resolving configuration issues without requiring full application redeployment, ensuring minimal downtime.",
      "Performed SQL Server query optimization including tuning stored procedures and indexing strategies, improving database performance by 20% and resolving latency-related production issues.",
      "Collaborated with development and QA teams to investigate production incidents, analyze application logs and database queries, and implement fixes to enhance system reliability and stability.",
    ],
  },
  {
    role: "Trainee – Backend Support & SQL Optimization",
    company: "SSM Infotech",
    location: "Surat, India",
    period: "Aug 2023 – Nov 2024",
    points: [
      "Investigated and resolved critical application and database issues on a high-traffic e-commerce platform by analyzing SQL Server logs, query execution plans, and system performance metrics — ensuring seamless data flow for analytics and reporting.",
      "Designed, developed, and optimized ETL workflows with enhanced validation and troubleshooting mechanisms, reducing testing cycles by 30% and improving overall data processing reliability.",
      "Supported release and deployment activities using Jenkins CI/CD pipelines and Redgate version control, enabling faster delivery cycles and efficient resolution of production issues.",
      "Monitored production environments using Splunk, Dynatrace, and Catchpoint — proactively identifying incidents and maintaining 99.9% system uptime.",
      "Collaborated with cross-functional teams to analyze log data, perform root cause analysis (RCA), and implement fixes — significantly improving system observability and incident response.",
      "Worked closely with SRE, development, and QA teams to troubleshoot production issues, implement preventive measures, and reduce recurring incidents.",
      "Applied advanced SQL performance tuning and query optimization techniques to enhance database performance in high-availability, enterprise-scale environments.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Programming & Technologies",
    items: ["C#", "Python", "ASP.NET", "JavaScript", "REST APIs"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "CI/CD", "Jenkins", "Git", "Linux", "Docker", "Kubernetes"],
  },
  {
    label: "Monitoring & Observability",
    items: [
      "Dynatrace",
      "Splunk",
      "Catchpoint",
      "Application Monitoring",
      "Log Analysis",
      "APM",
      "Alert Monitoring",
      "Dashboarding",
    ],
  },
  {
    label: "Support & Troubleshooting",
    items: [
      "Incident Management",
      "Root Cause Analysis (RCA)",
      "L1/L2 Production Support",
      "Application Support",
      "Critical Incident Handling",
    ],
  },
  {
    label: "Databases",
    items: [
      "MS SQL Server",
      "MongoDB",
      "SQL Queries",
      "Stored Procedures",
      "Database Monitoring",
    ],
  },
];

export const projects = [
  {
    title: "E-commerce Platform Production Support",
    org: "Dell Technologies",
    period: "Jan 2025 – Present",
    points: [
      "Provided production support for Dell's e-commerce platform, troubleshooting application and database issues impacting enterprise clients such as Premier and Responsive.",
      "Used Splunk and Catchpoint to track system metrics, analyze logs, and identify potential incidents before they affected platform availability.",
      "Partnered with the SRE team and developers to investigate incidents, conduct root cause analysis, and deploy fixes to improve platform stability.",
    ],
    tags: ["Splunk", "Catchpoint", "RCA", "SQL Server"],
  },
  {
    title: "Application Support & User Management System",
    org: "SSM Infotech",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Provided application support and enhancements for a User Management System used in HR and payroll operations.",
      "Troubleshot application issues in ASP.NET MVC-based web applications, ensuring smooth functionality and minimal disruption.",
      "Validated user workflows and resolved functional issues to improve system efficiency and usability.",
    ],
    tags: ["ASP.NET MVC", "SQL", "Workflow Validation"],
  },
  {
    title: "Spraying Drone for Grape Farming",
    org: "Engineering Capstone",
    period: "Sep 2022 – Apr 2023",
    points: [
      "Designed and developed an IoT-enabled automated agriculture spraying drone to optimize pesticide application.",
      "Improved operational efficiency by 40x through automation, significantly reducing manual intervention and labor dependency.",
      "Implemented precision spraying techniques, reducing chemical usage while improving crop protection and sustainability.",
    ],
    tags: ["IoT", "Automation", "Agritech"],
  },
];

export const certifications = [
  {
    title: "Advanced Dynatrace with AWS",
    period: "Mar 2026 – May 2026",
    description:
      "Hands-on training in monitoring, observability, and performance analysis of applications in AWS environments. Real-time monitoring, alert configuration, and RCA using Dynatrace and AWS CloudWatch. Skilled in identifying performance bottlenecks, log analysis, and ensuring high availability of cloud production systems.",
  },
  {
    title: "Generative AI",
    period: "Jan 2025 – Feb 2025",
    description:
      "Training on Generative AI fundamentals — core concepts of LLMs, prompt engineering, and practical AI applications. Hands-on exposure to designing effective prompts, optimizing outputs, and leveraging AI tools for real-world problem solving and productivity enhancement.",
  },
];

export const education = [
  {
    degree: "B.E. — Information Technology",
    institution: "NDMVP KBT College of Engineering",
    period: "2019 – 2023",
  },
  {
    degree: "H.S.C.",
    institution: "Upadhye College of Science",
    period: "2018 – 2019",
  },
  {
    degree: "S.S.C.",
    institution: "Shri Mahavir English Medium School",
    period: "2016 – 2017",
  },
];
