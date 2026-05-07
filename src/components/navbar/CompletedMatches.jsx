import React from "react";
import ResultCard from "../common/ResultCard";

const CompletedMatches = ({ finishedMatches }) => {
  return (
    <div className="container mt-4">
      <h4 className="text-light mb-3">📊 Completed Matches</h4>

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
