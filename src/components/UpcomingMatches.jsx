import React from "react";
import MatchCard from "./MatchCard";
import { Link } from "react-router";

const UpcomingMatches = ({ matches, toggleFavourite, isFavourited }) => {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Upcoming matches</h4>
        <Link to="/matches" className="small text-decoration-none">
          View All →
        </Link>
      </div>
      <div className="row">
        {matches.slice(0, 3).map((match) => (
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
export default UpcomingMatches;
