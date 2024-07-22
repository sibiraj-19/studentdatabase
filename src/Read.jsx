import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Body.css'
import Nav from "./Nav";

function Read() {
  const [data, setData] = useState([]);
  const {id} = useParams();
  const {eid}=useParams();
 const[balance,setBalance]=useState(0);
  useEffect(() => {
    axios
      .get('http://localhost:3000/Student/'+id)
      .then((result) => {
        const studentData = result.data;
        setData(studentData);
        const fees = parseInt(studentData.fees) || 0;
        const paid = parseInt(studentData.paid) || 0;
        setBalance(fees - paid);
      })
  },[]);

  return (
    <>
    <div> <Nav/></div> 

    <div id="addfile" className="d-flex justify-content-center">
      <div id="card-read" className="px-4 pt-5 pb-3 text-white mb-5"> 
        <div className='d-flex justify-content-between'>
        <h2 className='text-dark'>User Details</h2>
        <div >
          <Link to={`/Student/${eid}/Edit/${data.id}`} id="update"className='btn btn-success'>Edit</Link>
          <Link to={`/Student/${eid}`} className="btn btn-danger mx-2" id="back">
            Back
          </Link></div> 
          </div>
        <hr />
          <div class="container">
  <div className="row row-cols-2 row-cols-lg-3 g-5 g-lg-5 ">
    <div class="col">
    <h3 className='p-3'>Name: <br /> <span class="badge bg-light text-dark">{data.name}</span></h3>
    </div>
    <div class="col">
    <h3 className='p-3'>Email:<br /><span class="badge bg-light text-dark">{data.email}</span></h3>
    </div>
    <div class="col">
    <h3 className='p-3'>Phone:<br /> <span class="badge bg-light text-dark">{data.phone}</span></h3>
    </div>
    <div class="col">
   <h3 className='p-3'>Actual Fees:<br />  <span class="badge bg-light text-dark"> Rs {data.fees}</span></h3>
    </div>
    <div class="col">
    <h3 className='p-3'>Fees Paid: <br /><span class="badge bg-light text-dark"> Rs {data.paid} </span></h3>
    </div>
    <div class="col">
    <h3 className='p-3'>balance:<br /> <span class="badge bg-light text-dark">Rs {balance} </span></h3>
    </div>
    {/* <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div> */}
  </div>
</div>
         
        </div>
      </div>
    
    </>
  );
}
export default Read;


