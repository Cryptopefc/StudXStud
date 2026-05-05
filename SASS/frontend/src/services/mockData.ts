import type { AuthUser } from "../types/auth";
import type { Appointment } from "../types/appointment";
import type { CvProfile } from "../types/cv";
import type { MentorApplication, MentorProfile } from "../types/mentor";
import type { StudentProfile } from "../types/profile";

export const mockAdminUser: AuthUser = {
  uid: "u1",
  name: "Admin User",
  email: "admin@utas.edu.om",
  studentId: "admin_001",
  role: "admin"
};

export const mockStudentUser: AuthUser = {
  uid: "u2",
  name: "Ahmed Ali",
  email: "ahmed@utas.edu.om",
  studentId: "20230001",
  role: "student"
};

export const mockProfiles: StudentProfile[] = [
  {
    uid: "u1",
    name: "Ahmed Ali",
    major: "Computer Science",
    yearOfStudy: 3,
    skillsOffer: ["Tech Skills", "Study Help"],
    skillsNeed: ["Design"],
    availability: [{ day: "Sunday", slots: ["10:00-12:00"] }],
    sessionCount: 4,
    badgeTier: "Beginner"
  }
];

export const mockMentorProfiles: MentorProfile[] = [
  {
    uid: "m1",
    fullName: "Fatma Al Balushi",
    utasEmail: "fatma@utas.edu.om",
    bio: "Software engineering mentor focused on structured study systems and internship readiness.",
    expertise: ["Agile Sprint Planning", "Technical CV Structuring", "Behavioral Interview Prep"],
    experienceYears: 2,
    ratingAvg: 4.8,
    sessionsCompleted: 18,
    availableSlots: ["Sun 10:00", "Sun 11:00", "Mon 12:00", "Wed 14:00"],
    isActive: true
  },
  {
    uid: "m2",
    fullName: "Khalid Al Hinai",
    utasEmail: "khalid@utas.edu.om",
    bio: "Frontend mentor guiding students through production-ready React and UI architecture.",
    expertise: ["React State Management", "Component Design Systems", "Frontend Performance Profiling"],
    experienceYears: 3,
    ratingAvg: 4.6,
    sessionsCompleted: 12,
    availableSlots: ["Tue 11:00", "Tue 13:00", "Thu 13:00", "Thu 15:00"],
    isActive: true
  },
  {
    uid: "m3",
    fullName: "Maha Al Harthi",
    utasEmail: "maha.h@utas.edu.om",
    bio: "Data mentor helping students turn raw datasets into clear project stories.",
    expertise: ["Exploratory Data Analysis", "Power BI Dashboard Design", "Data Storytelling"],
    experienceYears: 4,
    ratingAvg: 4.9,
    sessionsCompleted: 34,
    availableSlots: ["Sun 09:00", "Mon 10:00", "Wed 12:00"],
    isActive: true
  },
  {
    uid: "m4",
    fullName: "Yousef Al Lawati",
    utasEmail: "yousef.l@utas.edu.om",
    bio: "Backend specialist mentoring on APIs, database schemas, and service reliability.",
    expertise: ["REST API Design", "PostgreSQL Schema Modeling", "Node.js Error Handling"],
    experienceYears: 3,
    ratingAvg: 4.7,
    sessionsCompleted: 26,
    availableSlots: ["Mon 14:00", "Tue 10:00", "Thu 14:00"],
    isActive: true
  },
  {
    uid: "m5",
    fullName: "Noor Al Maamari",
    utasEmail: "noor.m@utas.edu.om",
    bio: "UI/UX mentor focused on solving usability problems with practical workflows.",
    expertise: ["Figma Prototyping", "User Journey Mapping", "Accessibility-First UI Decisions"],
    experienceYears: 2,
    ratingAvg: 4.8,
    sessionsCompleted: 21,
    availableSlots: ["Sun 13:00", "Tue 12:00", "Wed 15:00"],
    isActive: true
  },
  {
    uid: "m6",
    fullName: "Salim Al Busaidi",
    utasEmail: "salim.b@utas.edu.om",
    bio: "Cybersecurity mentor for students preparing secure coding and SOC fundamentals.",
    expertise: ["OWASP Top 10 Mitigation", "Threat Modeling Basics", "SIEM Alert Triage"],
    experienceYears: 5,
    ratingAvg: 4.9,
    sessionsCompleted: 40,
    availableSlots: ["Mon 09:00", "Wed 09:00", "Thu 11:00"],
    isActive: true
  },
  {
    uid: "m7",
    fullName: "Aisha Al Jabri",
    utasEmail: "aisha.j@utas.edu.om",
    bio: "Cloud mentor helping students deploy and monitor full-stack apps.",
    expertise: ["AWS EC2 Deployment", "CI/CD with GitHub Actions", "Cloud Cost Optimization"],
    experienceYears: 3,
    ratingAvg: 4.7,
    sessionsCompleted: 24,
    availableSlots: ["Sun 16:00", "Tue 16:00", "Thu 10:00"],
    isActive: true
  },
  {
    uid: "m8",
    fullName: "Hamad Al Rawahi",
    utasEmail: "hamad.r@utas.edu.om",
    bio: "Machine learning mentor for practical model building and validation.",
    expertise: ["Feature Engineering", "Model Evaluation Metrics", "Scikit-learn Pipelines"],
    experienceYears: 4,
    ratingAvg: 4.8,
    sessionsCompleted: 31,
    availableSlots: ["Mon 11:00", "Wed 11:00", "Thu 12:00"],
    isActive: true
  },
  {
    uid: "m9",
    fullName: "Reem Al Riyami",
    utasEmail: "reem.r@utas.edu.om",
    bio: "Career mentor specializing in internship applications and ATS-ready resumes.",
    expertise: ["ATS Keyword Optimization", "LinkedIn Headline Writing", "Internship Outreach Strategy"],
    experienceYears: 2,
    ratingAvg: 4.6,
    sessionsCompleted: 19,
    availableSlots: ["Sun 12:00", "Tue 09:00", "Wed 13:00"],
    isActive: true
  },
  {
    uid: "m10",
    fullName: "Nasser Al Shukaili",
    utasEmail: "nasser.s@utas.edu.om",
    bio: "Mobile mentor guiding Android and Flutter app development lifecycles.",
    expertise: ["Flutter State Management", "Android Architecture Components", "App Release Checklists"],
    experienceYears: 3,
    ratingAvg: 4.7,
    sessionsCompleted: 23,
    availableSlots: ["Mon 13:00", "Tue 15:00", "Thu 16:00"],
    isActive: true
  },
  {
    uid: "m11",
    fullName: "Huda Al Habsi",
    utasEmail: "huda.h@utas.edu.om",
    bio: "Database mentor for query tuning and relational design best practices.",
    expertise: ["SQL Query Optimization", "Indexing Strategies", "Database Normalization"],
    experienceYears: 4,
    ratingAvg: 4.9,
    sessionsCompleted: 37,
    availableSlots: ["Sun 14:00", "Wed 10:00", "Thu 09:00"],
    isActive: true
  },
  {
    uid: "m12",
    fullName: "Rashid Al Mukhaini",
    utasEmail: "rashid.m@utas.edu.om",
    bio: "Network mentor helping students with practical troubleshooting workflows.",
    expertise: ["Subnetting and VLAN Design", "Packet Analysis with Wireshark", "CCNA Lab Preparation"],
    experienceYears: 5,
    ratingAvg: 4.8,
    sessionsCompleted: 33,
    availableSlots: ["Mon 15:00", "Tue 14:00", "Wed 16:00"],
    isActive: true
  },
  {
    uid: "m13",
    fullName: "Sara Al Riyami",
    utasEmail: "sara@utas.edu.om",
    bio: "Academic mentor supporting first-year students in structured study planning.",
    expertise: ["First-Year Transition Planning", "Exam Revision Frameworks", "Weekly Study Scheduling"],
    experienceYears: 2,
    ratingAvg: 4.5,
    sessionsCompleted: 16,
    availableSlots: ["Sun 08:00", "Mon 08:00", "Wed 08:00"],
    isActive: true
  },
  {
    uid: "m14",
    fullName: "Mohammed Al Balushi",
    utasEmail: "mohammed.b@utas.edu.om",
    bio: "DevOps mentor focused on automation and release confidence.",
    expertise: ["Docker Compose Workflows", "Kubernetes Deployment Basics", "Observability Dashboards"],
    experienceYears: 4,
    ratingAvg: 4.7,
    sessionsCompleted: 28,
    availableSlots: ["Tue 11:00", "Thu 11:00", "Thu 17:00"],
    isActive: true
  },
  {
    uid: "m15",
    fullName: "Maryam Al Kindi",
    utasEmail: "maryam.k@utas.edu.om",
    bio: "Product mentor helping students validate ideas and define MVP scope.",
    expertise: ["Problem Statement Framing", "MVP Feature Prioritization", "User Interview Scripts"],
    experienceYears: 3,
    ratingAvg: 4.8,
    sessionsCompleted: 22,
    availableSlots: ["Sun 15:00", "Tue 10:00", "Wed 12:00"],
    isActive: true
  },
  {
    uid: "m16",
    fullName: "Saif Al Farsi",
    utasEmail: "saif.f@utas.edu.om",
    bio: "Algorithms mentor for problem-solving speed and coding interview prep.",
    expertise: ["Dynamic Programming Patterns", "Graph Traversal Techniques", "LeetCode Interview Strategy"],
    experienceYears: 3,
    ratingAvg: 4.9,
    sessionsCompleted: 35,
    availableSlots: ["Mon 17:00", "Tue 17:00", "Wed 17:00"],
    isActive: true
  },
  {
    uid: "m17",
    fullName: "Asma Al Mahrouqi",
    utasEmail: "asma.m@utas.edu.om",
    bio: "Technical writing mentor focused on reports, capstones, and project documentation.",
    expertise: ["Technical Report Structuring", "Research Citation Standards", "Capstone Presentation Narratives"],
    experienceYears: 2,
    ratingAvg: 4.6,
    sessionsCompleted: 17,
    availableSlots: ["Sun 11:00", "Tue 12:00", "Thu 12:00"],
    isActive: true
  },
  {
    uid: "m18",
    fullName: "Basim Al Zadjali",
    utasEmail: "basim.z@utas.edu.om",
    bio: "Embedded systems mentor for hands-on microcontroller and IoT projects.",
    expertise: ["Arduino Sensor Integration", "Microcontroller Debugging", "IoT Prototype Architecture"],
    experienceYears: 4,
    ratingAvg: 4.7,
    sessionsCompleted: 27,
    availableSlots: ["Mon 10:00", "Wed 14:00", "Thu 15:00"],
    isActive: true
  },
  {
    uid: "m19",
    fullName: "Iman Al Yahyai",
    utasEmail: "iman.y@utas.edu.om",
    bio: "QA mentor teaching students practical test strategy and release confidence.",
    expertise: ["Test Case Design", "API Regression Testing", "Bug Reproduction and Reporting"],
    experienceYears: 3,
    ratingAvg: 4.8,
    sessionsCompleted: 25,
    availableSlots: ["Sun 09:00", "Tue 13:00", "Wed 10:00"],
    isActive: true
  },
  {
    uid: "m20",
    fullName: "Abdullah Al Harthi",
    utasEmail: "abdullah.h@utas.edu.om",
    bio: "Business analytics mentor supporting students in KPI and operations analysis.",
    expertise: ["KPI Tree Design", "Excel Financial Modeling", "Process Bottleneck Analysis"],
    experienceYears: 3,
    ratingAvg: 4.6,
    sessionsCompleted: 20,
    availableSlots: ["Mon 12:00", "Wed 13:00", "Thu 14:00"],
    isActive: true
  },
  {
    uid: "m21",
    fullName: "Rawan Al Amri",
    utasEmail: "rawan.a@utas.edu.om",
    bio: "AI mentor helping students build practical NLP and computer vision demos.",
    expertise: ["Prompt Engineering Workflows", "NLP Model Fine-Tuning", "Computer Vision Data Labeling"],
    experienceYears: 4,
    ratingAvg: 4.9,
    sessionsCompleted: 38,
    availableSlots: ["Sun 17:00", "Tue 18:00", "Thu 18:00"],
    isActive: true
  }
];

export const mockMentorApplications: MentorApplication[] = [
  {
    id: "a1",
    studentUid: "u2",
    fullName: "Sara Al Riyami",
    utasEmail: "sara@utas.edu.om",
    bio: "I support first-year students.",
    expertise: ["New Student Support", "Study Help"],
    experienceSummary: "2 years of peer guidance activities.",
    status: "PENDING",
    createdAt: "2026-05-05"
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: "ap1",
    studentUid: "u1",
    studentName: "Ahmed Ali",
    studentEmail: "ahmed@utas.edu.om",
    mentorUid: "m1",
    mentorName: "Fatma Al Balushi",
    mentorEmail: "fatma@utas.edu.om",
    slot: "Sun 10:00",
    topic: "Improve my study plan",
    note: "Need a weekly structure before exams.",
    status: "PENDING",
    meetingLink: "",
    createdAt: "2026-05-05"
  }
];

export const mockCvProfile: CvProfile = {
  fullName: "",
  utasEmail: "",
  phone: "",
  linkedIn: "",
  major: "",
  objective: "",
  education: [
    {
      institution: "UTAS Salalah",
      degree: "",
      startYear: "",
      endYear: ""
    }
  ],
  experience: [
    {
      role: "",
      organization: "",
      startDate: "",
      endDate: "",
      summary: "",
      accomplishments: []
    }
  ],
  skills: [],
  languages: []
};
