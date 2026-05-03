const headers = {
  "X-Auth-Token": import.meta.env.VITE_FOOTBALL_API_KEY,
};

export const getUpcomingMatches = async () => {
  try {
    const res = await fetch(`/api/competitions/PL/matches?status=SCHEDULED`, {
      headers,
    });
    if (!res.ok) {
      throw new Error("failed to fetch matches");
    }

    const data = await res.json();
    return data.matches || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getTopScorers = async () => {
  try {
    const res = await fetch(`/api/competitions/PL/scorers`, { headers });

    if (!res.ok) {
      throw new Error("failed to fetch top scorers");
    }
    const data = await res.json();
    return data.scorers || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
