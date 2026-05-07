const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TOKEN = import.meta.env.VITE_AIRTABLE_API_KEY;

const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}/Favourites`;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

const getFavourites = async () => {
  try {
    const res = await fetch(BASE_URL, { headers });

    if (!res.ok) {
      throw new Error("Failed to fetch get favourites");
    }

    const data = await res.json();
    return data.records;
  } catch (err) {
    console.error(err);
  }
};

const createFavourite = async (match) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        fields: {
          match_id: String(match.id),
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
  } catch (err) {
    console.error(err);
  }
};

const deleteFavourite = async (recordId) => {
  try {
    const res = await fetch(`${BASE_URL}/${recordId}`, {
      method: "DELETE",
      headers,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch delete favourites");
    }
  } catch (err) {
    console.error(err);
  }
};

export default { getFavourites, createFavourite, deleteFavourite };
