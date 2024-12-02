import React from "react";
import { Link } from "react-router-dom";

const Categorys = ({categories}) => {
  return (
    <div role="tablist" className="tabs tabs-lifted py-8">
      {categories.map((category) => (
        <Link to={"/cards"} key={category.category}  role="tab" className="tab">
          {category.category}
        </Link>
        
      ))}
    </div>
  );
};

export default Categorys;
