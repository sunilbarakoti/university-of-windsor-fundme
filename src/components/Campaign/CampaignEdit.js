/* Users with edit permission can tap the edit button and they are redirected to this page.
Then the form loads with the intial values that users has entered while creating a campaign. */

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCampaign, editCampaign } from '../../actions';
import CampaignForm from './CampaignForm';

class CampaignEdit extends React.Component {
  componentDidMount() {
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
    this.props.editCampaign(formValues, formData)
  };

  render() {
    if (this.props.campaign) {
      console.log(this.props.campaign);
      return (
        <CampaignForm
          campaignTitle="Edit Campaign"
          initialValues={this.props.campaign}
          onSubmit={this.onSubmit}
        />
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { campaign: state.currentCampaignData[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchCampaign, editCampaign })(CampaignEdit);