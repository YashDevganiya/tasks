import * as React from "react";
import MaterialTable from "material-table";
// import tableIcons from "../node_modules/material-table";
import Delete from "@material-ui/icons/Delete";
import Save from "@material-ui/icons/Save";

const DataTable = ({ data }) => {
  // const [tableData, setTableData] = useState([RowData])
  // const storeData = [
  //   {
  //     // id: "0",
  //     // firstname: "Yash",
  //     // lastname: "Dhruv",
  //     // email: "yash@gmail.com",
  //     // password: "123",
  //     // conpassword: "123",
  //   }
  // ];

  const columns = [
    { title: "Firstname", field: "firstname" },
    { title: "Lastname", field: "lastname" },
    { title: "Email", field: "email" },
    { title: "Password", field: "password" },
    { title: "Confirm Password", field: "conpassword" },
  ];

  // ------------------For Delete--------------------
  const tableRef = React.createRef();
  // ------------------------------------------------

  return (
    <div style={{ height: 400, width: "100%" }}>
      <MaterialTable
        title="Yash's DataTable"
        data={data}
        columns={columns}
        // icons={tableIcons}
        options={{ exportButton: true ,
        addRowPosition:"first"
        }}

        editable={{
          onRowAdd :(newRow)=>new Promise((resolve,reject)=>{
            setTableData([...tableData,newRow])
            setTimeout(()=>resolve(),500)
          })
          // onRowUpdate :(newRow,oldRow)=>new Promise((resolve,reject)=>{
          //   const updatedData=[...data]
          //   updatedData[oldRow.data.id]=newRow
          //   setData(updatedData)
          //   setTimeout(()=>resolve(),500)
          // })
        }}
    // ------------------For Save & Delete--------------------

        tableRef={tableRef}
        actions={[
          {
            icon: Save,
            tooltip: "Save User",
            onClick: (event, data) => alert("You want to Save Data with firstname " + data.firstname),
          },
          {
            icon: Delete,
            tooltip: "Delete User",
            onClick: (event, data) =>
            alert("You want to Delete Data with firstname " + data.firstname),
          }
        ]}
    // -------------------------------------------------------
        
      />
    </div>
  );
};

export default DataTable;
