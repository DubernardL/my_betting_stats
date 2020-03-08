export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'SET_BETS_NAME') {
    return action.payload;
  } else {
    return state;
  }
}
