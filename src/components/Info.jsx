import React from "react";

const Info = ({ data }) => {
  const { image, title, area, population, capital } = data;
  return (
    <div className="container">
      <div className="card">
        <img src={image} alt="علم الدوله" className="flag-card" />
        <h1>المحافظة : {title} </h1>
        <h4>العاصمة : {capital} </h4>
        <p>المساحة : {area} كم²</p>
        <p>عدد السكان : {population} نسمة</p>
      </div>
    </div>
  );
};

export default Info;
