import React from "react";
import MatchCard from "../common/MatchCard";
import { Link } from "react-router";

const UpcomingMatches = ({ matches, toggleFavourite, isFavourited }) => {
  return (
    <div className="mt-3">
      <div className="text-light d-flex justify-content-between align-items-center mb-2">
        <h4>
          <i className="bi bi-clock me-2"></i>
          Upcoming matches
        </h4>
        <Link to="/matches" className="small text-decoration-none">
          View All →
        </Link>
      </div>
      <div className="row">
        {matches.map((match) => (
          <div className="col-md-6 mb-4" key={match.id}>
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
