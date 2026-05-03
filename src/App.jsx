import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import mockMatches from "./mockMatches";
import Home from "./components/Home";
import mockTopScorers from "./mockTopScorers";
import TopScorers from "./components/TopScorers";
import airtable from "./api/airtable";
import Favourites from "./components/Favourites";

function App() {
  const matchesArr = mockMatches[0].matches;
  const topScorersArr = mockTopScorers[0].scorers;
  const [matches, setMatches] = useState(matchesArr);
  const [topScorers, setTopScorers] = useState(topScorersArr);

  const [favourites, setFavourites] = useState([]);

  const loadFavourites = async () => {
    try {
      const data = await airtable.getFavourites();
      setFavourites(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadFavourites();
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
            />
          }
        />
        <Route path="/matches" element={<h1>Matches</h1>} />
        <Route path="/live" element={<h1>Live</h1>} />
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
