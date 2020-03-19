import {combineReducers} from 'redux';
import { reducer } from 'redux-form';
import authReducers from './authReducers';
import campaignReducers from './campaignReducers';
import awaitingCampaignReducers from './awaitingCampaignReducers';

export default combineReducers({
    login:authReducers,
    form:reducer,
    currentCampaignData:campaignReducers,
    awaitingCampaign:awaitingCampaignReducers
});