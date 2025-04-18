import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Root.css";
import SideBar from "../SideBar/SideBar";

const Root = () => {
  return (
    <div className="div">
      <Header></Header>
      <div className="main">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
