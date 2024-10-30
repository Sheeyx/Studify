import React, { useState } from "react";
import ResultList from "./ResultList";
import "./styles.scss"; // Importing the SCSS file directly
import CreateResult from "./CreateResult";

const Result: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleBackClick = () => {
    setIsCreating(false);
  };

  return (
    <div className="result-container">
      <h2 className="result-title">Result Management</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <ResultList />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateResult />
        </>
      )}
    </div>
  );
};

export default Result;
