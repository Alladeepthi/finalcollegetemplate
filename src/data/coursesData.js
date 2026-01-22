
const coursesData = [
    {
        id: 1,
        title: "B.Tech (Bachelor of Technology)",
        level: "Undergraduate",
        stream: "Engineering",
        duration: "4 Years",
        eligibility: "10+2 with PCM (50% aggregate)",
        avgSalary: "â‚¹4L - â‚¹10L PA",
        avgSalaryValue: 700000,
        durationValue: 4,
        careers: ["Software Engineer", "Data Scientist", "Civil Engineer"],
        mode: "Full Time",
        icon: "ðŸ’»",
        overview: "Bachelor of Technology (B.Tech) is a professional undergraduate engineering degree programme awarded to candidates after completion of four years of study in the field. This undergraduate programme is your gateway to a career in engineering.",
        eligibilityDetails: [
            "Passed 10+2 examination with Physics and Mathematics as compulsory subjects.",
            "At least 50% marks in the above subjects taken together (45% for reserved categories).",
            "Qualify in entrance exams like JEE Main, JEE Advanced, or state-level CETs."
        ],
        syllabus: [
            { year: "Year 1", subjects: ["Engineering Mathematics", "Engineering Physics", "Basics of Electronics", "Programming in C", "Engineering Mechanics"] },
            { year: "Year 2", subjects: ["Data Structures", "Digital Logic", "Discrete Mathematics", "Object Oriented Programming", "Computer Organization"] },
            { year: "Year 3", subjects: ["Operating Systems", "Database Management", "Computer Networks", "Software Engineering", "Theory of Computation"] },
            { year: "Year 4", subjects: ["Artificial Intelligence", "Compiler Design", "Cloud Computing", "Project Work", "Electives"] }
        ],
        careerDetails: [
            { role: "Software Engineer", salary: "â‚¹6L - â‚¹15L PA" },
            { role: "Data Scientist", salary: "â‚¹8L - â‚¹20L PA" },
            { role: "Product Manager", salary: "â‚¹10L - â‚¹25L PA" },
            { role: "System Analyst", salary: "â‚¹5L - â‚¹12L PA" }
        ],
        topColleges: ["IIT Bombay", "IIT Delhi", "BITS Pilani", "NIT Trichy", "VIT Vellore"]
    },
    {
        id: 2,
        title: "MBA (Master of Business Administration)",
        level: "Postgraduate",
        stream: "Management",
        duration: "2 Years",
        eligibility: "Graduation (50%) + CAT/MAT",
        avgSalary: "â‚¹6L - â‚¹15L PA",
        avgSalaryValue: 1050000,
        durationValue: 2,
        careers: ["HR Manager", "Marketing Head", "Finance Analyst"],
        mode: "Full Time",
        icon: "ðŸ“Š",
        overview: "The Master of Business Administration (MBA) is an internationally-recognized degree designed to develop the skills required for careers in business and management. The value of the MBA, however, is not limited strictly to the business world.",
        eligibilityDetails: [
            "Bachelor's degree in any discipline from a recognized university.",
            "Minimum 50% aggregate marks in graduation.",
            "Score in entrance exams like CAT, MAT, XAT, GMAT, or CMAT."
        ],
        syllabus: [
            { year: "Semester 1", subjects: ["Organizational Behavior", "Marketing Management", "Financial Accounting", "Quantitative Methods"] },
            { year: "Semester 2", subjects: ["Human Resource Management", "Financial Management", "Operations Management", "Business Research Methods"] },
            { year: "Semester 3", subjects: ["Strategic Management", "Elective 1 (Specialization)", "Elective 2 (Specialization)", "Summer Internship Project"] },
            { year: "Semester 4", subjects: ["Corporate Law", "International Business", "Dissertation", "Final Project"] }
        ],
        careerDetails: [
            { role: "Marketing Manager", salary: "â‚¹8L - â‚¹18L PA" },
            { role: "Financial Analyst", salary: "â‚¹6L - â‚¹14L PA" },
            { role: "HR Business Partner", salary: "â‚¹7L - â‚¹15L PA" },
            { role: "Operations Head", salary: "â‚¹12L - â‚¹25L PA" }
        ],
        topColleges: ["IIM Ahmedabad", "IIM Bangalore", "ISB Hyderabad", "FMS Delhi", "XLRI Jamshedpur"]
    },
    {
        id: 3,
        title: "MBBS (Bachelor of Medicine)",
        level: "Undergraduate",
        stream: "Medical",
        duration: "5.5 Years",
        eligibility: "10+2 with PCB + NEET",
        avgSalary: "â‚¹8L - â‚¹12L PA",
        avgSalaryValue: 1000000,
        durationValue: 5.5,
        careers: ["Doctor", "Surgeon", "Medical Researcher"],
        mode: "Full Time",
        icon: "ðŸ©º",
        overview: "MBBS (Bachelor of Medicine, Bachelor of Surgery) is a primary medical qualification granted by medical colleges. It is a 5.5-year duration course including one year of mandatory rotating internship.",
        eligibilityDetails: [
            "Passed 10+2 with Physics, Chemistry, and Biology.",
            "Minimum 50% aggregate marks in PCB.",
            "Must have qualified NEET UG exam."
        ],
        syllabus: [
            { year: "Phase 1", subjects: ["Anatomy", "Physiology", "Biochemistry"] },
            { year: "Phase 2", subjects: ["Pathology", "Microbiology", "Pharmacology", "Forensic Medicine"] },
            { year: "Phase 3 (Part 1)", subjects: ["Ophthalmology", "ENT", "Community Medicine"] },
            { year: "Phase 3 (Part 2)", subjects: ["General Medicine", "General Surgery", "Pediatrics", "Obstetrics & Gynecology"] }
        ],
        careerDetails: [
            { role: "General Physician", salary: "â‚¹8L - â‚¹15L PA" },
            { role: "Surgeon", salary: "â‚¹12L - â‚¹30L PA" },
            { role: "Medical Officer", salary: "â‚¹6L - â‚¹10L PA" }
        ],
        topColleges: ["AIIMS Delhi", "CMC Vellore", "JIPMER Puducherry", "KMC Manipal"]
    },
    {
        id: 4,
        title: "BCA (Bachelor of Computer Applications)",
        level: "Undergraduate",
        stream: "Computer Applications",
        duration: "3 Years",
        eligibility: "10+2 with Math/Computer",
        avgSalary: "â‚¹3L - â‚¹6L PA",
        avgSalaryValue: 450000,
        durationValue: 3,
        careers: ["Web Developer", "System Analyst", "Technical Support"],
        mode: "Full Time",
        icon: "ðŸ–¥ï¸",
        overview: "BCA is a 3-year undergraduate course that serves as a foundation for a career in information technology and computer applications. It covers software development, web design, and database management.",
        eligibilityDetails: [
            "Passed 10+2 from a recognized board.",
            "Mathematics or Computer Science as a subject in 10+2 is often preferred/required.",
            "Minimum 50% aggregate marks."
        ],
        syllabus: [
            { year: "Year 1", subjects: ["C Programming", "Digital Electronics", "Mathematics", "Communication Skills"] },
            { year: "Year 2", subjects: ["Data Structures", "Database Management Systems", "Operating Systems", "Object Oriented Programming (C++)"] },
            { year: "Year 3", subjects: ["Java Programming", "Computer Networks", "Web Technologies", "Software Engineering", "Project"] }
        ],
        careerDetails: [
            { role: "Web Developer", salary: "â‚¹3L - â‚¹7L PA" },
            { role: "System Administrator", salary: "â‚¹4L - â‚¹8L PA" },
            { role: "Software Tester", salary: "â‚¹3L - â‚¹6L PA" }
        ],
        topColleges: ["Christ University", "Loyola College", "Symbiosis Institute", "Amity University"]
    },
    {
        id: 5,
        title: "B.Com (Bachelor of Commerce)",
        level: "Undergraduate",
        stream: "Commerce",
        duration: "3 Years",
        eligibility: "10+2 in Commerce stream",
        avgSalary: "â‚¹3L - â‚¹5L PA",
        avgSalaryValue: 400000,
        durationValue: 3,
        careers: ["Accountant", "Banker", "Tax Consultant"],
        mode: "Full Time/Distance",
        icon: "ðŸ’°",
        overview: "B.Com is a 3-year undergraduate course focusing on accounts, economics, and finance. It prepares students for careers in banking, insurance, and accounting sectors.",
        eligibilityDetails: [
            "Passed 10+2 examination.",
            "Commerce stream preferred but Arts/Science students can also apply.",
            "Minimum 45-50% aggregate marks."
        ],
        syllabus: [
            { year: "Year 1", subjects: ["Financial Accounting", "Business Economics", "Business Law", "Business Communication"] },
            { year: "Year 2", subjects: ["Corporate Accounting", "Cost Accounting", "Income Tax Law", "Principles of Management"] },
            { year: "Year 3", subjects: ["Auditing", "GST", "Banking & Insurance", "Financial Management"] }
        ],
        careerDetails: [
            { role: "Accountant", salary: "â‚¹2.5L - â‚¹5L PA" },
            { role: "Financial Analyst", salary: "â‚¹4L - â‚¹8L PA" },
            { role: "Tax Consultant", salary: "â‚¹3L - â‚¹7L PA" }
        ],
        topColleges: ["SRCC Delhi", "Hindu College", "Loyola College Chennai", "St. Xaviers Mumbai"]
    },
    {
        id: 6,
        title: "Data Science Certification",
        level: "Diploma/Certification",
        stream: "IT & Software",
        duration: "6 - 12 Months",
        eligibility: "Any Graduate",
        avgSalary: "â‚¹6L - â‚¹14L PA",
        avgSalaryValue: 1000000,
        durationValue: 1,
        careers: ["Data Analyst", "ML Engineer"],
        mode: "Online",
        icon: "ðŸ“ˆ",
        overview: "A specialized certification program designed to master Data Science, Machine Learning, and Analytics tools like Python, R, SQL, and Tableau.",
        eligibilityDetails: [
            "Bachelor's degree in any field (STEM preferred).",
            "Basic understanding of mathematics and statistics."
        ],
        syllabus: [
            { year: "Module 1", subjects: ["Python for Data Science", "Statistics & Probability", "SQL for Data Analysis"] },
            { year: "Module 2", subjects: ["Data Visualization", "Machine Learning Algorithms", "Deep Learning basics"] },
            { year: "Module 3", subjects: ["Big Data Tools", "Capstone Project"] }
        ],
        careerDetails: [
            { role: "Data Analyst", salary: "â‚¹5L - â‚¹9L PA" },
            { role: "Data Scientist", salary: "â‚¹10L - â‚¹20L PA" },
            { role: "ML Engineer", salary: "â‚¹8L - â‚¹18L PA" }
        ],
        topColleges: ["UpGrad", "Simplilearn", "Coursera", "Udacity"]
    },
    {
        id: 7,
        title: "M.Tech (Master of Technology)",
        level: "Postgraduate",
        stream: "Engineering",
        duration: "2 Years",
        eligibility: "B.Tech + GATE",
        avgSalary: "â‚¹6L - â‚¹12L PA",
        avgSalaryValue: 900000,
        durationValue: 2,
        careers: ["Research Scientist", "Professor", "Tech Lead"],
        mode: "Full Time",
        icon: "âš™ï¸",
        overview: "M.Tech is a postgraduate engineering program focusing on specialization in a specific branch of technology. It is ideal for those looking for research or specialized technical roles.",
        eligibilityDetails: [
            "B.E./B.Tech degree in relevant branch.",
            "Valid GATE score is usually required for top colleges.",
            "Minimum CPI/Percentage in graduation."
        ],
        syllabus: [
            { year: "Semester 1", subjects: ["Advanced Engineering Mathematics", "Core Departmental Subjects", "Research Methodology"] },
            { year: "Semester 2", subjects: ["Specialization Electives", "Lab Work", "Seminar"] },
            { year: "Year 2", subjects: ["Thesis/Dissertation Work"] }
        ],
        careerDetails: [
            { role: "R&D Engineer", salary: "â‚¹8L - â‚¹16L PA" },
            { role: "Senior Software Engineer", salary: "â‚¹10L - â‚¹22L PA" },
            { role: "Assistant Professor", salary: "â‚¹6L - â‚¹10L PA" }
        ],
        topColleges: ["IIT Madras", "IIT Bombay", "IISc Bangalore", "IIT Delhi"]
    },
    {
        id: 8,
        title: "B.A. (Bachelor of Arts)",
        level: "Undergraduate",
        stream: "Arts & Humanities",
        duration: "3 Years",
        eligibility: "10+2 Any Stream",
        avgSalary: "â‚¹3L - â‚¹5L PA",
        avgSalaryValue: 400000,
        durationValue: 3,
        careers: ["Content Writer", "Teacher", "Journalist"],
        mode: "Full Time/Distance",
        icon: "ðŸ“š",
        overview: "Bachelor of Arts (B.A.) is an undergraduate program offering specialization in liberal arts and humanities, including subjects like Literature, History, Sociology, and Psychology.",
        eligibilityDetails: [
            "Passed 10+2 examination from any stream.",
            "Minimum 40-50% aggregate marks depending on college."
        ],
        syllabus: [
            { year: "Year 1", subjects: ["English", "Second Language", "Core Subject 1", "Core Subject 2"] },
            { year: "Year 2", subjects: ["Core Subject 1 (Adv)", "Core Subject 2 (Adv)", "Elective 1"] },
            { year: "Year 3", subjects: ["Specialization Papers", "Dissertation", "Elective 2"] }
        ],
        careerDetails: [
            { role: "Content Writer", salary: "â‚¹2.5L - â‚¹5L PA" },
            { role: "Teacher", salary: "â‚¹3L - â‚¹6L PA" },
            { role: "Journalist", salary: "â‚¹3L - â‚¹7L PA" }
        ],
        topColleges: ["St. Stephens Delhi", "LSR Delhi", "Loyola College Chennai", "Fergusson College Pune"]
    }
];

export default coursesData;
