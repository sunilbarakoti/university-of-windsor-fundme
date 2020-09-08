/*This component uses card component to display all the available campaigns as ACTIVE CAMPAIGNS*/

import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCampaigns, deleteCampaign } from '../../actions';
import { connect } from 'react-redux';
import CampaignCard from './CampaignCard';
import { Grid } from "react-bootstrap";
import Modal from '../../Modal';

import './Campaign.css';

class CampaignList extends React.Component {

  componentDidMount() {
    this.props.fetchCampaigns();
    window.previousLocation = window.location.pathname;
  }
  state = { show: false, campaignId: null, campaignName: '' }


  handleDelete(campaign) {
    { console.log(campaign) }
    this.setState({ show: true, campaignId: campaign.id, campaignName: campaign.title });
  }



  renderAdmin(campaign) {
    if (campaign.user.username === localStorage.getItem('userId') || localStorage.getItem("user_type") === "m") {
      return (
        <div>
          <Link to={`edit/${campaign.id}`} className="ui button primary">
            EDIT
          </Link>
          <button onClick={() => this.handleDelete(campaign)} className="ui button negative">
            DELETE
          </button>
        </div>
      )
    } else if (localStorage.getItem("user_type") !== "m") {
      return (
        <div>
          <Link to={`donate`} className="ui button positive">
            Donate
          </Link>
        </div>
      )
    }
  }


  render() {
    return (
      <div>
        <Grid fluid>
          <div className="row">
            {this.props.currentCampaignData.map(campaign => {
              if (campaign.id !== undefined) {
                return (
                  <CampaignCard
                    campaign={campaign}
                    renderAdmin={this.renderAdmin.bind(this)}
                  />)
              }
            })}
          </div>
          {this.state.show &&
            <Modal parentPage={"dashboard"}
              contents={
                <>
                  <div className="header">{this.state.campaignName}</div>
                  <div className="image content">
                    <div className="description">
                      <div className="description__text">Are you sure you want delete?</div>
                    </div>
                  </div>
                  <div className="actions">
                    <button onClick={() => this.setState({ show: false })} className="ui button primary">
                      No
                        </button>
                    <button onClick={() => (this.props.deleteCampaign(this.state.campaignId), this.setState({ show: false }))} className="ui button negative">
                      Yes
                          </button>
                  </div>
                </>
              }
            />
          }

        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    currentCampaignData: Object.values(state.currentCampaignData),
    currentUserId: state.login.userId,
    isLoggedIn: state.login.isLoggedIn
  }
}

export default connect(mapStateToProps, { fetchCampaigns, deleteCampaign })(CampaignList);