import BetList from '../containers/bet_list';

export function setFixtures() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '44316d2130msh21fed66e06e6a24p1dd597jsnf2e92ca6ac85'
    }
 };

  return fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/525/next/10", options)
    .then(response => response.json())
    .then((data) => {
      const fixtures = data.api.fixtures
      return {
        type: 'SET_FIXTURES',
        payload: fixtures
      };
    });
}

export function setOdds() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '44316d2130msh21fed66e06e6a24p1dd597jsnf2e92ca6ac85'
    }
 };

  return fetch("https://api-football-v1.p.rapidapi.com/v2/odds/fixture/157665", options)
    .then(response => response.json())
    .then((data) => {
      const fixtures = data.api.fixtures
      return {
        type: 'SET_ODDS',
        payload: fixtures
      };
    });
}
