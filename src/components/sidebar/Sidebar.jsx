import "./Sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">SA Dash</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <PeopleAltOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <CategoryOutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ListAltOutlinedIcon className="icon" />
            <span>Order</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <DvrOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountBoxOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
}

export default Sidebar;
