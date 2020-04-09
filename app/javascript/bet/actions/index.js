const OPTIONS = {
  method: 'GET',
  headers: {
    'X-Auth-Token': process.env.FOOT_KEY,
  }
};

export async function setLeagues() {
  // http://api.football-data.org/v2/competitions
  const countries = [
    {
      name: "Ligue 1",
      leagues_id: 2015
    },
    {
      name: "Premier League",
      leagues_id: 2021,
    },
    {
      name: "Bundesliga 1",
      leagues_id: 2002,
    },
    {
      name: "Primera Division",
      leagues_id: 2014,
    },
  ]

  let allLeagues = [];

  for (const country of countries) {
    const { name, leagues_id } = country;
    const response = await fetch(
      `https://api.football-data.org/v2/competitions/${leagues_id}`,
      OPTIONS
    );
    const data = await response.json();
    allLeagues.push(data);
  }

  return {
    type: "SET_LEAGUES",
    payload: allLeagues
  }
}



export async function setMatchs(league, match) {

  let allMatchs = []

  const response = await fetch(`https://api.football-data.org/v2/competitions/${league}/matches?matchday=${match}`,
    OPTIONS
  )
  const data = await response.json();

  for (const apiMatch of data.matches) {
    allMatchs.push(apiMatch)
  }

  return {
    type: "SET_MATCHS",
    payload: allMatchs
  }
}

export async function setBetsName(sport) {
  let allBet = [];
  if(sport === 'football') {
    allBet.push('Match winner', 'Exact score', 'Halftime score');
  }

  return {
    type: "SET_BETS_NAME",
    payload: allBet
  }
}
