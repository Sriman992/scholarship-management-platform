import Navbar from "../components/Navbar";

export default function AdminScholarships() {
  return (
    <>
      <Navbar />

      <div className="dashboard-container admin-dashboard">
        <h2>Scholarship Management</h2>
        <p className="admin-subtitle">
          Create, update, or remove scholarship listings.
        </p>

        <div className="dashboard-actions">
          <div className="action-card admin-action">
            <h3>Add New Scholarship</h3>
            <button className="btn-primary">Add Scholarship</button>
          </div>

          <div className="action-card admin-action">
            <h3>Edit Existing Scholarships</h3>
            <button className="btn-primary">View & Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}