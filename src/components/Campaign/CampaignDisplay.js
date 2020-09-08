/* This component gives the descriptive view of each component on a Modal window. */

import React from 'react';
import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions';
import Modal from '../../Modal';
import history from "../../history";

import './Campaign.css';


class CampaignDisplay extends React.Component {

  componentDidMount() {
    this.props.fetchCampaign(this.props.match.params.id)

    if (window.previousLocation === undefined) {
      window.previousLocation = "/";
    }
  }

  render() {

    if (this.props.campaign) {
      return (
        <Modal
          parentPage={window.previousLocation}
          contents={
            <>
              <i className="close icon" onClick={() => history.push(window.previousLocation)}></i>
              <h1 className="header">{this.props.campaign.title}</h1>
              <div className="image content">
                <div className="ui medium image">
                  <img src={this.props.campaign.image} alt="Campaign Image" className="campaignDisplay__image" />
                </div>
                <div className="description campaignDisplay__description">
                  <h1 className="ui header campaignDisplay__description-header">{this.props.campaign.title}</h1>
                  <div className="campaignDisplay__description-text">{this.props.campaign.description}</div>
                  <div className="campaignDisplay__amtInv">
                    <div className="campaignDisplay__amount"><p><strong>Amount :</strong></p> <p>{this.props.campaign.unit_type} {this.props.campaign.amount}</p></div>
                    <div className="campaignDisplay__inventory"><p><strong>Inventory :</strong></p><p md={8} >{this.props.campaign.inventory && this.props.campaign.inventory.map((inv, key) => {
                      return (
                        <span className="ui label campaignDisplay__inventory-item" key={key}> {inv} </span>)
                    })}
                    </p></div>
                  </div>

                </div>
              </div>

              <div className="actions">
                <button onClick={() => history.push(window.previousLocation)} className="ui primary button" >
                  Exit
              </button>
              </div>
            </>
          }
        />
      )
    } else {
      return <div>Loading1...</div>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { campaign: state.currentCampaignData[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchCampaign })(CampaignDisplay);