import React from "react";
import Student from "./Student";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./Add";
import Read from "./Read";
import Edit from "./Edit";
import Login from "./Login";
import Signup from "./Signup";


function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="Signup" element={<Signup/>}/>
        <Route path="/Student/:eid" element={<Student />} />
        <Route path="Student/:eid/Add" element={<Add />} />
        <Route path="Student/:eid/Read/:id" element={<Read />} />
        <Route path="Student/:eid/Edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
