import React, { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    // Load from LocalStorage or use defaults
    const [user, setUser] = useState(() => {
        try {
            const saved = localStorage.getItem('edumon_user');
            return saved ? JSON.parse(saved) : {
                name: "Student Name",
                email: "student@example.com",
                education: "Class 12 (PCM)",
                targetCourse: "B.Tech Computer Science"
            };
        } catch (e) {
            console.error("Failed to parse user data", e);
            return {
                name: "Student Name",
                email: "student@example.com",
                education: "Class 12 (PCM)",
                targetCourse: "B.Tech Computer Science"
            };
        }
    });

    const [shortlist, setShortlist] = useState(() => {
        try {
            const saved = localStorage.getItem('edumon_shortlist');
            return saved ? JSON.parse(saved) : [
                { id: 101, name: "BITS Pilani", location: "Pilani, India", img: "https://images.collegedunia.com/public/college_data/images/campus/1434977144cam%208.jpg" }
            ];
        } catch (e) {
            console.error("Failed to parse shortlist", e);
            return [];
        }
    });

    const [applications, setApplications] = useState(() => {
        try {
            const saved = localStorage.getItem('edumon_applications');
            return saved ? JSON.parse(saved) : [
                { id: 1, college: "IIT Bombay", course: "B.Tech CS", status: "Under Review", date: "Jan 15, 2026", step: 3 }
            ];
        } catch (e) {
            console.error("Failed to parse applications", e);
            return [];
        }
    });

    // Persist to LocalStorage
    useEffect(() => { localStorage.setItem('edumon_user', JSON.stringify(user)); }, [user]);
    useEffect(() => { localStorage.setItem('edumon_shortlist', JSON.stringify(shortlist)); }, [shortlist]);
    useEffect(() => { localStorage.setItem('edumon_applications', JSON.stringify(applications)); }, [applications]);

    // Actions
    const updateProfile = (data) => {
        setUser(prev => ({ ...prev, ...data }));
    };

    const addToShortlist = (college) => {
        if (!shortlist.find(c => c.name === college.name)) {
            const newCollege = {
                id: Date.now(),
                name: college.name,
                location: college.location || "India",
                img: college.cover || college.img || "https://via.placeholder.com/150"
            };
            setShortlist([...shortlist, newCollege]);
            alert(`${college.name} added to shortlist!`);
        } else {
            alert(`${college.name} is already in your shortlist.`);
        }
    };

    const removeFromShortlist = (id) => {
        setShortlist(shortlist.filter(c => c.id !== id));
    };

    const submitApplication = (college, courseName) => {
        const newApp = {
            id: Date.now(),
            college: college.name,
            course: courseName || "General Course",
            status: "Applied",
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            step: 2
        };
        setApplications([newApp, ...applications]);
        alert(`Application submitted to ${college.name}!`);
    };

    return (
        <UserContext.Provider value={{
            user,
            shortlist,
            applications,
            updateProfile,
            addToShortlist,
            removeFromShortlist,
            submitApplication
        }}>
            {children}
        </UserContext.Provider>
    );
};
