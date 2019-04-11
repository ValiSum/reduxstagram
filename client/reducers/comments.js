// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy the current state
// and return a new state

function comments(state = [], action) {
  console.log("The comment will change");
  console.log(state, action);
  return state;
}

export default comments;
