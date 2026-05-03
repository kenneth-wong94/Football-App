import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";

import Home from "./components/Home";

import TopScorers from "./components/TopScorers";
import airtable from "./api/airtable";
import Favourites from "./components/Favourites";
import { getUpcomingMatches, getTopScorers } from "./api/football";
import AllMatches from "./components/AllMatches";
import CompletedMatches from "./components/CompletedMatches";

function App() {
  const [matches, setMatches] = useState([]);
  const [topScorers, setTopScorers] = useState([]);

  const [favourites, setFavourites] = useState([]);

  const loadData = async () => {
    try {
      const matchesData = await getUpcomingMatches();
      const scorersData = await getTopScorers();
      setMatches(matchesData);
      setTopScorers(scorersData);
    } catch (err) {
      console.error(err);
    }
  };

  const loadFavourites = async () => {
    try {
      const data = await airtable.getFavourites();
      setFavourites(data);
    } catch (err) {
      console.error(err);
    }
  };

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

  useEffect(() => {
    loadFavourites();
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              matches={matches}
              topScorers={topScorers}
              favourites={favourites}
              setFavourites={setFavourites}
              isFavourited={isFavourited}
              toggleFavourite={toggleFavourite}
            />
          }
        />
        <Route
          path="/matches"
          element={
            <AllMatches
              matches={matches}
              favourites={favourites}
              setFavourites={setFavourites}
              isFavourited={isFavourited}
              toggleFavourite={toggleFavourite}
            />
          }
        />
        <Route path="/matches/completed" element={<CompletedMatches />} />
        <Route
          path="/favourites"
          element={
            <Favourites favourites={favourites} setFavourites={setFavourites} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
