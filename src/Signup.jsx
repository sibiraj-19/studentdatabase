import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "./assets/bg.png";

const Signup = () => {
  const [conform, setConform] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };
  const Navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
      if (users.password === conform) {
        try {
          axios.post("http://localhost:3002/employee", users).then((res) => {
            alert("Your Data is added Successfully");
            console.log(res.data);
            Navigate("/");
          });
        } 
        catch {
          console.log("Error registering user:");
        }
      } 
      else {
        setError("Password dosen't match");
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
            ></img>
            TechRise Academy
          </div>
          <Link to="/" className="btn text-white " id="back">
            Login
          </Link>
        </div>
      </nav>
      <center>
        <div className="d-flex m-5 justify-content-center">
          <div id="card-read" className="card">
            <div className="card-title px-4 pt-5">
              <h2>Employee Login</h2>
              <p>You need to SignUp to Login</p>

              <hr />
            </div>

            <div className="card-body w-100">
              <form className="needs-validation" onSubmit={Submit}>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-dark text-white"
                    id="span"
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={users.email}
                    // onChange={(e) =>
                    //   setUsers({ ...users, email:e.target.value })
                    // }
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-dark text-white"
                    id="span"
                  >
                    UserName
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={users.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-dark text-white"
                    id="span"
                  >
                    Password
                  </span>
                  <input
                    type="Password"
                    name="password"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={users.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-dark text-white"
                    id="span"
                  >
                    Conform Password
                  </span>
                  <input
                    type="Password"
                    name="password"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={conform}
                    onChange={(e) => setConform(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <p className="text-light">{error}</p>
                </div>
                <button
                  type="submit"
                  className=" text-center btn btn-primary"
                  // onClick={Submit}
                  id="read"
                >
                  Sign in
                </button>
                <div className="form-text text-light">
                  Alredy have an account ? <b>Log in</b>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Signup;

// import React, { useState } from "react";
// import "./App.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {
//   const [Confirm, setconfirm] = useState("");
//   const [value, setValue] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:3002/employee", value)
//       .then((res) => {
//         alert("data added")
//         console.log("posted",res);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div id="login">
//       <section class=" py-3 py-md-5">
//         <div class="container">
//           <div class="row justify-content-center">
//             <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
//               <div
//                 class="card border border-light-subtle rounded-3 shadow-sm"
//                 id="box"
//               >
//                 <div class="card-body p-3 p-md-4 p-xl-5">
//                   <div class="text-center mb-3 text-light">
//                     <h2>Sign up</h2>
//                   </div>
//                   <h4 class="fs-6 fw-normal text-center text-light mb-4">
//                     Enter your details to register
//                   </h4>
//                   <form onSubmit={handleSubmit}>
//                     <div class="row gy-2 overflow-hidden">
//                       <div class="col-12">
//                         <div class="form-floating mb-3">
//                           <input
//                             type="text"
//                             class="form-control"
//                             name="Name"
//                             id="Name"
//                             placeholder="Name"
//                             required
//                             onChange={(e) =>
//                               setValue({ ...value, name: e.target.value })
//                             }
//                           />
//                           <label for="firstName" class="form-label">
//                             Name
//                           </label>
//                         </div>
//                       </div>
//                       <div class="col-12">
//                         <div class="form-floating mb-3">
//                           <input
//                             type="email"
//                             class="form-control"
//                             name="email"
//                             id="email"
//                             placeholder="name@example.com"
//                             required
//                             onChange={(e) =>
//                               setValue({ ...value, email: e.target.value })
//                             }
//                           />
//                           <label for="email" class="form-label">
//                             Email
//                           </label>
//                         </div>
//                       </div>
//                       <div class="col-12">
//                         <div class="form-floating mb-3">
//                           <input
//                             type="password"
//                             class="form-control"
//                             name="password"
//                             id="password"
//                             placeholder="Password"
//                             required
//                             onChange={(e) =>
//                               setValue({ ...value, password: e.target.value })
//                             }
//                           />
//                           <label class="form-label">Password</label>
//                         </div>
//                       </div>
//                       <div class="col-12">
//                         <div class="form-floating mb-3">
//                           <input
//                             type="password"
//                             class="form-control"
//                             name="Confirm_password"
//                             id="Confirm_password"
//                             placeholder="Confirm Password"
//                             required
//                             onChange={(e) => setconfirm(e.target.value)}
//                           />
//                           <label class="form-label">Confirm Password</label>
//                         </div>
//                       </div>
//                       <div class="col-12">
//                         <div class="form-check">
//                           <input
//                             class="form-check-input"
//                             type="checkbox"
//                             value=""
//                             name="iAgree"
//                             id="iAgree"
//                             required
//                           />
//                           <label
//                             class="form-check-label text-light"
//                             for="iAgree"
//                           >
//                             I agree to the
//                             <a
//                               href="#!"
//                               class="link-primary text-decoration-none"
//                             >
//                               terms and conditions
//                             </a>
//                           </label>
//                         </div>
//                       </div>
//                       <div class="col-12">
//                         <div class="d-grid my-3">
//                           <button
                           
//                             class="btn btn-primary btn-lg"
//                             type="submit"
//                           >
//                             Sign up
//                           </button>
//                         </div>
//                       </div>
//                       <div class="col-12">
//                         <p class="m-0 text-light text-center">
//                           Already have an account?
//                           <Link
//                             to={"/"}
//                             class="link-primary text-decoration-none"
//                           >
//                             Sign in
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Signup;
