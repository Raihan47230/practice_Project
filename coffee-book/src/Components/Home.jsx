import React from "react";
import Banner from "./Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import LoadDataHome from "./LoadDataHome";
import Categorys from "./Categorys/Categorys";


const Home = () => {
  const Categories = useLoaderData();
  return (
    <div>

      <Banner></Banner>
      <LoadDataHome
        title="Browse Coffees by Category"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      ></LoadDataHome>
      <Categorys categories={Categories}></Categorys>
    
    </div>
  );
};

export default Home;
