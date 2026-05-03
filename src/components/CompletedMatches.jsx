import React from "react";
import ResultCard from "./ResultCard";

const CompletedMatches = ({ finishedMatches }) => {
  if (!finishedMatches || finishedMatches.length === 0) {
    return <p className="text-center mt-4">Loading completed Matches...</p>;
  }
  return (
    <div className="container mt-4">
      <h4 className="mb-3">📊 Completed Matches</h4>

      <div className="row">
        {finishedMatches.map((match) => (
          <div className="col-md-4 mb-4" key={match.id}>
            <ResultCard match={match} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedMatches;
