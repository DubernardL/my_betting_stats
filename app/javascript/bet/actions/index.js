export function setOdds(fixture_id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '44316d2130msh21fed66e06e6a24p1dd597jsnf2e92ca6ac85'
    }
  }

  return fetch(`https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${fixture_id}`, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const odds = data.api.odds.bookmakers
      return {
        type: 'SET_ODDS',
        payload: odds
      };
    });
}
