import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from './assets/bg.png'

const Login = () => {
  const [users, setUsers] = useState([]);
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [error,seterror]=useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3002/employee")
      .then((res) => {
        console.log("Fetched users:", res.data.employee);
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === useremail && user.password === (userpassword));

    //  if(user===""){
    //   alert("enter the details")
    //  }
     
    if (user) {
      console.log("User found:", user);
      navigate(`/student/${user.id}`);
    } else {   
      seterror("No matching user found");
    }
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          <div className="navbar-brand mb-0 h1 text-light">
            <img
              src={img}
              alt="image"
              width="60"
              height="60"
              className="d-inline-block align-text-start"
            />
            TechRise Academy
          </div>
          <Link to="/Signup" className="btn text-white"id="back">
            SignUp
          </Link>
        </div>
      </nav>
      <center>
        <div id="container" className="d-flex m-5 justify-content-center w-50">
          <div id="card-read"className="card ">
            <div className="card-title px-4 pt-5">
              <h2>Employee Login</h2>
              <p>Please Log in to Enter the database</p>
              <hr />
            </div>
            <div className="card-body m-3">
              <form className="needs-validation"onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-white" id="span">
                    Email
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    value={useremail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-white" id="span">
                    Password
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    value={userpassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <div>
                  <p className="text-light">{error}</p> 
                  </div>
                <button type="submit" id="read"className="text-center btn btn-primary ">
                  Log in
                </button>
                <br /> <br />
                <div className="form-text text-light">
                  New User? <b>Sign Up</b>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Login;
