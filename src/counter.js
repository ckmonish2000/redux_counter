// reducer for counter

const counterReducer=(state=0,action)=>{
    switch (action.type){
        case "Increment": return state+1;
        case "Decrement": return state-1;
        case "Double": return state*state;
    }
}

export default counterReducer;
