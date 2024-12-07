import React, { useState } from "react";
import ResultList from "./UniLogosList";
import "./styles.scss"; // Importing the SCSS file directly
import UniLogosList from "./UniLogosList";
import CreateUnilogos from "./CreateUnilogos";

const UniLogos: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleBackClick = () => {
    setIsCreating(false);
  };

  return (
    <div className="result-container">
      <h2 className="result-title">UniLogos Management</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <UniLogosList />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateUnilogos />
        </>
      )}
    </div>
  );
};

export default UniLogos;
