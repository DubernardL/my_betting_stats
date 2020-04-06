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
      `http://api.football-data.org/v2/competitions/${leagues_id}`,
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
