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
    const match = `${apiMatch.homeTeam.team_name} VS ${apiMatch.awayTeam.team_name}`;
    allMatchs.push(match)
  }

  return {
    type: "SET_MATCHS",
    payload: allMatchs
  }
}



// export function setLeagues() {

//   const countries =
//     [
//       {
//         france: ["Ligue 1", "Ligue 2"]
//       },
//       {
//         england: ["Premier League"]
//       },
//       {
//         germany: ["Bundesliga 1"]
//       }
//     ];

//   let leagues = [];

//   countries.forEach((country) => {
//     fetch(`https://api-football-v1.p.rapidapi.com/v2/leagues/current/${Object.keys(country)[0]}`, OPTIONS)
//     .then(response => response.json())
//     .then((data) => {
//       Object.values(country)[0].forEach((league) => {
//         data.api.leagues.filter((league_api) => {
//           if(league_api.name === league) {
//             leagues.push(league_api);
//           }
//         });
//       });
//     });
//   });
//   return {
//     type: 'SET_LEAGUES',
//     payload: leagues
//   };
// }
