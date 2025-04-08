import React from "react";
import { NavLink } from "react-router-dom";
import "./Quest.scss";

const Quest = () => {
  return (
    <div className="quest">
      <div className="quest__wrapper">
        <div className="quest__header">
          <p className="quest__title">Sizda hali ham savol qoldimi?</p>
          <h1 className="quest__title">Hoziroq biz bilan bog’laning!</h1>
        </div>
        <NavLink to={"/#contact"} className={"quest__btn"}>
          Biz bilan bog’lanish
        </NavLink>
      </div>
    </div>
  );
};

export default Quest;
