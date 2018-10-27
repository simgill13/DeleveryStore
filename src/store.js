// import {createStore, combineReducers, applyMiddleware}  from "redux";
// import { createLogger } from 'redux-logger'
// import thunk                                            from "redux-thunk";
// // import promise                                          from "redux-promise-middleware";
// import firstReducer                                     from "./reducers/firstReducer"
// import secondReducer                                    from "./reducers/secondReducer"


// export default createStore(
//     combineReducers({
        
//         firstReducer:firstReducer,
//         secondReducer:secondReducer

//     }),
//     {},
//     applyMiddleware(createLogger(), thunk)
// );


import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import firstReducer from "./reducers/firstReducer";
import secondReducer from "./reducers/secondReducer";

if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }

const logger = createLogger();

// const middleware = applyMiddleware(thunk, createLogger({collapsed:true}), routerMiddleware(browserHistory))
export default createStore(
  combineReducers({ firstReducer, secondReducer }),
  {},
  applyMiddleware(thunk,logger)
);

