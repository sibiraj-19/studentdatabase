import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Student = () => {
  const [data, setData] = useState([]);
  // const [user, setUser] = useState(null);
  // const {eid} = useParams();
  useEffect(() => {
    axios.get("http://localhost:3000/Student").then((res) => setData(res.data));
  }, []);
  
  const Delete = (id) => {
    const Sure = window.confirm("Do you want to delete this Data");
    if (Sure) {
      axios.delete("http://localhost:3000/Student/" + id).then((res) => {
        location.reload();
      });
    }
  };
  // useEffect(() => {
  //   axios.get(`http://localhost:3002/employee/${eid}`).then((res) => {
  //     console.log(res.data);
  //     setUser(res.data);
  //   });
  // }, [eid]);

  return (
    <>
     
    <div> <Nav/> </div> 
      <center>
        <div id="content">
          <div id="card" className="card rounded mb-5">
            <div className="card-title text-white mt-4">
              <div className="d-flex justify-content-between mx-5">
                <h2>Student detatils</h2>
                <Link to="Add" className="btn text-white mt-2" id="back">
                  Add+
                </Link>
              </div>
              <hr className="mx-5" />
            </div>
            <div className="card-body mx-5">
              <table
                id="table"
                className="table table-bordered border-dark text-center"
              >
                <thead className="h4">
                  <tr>
                    <td className="th text-light">Id</td>
                    <td className="th text-light">Name</td>
                    <td className="th text-light">Email</td>
                    <td className="th text-light">Phone</td>
                    <td className="th text-light">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td className="student">{index + 1}</td>
                          <td className="student">{data.name}</td>
                          <td className="student">{data.email}</td>
                          <td className="student">{data.phone}</td>
                          {/* id="button" */}
                          <td className="student d-flex justify-content-evenly">
                            <Link
                              to={`Read/${data.id}`}
                              className="btn text-white btn-sm"
                              id="read"
                            >
                              Read
                            </Link>
                            <Link
                              to={`Edit/${data.id}`}
                              className="btn btn-sm text-white"
                              id="update"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={(e) => Delete(data.id)}
                              className="btn btn-sm text-white"
                              id="back"
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Student;
