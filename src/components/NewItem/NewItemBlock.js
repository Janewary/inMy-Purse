import React, { useMemo, useState } from "react";
import NewItem from "./NewItem";
import "./NewItemBlock.css";

export const StopEditContext = React.createContext();

const NewItemBlock = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    // event.stopPropagation();
    setIsEditing(false);
  };

  const memoizedStopEdit = useMemo(() => {
    return { stopEditingHandler };
  }, []);

  return (
    <div
      className="new-item__block"
      style={{ cursor: !isEditing ? "pointer" : "auto" }}
    >
      {!isEditing && (
        <button
          className="fs-normal fw-bold add-new-item-button"
          onClick={startEditingHandler}
        >
          내역 추가하기
        </button>
      )}
      {isEditing && (
        <StopEditContext.Provider value={memoizedStopEdit}>
          <NewItem />
        </StopEditContext.Provider>
      )}
    </div>
  );
};

export default NewItemBlock;
