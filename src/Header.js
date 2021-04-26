import React from 'react';
import './fr.css';
import UserTab from './UserTab.js';

const CurrentServerTime = (props) => {
    var moment = require('moment-timezone');
    return(
        <span id="server-time"> {moment().tz("America/Los_Angeles").format("HH:mm")}</span>    
    );
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
    <header className="fr-header">
      <div className="banner">
                    <div className="logo"><img src="https://cdn.discordapp.com/attachments/454300354457239553/645068799812435989/fr_logo_rough.png" /></div>
                    <div className="ticker"><span id="ticker-icon"><img src="https://www1.flightrising.com/static/cms/ticker/3.png" /></span><span id="ticker-info">The Wind Flight is dominating!</span></div>
                    <UserTab /> 
                    </div>
                <div className="food-bar"><div className="clock"><div className="time"><img src="https://www1.flightrising.com/static/layout/revamp/clock_large.png" /> <CurrentServerTime /></div> | <div className="users"><span id="user-count">1952</span> Users Online</div></div><span className="notifications"><img src="https://www1.flightrising.com/static/layout/small_message.png" /> <span id="message-notifs">0</span> <img src="https://www1.flightrising.com/static/layout/friends_icon.png" /> <span id="friends-notif">0</span> <img src="https://www1.flightrising.com/static/layout/small_alert.png" /> <span id="alert-notifs">0</span> </span></div>
      </header>
    );
    }
}

export default Header;