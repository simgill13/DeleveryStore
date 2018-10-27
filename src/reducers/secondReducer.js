const initialState = {
    test:"second reducer is working"
}

const secondReducer = (state = initialState, action) => {

    switch (action.type) {
        // case "ADD":
        //     state = {
        //         ...state,
        //         result: state.result + action.payload,
        //         lastValues: [...state.lastValues, action.payload]
        //     };
        //     break;
        
    }
    return state;
};

export default secondReducer;