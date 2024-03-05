import React from "react";

const Timeline_Textbox = ({
  capital,
  period,
  description,
  position,
  flag,
  arrow,
}) => {
  return (
    <>
      <div className={`${position}  timeline-container`}>
        <img src={flag} alt="flag" />
        <div className="text-box">
          <h2>{capital}</h2>
          <small>{period}</small>
          <p>{description}</p>
          <span className={arrow}></span>
        </div>
      </div>
    </>
  );
};

export default Timeline_Textbox;
