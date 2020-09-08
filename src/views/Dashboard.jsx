/*!

 =========================================================
 * Light Bootstrap Dashboard React - v1.3.0
 * Based on Light Bootstrap Dashboard - v1.3.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard-react
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampaigns } from "../actions";
import CampaignList from "../components/Campaign/CampaignList";

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
        <CampaignList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentCampaignData: Object.values(state.currentCampaignData) };
};

export default connect(mapStateToProps, { fetchCampaigns: fetchCampaigns })(
  Dashboard
);
