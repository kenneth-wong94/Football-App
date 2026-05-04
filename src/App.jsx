import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import TopScorers from "./components/TopScorers";
import airtable from "./api/airtable";
import Favourites from "./components/Favourites";
import {
  getUpcomingMatches,
  getCompletedMatches,
  getTopScorers,
} from "./api/football";
import AllMatches from "./components/AllMatches";
import CompletedMatches from "./components/CompletedMatches";

function App() {
  const [matches, setMatches] = useState([]);
  const [finishedMatches, setFinishedMatches] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const [matchesData, completedMatchesData, scorersData, data] =
        await Promise.all([
          getUpcomingMatches(),
          getCompletedMatches(),
          getTopScorers(),
          airtable.getFavourites(),
        ]);

      setMatches(matchesData);
      setFinishedMatches(
        [...completedMatchesData].sort(
          (a, b) => new Date(b.utcDate) - new Date(a.utcDate),
        ),
      );
      setTopScorers(scorersData);
      setFavourites(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const isFavourited = (matchId) => {
    return favourites.some(
      (favourite) => favourite.fields.match_id === String(matchId),
    );
  };

  const toggleFavourite = async (match) => {
    try {
      const existing = favourites.find(
        (favourite) => favourite.fields.match_id === String(match.id),
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
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-grow " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              matches={matches.slice(0, 3)}
              topScorers={topScorers}
              isFavourited={isFavourited}
              toggleFavourite={toggleFavourite}
              finishedMatches={finishedMatches.slice(0, 3)}
            />
          }
        />
        <Route
          path="/matches"
          element={
            <AllMatches
              matches={matches.slice(0, 9)}
              isFavourited={isFavourited}
              toggleFavourite={toggleFavourite}
            />
          }
        />
        <Route
          path="/matches/completed"
          element={
            <CompletedMatches finishedMatches={finishedMatches.slice(0, 9)} />
          }
        />
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
