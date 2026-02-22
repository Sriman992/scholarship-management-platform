import Navbar from "../components/Navbar";
import { scholarships } from "../data/scholarships";
import { Link } from "react-router-dom";

export default function Scholarships() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Available Scholarships</h2>
        <div className="dashboard-cards">
          {scholarships.map((sch) => (
            <div key={sch.id} className="card">
              <h3>{sch.title}</h3>
              <p>Amount: ₹{sch.amount}</p>
              <p>Deadline: {sch.deadline}</p>
              <Link to={`/apply/${sch.id}`} className="btn">
                Apply
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}