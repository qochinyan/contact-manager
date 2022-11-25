import "./Header.css"
import { NavLink } from "react-router-dom";
const Header = () => {
    // let style = {
    //     color: isActive ? "white" : "yellow",
    //     textDecoration:"none"
    // }
    return <div className="header">
        <NavLink to="/" style={({isActive})=>({color:isActive ? "rgb(61, 145, 255)":"white",textDecoration:"none",borderBottom:isActive?"1px solid white":"none"})}>Home</NavLink>
        <NavLink to="/about" style={({isActive})=>({color:"white",textDecoration:"none",borderBottom:isActive?"1px solid white":"none"})}>About</NavLink>
        <NavLink to="/settings" style={({isActive})=>({color:isActive ? "rgb(61, 145, 255)":"white",textDecoration:"none",borderBottom:isActive?"1px solid white":"none"})}>Settings</NavLink>
    </div>
}

export default Header;