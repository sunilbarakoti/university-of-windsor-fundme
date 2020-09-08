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

import Dashboard from "./views/Dashboard.jsx";
import UserProfile from "./views/UserProfile.jsx";
import CampaignEdit from "./components/Campaign/CampaignEdit";
import CampaignCreate from "./components/Campaign/CampaignCreate";
import CampaignDisplay from "./components/Campaign/CampaignDisplay";
import CampaignAwait from "./components/Campaign/CampaignAwait";
import CampaignDonate from "./components/Campaign/CampaignDonate";
import Modal from "./Modal";
const dashboardRoutes = [
  {
    path: "dashboard",
    name: "Active Campaigns",
    icon: "pe-7s-monitor",
    component: Dashboard,
    layout: "/"
  },
  {
    path: "awaiting",
    name: "Approval Pending",
    icon: "pe-7s-hourglass",
    component: CampaignAwait,
    layout: "/",
  },
  {
    path: "user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/",
    redirect: true
  },
  {
    path: "edit/:id",
    name:"Campaign",
    component: CampaignEdit,
    layout: "/",
    redirect: true
  },
  {
    path: "create",
    name:"Campaign",
    component: CampaignCreate,
    layout: "/",
    redirect: true
  },
  {
    path: "display/:id",
    name:"Campaign1",
    component: CampaignDisplay,
    layout: "/",
    redirect: true
  },
  {
    path: "modal",
    name:"Modal",
    component: Modal,
    layout: "/",
    redirect: true
  },
  {
    path: "donate",
    name:"Donate",
    component: CampaignDonate,
    layout: "/",
    redirect: true
  },



];

export default dashboardRoutes;
