import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCampaigns } from "../actions";
import CampaignList from '../components/Campaign/CampaignList';


class Dashboard extends Component {

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  render() {
    return (
      <div className="content">
        <CampaignList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {currentCampaignData: Object.values(state.currentCampaignData)}
}

export default connect(mapStateToProps,{fetchCampaigns:fetchCampaigns})(Dashboard);
