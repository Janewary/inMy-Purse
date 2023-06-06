import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import PurseCurrent from "./PurseCurrent";
import PurseChart from "./PurseChart";
import PurseList from "./PurseList";
import "./PurseBlock.css";

export const FilterContext = React.createContext();

const PurseBlock = (props) => {
  const initialYear = new Date().getFullYear().toString();
  const [filterBaseYear, setFilterBaseYear] = useState(initialYear);
  let filteredItems = [];
  let filteredExpenses = [];

  useEffect(() => {
    if (props.isAddItem) {
      let lastedItemId = Math.max(...props.items.map((item) => item.id));
      let lastedItem = props.items.filter((item) => item.id === lastedItemId);
      let lastedFilterBaseYear = lastedItem[0].date.getFullYear().toString();
      setFilterBaseYear(lastedFilterBaseYear);
    }
  }, [props.items]);

  if (props.items.length > 0) {
    filteredItems = props.items.filter(
      (item) => item.date.getFullYear().toString() === filterBaseYear
    );

    filteredExpenses = filteredItems.filter(
      (item) => item.amountType === "expense"
    );
  }

  const onChangeFilter = useCallback((selectedYear) => {
    setFilterBaseYear(selectedYear);
  }, []);

  const memoizedFilter = useMemo(() => {
    return { onChangeFilter, filteredItems, filterBaseYear, filteredExpenses };
  }, [filteredItems, filterBaseYear]);
  return (
    <div className="purse__block">
      <FilterContext.Provider value={memoizedFilter}>
        <PurseCurrent />
        <PurseList />
        <PurseChart />
      </FilterContext.Provider>
    </div>
  );
};

export default PurseBlock;

PurseBlock.propTypes = {
  items: PropTypes.node.isRequired,
  isAddItem: PropTypes.node.isRequired,
};
