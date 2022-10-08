import React from "react";
import Api from "../../Api";
import "./Topics.scss";
const CategoryBlock = (props) => {
  console.log({props});

  return (
    <div className="CategoryBlock">
      <div className="CategoryBlock__icon">
        <img src={props.category.icon} alt={props.category.name} />

      </div>
      <div className="CategoryBlock__title">
        {props.category.name}
      </div>
    </div>
  )
};

const Topics = () => {
  return (
    <div className="Topics">
      Topics
      <div className="Topics__categories">
        <a href="">All </a>
        <a href="">Travel</a>
        <a href="">Adventure</a>
        <a href="">Fashion</a>
      </div>
      <div className="Topics__categorie">
      <a href="">Viev All</a>
      </div>
    </div>
  );
};
export default Topics;
