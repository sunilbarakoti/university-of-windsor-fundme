import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { fetchCampaign, editCampaign } from '../../actions';
import CampaignForm from './CampaignForm';

class CampaignEdit extends React.Component{
  componentDidMount(){
    this.props.fetchCampaign(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    let formData = new FormData();
    for (var key in formValues) {
      if (formValues[key] != null) {
        if (Array.isArray(formValues[key])) {

          formValues[key].forEach(value => formData.append(key, value))
        } else {
          formData.append(key, formValues[key]);
        }
      }
    }
    this.props.editCampaign(this.props.campaign.id,formData)
  };

  render(){
    if(this.props.campaign){
      console.log(this.props.campaign);
      return(
          <CampaignForm 
            campaignTitle = "Edit Campaign"
            initialValues = {this.props.campaign}
            onSubmit = {this.onSubmit}
          />
      )
    }else{
      return <div>Loading...</div>
    }   
  }
}

const mapStateToProps = (state, ownProps) =>{
  return { campaign: state.currentCampaignData[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchCampaign,editCampaign})(CampaignEdit);