import _ from 'lodash';

import {
    CREATE_CAMPAIGN,
    FETCH_CAMPAIGN,
    FETCH_CAMPAIGNS,
    DELETE_CAMPAIGN,
    EDIT_CAMPAIGN,
} from '../actions/types';

const INIT_STATE = {
    //dataLoaded : false
}


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_CAMPAIGNS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_CAMPAIGN:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case CREATE_CAMPAIGN:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_CAMPAIGN:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_CAMPAIGN:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}


// const INIT_STATE = {
//     currentCampaignData : {},
//     userId : null,
//     dataLoaded : false
// }

// export default (state = INIT_STATE, action) => {
//     switch(action.type){
//         case 'FETCH_CAMPAIGNS':
//             return {...state, currentCampaignData:action.payload, userId:12345, dataLoaded: true};
//         default:
//             return state; 
//     }

// }
