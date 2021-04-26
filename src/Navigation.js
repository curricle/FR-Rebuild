import React from 'react';
import './fr.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  

class NavTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        }
    }

    render() {
        return(
            <div>
            <div className="nav-header" id="clan-header" onClick={openNavTab}><img className="nav-icon" src="https://cdn.discordapp.com/attachments/454300354457239553/645122839065788416/clan_icon.png" /><span className="nav-title">Clan</span>
                </div>
                <ul className="nav-list" id="clan-list">
                    <li><a className="nav-link" href="#">Dragon Lair</a></li>
                    <li><a className="nav-link" href="#">Nesting Grounds</a></li>
                    <li><a className="nav-link" href="#">Gather Items</a></li>
                    <li><a className="nav-link" href="#">Clan Profile</a></li>
                    <li><a className="nav-link" href="#">Hoard</a></li>
                    <li><a className="nav-link" href="#">Bestiary</a></li>
                    <li><a className="nav-link" href="#">Messages</a></li>
                </ul>
                </div>
        );
    }

}
 
//This will eventually be for the mobile navigation tab content toggling
function openNavTab() {
    console.log("OpenNavTab running");
    console.log();
  // document.getElementById(tab);
   //console.log(tab);
   //var categoryListName = tab.id.replace("header", "list"); //subtract "header" from string & replace it with "list"
   //console.log(categoryListName);
   //document.getElementById(categoryListName).style.display = "block";
}

function closeAll() {
    document.getElementById('clan-list').style.display = 'none';
    document.getElementById('shop-list').style.display = 'none';
    document.getElementById('play-list').style.display = 'none';
    document.getElementById('library-list').style.display = 'none';
}

function Navigation() {
    return(
        <div className="navigation">
                <div className="nav-header" id="clan-header" onClick={openNavTab}><img className="nav-icon" src="https://cdn.discordapp.com/attachments/454300354457239553/645122839065788416/clan_icon.png" /><span className="nav-title">Clan</span>
                </div>
                <ul className="nav-list" id="clan-list">
                    <li><a className="nav-link" href="#">Dragon Lair</a></li>
                    <li><a className="nav-link" href="#">Nesting Grounds</a></li>
                    <li><a className="nav-link" href="#">Gather Items</a></li>
                    <li><a className="nav-link" href="#">Clan Profile</a></li>
                    <li><a className="nav-link" href="#">Hoard</a></li>
                    <li><a className="nav-link" href="#">Bestiary</a></li>
                    <li><a className="nav-link" href="#">Messages</a></li>
                </ul>
                <div className="nav-header" id="shop-header"><img className="nav-icon" src="https://cdn.discordapp.com/attachments/454300354457239553/645122839065788416/clan_icon.png" /><span className="nav-title">Shop</span></div>
                <ul className="nav-list" id="shop-list">
                    <li><a className="nav-link" href="#">Purchase Gems</a></li>
                    <li><a className="nav-link" href="#">Merch</a></li>
                    <li><a className="nav-link" href="#">Marketplace</a></li>
                    <li><a className="nav-link" href="#">Auction House</a></li>
                    <li><a className="nav-link" href="#">Trading Post</a></li>
                    <li><a className="nav-link" href="#">Crossroads</a></li>
                    <li><a className="nav-link" href="#">Custom Skins</a></li>
                    <li><a className="nav-link" href="#">Festive Favors</a></li>
                </ul>
                <div className="nav-header" id="play-header"><img className="nav-icon" src="https://cdn.discordapp.com/attachments/454300354457239553/645122839065788416/clan_icon.png" /><span className="nav-title">Play</span></div>
                <ul className="nav-list" id="play-list">
                    <li><a className="nav-link" href="#">Fairgrounds</a></li>
                    <li><a className="nav-link" href="#">Coliseum</a></li>
                    <li><a className="nav-link" href="#">Dominance</a></li>
                </ul>
                <div className="nav-header" id="library-header"><img className="nav-icon" src="https://cdn.discordapp.com/attachments/454300354457239553/645122839065788416/clan_icon.png" /><span className="nav-title">Library</span></div>
                <ul className="nav-list" id="library-list">
                    <li><a className="nav-link" href="#">Forums</a></li>
                    <li><a className="nav-link" href="#">Dev Tracker</a></li>
                    <li><a className="nav-link" href="#">Which Waystone</a></li>
                    <li><a className="nav-link" href="#">World Map</a></li>
                    <li><a className="nav-link" href="#">Search</a></li>
                    <li><a className="nav-link" href="#">Dressing Room</a></li>
                    <li><a className="nav-link" href="#">Scrying Workshop</a></li>
                    <li><a className="nav-link" href="#">Encyclopedia</a></li>
                    <li><a className="nav-link" href="#">Media</a></li>
                    <li><a className="nav-link" href="#">Support</a></li>
                </ul>

                <div className="skybanner"></div>
            </div>
    );
}

export default Navigation;