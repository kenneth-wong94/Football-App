import React from "react";
import MatchCard from "./MatchCard";

const AllMatches = ({ matches, toggleFavourite, isFavourited }) => {
  if (!matches || matches.length === 0) {
    return <p>Loading Matches...</p>;
  }
  return (
    <div className="container mt-4">
      <h4>📅 All Matches</h4>

      <div className="row">
        {matches.map((match) => (
          <div className="col-md-4 mb-4" key={match.id}>
            <MatchCard
              match={match}
              toggleFavourite={toggleFavourite}
              isFavourited={isFavourited}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMatches;
