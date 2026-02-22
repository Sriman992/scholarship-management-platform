import { createContext, useState } from "react";

export const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState([]);

  const addApplication = (application) => {
    setApplications([...applications, application]);
  };

  const updateStatus = (id, status) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  return (
    <ApplicationContext.Provider
      value={{ applications, addApplication, updateStatus }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}