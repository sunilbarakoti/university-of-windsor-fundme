import API from '../api/LoginAPI';
import swal from 'sweetalert';
import history from '../history';
import { 
  CREATE_CAMPAIGN,
  FETCH_CAMPAIGN,
  FETCH_CAMPAIGNS,
  DELETE_CAMPAIGN,
  EDIT_CAMPAIGN
} from './types';

export const onSignInClick = (email,password) => async dispatch => {
    const response = await API.post('/login',
         {"username":email,"password":password,
      }
    ).then((res)=>dispatch({ type : 'LOG_IN', payload : email}))
    .catch((err)=>  {
      if (err.response) {
        swal({
          title: "",
          text: err.response.data.Error,
          icon: "error",
          button: false,
          timer: 900
        })
      } else {
        swal({
          title: "",
          text: err.message,
          icon: "error",
          button: false,
          timer: 900
        })
      }
    })
};


// export const onSignOutClick = () => async dispatch => {
//     await LoginAPI.post('/logout',
//     ).then((res)=>dispatch({ type : 'LOG_OUT', payload : res.data}))
//     .catch((err)=>console.log("Response :",err.response))
// };


export const onSignOutClick = () => {
  return {
      type : "LOG_OUT",
  };
};


export const createCampaign = formValues => async (dispatch,getState) => {
  const {userId} = getState().auth;
  const response = await API.post('/streams',{...formValues, userId});
  
  dispatch({type : CREATE_CAMPAIGN, payload:response.data });
  //history.push('/stream/list');
}

export const fetchCampaigns = () => async dispatch => {
  const response = await API.get('/campaign/api/',)
  .then((res)=>dispatch({ type : FETCH_CAMPAIGNS, payload : res.data}))
  .catch((err)=>  {
    if (err.response) {
      swal({
        title: "",
        text: err.response.data.Error,
        icon: "error",
        button: false,
        timer: 900
      })
    } else {
      swal({
        title: "",
        text: err.message,
        icon: "error",
        button: false,
        timer: 900
      })
    }
  })
};

export const fetchCampaign = (id) => async dispatch => {
  const response = await API.get(`/campaign/api/?id=${id}`);
  
  dispatch({type : FETCH_CAMPAIGN, payload:response.data});
}

export const editCampaign = (id,formValues) => async dispatch => {
  const response = await API.put(`/campaign/api/?id=${id}`, formValues,{"created_by_id":"admin3"});
  
  dispatch({type : EDIT_CAMPAIGN, payload:response.data });
  history.push('/admin/dashboard');
}

export const deleteCampaign = (id) => async dispatch => {
  await API.delete(`/streams/${id}`);

  dispatch({type : DELETE_CAMPAIGN, payload: id });   
}



