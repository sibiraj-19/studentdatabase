import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Body.css';
import Nav from "./Nav";


const Add = () => {
  const {eid}=useParams();
  const [detatil, setDetail] = useState({
    name: "",
    email: "",
    phone: "",
    fees: "",
    paid: ""
  });
  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/Student", detatil).then((res) => {
      alert("Your Data is added Successfully");
      console.log(res.data);
      navigate(`/Student/${eid}`);
    });
  };
  return (
    <>
   <div> <Nav/></div> 
    <div id="addfile" className="d-flex justify-content-center m-5">
      <div id="add" className="w-50 px-5 pt-5 pb-5 text-white">
      <div className='d-flex justify-content-between'>
        <h2 className='text-dark'>Add New Student </h2>
        <Link to={`/Student/${eid}`} className="btn text-white" id="back">
            Back
          </Link>
          </div>
        <hr />
        <form onSubmit={Submit} className="w-75 mx-5 text-center">
          <div class="form-floating mb-3 text-dark">
            <input
              type="name"
              name="name"
              className="form-control text-dark"
              id="input"required
              placeholder="Enter your name"
              onChange={(e) => setDetail({ ...detatil, name: e.target.value })}
            />
            <label for="floatingInput">Your Name</label>
          </div>
          <div class="form-floating mb-3 text-dark">
            <input
              type="email"
              name="email"
              className="form-control"
              id="input"required
              placeholder="name@example.com"
              onChange={(e) => setDetail({ ...detatil, email: e.target.value })}
            />
            <label for="floatingPassword">Email</label>
          </div>
          <div class="form-floating mb-3 text-dark">
            <input
              type="number"
              name="phone"
              className="form-control"
              id="input"required
              placeholder="name@example.com"
              onChange={(e) => setDetail({ ...detatil, phone: e.target.value })}
            />
            <label for="floatingPassword">Phone Number</label>
          </div>
          <div className="form-floating mb-3 text-dark">
              <input
                type="number"
                name="fees"
                className="form-control"
                id="input"
                required
                placeholder="Total Fees"
                 onChange={(e) =>
                  setDetail({ ...detatil, fees: e.target.value })
                }
              />
              <label htmlFor="floatingInput">Total Fees</label>
            </div>
            <div className="form-floating mb-3 text-dark">
              <input
                type="number"
                name="paid"
                className="form-control"
                id="input"required
                placeholder="name@example.com"
                onChange={(e) =>
                  setDetail({ ...detatil, paid: e.target.value })
                }
              />
              <label htmlFor="floatingPassword">Fees paid</label>
            </div>
          <button type="submit" className="btn text-white"id="update">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Add;
