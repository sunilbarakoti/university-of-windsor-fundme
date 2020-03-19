import axios from 'axios';
import swal from 'sweetalert';
import history from '../history';

import { 
  CREATE_CAMPAIGN,
  FETCH_CAMPAIGN,
  FETCH_CAMPAIGNS,
  DELETE_CAMPAIGN,
  EDIT_CAMPAIGN,
  APPROVE_CAMPAIGN,
  FETCH_AWAITING_CAMPAIGNS
} from './types';

const baseURL = "http://54.242.74.108:8005";

export const onSignInClick = (email,password) => async dispatch => {
    await axios({method:"post",url:baseURL+'/login',
    headers:{
        "Content-Type" : "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
	withCredentials: true,
    data: {"username":email,"password":password},
    // ).then((res)=>(res.set_cookie,dispatch({ type : 'LOG_IN', payload : res.data})))
    }).then((res)=>(dispatch({ type : 'LOG_IN', payload : res.data}))
    ).catch((err)=>  {
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


export const onSignOutClick = formValues => async (dispatch) => {
  await axios({method:"get",url:baseURL+'/logout',
	headers:{
      "Content-Type": '"application/json"',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
	},
	withCredentials: true})
  dispatch({type : "LOG_OUT"});
  history.push('/');
 }

// export const onSignOutClick = () => {
//   return {
//       type : "LOG_OUT",
//   };
// };


export const createCampaign = formValues => async (dispatch,getState) => {
	
	const response = await axios({method:"post",url:baseURL+'/api/campaign/',
	headers:{
      "Content-Type": 'multipart/form-data',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
	},
	withCredentials: true,
	data: formValues})
	
  dispatch({type : CREATE_CAMPAIGN, payload:response.data });
  history.push('/dashboard');

}

export const fetchCampaigns = () => async dispatch => {
  await axios({method:"post",url:baseURL+'/api/campaign/active',
    headers:{
        "Content-Type" : "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
	withCredentials: true})
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

export const fetchAwaitingCampaigns = () => async dispatch => {
    await axios({method:"post",url:baseURL+'/api/campaign/awaiting',
    headers:{
        "Content-Type" : "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
	withCredentials: true})
  .then((res)=>dispatch({ type : FETCH_AWAITING_CAMPAIGNS, payload : res.data}))
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
  const response = await axios({method:"post",url:baseURL+'/api/campaign/list',
  headers:{
      "Content-Type" : "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  },
  withCredentials: true,
  data: {"id":id}})
  dispatch({type : FETCH_CAMPAIGN, payload:response.data});
}

export const editCampaign = (id,formValues) => async dispatch => {
  const response = await axios({method:"put",url:baseURL+'/api/campaign/',
  headers:{
      "Content-Type": 'multipart/form-data',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  },
  withCredentials: true,
  data: formValues})
  dispatch({type : EDIT_CAMPAIGN, payload:response.data });
  history.push('/dashboard');
}

export const approveCampaign = (formValues) => async dispatch => {
  const response = await axios({method:"patch",url:baseURL+'/api/mgo/action',
  headers:{
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  },
  withCredentials: true,
  data: formValues})
  dispatch({type : APPROVE_CAMPAIGN, payload:response.data});
  window.location.reload(true);
}

export const deleteCampaign = (id) => async dispatch => {
	
	const response = await axios({method:"delete",url:baseURL+`/api/campaign/?id=${id}`,
	headers:{
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
	},
	withCredentials: true})
	
  dispatch({type : DELETE_CAMPAIGN, payload: id });   
}



