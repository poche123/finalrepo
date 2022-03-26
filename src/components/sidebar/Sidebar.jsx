import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = (props) => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
              src="https://1000marcas.net/wp-content/uploads/2020/03/logo-Iberia.png"
              alt=""
              className="avatar"
            />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Overview</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/slapriority1" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>SLA Priority 1</span>
            </li>
          </Link>
          <Link to="/slapriority2" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>SLA Priority 2</span>
            </li>
          </Link>
          <Link to="/slapriority3" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>SLA Priority 3</span>
            </li>
          </Link>
          <Link to="/slapriority4" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>SLA Priority 4</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <button onClick={() => {window.localStorage.clear(); window.location.reload(false)}} className= "button"> 
                Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
