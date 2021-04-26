import React from 'react';
import './dragonpage.css';
class DragonPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="content">
                <div className="breadcrumb">curricle » Lair » Nosferatu</div>
                <img src="https://flightrising.com/images/layout/icon_help.png"/>

                <div className="dragon-title"><img src="https://flightrising.com/images/layout/button_back.png"/><span><h1 id="dragon-name">Nosferatu</h1><br/>
                <span id="dragon-id">#5899493</span></span></div>

                <div id="dragon">
                    <a className="dragon-nav" id="last-dragon" href="#">‹</a>
                    <div id="dragon-image"><img src="https://flightrising.com/rendern/350/58995/5899493_350.png"/></div>
                    <a className="dragon-nav" id="next-dragon" href="#">›</a>
                </div>
                <button>Auction</button> <button>Exalt</button>
                <div className="section-container" id="dragon-stats">
                    <img src="https://flightrising.com/images/icons/breeding_cooldown.png"/><img src="https://flightrising.com/images/icons/famicon.png"/><img src="https://flightrising.com/images/icons/wind_rune.png"/><img src="https://flightrising.com/images/icons/small_female.png"/>
                    Info
                    Stats
                    Growth
                    Genes
                    <div className="content-container"></div>
                </div>
            </div>
        );
    }
}

export default DragonPage;