import _ from 'lodash';

import { 
    FETCH_AWAITING_CAMPAIGNS
} from '../actions/types';

const INIT_STATE = {}


export default (state = INIT_STATE, action) => {
    switch(action.type){
        case FETCH_AWAITING_CAMPAIGNS:
            return {...state, ..._.mapKeys(action.payload,'id')}
        default:
            return state;   
    }  
}

