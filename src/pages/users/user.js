import React, { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataSuccess,
  deleteData,
} from "../../redux/userAction";

const User = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterUser, setFilterUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  function deleteUser(id) {
    dispatch(deleteData(id));
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Action",
      selector: (row) => [
        <button className="ican-btn">
          <Link className="edit-btn" to={"/updateUser/" + row._id}>
            <FaEdit />
          </Link>
        </button>,
        <button className="delete-btn" onClick={() => deleteUser(row._id)}>
          <FaTrashAlt />
        </button>,
      ],
    },
  ];

  const data = useSelector((state) => state.data.data);
  const getUser = () => {
    dispatch(fetchDataSuccess());
  };
  useEffect(() => {
    const result = data.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterUser(result);
  }, [search, data]);

  const generatePDf = () => {
    const report = new jsPDF("landscape", "px", [1000, 1000]);
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };

  return (
    <div className="container" id="report">
      <div className="row mt-4">
        <DataTable
          columns={columns}
          data={filterUser}
          pagination
          paginationRowsPerPageOptions={[5,10,15,20,15,30]}
          fixedHeader
          selectableRows
          highlightOnHover
          selectableRowsHighlight
          actions={[
            <button className="btn btn-primary">
              <Link className="Add-new-user-btn" to="/addUser">
                Add new user
              </Link>
            </button>,
            <button className="btn btn-primary" onClick={generatePDf}>
              Save Pdf
            </button>,
          ]}
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search here"
              className="w-25 from-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
      </div>
    </div>
  );
};
export default User;
