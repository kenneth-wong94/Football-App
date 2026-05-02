import React from "react";
import UpcomingMatches from "./UpcomingMatches";

const Home = ({ matches }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* LEFT → 8 columns */}
        <div className="col-md-8">
          <UpcomingMatches matches={matches} />
        </div>

        {/* RIGHT → 4 columns */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Top Scorers</h5>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
