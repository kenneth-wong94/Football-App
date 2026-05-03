import React from "react";

const MatchCard = ({ match, toggleFavourite, isFavourited }) => {
  return (
    <div className="card match-card position-relative shadow-sm border-0 p-3 h-100">
      <button
        className="fav-btn position-absolute top-0 end-0 m-2"
        onClick={() => toggleFavourite(match)}
      >
        {isFavourited(match.id) ? "⭐" : "☆"}
      </button>
      {/* League */}
      <small className="text-muted text-start d-block mb-2">
        {match.competition.name}
      </small>

      {/* Teams */}
      <div className="d-flex align-items-center justify-content-between my-3">
        {/* Home */}
        <div className="team-col text-center">
          <img src={match.homeTeam.crest} className="team-logo" />
          <p className="team-name">{match.homeTeam.shortName}</p>
        </div>

        {/* VS */}
        <div className="vs-text">VS</div>

        {/* Away */}
        <div className="team-col text-center">
          <img src={match.awayTeam.crest} className="team-logo" />
          <p className="team-name">{match.awayTeam.shortName}</p>
        </div>
      </div>

      {/* Date */}
      <p className="text-center text-muted small mb-3">
        {new Date(match.utcDate).toLocaleString()}
      </p>

      {/* Button
      <div className="text-center">
        <button className="btn btn-outline-primary btn-sm w-75">
          Upcoming
        </button>
      </div> */}
    </div>
  );
};

export default MatchCard;
