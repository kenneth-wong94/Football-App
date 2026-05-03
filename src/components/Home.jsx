import React, { useEffect, useState } from "react";
import UpcomingMatches from "./UpcomingMatches";
import TopScorers from "./TopScorers";
import airtable from "../api/airtable";

const Home = ({ matches, topScorers, favourites, setFavourites }) => {
  const isFavourited = (matchId) => {
    return favourites.some(
      (favourite) => favourite.fields.match_id === matchId.toString(),
    );
  };

  const toggleFavourite = async (match) => {
    try {
      const existing = favourites.find(
        (favourite) => favourite.fields.match_id === match.id.toString(),
      );

      if (existing) {
        await airtable.deleteFavourite(existing.id);

        setFavourites((prev) => prev.filter((fav) => fav.id !== existing.id));
      } else {
        const newFav = await airtable.createFavourite(match);

        setFavourites((prev) => [...prev, newFav]);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
