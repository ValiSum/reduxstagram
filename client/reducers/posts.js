// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy the current state
// and return a new state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log("Incrementing Likes!!");
      console.log(state);
      const i = action.index;
      console.log(state[12]);
      return [
        ...state.slice(0, i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;
