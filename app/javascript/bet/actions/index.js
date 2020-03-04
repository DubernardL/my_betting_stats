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
      const bookmakers = data.api.odds[0] ? data.api.odds[0].bookmakers : []
      const bookmaker = bookmakers.filter((bookmaker) => { return bookmaker.bookmaker_id === 16 })
      const odds = bookmaker[0] ? bookmaker[0].bets : []
      // Array de odds
      return {
        type: 'SET_ODDS',
        payload: odds
      };
    }
  );
}
