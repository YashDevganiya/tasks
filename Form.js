import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import Button from "@material-ui/core";
import DataTable from "./DataTable";

// ---------------------------------Function Starts----------------------------------------------

function Form() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    conpassword: "",
  });
  const [records, setRecords] = useState([]);

  const formDetails = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //  const{value,name}=event.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...data, id: new Date().getTime.toString() };

    console.log(records);

    setRecords([...records, newRecord]);

    setData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      conpassword: "",
    });
  };

// ------------------delete Button Function -------------------
const delBut = () => {
  alert ("Delete Data")
}
// ------------------------------------------------------------
 
// -----------------------------------Print One Data-------------------------------------------

  //   if (
  //     firstname == "" &&
  //     lastname == "" &&
  //     email == "" &&
  //     password == "" &&
  //     conpassword == ""
  //   ) {
  //     document.getElementById(
  //       "f"
  //     ).innerHTML = `fname is ${firstname}`;
  //     document.getElementById(
  //       "l"
  //     ).innerHTML = `lname is ${lastname}`;
  //     document.getElementById("e").innerHTML = `email is ${email}`;
  //     document.getElementById(
  //       "p"
  //     ).innerHTML = `password is ${password}`;
  //     document.getElementById(
  //       "c"
  //     ).innerHTML = `confirm password is ${conpassword}`;
  //   }

  //   // else if(data.password != data.conpassword){
  //   //   document.getElementById(
  //   //     "f"
  //   //   ).innerHTML = `password doesn't match .`;
  //   // }
  //   else {
  //     document.getElementById("f").innerHTML = "";
  //     document.getElementById("l").innerHTML = "";
  //     document.getElementById("e").innerHTML = "";
  //     document.getElementById("p").innerHTML = "";
  //     document.getElementById("c").innerHTML = "";
  //   }
  // };

  // -------------------------------------Form--------------------------------------------------
  console.log(records);
  return (
    <>
      <div className="container">
        <h4
          className="text-center text-primary  m-4 mb-5"
          style={{ fontSize: "30px" }}
        >
          Form Using React
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="fname" className="m-2 text-success">
                FirstName :
              </label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                placeholder="First name"
                value={data.firstname}
                onChange={formDetails}
              />
            </div>
            
            <div className="col-md-6">
              <label htmlFor="lname" className="m-2 text-success">
                LastName :
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                placeholder="Last name"
                value={data.lastname}
                onChange={formDetails}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="m-2 text-success">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={formDetails}
            />
          </div>
          <br />
          <div className="row">
            <div className="form-group col-md-6">
              <label
                htmlFor="exampleInputPassword1"
                className="m-2 text-success"
              >
                Password :
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={formDetails}
              />
            </div>

            <div className="form-group col-md-6">
              <label
                htmlFor="exampleInputPassword1"
                className="m-2 text-success"
              >
                Confirm Password :
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-type Password"
                name="conpassword"
                value={data.conpassword}
                onChange={formDetails}
              />
            </div>
          </div>

          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <button
              className="btn btn-primary"
              style={{ width: "120px", height: "45px" }}
            >
              Submit
            </button>
          </div>
          {/* <div>
              <h4 id="f"></h4>
              <h4 id="l"></h4>
              <h4 id="e"></h4>
              <h4 id="p"></h4>
              <h4 id="c"></h4>
            </div> */}
        </form>
      </div>

      <br />

      {/* ----------------------------------------Table---------------------------------------------- */}

      <h4 style={{ textAlign: "center", color: "blue" }}>Form Data</h4>
      <hr />
      <br />
      <div className="container">
        <table className="table text-center">
          <thead>
            <tr>
              {/* <th className="col-1 ">id</th> */}
              <th className="col-2 ">Firstname</th>
              <th className="col-2 ">Lastname</th>
              <th className="col-3 ">Email</th>
              <th className="col-2 ">Password</th>
              <th className="col-2 ">Confirm Password</th>
              <th className="col-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((curData) => {
              return (
                <tr>
                  {/* <td className="col-1">{curData.newRecord.id}</td> */}
                  <td className="col-2 ">{curData.firstname}</td>
                  <td className="col-2 ">{curData.lastname}</td>
                  <td className="col-3 ">{curData.email}</td>
                  <td className="col-2 ">{curData.password}</td>
                  <td className="col-2 ">{curData.conpassword}</td>
                  <td className="col-2 ">
                    <button
                      style={{
                        borderRadius: "8px",
                        color: "white",
                        backgroundColor: "red",
                        width: "80px"
                      }}
                      onClick={delBut}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <tfoot></tfoot> */}
      </div>

      <br />
      <br />
      <br />

      {/* ----------------------------------------DataTable---------------------------------------------- */}

      <h4 style={{ textAlign: "center", color: "blue" }}>
        FormData into DataTable
      </h4>
      <br />

      <DataTable data={records} />
    </>
  );
}

export default Form;
