import React from "react";

const MatchCard = ({ match, toggleFavourite, isFavourited }) => {
  return (
    <div className="card match-card position-relative shadow-sm border-0 p-3 h-100 d-flex flex-column">
      <button
        className="fav-btn position-absolute top-0 end-0 m-2"
        onClick={() => toggleFavourite(match)}
      >
        {isFavourited(match.id) ? "⭐" : "☆"}
      </button>

      <strong className="text-dark text-center d-block mb-2">
        {match.competition.name}
      </strong>

      <div className="d-flex align-items-center justify-content-between my-3">
        <div className="team-col text-center">
          <img src={match.homeTeam.crest} className="team-logo" />
          <p className="text-dark team-name">{match.homeTeam.shortName}</p>
        </div>
        <div className="vs-text">VS</div>
        <div className="text-dark team-col text-center">
          <img src={match.awayTeam.crest} className="team-logo" />
          <p className="team-name">{match.awayTeam.shortName}</p>
        </div>
      </div>
      <p className="text-center text-muted small mt-auto">
        <i className="bi bi-stopwatch-fill me-1"></i>
        {new Date(match.utcDate).toLocaleString("en-GB")}
      </p>
    </div>
  );
};

export default MatchCard;
