function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            //return existing state and new state
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            console.log('remove comment');
            //return new state without deleted comment
            return [
                ...state.slice(0,action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            //current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state;
}

export default comments;