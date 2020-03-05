export default function(state, action) {
  console.log(state);
  if (state === undefined) {
    return [];
  }

  if (action.type === 'SET_LEAGUES') {
    return action.payload;
  } else {
    return state;
  }
}
