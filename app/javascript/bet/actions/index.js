const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.FOOT_KEY
  }
};

export async function setLeagues() {
  const countries = [
    {
      name: "france",
      leagues: ["Ligue 1", "Ligue 2"],
    },
    {
      name: "england",
      leagues: ["Premier League"],
    },
    {
      name: "germany",
      leagues: ["Bundesliga 1"],
    },
  ]

  let allLeagues = []

  for (const country of countries) {
    const { name, leagues } = country
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v2/leagues/current/${name}`,
      OPTIONS
    )
    const data = await response.json()

    for (const apiLeague of data.api.leagues) {
      if (leagues.includes(apiLeague.name)) {
        allLeagues.push(apiLeague)
      }
    }
  }
  return {
    type: "SET_LEAGUES",
    payload: allLeagues
  }
}



export async function setMatchs(league_id) {

  let allMatchs = []

  const response = await fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${league_id}/next/10`,
    OPTIONS
  )
  const data = await response.json();

  for (const apiMatch of data.api.fixtures) {
    allMatchs.push(apiMatch)
  }

  return {
    type: "SET_MATCHS",
    payload: allMatchs
  }
}

export async function setBetsName(match_id) {

  let allBet = []

  const response = await fetch(`https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${match_id}`,
    OPTIONS
  )

  const data = await response.json();
  const unibet = data.api.odds[0].bookmakers.filter((bookmaker) => {
    if((_.invert(bookmaker))["Unibet"] || (_.invert(bookmaker))["Interwetten"]) {
      return bookmaker;
    }
  });

  for (const apiBet of unibet[0].bets ) {
    allBet.push(apiBet.label_name)
  }

  return {
    type: "SET_BETS_NAME",
    payload: allBet
  }
}
