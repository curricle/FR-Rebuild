import React from 'react';
import './fr.css';

function Header() {
    return (
    <header className="fr-header">
      <div className="banner">
                    <div className="logo"><img src="https://cdn.discordapp.com/attachments/454300354457239553/645068799812435989/fr_logo_rough.png" /></div>
                    <div className="ticker"><span id="ticker-icon"><img src="https://www1.flightrising.com/static/cms/ticker/3.png" /></span><span id="ticker-info">The Wind Flight is dominating!</span></div>
                    <div className="user-tab">
                        <div className="user">
                                <img id="avatar" src="https://www1.flightrising.com/rendern/portraits/212041/21204046p.png" /> 
                                <img id="element" src="https://www1.flightrising.com/static/layout/revamp/banners/fire_large.png" />
                        </div>
                        <a className="nav-link" href="#"><span id="username">curricle</span></a> <img id="logbutton" src="https://www1.flightrising.com/static/icons/down_arrow.png" />
                        <span id="energy-bar">100%<br/><img src="https://www1.flightrising.com/static/bars/day3bar.png" /></span>
                        <div className="user-tab-icons">
                            <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://cdn.discordapp.com/attachments/454300354457239553/645440837311922176/unknown.png" /> <span id="treasure-count">212334</span></a></div>
                            <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://cdn.discordapp.com/attachments/454300354457239553/645441583319089152/unknown.png" /> <span id="familiar-count">200</span></a></div>
                            <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://cdn.discordapp.com/attachments/454300354457239553/645442060668633099/unknown.png" /> <span id="gems-count">330</span></a></div>
                            <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://cdn.discordapp.com/attachments/454300354457239553/645442424302469158/unknown.png" /> <span id="dragons-count">78</span></a></div>
                        </div>
                    </div>
                    </div>
                <div className="food-bar"><div className="clock"><div className="time"><img src="https://www1.flightrising.com/static/layout/revamp/clock_large.png" /> 21:02</div> | <div className="users"><span id="user-count">1952</span> Users Online</div></div><span className="notifications"><img src="https://www1.flightrising.com/static/layout/small_message.png" /> <span id="message-notifs">0</span> <img src="https://www1.flightrising.com/static/layout/friends_icon.png" /> <span id="friends-notif">0</span> <img src="https://www1.flightrising.com/static/layout/small_alert.png" /> <span id="alert-notifs">0</span> </span></div>
      </header>
    );
}

export default Header;