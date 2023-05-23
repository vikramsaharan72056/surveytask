import React, { useEffect, useState } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import "./Survey.css";
import { Link } from "react-router-dom";
import Create from "./Create";

const DataTable = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  const [theme, setTheme] = useState([]);
  useEffect(() => {
    fetch("https://surveyform-xpol.onrender.com/surveys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTheme(data);
      })
      .catch((err) => {});
  }, []);
  const value = () => {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Name",
          },
        },
        {
          label: "Description",
          field: "description",
          width: 270,
        },
        {
          label: "Type",
          field: "selectedOption",
          width: 200,
        },
        {
          label: "Start Date",
          field: "startDate",
          sort: "asc",
          width: 100,
          format: (DataTable) => formatDate(DataTable),
        },
        {
          label: "End Date",
          field: "endDate",
          sort: "disabled",
          width: 150,
          format: (DataTable) => formatDate(DataTable.split("T")[0]),
        },
        {
          label: "Action",
          field: "action",
          sort: "disabled",
          width: 100,
        },
      ],
      rows: theme,
    };
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
      <div className="col-10">
        <div>
          <div className=" page">
            <CDBContainer>
              <CDBCard className="table">
                <Link to={"Create"}>
                  <button className="btn">Create</button>
                </Link>
                <CDBCardBody>
                  <CDBDataTable
                    striped
                    bordered
                    hover
                    checkbox
                    data={value()}
                    materialSearch
                  />
                </CDBCardBody>
              </CDBCard>
            </CDBContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
