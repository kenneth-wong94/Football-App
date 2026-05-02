import React from "react";

const TopScorers = ({ topScorers }) => {
  if (!topScorers || topScorers.length === 0) {
    return <p>Loading Top Scorers...</p>;
  }

  return (
    <div className="card shadow-sm border-0 p-3">
      <h5 className="mb-3">🔥 Top Scorers</h5>

      {topScorers.slice(0, 10).map((s, index) => (
        <div key={s.player.id} className="d-flex align-items-center mb-3">
          {/* Rank */}
          <div className="fw-bold me-2">{index + 1}.</div>

          {/* Team logo */}
          <img
            src={s.team.crest}
            alt={s.team.name}
            width="30"
            height="30"
            style={{ objectFit: "contain" }}
          />

          {/* Player info */}
          <div className="ms-2">
            <div className="small fw-semibold">{s.player.name}</div>
            <div className="text-muted small">{s.team.shortName}</div>
          </div>

          {/* Goals */}
          <div className="ms-auto fw-bold">{s.goals} ⚽</div>
        </div>
      ))}
    </div>
  );
};

export default TopScorers;
