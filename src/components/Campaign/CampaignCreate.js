/* This component is for creating a new campaign where on click of  "create campaign" button,
users will be redirected to this page with a form to create a campaign.*/

import React from 'react';
import { connect } from 'react-redux';
import { createCampaign } from '../../actions';
import CampaignForm from './CampaignForm';

class CampaignCreate extends React.Component {


  onSubmit = (formValues) => {
    let formData = new FormData();
    for (var key in formValues) {
      if(Array.isArray(formValues[key])){
        formValues[key].forEach(value => formData.append(key, value))
      }else{
        formData.append(key, formValues[key]);
      }
    }
    this.props.createCampaign(formData);
  }

  render(){
    return (
        <CampaignForm campaignTitle = "Create Campaign" initialValues = {{unit_type:"CAD",amount:"0.00"}} onSubmit = {this.onSubmit}/>
    )
  }
}

export default connect(null,{createCampaign})(CampaignCreate);