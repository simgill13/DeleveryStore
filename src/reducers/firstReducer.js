
import {
    
      USER_NAME,  
    
    } from '../actions/action';





const initialState = {
    test:"first reducer is working",
    name:''
}






const firstReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_NAME:
		return Object.assign({}, state, {
		    name: action.name,
		})
    }
    return state;
};

export default firstReducer;