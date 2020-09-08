/* This is a common card to display each campaign to the users in both active and approval
pending view.This component is called as many times as the number of campaign to be displayed.*/

import React from 'react';
import history from "../../history";
import { Col } from "react-bootstrap";

import './Campaign.css';

var ellipsis = require('text-ellipsis');
var timediff = require('timediff');



const returnDateDifference = (created_on) => {
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


const CampaignCard = (props) => {
    const campaign = props.campaign;
    if (campaign != undefined) { //check later why the issude persists
        return (
            <Col key={campaign.id} md={4} sm={6} xs={12}>
                <div
                    className="ui link card campaign"
                    onClick={() => history.push(`display/${campaign.id}`)}
                >
                    <div className="image camapign__image">
                        <img src={campaign.image} alt="Campaign Image" />
                    </div>
                    <div className="content campaign__content">
                        <div className="header campaign__content-header">{campaign.title && ellipsis(campaign.title, 30)}</div>
                        <div className="meta">
                            <span className="right floated time">{returnDateDifference(campaign.created_on)}</span>
                            <span className="category"></span>
                        </div>
                        <div className="description campaign__description">
                            <p>{campaign.description && ellipsis(campaign.description, 75)}</p>
                        </div>
                    </div>
                    <div onClick={(e) => e.stopPropagation()} className="extra content">
                        <div className="right floated">
                            {props.renderAdmin(campaign)}
                        </div>
                        <div className="left floated author">
                            <i className="user circle outline icon" /> {campaign.user.first_name}
                        </div>
                    </div>
                </div>
                <hr />
            </Col>
        )
    } else {
        return <div>Nothing to display</div>
    }
}
export default CampaignCard;