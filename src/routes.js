import Dashboard from "./views/Dashboard.jsx";
import UserProfile from "./views/UserProfile.jsx";
import Maps from "./views/Maps.jsx";
import CampaignEdit from "./components/Campaign/CampaignEdit";
import CampaignCreate from "./components/Campaign/CampaignCreate";
import CampaignDisplay from "./components/Campaign/CampaignDisplay";
import CampaignAwait from "./components/Campaign/CampaignAwait";
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
    layout: "/"
  },
  {
    path: "user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/"
  },
  {
    path: "maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
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



];

export default dashboardRoutes;
