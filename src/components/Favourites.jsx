import React from "react";
import airtable from "../api/airtable";

const Favourites = ({ favourites, setFavourites }) => {
  const handleRemove = async (fav) => {
    try {
      await airtable.deleteFavourite(fav.id);

      setFavourites((prev) => prev.filter((item) => item.id !== fav.id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!favourites.length) {
    return (
      <div className="container mt-4 text-center">
        <h5>No favourites yet ⭐</h5>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Your Favourited Matches ⭐</h4>

      <ul className="list-group">
        {favourites.map((fav) => {
          const { home_team, away_team, date } = fav.fields;

          return (
            <li
              key={fav.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{home_team}</strong> vs <strong>{away_team}</strong>
                <div className="text-muted small">
                  {new Date(date).toLocaleString()}
                </div>
              </div>

              <button
                onClick={() => handleRemove(fav)}
                className="btn btn-sm btn-danger"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
