import React from 'react';
import history from "../../history";
import { Col } from "react-bootstrap";

var ellipsis = require('text-ellipsis');
var timediff = require('timediff');


const returnDateDifference = (created_on) =>{
    if (created_on) {
        const created = new Date(created_on);
        const date_now = new Date();
        const time_diff = timediff(created, date_now, 'D').days;
        if (time_diff < 2) {
            return `${time_diff} day ago`;
        } else {
            return `${time_diff} days ago`;
        }
    }

}


const CampaignCard = (props) =>{    
    const campaign = props.campaign;
        if (campaign != undefined) { //check later why the issude persists
            return (
                <div key={campaign.id} >
                    <Col md={4}>
                        <div
                            className="ui link card"
                            onClick={() => history.push(`display/${campaign.id}`)}
                        >
                            <div className="image" style={{ maxHeight: '170px', maxWidth: '290px' }}>
                                <img src={campaign.image} alt="Inventory Image" />
                            </div>
                            <div className="content" style={{ height: 124 }}>
                                <div className="header" style={{ padding: 0 }}>{campaign.title && ellipsis(campaign.title, 30)}</div>
                                <div className="meta">
                                    <span className="right floated time">{returnDateDifference(campaign.created_on)}</span>
                                    <span className="category"></span>
                                </div>
                                <div className="description" style={{}}>
                                    <p>{campaign.description && ellipsis(campaign.description, 75)}</p>
                                </div>
                            </div>
                            <div onClick={(e) => e.stopPropagation()} className="extra content">
                                <div className="right floated">
                                    {props.renderAdmin(campaign)}
                                </div>
                                <div className="left floated author" style={{ minHeight: 29.52 }}>
                                    <i className="user circle outline icon" /> {campaign.user.first_name}
                                </div>
                            </div>
                        </div>
                        <hr />
                    </Col>

                </div>
            )
        }else{
            return <div>Nothing to display</div>
        }
  }
export default CampaignCard;