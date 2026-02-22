import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { scholarships } from "../data/scholarships";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addApplication } = useContext(ApplicationContext);

  const scholarship = scholarships.find(
    (s) => s.id === parseInt(id)
  );

  const handleSubmit = () => {
    addApplication({
      id: Date.now(),
      scholarshipTitle: scholarship.title,
      status: "Pending"
    });

    navigate("/student");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Apply for {scholarship.title}</h2>
        <p>{scholarship.description}</p>

        <div className="form-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Statement of Purpose" rows="4"></textarea>

          <button className="btn" onClick={handleSubmit}>
            Submit Application
          </button>
        </div>
      </div>
    </>
  );
}