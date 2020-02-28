import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchCampaign, editCampaign } from '../../actions';
import CampaignForm from './CampaignForm';

class CampaignEdit extends React.Component{
  componentDidMount(){
      debugger;
    this.props.fetchCampaign(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editCampaign(this.props.campaign.id,formValues)
  };

  render(){
    debugger;
    if(this.props.campaign){
      return(
        <div>
          <h2>Edit Stream</h2>
          <CampaignForm 
            //initialValues = {_.pick(this.props.campaign,'title','description')}
            initialValues = {this.props.campaign}
            onSubmit = {this.onSubmit}
          />
        </div>
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