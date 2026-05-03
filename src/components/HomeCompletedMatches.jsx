import React from "react";

const HomeCompletedMatches = ({ finishedMatches }) => {
  if (!finishedMatches || finishedMatches.length === 0) {
    return <p>Loading results...</p>;
  }

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5>📊 Completed Matches</h5>
        <a href="/matches/completed" className="small text-decoration-none">
          View All →
        </a>
      </div>

      <div className="list-group">
        {finishedMatches.map((match) => (
          <div key={match.id} className="list-group-item result-item">
            {/* Match title */}
            <div className="fw-semibold">
              {match.homeTeam.shortName}{" "}
              <span className="fw-bold">
                {match.score.fullTime.home} - {match.score.fullTime.away}
              </span>{" "}
              {match.awayTeam.shortName}
            </div>

            {/* Date */}
            <div className="text-muted small">
              {new Date(match.utcDate).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCompletedMatches;
