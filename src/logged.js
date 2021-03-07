//  reducer for is logged in


const LoggedinReducer=(state= false,action)=>{
    switch (action.type) {
        case "Login":return true;
        case "Logout":return false;
        default: return state;
        }
}

export default LoggedinReducer;