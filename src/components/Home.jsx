import React, { useEffect, useState } from "react";
import UpcomingMatches from "./UpcomingMatches";
import TopScorers from "./TopScorers";
import airtable from "../api/airtable";
import CompletedMatches from "./CompletedMatches";

const Home = ({
  matches,
  topScorers,
  isFavourited,
  toggleFavourite,
  finishedMatches,
}) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* LEFT → 8 columns */}
        <div className="col-md-8">
          <UpcomingMatches
            matches={matches}
            toggleFavourite={toggleFavourite}
            isFavourited={isFavourited}
          />
          <CompletedMatches finishedMatches={finishedMatches} />
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
