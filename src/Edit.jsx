import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Body.css'
import Nav from "./Nav";

const Edit = () => {
  const [detatil, setDetail] = useState({
    name: "",
    email: "",
    phone: "",
    fees:"",
    paid:""
  });
  const { id } = useParams();
  const {eid}=useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/Student/" + id)
      .then((result) => setDetail(result.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/Student/" + id, detatil).then((res) => {
      alert("Your Data is added Successfully");
      console.log(res.data);
      navigate(`/Student/${eid}/Read/${detatil.id}`);
    });
  };
  return (
    <>
      <div><Nav/></div>
      <div id="addfile" className="d-flex m-5 justify-content-center">
        <div id="edit"className="w-50 px-5 pt-5 pb-5 text-white">
      <div className='d-flex justify-content-between'>
          <h2 className='text-dark'>Edit Student Details </h2> 
          <Link to={`/Student/${eid}`} className="btn text-white mt-2"id="back">
              Back
            </Link>
            </div>
          <hr /> 
          <br/>
     <center> <form onSubmit={Update} className="w-75 mx-5">
            <div className="form-floating mb-3">
              <input
                type="name"
                name="name"
                className="form-control"
                id="input"
                placeholder="Enter your name"
                value={detatil.name}
                onChange={(e) =>
                  setDetail({ ...detatil, name: e.target.value })
                }
              />
              <label htmlFor="floatingInput">Your Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="input"
                placeholder="name@example.com"
                value={detatil.email}
                onChange={(e) =>
                  setDetail({ ...detatil, email: e.target.value })
                }
              />
              <label htmlFor="floatingPassword">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                name="phone"
                className="form-control"
                id="input"
                placeholder="name@example.com"
                value={detatil.phone}
                onChange={(e) =>
                  setDetail({ ...detatil, phone: e.target.value })
                }
              />
              <label htmlFor="floatingPassword">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                name="fees"
                className="form-control"
                id="input"
                placeholder="name@example.com"
                value={detatil.fees}
                onChange={(e) =>
                  setDetail({ ...detatil, fees: e.target.value })
                }
              />
              <label htmlFor="floatingPassword">Total Fees</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                name="paid"
                className="form-control"
                id="input"
                placeholder="name@example.com"
                value={detatil.paid}
                onChange={(e) =>
                  setDetail({ ...detatil, paid: e.target.value })
                }
              />
              <label htmlFor="floatingPassword">Fees paid</label>
            </div>
            <button type="submit" className="btn text-white"id="update">
              Update
            </button>
           
          </form>
          </center>    
        </div>
      </div>
    </>
  );
};

export default Edit;
