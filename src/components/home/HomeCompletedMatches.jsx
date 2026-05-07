import React from "react";
import { Link } from "react-router";

const HomeCompletedMatches = ({ finishedMatches }) => {
  return (
    <div className="mt-4">
      <div className="text-light d-flex justify-content-between align-items-center mb-2">
        <h5>Completed Matches</h5>
        <Link to="/matches/completed" className="small text-decoration-none">
          View All →
        </Link>
      </div>

      <div className="list-group">
        {finishedMatches.map((match) => (
          <div key={match.id} className="list-group-item result-item">
            <div className="fw-semibold">
              {match.homeTeam.shortName}
              <span className="fw-bold mx-2">
                {match.score.fullTime.home} - {match.score.fullTime.away}
              </span>
              {match.awayTeam.shortName}
            </div>
            <div className="text-muted small">
              {new Date(match.utcDate).toLocaleString("en-GB")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCompletedMatches;
