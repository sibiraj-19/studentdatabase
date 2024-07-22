import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          <div className="navbar-brand mb-0 h1 text-light">   
            <img
              src="src\assets\Preview__1_-removebg-preview.png"
              alt="image"
              width="60"
              height="60"
              className="d-inline-block align-text-start"
            ></img>
                TechRise Academy
          </div>
          <Link to="Login" className="btn text-white "id="back">
    Login
  </Link>
        </div>
       
      </nav>
 
  
  </>
  )
}

export default Homepage