import React from "react";

const UpcomingMatches = ({ matches, toggleFavourite, isFavourited }) => {
  if (!matches || matches.length === 0) {
    return <p>Loading Matches...</p>;
  }

  return (
    <div className="mt-4">
      <h4 className="mb-3">📅 Upcoming matches</h4>

      <div className="row">
        {matches.slice(0, 3).map((match) => (
          <div className="col-md-4 mb-4" key={match.id}>
            <div className="card shadow-sm border-0 p-3 h-100 position relative">
              {/* favourite button */}
              <button
                className="fav-btn position-absolute top-0 end-0 m-2"
                onClick={() => toggleFavourite(match)}
              >
                {isFavourited(match.id) ? "⭐" : "☆"}
              </button>

              {/* League */}
              <small className="text-muted text-start d-block">
                {match.competition.name}
              </small>

              {/* Teams */}
              <div className="row text-center align-items-center my-3">
                {/* Home */}
                <div className="col-5">
                  <img src={match.homeTeam.crest} width="50" />
                  <p className="mb-0 small team-name">
                    {match.homeTeam.shortName}
                  </p>
                </div>

                {/* VS */}
                <div className="col-2 fw-bold text-nowrap">VS</div>

                {/* Away */}
                <div className="col-5">
                  <img src={match.awayTeam.crest} width="50" />
                  <p className="mb-0 small team-name">
                    {match.awayTeam.shortName}
                  </p>
                </div>
              </div>

              {/* Date */}
              <p className="text-muted text-center mb-2">
                {new Date(match.utcDate).toLocaleString()}
              </p>

              {/* Status */}
              <div className="text-center">
                <span className="badge bg-secondary">{match.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UpcomingMatches;
