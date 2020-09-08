/* This component is for Approval Pending view where, if the user is of MGO type s/he can 
approve or reject the campaign.Whereas, fundraiser type user can view his/her campaign which
are yet to be approved.
*/

import React from 'react';
import { fetchAwaitingCampaigns, approveCampaign } from '../../actions';
import { connect } from 'react-redux';
import CampaignCard from './CampaignCard';
import { Grid } from "react-bootstrap";
import Modal from '../../Modal';

class CampaignList extends React.Component {

  state = { show: false, campaignId: null }

  componentDidMount() {
    this.props.fetchAwaitingCampaigns();
    window.previousLocation = window.location.pathname;
  }

  handleReject(campaign) {
    this.setState({ show: true, campaignId: campaign.id });
  }


  renderAdmin(campaign) {

    if (localStorage.getItem("user_type") === "m") {
      return (
        <div>
          <button onClick={() => this.props.approveCampaign({ "id": campaign.id, "status_type": "Approved" })} className="ui button positive">
            APPROVE
          </button>
          <button onClick={() => this.handleReject(campaign)} className="ui button negative">
            REJECT
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="row">
            {
              this.props.currentCampaignData.map(campaign => {
                if (campaign.user.username === localStorage.getItem('userId') || localStorage.getItem('user_type') === "m") {
                  return (
                    <CampaignCard
                      campaign={campaign}
                      renderAdmin={this.renderAdmin.bind(this)}
                      actionType={this.props.approveCampaign}
                      displayType="Await"
                    />)
                }
              })
            }
          </div>
          {this.state.show &&
            <Modal parentPage={"dashboard"}
              contents={
                <>
                  <div className="header">Current Campaign</div>
                  <div className="image content">
                    <div className="description">
                      <div style={{ width: '350px' }}>Are you sure you want to Reject?</div>
                    </div>
                  </div>
                  <div className="actions">
                    <button onClick={() => this.setState({ show: false })} className="ui button primary">
                      No
                        </button>
                    <button onClick={() => (this.props.approveCampaign({ "id": this.state.campaignId, "status_type": "Rejected" }), this.setState({ show: false }))} className="ui button negative">
                      Yes
                        </button>
                  </div>
                </>
              }
            />
          }

        </Grid>
        {/* {this.renderCreate()} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCampaignData: Object.values(state.awaitingCampaign),
    currentUserId: state.login.userId,
    isLoggedIn: state.login.isLoggedIn
  }
}

export default connect(mapStateToProps, { fetchAwaitingCampaigns, approveCampaign })(CampaignList);