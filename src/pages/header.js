import React from 'react';
import logo from "../Static/logo.png";
import NotificationBadge, {Effect} from "react-notification-badge";

const Header = () => {
    return (
        <div>
        <img src={logo}  alt="logo" style={{width: '3%', height:25}}/>
            <NotificationBadge count={this.state.count} effect={Effect.SCALE}/>
        </div>
    );
};

export default Header;