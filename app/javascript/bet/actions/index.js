const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '44316d2130msh21fed66e06e6a24p1dd597jsnf2e92ca6ac85'
  }
};

export async function setLeagues() {

  const countries =
    [
      {
        france: ["Ligue 1", "Ligue 2"]
      },
      {
        england: ["Premier League"]
      },
      {
        germany: ["Bundesliga 1"]
      }
    ];

  let leagues = [];

  countries.forEach((country) => {
    fetch(`https://api-football-v1.p.rapidapi.com/v2/leagues/current/${Object.keys(country)[0]}`, OPTIONS)
    .then(response => response.json())
    .then((data) => {
      Object.values(country)[0].forEach((league) => {
        data.api.leagues.filter((league_api) => {
          if(league_api.name === league) {
            leagues.push(league_api);
          }
        });
      });
    });
  });
  return {
    type: 'SET_LEAGUES',
    payload: leagues
  };
}

