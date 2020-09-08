import _ from 'lodash';

import {
    FETCH_AWAITING_CAMPAIGNS,
    APPROVE_CAMPAIGN,
} from '../actions/types';

const INIT_STATE = {}


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_AWAITING_CAMPAIGNS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case APPROVE_CAMPAIGN:
            return _.omit(state, action.payload.id)
        //return { ...state, [action.payload.id]: { ...state[action.payload.id], status_type: action.payload.status_type } }
        default:
            return state;
    }
}

