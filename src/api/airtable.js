const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}/Favourites`;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

// GET
const getFavourites = async () => {
  const res = await fetch(BASE_URL, { headers });

  if (!res.ok) {
    throw new Error("Failed to fetch get favourites");
  }

  const data = await res.json();
  return data.records;
};

// POST
const createFavourite = async (match) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      fields: {
        match_id: match.id.toString(),
        home_team: match.homeTeam.name,
        away_team: match.awayTeam.name,
        date: match.utcDate,
      },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch create favourites");
  }

  const data = await res.json();
  return data;
};

// DELETE
const deleteFavourite = async (recordId) => {
  const res = await fetch(`${BASE_URL}/${recordId}`, {
    method: "DELETE",
    headers,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch delete favourites");
  }
};

export default { getFavourites, createFavourite, deleteFavourite };
