import React from "react";
import "./Sidebar.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-1" style={{ height: "100%", display: "flex" }}>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#0000ff
"
      >
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarHeader
              prefix={<i className="fa fa-bars fa-large"></i>}
              className="sidebar"
            >
              <a href="/">Dashboard</a>
            </CDBSidebarHeader>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/survey" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Survey Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/setting" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th">Setting</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}></CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
