import React from "react";
import MatchCard from "./MatchCard";

const AllMatches = ({ matches, toggleFavourite, isFavourited }) => {
  return (
    <div className="container mt-4">
      <h4>
        <i className="bi bi-calendar-event-fill"></i> Upcoming Matches
      </h4>

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
