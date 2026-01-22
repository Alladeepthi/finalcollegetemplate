export const examsData = [
    {
        id: 1,
        slug: "jee-main",
        name: "JEE Main 2026",
        full_name: "Joint Entrance Examination",
        stream: "Engineering",
        level: "National",
        mode: "Online (CBT)",
        status: "Registration Open",
        statusColor: "green",
        dates: {
            appStart: "Nov 01, 2025",
            appEnd: "Jan 10, 2026",
            examDate: "Jan 24 - Feb 01, 2026"
        },
        acceptingColleges: "NITs, IIITs, CFTIs",
        logo: "📐",
        description: "The Joint Entrance Examination (JEE) Main is conducted for admission to Undergraduate Engineering Programs (B.E/B.Tech) at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), and Institutions/Universities funded/recognized by participating State Governments.",
        syllabus: [
            { subject: "Physics", topics: ["Kinematics", "Laws of Motion", "Thermodynamics", "Electrostatics"] },
            { subject: "Chemistry", topics: ["Atomic Structure", "Chemical Bonding", "Organic Chemistry", "Electrochemistry"] },
            { subject: "Mathematics", topics: ["Calculus", "Algebra", "Coordinate Geometry", "Vectors"] },
            { subject: "Aptitude", topics: ["Logic", "Visual Reasoning"] }
        ],
        pattern: {
            duration: "3 Hours",
            questions: "90 Questions (75 to attempt)",
            marking: "+4 for correct, -1 for incorrect"
        }
    },
    {
        id: 101,
        slug: "jee-advanced",
        name: "JEE Advanced 2026",
        full_name: "Joint Entrance Examination Advanced",
        stream: "Engineering",
        level: "National",
        mode: "Online (CBT)",
        status: "Upcoming",
        statusColor: "orange",
        dates: {
            appStart: "Apr 21, 2026",
            appEnd: "Apr 30, 2026",
            examDate: "May 17, 2026"
        },
        acceptingColleges: "IITs, IISc, IISERs",
        logo: "⚛️",
        description: "JEE Advanced is conducted by the seven Zonal Coordinating IITs under the guidance of the Joint Admission Board (JAB). It is the sole prerequisite for admission to the Indian Institutes of Technology (IITs).",
        syllabus: [
            { subject: "Physics", topics: ["Mechanics", "Electricity and Magnetism", "Optics", "Modern Physics"] },
            { subject: "Chemistry", topics: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry"] },
            { subject: "Mathematics", topics: ["Algebra", "Trigonometry", "Analytical Geometry", "Differential Calculus"] }
        ],
        pattern: {
            duration: "6 Hours (Two papers of 3 hours each)",
            questions: "Varies every year",
            marking: "Partial marking available"
        }
    },
    {
        id: 102,
        slug: "gate",
        name: "GATE 2026",
        full_name: "Graduate Aptitude Test in Engineering",
        stream: "Engineering",
        level: "National",
        mode: "Online (CBT)",
        status: "Syllabus Out",
        statusColor: "blue",
        dates: {
            appStart: "Aug 30, 2025",
            appEnd: "Sep 29, 2025",
            examDate: "Feb 03 - 11, 2026"
        },
        acceptingColleges: "IITs, NITs, PSU Recruitment",
        logo: "⚙️",
        description: "GATE is a national-level exam that primarily tests the comprehensive understanding of various undergraduate subjects in Engineering and Technology for admission into Master's programs and recruitment by some Public Sector Undertakings.",
        syllabus: [
            { subject: "General Aptitude", topics: ["Verbal Ability", "Numerical Ability"] },
            { subject: "Engineering Mathematics", topics: ["Linear Algebra", "Calculus", "Probability"] },
            { subject: "Core Subject", topics: ["Based on the selected paper"] }
        ],
        pattern: {
            duration: "3 Hours",
            questions: "65 Questions",
            marking: "100 Marks total"
        }
    },
    {
        id: 103,
        slug: "bitsat",
        name: "BITSAT 2026",
        full_name: "Birla Institute of Technology and Science Admission Test",
        stream: "Engineering",
        level: "University",
        mode: "Online",
        status: "Upcoming",
        statusColor: "purple",
        dates: {
            appStart: "Jan 2026",
            appEnd: "Apr 2026",
            examDate: "May 2026"
        },
        acceptingColleges: "BITS Pilani, Goa, Hyderabad",
        logo: "🏫",
        description: "BITSAT is a computer-based online test for admissions to Integrated First Degree Programs of BITS Pilani Campuses in Pilani, Goa, and Hyderabad.",
        syllabus: [
            { subject: "Physics", topics: ["Mechanics", "Thermodynamics", "Electromagnetism"] },
            { subject: "Chemistry", topics: ["States of Matter", "Thermodynamics", "Chemical Kinetics"] },
            { subject: "Mathematics", topics: ["Algebra", "Calculus", "Probability"] },
            { subject: "English & Logic", topics: ["Proficiency", "Logical Reasoning"] }
        ],
        pattern: {
            duration: "3 Hours",
            questions: "130 Questions",
            marking: "+3 for correct, -1 for incorrect"
        }
    },
    {
        id: 104,
        slug: "viteee",
        name: "VITEEE 2026",
        full_name: "VIT Engineering Entrance Examination",
        stream: "Engineering",
        level: "University",
        mode: "Online",
        status: "Registration Open",
        statusColor: "green",
        dates: {
            appStart: "Nov 2025",
            appEnd: "Mar 2026",
            examDate: "Apr 2026"
        },
        acceptingColleges: "VIT Vellore, Chennai, AP, Bhopal",
        logo: "🎓",
        description: "VITEEE is conducted for admission to B.Tech programs of VIT University group.",
        syllabus: [
            { subject: "Physics", topics: ["Law of Motion", "Work, Power and Energy"] },
            { subject: "Chemistry", topics: ["Atomic Structure", "Coordination Chemistry"] },
            { subject: "Mathematics", topics: ["Matrices", "Vector Algebra"] },
            { subject: "English & Aptitude", topics: ["Comprehension", "Data Interpretation"] }
        ],
        pattern: {
            duration: "2.5 Hours",
            questions: "125 Questions",
            marking: "No negative marking"
        }
    },
    {
        id: 2,
        slug: "neet",
        name: "NEET UG 2026",
        full_name: "National Eligibility cum Entrance Test",
        stream: "Medical",
        level: "National",
        mode: "Offline (Pen & Paper)",
        status: "Upcoming",
        statusColor: "orange",
        dates: {
            appStart: "Mar 2026",
            appEnd: "Apr 2026",
            examDate: "May 05, 2026"
        },
        acceptingColleges: "All Medical Colleges in India",
        logo: "🩺",
        description: "The National Eligibility cum Entrance Test (NEET) is the only entrance examination for admission to MBBS and BDS courses in India.",
        syllabus: [
            { subject: "Physics", topics: ["Mechanics", "Thermodynamics", "Optics"] },
            { subject: "Chemistry", topics: ["Physical", "Organic", "Inorganic"] },
            { subject: "Biology", topics: ["Botany", "Zoology"] }
        ],
        pattern: {
            duration: "3 Hours 20 Minutes",
            questions: "200 Questions (180 to attempt)",
            marking: "+4 for correct, -1 for incorrect"
        }
    },
    {
        id: 201,
        slug: "neet-pg",
        name: "NEET PG 2026",
        full_name: "National Eligibility cum Entrance Test PG",
        stream: "Medical",
        level: "National",
        mode: "Online",
        status: "Date Announced",
        statusColor: "blue",
        dates: {
            appStart: "Jan 2026",
            appEnd: "Feb 2026",
            examDate: "Mar 2026"
        },
        acceptingColleges: "MD/MS/PG Diploma Courses",
        logo: "🏥",
        description: "NEET-PG is an eligibility-cum-ranking examination prescribed as the single entrance examination for admission to various MD/MS and PG Diploma Courses.",
        syllabus: [
            { subject: "Clinical", topics: ["Medicine", "Surgery", "OBGYN", "Pediatrics"] },
            { subject: "Pre-Clinical", topics: ["Anatomy", "Physiology", "Biochemistry"] },
            { subject: "Para-Clinical", topics: ["Pathology", "Pharmacology", "Microbiology"] }
        ],
        pattern: {
            duration: "3.5 Hours",
            questions: "200 MCQs",
            marking: "+4 for correct, -1 for incorrect"
        }
    },
    {
        id: 202,
        slug: "aiims",
        name: "AIIMS Nursing 2026",
        full_name: "All India Institute of Medical Sciences Nursing",
        stream: "Medical",
        level: "National",
        mode: "Online",
        status: "Notification Out",
        statusColor: "yellow",
        dates: {
            appStart: "Feb 2026",
            appEnd: "Mar 2026",
            examDate: "Jun 2026"
        },
        acceptingColleges: "AIIMS New Delhi & others",
        logo: "🧬",
        description: "AIIMS Nursing entrance exam is conducted for admission to B.Sc (Hons) Nursing and M.Sc Nursing courses at AIIMS institutions.",
        syllabus: [
            { subject: "Physics", topics: ["10+2 Level Physics"] },
            { subject: "Chemistry", topics: ["10+2 Level Chemistry"] },
            { subject: "Biology", topics: ["10+2 Level Biology"] },
            { subject: "General Knowledge", topics: ["Current Affairs"] }
        ],
        pattern: {
            duration: "2 Hours",
            questions: "100 MCQs",
            marking: "+1 for correct, -1/3 for incorrect"
        }
    },
    {
        id: 3,
        slug: "cat",
        name: "CAT 2025",
        full_name: "Common Admission Test",
        stream: "Management",
        level: "National",
        mode: "Online (CBT)",
        status: "Result Declared",
        statusColor: "blue",
        dates: {
            appStart: "Aug 02, 2025",
            appEnd: "Sep 13, 2025",
            examDate: "Nov 24, 2025"
        },
        acceptingColleges: "IIMs, FMS, SP Jain, IITs",
        logo: "📊",
        description: "Common Admission Test (CAT) is a computer-based test for admission in graduate management programs like MBA. Making it one of the toughest exams in India.",
        syllabus: [
            { subject: "VARC", topics: ["Reading Comprehension", "Verbal Ability"] },
            { subject: "DILR", topics: ["Data Interpretation", "Logical Reasoning"] },
            { subject: "QA", topics: ["Quantitative Aptitude"] }
        ],
        pattern: {
            duration: "2 Hours",
            questions: "66 Questions",
            marking: "+3 for correct, -1 for incorrect"
        }
    },
    {
        id: 301,
        slug: "xat",
        name: "XAT 2026",
        full_name: "Xavier Aptitude Test",
        stream: "Management",
        level: "National",
        mode: "Online",
        status: "Admit Card Out",
        statusColor: "green",
        dates: {
            appStart: "Jul 2025",
            appEnd: "Nov 2025",
            examDate: "Jan 07, 2026"
        },
        acceptingColleges: "XLRI & 160+ B-Schools",
        logo: "📉",
        description: "XAT is a national-level management entrance examination conducted by XLRI, Jamshedpur for admission to MBA/PGDM programs.",
        syllabus: [
            { subject: "Decision Making", topics: ["Business Situations", "Ethical Dilemmas"] },
            { subject: "Verbal & Logical", topics: ["Reading Comp", "Critical Reasoning"] },
            { subject: "Quantitative & DI", topics: ["Maths", "Data Analysis"] },
            { subject: "GK", topics: ["Current Affairs", "Static GK"] }
        ],
        pattern: {
            duration: "3 Hours 10 Minutes",
            questions: "100+ Questions",
            marking: "+1 for correct, -0.25 for incorrect"
        }
    },
    {
        id: 4,
        slug: "upsc",
        name: "UPSC CSE 2026",
        full_name: "Civil Services Examination",
        stream: "Government",
        level: "National",
        mode: "Offline",
        status: "Notification Out",
        statusColor: "purple",
        dates: {
            appStart: "Feb 14, 2026",
            appEnd: "Mar 05, 2026",
            examDate: "May 26, 2026"
        },
        acceptingColleges: "Recruitment for IAS, IPS, IFS",
        logo: "🇮🇳",
        description: "The Civil Services Examination (CSE) is a nationwide competitive examination in India conducted by the UPSC for recruitment to higher Civil Services.",
        syllabus: [
            { subject: "Prelims GS I", topics: ["History", "Geography", "Polity", "Economy", "Environment"] },
            { subject: "Prelims CSAT", topics: ["Comprehension", "Reasoning", "Basic Numeracy"] },
            { subject: "Mains", topics: ["Essay", "GS I-IV", "Language", "Optional"] }
        ],
        pattern: {
            duration: "Prelims: 2x2 Hours; Mains: 3 Hours/paper",
            questions: "Descriptive (Mains), Objective (Prelims)",
            marking: "Negative marking in Prelims"
        }
    },
    {
        id: 5,
        slug: "clat",
        name: "CLAT 2026",
        full_name: "Common Law Admission Test",
        stream: "Law",
        level: "National",
        mode: "Offline",
        status: "Registration Closed",
        statusColor: "red",
        dates: {
            appStart: "Jul 01, 2025",
            appEnd: "Nov 03, 2025",
            examDate: "Dec 03, 2025"
        },
        acceptingColleges: "22 NLUs, Private Law Schools",
        logo: "⚖️",
        description: "CLAT is a centralized national level entrance test for admissions to twenty-two National Law Universities (NLUs) in India.",
        syllabus: [
            { subject: "English", topics: ["Comprehension", "Grammar"] },
            { subject: "Current Affairs", topics: ["GK", "News"] },
            { subject: "Legal Reasoning", topics: ["Legal Principles"] },
            { subject: "Logical Reasoning", topics: ["Arguments", "Puzzles"] },
            { subject: "Quant", topics: ["Basic Math"] }
        ],
        pattern: {
            duration: "2 Hours",
            questions: "120 Questions",
            marking: "+1 for correct, -0.25 for incorrect"
        }
    },
    {
        id: 6,
        slug: "nid",
        name: "NID DAT 2026",
        full_name: "Design Aptitude Test",
        stream: "Design",
        level: "National",
        mode: "Offline",
        status: "Admit Card Out",
        statusColor: "yellow",
        dates: {
            appStart: "Oct 2025",
            appEnd: "Dec 2025",
            examDate: "Jan 07, 2026"
        },
        acceptingColleges: "NID Ahmedabad, NID Bangalore",
        logo: "🎨",
        description: "NID DAT is a national-level entrance exam conducted by the National Institute of Design for admission to B.Des and M.Des programs.",
        syllabus: [
            { subject: "Prelims", topics: ["Visual Design", "Creative Thinking", "Observation"] },
            { subject: "Mains", topics: ["Studio Test", "Interview"] }
        ],
        pattern: {
            duration: "3 Hours",
            questions: "Mix of Objective and Subjective",
            marking: "No Fixed Pattern"
        }
    }
];
