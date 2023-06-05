import React from "react";
import PurseItems from "./PurseItems";
import Filter from "../Filter/Filter";
import "./PurseList.css";

const PurseList = () => {
  return (
    <div className="purse__list">
      <div className="purse__list-header">
        <h2 className="fs-normal">연간 내역</h2>
        <Filter />
      </div>
      <PurseItems />
    </div>
  );
};

export default PurseList;
