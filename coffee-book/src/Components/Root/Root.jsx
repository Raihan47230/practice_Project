import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";




const Root = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">Coffee-House</h1>
        </div>
        <div className="flex gap-9">
          <Link className="text-lg fontb" to={"/"}>
            Home
          </Link>
          <Link className="text-lg fontb" to={"/coffee"}>
            coffee
          </Link>
          <Link className="text-lg fontb" to={"/deshboard"}>
            deshborad
          </Link>
        </div>
      </nav>


    <Outlet></Outlet>
   <Footer></Footer>
    </div>
  );
};

export default Root;
