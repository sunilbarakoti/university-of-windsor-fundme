import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Col } from "react-bootstrap";
import { fetchCampaign} from '../../actions';
import Modal from '../../Modal';
import history from "../../history";


class CampaignDisplay extends React.Component{

  componentDidMount(){
    this.props.fetchCampaign(this.props.match.params.id)

    if(window.previousLocation === undefined){
      window.previousLocation = "/";
    }
  }

  render(){

    if(this.props.campaign){
      return(
        <Modal
        parentPage = {window.previousLocation}
        contents = {
          <>
            <i className="close icon"></i>
            <div className="header">Current Campaign</div>
            <div className="image content">
              <div  className="ui medium image">
                <img src={this.props.campaign.image} alt="Profile picture" style={{ height: '200px',textOverflow: 'scroll', width: '300px' }}/>
              </div>
              <div className="description" style = {{width:'350px'}}>
                <div className="ui header" style = {{fontSize : '18px'}}>{this.props.campaign.title}</div>
                <div style = {{maxHeight:'250px', overflowY:'scroll',fontSize : '16px'}}>{this.props.campaign.description}</div>
                <div style = {{margin:'15px'}}>
                <div className = "row"><Col className = "ui medium header" md = {2}>Amount :</Col> <Col md = {9}>{this.props.campaign.unit_type} {this.props.campaign.amount}</Col></div>
                <div className = "row"><Col className = "ui medium header" md = {3}>Inventory :</Col><Col md = {8} >{this.props.campaign.inventory && this.props.campaign.inventory.map((inv,key)=>{return(
                  <span className = "ui label" key = {key} style = {{marginTop:'2.5px'}}> {inv} </span>)
                })}
                </Col></div>
                </div>

              </div>
            </div>
            
            <div className="actions">
              <button onClick = {()=>history.push(window.previousLocation)} className="ui primary button" >
                Exit
              </button>
            </div>
            </>
        }
        />
      )
    }else{
      return <div>Loading1...</div>
    }   
  }
}

const mapStateToProps = (state, ownProps) =>{
  return { campaign: state.currentCampaignData[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchCampaign})(CampaignDisplay);