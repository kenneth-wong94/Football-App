import React from "react";

const ResultCard = ({ match }) => {
  return (
    <div className="card result-card shadow-sm border-0 p-3 h-100">
      {/* League */}
      <small className="text-dark text-center d-block mb-2">
        {match.competition.name}
      </small>

      {/* Teams + Score */}
      <div className="d-flex align-items-center justify-content-between my-3">
        {/* Home */}
        <div className="team-col text-center">
          <img src={match.homeTeam.crest} className="result-team-logo" />
          <p className="result-team-name">{match.homeTeam.shortName}</p>
        </div>

        {/* Score */}
        <div className="score-text">
          {match.score.fullTime.home} - {match.score.fullTime.away}
        </div>

        {/* Away */}
        <div className="team-col text-center">
          <img src={match.awayTeam.crest} className="result-team-logo" />
          <p className="result-team-name">{match.awayTeam.shortName}</p>
        </div>
      </div>

      {/* Date */}
      <p className="text-center text-muted small mt-auto">
        {new Date(match.utcDate).toLocaleString("en-GB")}
      </p>
    </div>
  );
};

export default ResultCard;
