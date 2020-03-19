import React from 'react';
import {Link} from 'react-router-dom';
import { fetchCampaigns, deleteCampaign} from '../../actions';
import { connect } from 'react-redux';
import CampaignCard from './CampaignCard';
import { Grid } from "react-bootstrap";
import Modal from '../../Modal';
import history from "../../history";


class CampaignList extends React.Component {

  componentDidMount(){
    this.props.fetchCampaigns();
    window.previousLocation = window.location.pathname;
  }
state = {show:false,campaignId:null}

  
  handleDelete(campaign){
    this.setState({show:true,campaignId:campaign.id});
  }
  


  renderAdmin(campaign){
    if(campaign.user.username === localStorage.getItem('userId') ||localStorage.getItem("user_type") === "m" ){
      return (
        <div>
          <Link to = {`edit/${campaign.id}`} className = "ui button primary">
            EDIT
          </Link>
          <button onClick = {()=>this.handleDelete(campaign)} className = "ui button negative">
            DELETE
          </button>
        </div>
      )
    }
  }
  

  render(){
    return(
        <div>
            <Grid fluid>
                <div className = "row">
                {this.props.currentCampaignData.map(campaign => {
                if(campaign.id !== undefined){return(
                <CampaignCard 
                  campaign = {campaign} 
                  renderAdmin = {this.renderAdmin.bind(this)} 
                />)}})}
                </div>
                {this.state.show && 
                  <Modal parentPage = {"dashboard"} 
                    contents = {
                      <>
                      <div className="header">Current Campaign</div>
                      <div className="image content">
                        <div className="description">
                          <div style = {{width:'350px'}}>Are you sure you want delete?</div>
                        </div>
                      </div>
                        <div className="actions">
                        <button onClick={() =>this.setState({show:false})} className="ui button primary">
                          No
                        </button>
                        <button onClick={() => (this.props.deleteCampaign(this.state.campaignId),this.setState({show:false}))} className="ui button negative">
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

const mapStateToProps =(state) => {
  return {
    currentCampaignData: Object.values(state.currentCampaignData),
    currentUserId: state.login.userId,
    isLoggedIn: state.login.isLoggedIn
  }
}

export default connect(mapStateToProps,{fetchCampaigns,deleteCampaign})(CampaignList);