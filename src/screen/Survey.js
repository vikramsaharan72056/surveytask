import React from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import "./Survey.css";
import { Link } from "react-router-dom";
import Create from "./Create";

const DataTable = () => {
  function testClickEvent(param) {
    alert("Row Click Event");
  }

  const data = () => {
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
          field: "type",
          width: 200,
        },
        {
          label: "Start Date",
          field: "date",
          sort: "asc",
          width: 100,
        },
        {
          label: "End date",
          field: "date",
          sort: "disabled",
          width: 150,
        },
        {
          label: "Action",
          field: "action",
          sort: "disabled",
          width: 100,
        },
      ],
      rows: [
        {
          name: "Tiger Nixon",
          Description: "System Architect",
          Type: "Edinburgh",
          age: "61",
          date: "2011/04/25",
          salary: "$320",
          clickEvent: () => testClickEvent(1),
        },
        {
          name: "Garrett Winters",
          Description: "Accountant",
          Type: "Tokyo",
          age: "63",
          date: "2011/07/25",
          salary: "$170",
        },
        {
          name: "Ashton Cox",
          Description: "Junior Technical Author",
          Type: "San Francisco",
          age: "66",
          date: "2009/01/12",
          salary: "$86",
        },
        {
          name: "Cedric Kelly",
          Description: "Senior Javascript Developer",
          Type: "Edinburgh",
          age: "22",
          date: "2012/03/29",
          salary: "$433",
        },
        {
          name: "Airi Satou",
          Description: "Accountant",
          Type: "Tokyo",
          age: "33",
          date: "2008/11/28",
          salary: "$162",
        },
        {
          name: "Brielle Williamson",
          Description: "Integration Specialist",
          Type: "New York",
          age: "61",
          date: "2012/12/02",
          salary: "$372",
        },
        {
          name: "Herrod Chandler",
          Description: "Sales Assistant",
          Type: "San Francisco",
          age: "59",
          date: "2012/08/06",
          salary: "$137",
        },
        {
          name: "Rhona Davidson",
          Description: "Integration Specialist",
          Type: "Tokyo",
          age: "55",
          date: "2010/10/14",
          salary: "$327",
        },
        {
          name: "Colleen Hurst",
          Description: "Javascript Developer",
          Type: "San Francisco",
          age: "39",
          date: "2009/09/15",
          salary: "$205",
        },
        {
          name: "Sonya Frost",
          Description: "Software Engineer",
          Type: "Edinburgh",
          age: "23",
          date: "2008/12/13",
          salary: "$103",
        },
        {
          name: "Jena Gaines",
          Description: "Type Manager",
          Type: "London",
          age: "30",
          date: "2008/12/19",
          salary: "$90",
        },
        {
          name: "Quinn Flynn",
          Description: "Support Lead",
          Type: "Edinburgh",
          age: "22",
          date: "2013/03/03",
          salary: "$342",
        },
        {
          name: "Charde Marshall",
          Description: "Regional Director",
          Type: "San Francisco",
          age: "36",
          date: "2008/10/16",
          salary: "$470",
        },
        {
          name: "Haley Kennedy",
          Description: "Senior Marketing Designer",
          Type: "London",
          age: "43",
          date: "2012/12/18",
          salary: "$313",
        },
        {
          name: "Tatyana Fitzpatrick",
          Description: "Regional Director",
          Type: "London",
          age: "19",
          date: "2010/03/17",
          salary: "$385",
        },
        {
          name: "Michael Silva",
          Description: "Marketing Designer",
          Type: "London",
          age: "66",
          date: "2012/11/27",
          salary: "$198",
        },
        {
          name: "Paul Byrd",
          Description: "Chief Financial Typer (CFO)",
          Type: "New York",
          age: "64",
          date: "2010/06/09",
          salary: "$725",
        },
        {
          name: "Gloria Little",
          Description: "Systems Administrator",
          Type: "New York",
          age: "59",
          date: "2009/04/10",
          salary: "$237",
        },
        {
          name: "Bradley Greer",
          Description: "Software Engineer",
          Type: "London",
          age: "41",
          date: "2012/10/13",
          salary: "$132",
        },
        {
          name: "Dai Rios",
          Description: "Personnel Lead",
          Type: "Edinburgh",
          age: "35",
          date: "2012/09/26",
          salary: "$217",
        },
        {
          name: "Jenette Caldwell",
          Description: "Development Lead",
          Type: "New York",
          age: "30",
          date: "2011/09/03",
          salary: "$345",
        },
        {
          name: "Yuri Berry",
          Description: "Chief Marketing Typer (CMO)",
          Type: "New York",
          age: "40",
          date: "2009/06/25",
          salary: "$675",
        },
        {
          name: "Caesar Vance",
          Description: "Pre-Sales Support",
          Type: "New York",
          age: "21",
          date: "2011/12/12",
          salary: "$106",
        },
        {
          name: "Doris Wilder",
          Description: "Sales Assistant",
          Type: "Sidney",
          age: "23",
          date: "2010/09/20",
          salary: "$85",
        },
        {
          name: "Angelica Ramos",
          Description: "Chief Executive Typer (CEO)",
          Type: "London",
          age: "47",
          date: "2009/10/09",
          salary: "$1",
        },
        {
          name: "Gavin Joyce",
          Description: "Developer",
          Type: "Edinburgh",
          age: "42",
          date: "2010/12/22",
          salary: "$92",
        },
        {
          name: "Jennifer Chang",
          Description: "Regional Director",
          Type: "Singapore",
          age: "28",
          date: "2010/11/14",
          salary: "$357",
        },
        {
          name: "Brenden Wagner",
          Description: "Software Engineer",
          Type: "San Francisco",
          age: "28",
          date: "2011/06/07",
          salary: "$206",
        },
        {
          name: "Fiona Green",
          Description: "Chief Operating Typer (COO)",
          Type: "San Francisco",
          age: "48",
          date: "2010/03/11",
          salary: "$850",
        },
        {
          name: "Shou Itou",
          Description: "Regional Marketing",
          Type: "Tokyo",
          age: "20",
          date: "2011/08/14",
          salary: "$163",
        },
        {
          name: "Michelle House",
          Description: "Integration Specialist",
          Type: "Sidney",
          age: "37",
          date: "2011/06/02",
          salary: "$95",
        },
        {
          name: "Suki Burks",
          Description: "Developer",
          Type: "London",
          age: "53",
          date: "2009/10/22",
          salary: "$114",
        },
        {
          name: "Prescott Bartlett",
          Description: "Technical Author",
          Type: "London",
          age: "27",
          date: "2011/05/07",
          salary: "$145",
        },

        {
          name: "Donna Snider",
          Description: "Customer Support",
          Type: "New York",
          age: "27",
          date: "2011/01/25",
          salary: "$112",
        },
      ],
    };
  };
  return (
    <div className="col-10">
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
                data={data()}
                materialSearch
              />
            </CDBCardBody>
          </CDBCard>
        </CDBContainer>
      </div>
    </div>
  );
};

export default DataTable;
