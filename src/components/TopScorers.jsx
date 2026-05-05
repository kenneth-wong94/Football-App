import React from "react";

const TopScorers = ({ topScorers }) => {
  return (
    <div className="card shadow-sm border-0 p-3">
      <h5 className="mb-3">🔥 Top Scorers</h5>

      {topScorers.map((topScorer, index) => (
        <div
          key={topScorer.player.id}
          className="d-flex align-items-center mb-3"
        >
          {/* Rank */}
          <div className="fw-bold me-2">{index + 1}.</div>

          {/* Team logo */}
          <img
            src={topScorer.team.crest}
            alt={topScorer.team.name}
            width="30"
            height="30"
          />

          {/* Player info */}
          <div className="ms-2">
            <div className="small fw-semibold">{topScorer.player.name}</div>
            <div className="text-muted small">{topScorer.team.shortName}</div>
          </div>

          {/* Goals */}
          <div className="ms-auto fw-bold">{topScorer.goals} ⚽</div>
        </div>
      ))}
    </div>
  );
};

export default TopScorers;
