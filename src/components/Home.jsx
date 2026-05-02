import React from "react";
import UpcomingMatches from "./UpcomingMatches";
import TopScorers from "./TopScorers";

const Home = ({ matches, topScorers }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* LEFT → 8 columns */}
        <div className="col-md-8">
          <UpcomingMatches matches={matches} />
        </div>

        {/* RIGHT → 4 columns */}
        <div className="col-md-4">
          <TopScorers topScorers={topScorers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
