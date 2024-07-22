import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import img from './assets/bg.png'
import { Link } from "react-router-dom";
const Nav = () => {
  const [user, setUser] = useState(null);
    const { eid } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3002/employee/${eid}`).then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
      }, [eid]);
  return (
    <nav className="navbar sticky-top navbar-light bg-dark">
    <div className="container-fluid d-flex justify-content-between">
      {user && <h3 className="text-light">Welcome, {user.name}</h3>}

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
            Log out
          </Link>
    </div>
  </nav>
  )
}

export default Nav