import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContex';
import { useContext } from 'react';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
    
    <div className="top">
        <Link to="/" style={{textDecoration:"none"}} >
        <span className="logo">WebFusion</span>
        </Link>
    </div>
   <hr />
    <div className="center">
        <ul>
            <p className="tittle">MAIN</p>
           
            <Link to="/" style={{textDecoration:"none"}} >
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            </Link>

            <p className="tittle">LIST</p>
            
            <Link to="/users" style={{textDecoration:"none"}} >
            <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
           
            <li>
                <CreditCardRoundedIcon className="icon"/>
                <span>Orders</span>
            </li>
            <li>
                <EmailRoundedIcon className="icon"/>
                <span>Messages</span>
            </li>
            
            <Link to="/products" style={{textDecoration:"none"}} >
            <li>
                <StoreMallDirectoryRoundedIcon className="icon"/>
                <span>Product</span>
            </li>
            </Link>
            
            <li>
                <LocalShippingRoundedIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="tittle">USEFUL</p>
            <li>
                <InsertChartRoundedIcon className="icon"/>
                <span>Statistics</span>
            </li>
            <li>
                <NotificationsActiveOutlinedIcon className="icon"/>
                <span>Notifictions</span>
            </li>
            <p className="tittle">SERVICE</p>
            <li>
                <MonitorHeartOutlinedIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
                <LockOutlinedIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsOutlinedIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="tittle">USER</p>
            <li>
                <AccountCircleRoundedIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppRoundedIcon className="icon"/>
                <span>Logout</span>
            </li>
        </ul>
    </div>
   
    <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: 'LIGHT'})}></div>
        <div className="colorOption" onClick={() => dispatch({type: 'DARK'})}></div>
    </div>
    
    </div>
  )
}

export default Sidebar