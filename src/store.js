
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import firstReducer from "./reducers/firstReducer";
import secondReducer from "./reducers/secondReducer";


let appStore 
if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
       const logger = createLogger();
       appStore =  createStore(
         combineReducers({ firstReducer, secondReducer }),
         {},
         applyMiddleware(thunk,logger)
       );  
}
else{
  console.log('Looks like we are in Production mode!');
  const logger = createLogger();
  appStore =  createStore(
    combineReducers({ firstReducer, secondReducer }),
    {},
    applyMiddleware(thunk)
  ); 
}



export default appStore 