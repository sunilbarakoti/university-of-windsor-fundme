const INIT_STATE = {
    isLoggedIn : null,
    userId : null
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case 'LOG_IN':
            return {...state, isLoggedIn:true, userData:action.payload};
        case 'LOG_OUT':
            return {...state, isLoggedIn:false, userId:null};
    }
    return state;    
}
