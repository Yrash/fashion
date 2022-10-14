import React, { useEffect, useState } from "react";
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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Api.category.loadCategories().then((response) =>{
     
      if (response?.data?.categories) {
        setCategories(response.data.categories);
      }
    })
  }, [])
  return (
    <div className="Topics">
      Topics
      <div className="Topics__categories">
        <a href="">All </a>
        {categories.map((category) => {
          return <a key={category.category_id} href="">{category.name}</a>
        })}
      
      </div>
      <div className="Topics__categorie">
      <a href="">Viev All</a>
      </div>
    </div>
  );
};
export default Topics;
