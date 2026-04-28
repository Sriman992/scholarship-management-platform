import { createContext, useState, useEffect, useCallback } from "react";
import {
  getScholarships,
  addScholarship,
  updateScholarship,
  deleteScholarship,
} from "../services/ScholarshipService";

export const ScholarshipContext = createContext();

export const ScholarshipProvider = ({ children }) => {
  const [scholarships, setScholarships] = useState([]);

  // 🔁 FETCH DATA FROM BACKEND
  const fetchScholarships = useCallback(async () => {
    try {
      const res = await getScholarships();
      setScholarships(res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching scholarships:", error);
      throw error;
    }
  }, []);

  // 🚀 LOAD ON START
  useEffect(() => {
    fetchScholarships().catch(() => {});
  }, [fetchScholarships]);

  // ➕ ADD
  const addNewScholarship = async (data) => {
    try {
      const res = await addScholarship(data);
      await fetchScholarships(); // refresh
      return res.data;
    } catch (error) {
      console.error("Error adding scholarship:", error);
      throw error;
    }
  };

  // ✏️ UPDATE
  const editScholarship = async (id, updatedData) => {
    try {
      await updateScholarship(id, updatedData);
      await fetchScholarships();
    } catch (error) {
      console.error("Error updating scholarship:", error);
      throw error;
    }
  };

  // ❌ DELETE
  const removeScholarship = async (id) => {
    try {
      await deleteScholarship(id);
      await fetchScholarships();
    } catch (error) {
      console.error("Error deleting scholarship:", error);
      throw error;
    }
  };

  return (
    <ScholarshipContext.Provider
      value={{
        scholarships,
        addNewScholarship,
        editScholarship,
        removeScholarship,
        fetchScholarships,
      }}
    >
      {children}
    </ScholarshipContext.Provider>
  );
};
