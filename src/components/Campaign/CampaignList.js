import React from 'react';
import {Link} from 'react-router-dom';
import { fetchCampaigns } from '../../actions';
import { connect } from 'react-redux';
import { Grid, Row, Col } from "react-bootstrap";
import { render } from '@testing-library/react';
var ellipsis = require('text-ellipsis');

class CampaignList extends React.Component {
  componentDidMount(){
    this.props.fetchCampaigns();
  }

  renderAdmin(campaign){
    if(campaign.username === localStorage.getItem('userId')){
      return (
        <div>
          <Link to = {`edit/${campaign.id}`} className = "ui button primary">
            EDIT
          </Link>
          <Link to = {'/dashboard/delete'} className = "ui button negative">
            DELETE
          </Link>
        </div>
      )
    }
  }

  renderList(){
    return this.props.currentCampaignData.map(campaign =>{
        return (
            <div key={campaign.id}>
                <Col md={4}>
                    <div className="ui link card">
                        <div className="content">
                            <div className="header" style={{ padding: 0 }}>{campaign.title}</div>
                            <div className="meta">
                                <span className="right floated time">2 days ago</span>
                                <span className="category"></span>
                            </div>
                            <div className="description" style = {{}}>
                                <p>{campaign.description && ellipsis(campaign.description,75)}</p>
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="right floated">
                                {this.renderAdmin(campaign)}
                            </div>
                            <div className="left floated author">
                                <i className="user circle outline icon" /> {campaign.username}
                                        </div>
                        </div>
                    </div>
                    <hr/>
                </Col>
                
            </div>
        )
    })
  }

  render(){
    console.log("The available props are : ",this.props)
    return(
        <div>
            <Grid fluid>
                <div class = "row">
                    {this.renderList()}
                </div>
                
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

export default connect(mapStateToProps,{fetchCampaigns})(CampaignList);