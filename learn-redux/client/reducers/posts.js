//a reducer takes in two things.
//1. the action(what happened)
//2. copy of current state

function posts(state = [], action) {
    console.log('this post will change');
    console.log(state, action);
    return state;
}

export default posts;