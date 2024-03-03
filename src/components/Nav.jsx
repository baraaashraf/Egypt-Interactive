import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <div className="list">
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="">لغات</a>
          </li>
          <li className="nav-li">
            <a href="">عواصم</a>
          </li>
          <li className="nav-li">
            <a href="">معالم</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="masr-text">مصر</p>
      </div>
    </div>
  );
};

export default Nav;
