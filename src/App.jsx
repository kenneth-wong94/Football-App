import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import mockMatches from "./mockMatches";
import Home from "./components/Home";
import mockTopScorers from "./mockTopScorers";
import TopScorers from "./components/TopScorers";

function App() {
  const matchesArr = mockMatches[0].matches;
  const topScorersArr = mockTopScorers[0].scorers;
  const [matches, setMatches] = useState(matchesArr);
  const [topScorers, setTopScorers] = useState(topScorersArr);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home matches={matches} topScorers={topScorers} />}
        />
        <Route path="/matches" element={<h1>Matches</h1>} />
        <Route path="/live" element={<h1>Live</h1>} />
        <Route
          path="/favourites"
          element={<TopScorers topScorers={topScorers} />}
        />
      </Routes>
    </>
  );
}

export default App;
