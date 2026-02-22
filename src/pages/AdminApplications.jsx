import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function AdminApplications() {
  const { applications, updateStatus } = useContext(ApplicationContext);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Review Applications</h2>

        {applications.length === 0 ? (
          <p>No applications submitted yet.</p>
        ) : (
          <div className="dashboard-cards">
            {applications.map((app) => (
              <div key={app.id} className="card">
                <h3>{app.scholarshipTitle}</h3>
               <p>
  Status: 
  <span className={`status ${app.status.toLowerCase()}`}>
    {app.status}
  </span>
</p>

                <div style={{ marginTop: "10px" }}>
                  <button
                    className="btn"
                    onClick={() => updateStatus(app.id, "Approved")}
                    style={{ marginRight: "10px" }}
                  >
                    Approve
                  </button>

                  <button
                    className="btn"
                    onClick={() => updateStatus(app.id, "Rejected")}
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}