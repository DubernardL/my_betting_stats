export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'SET_LEAGUES') {
    return action.payload;
  } else {
    return state;
  }
}
