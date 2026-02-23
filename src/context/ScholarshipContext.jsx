import { createContext, useState, useEffect } from "react";
import { scholarships as initialData } from "../data/scholarships";

export const ScholarshipContext = createContext();

export const ScholarshipProvider = ({ children }) => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
  const stored = localStorage.getItem("scholarships");

  if (stored !== null) {
    setScholarships(JSON.parse(stored));
  } else {
    // Only run this once ever
    localStorage.setItem("scholarships", JSON.stringify(initialData));
    setScholarships(initialData);
  }
}, []);

  const addScholarship = (newScholarship) => {
    const updated = [...scholarships, newScholarship];
    setScholarships(updated);
    localStorage.setItem("scholarships", JSON.stringify(updated));
  };

  const updateScholarship = (id, updatedData) => {
    const updated = scholarships.map((s) =>
      s.id === id ? { ...s, ...updatedData } : s
    );
    setScholarships(updated);
    localStorage.setItem("scholarships", JSON.stringify(updated));
  };

  const deleteScholarship = (id) => {
    const updated = scholarships.filter((s) => s.id !== id);
    setScholarships(updated);
    localStorage.setItem("scholarships", JSON.stringify(updated));
  };

  return (
    <ScholarshipContext.Provider
      value={{
        scholarships,
        addScholarship,
        updateScholarship,
        deleteScholarship,
      }}
    >
      {children}
    </ScholarshipContext.Provider>
  );
};