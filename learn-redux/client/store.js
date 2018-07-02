import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import routeReducer from './reducers/index';

//data
import comments from './data/comments';
import posts from './data/posts';

//create object for default data
    const defaultState = {
        posts,
        comments
    };

    const store = createStore(routeReducer, defaultState);

    export const history = syncHistoryWithStore(browserHistory, store);

    export default store;