import React from 'react';

class UserTab extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
  return(
          <div className="user-tab">
                          <div className="user">
                                  <img id="avatar" src="https://www1.flightrising.com/rendern/portraits/212041/21204046p.png" alt="" /> 
                                  <img id="element" src="https://www1.flightrising.com/static/layout/revamp/banners/fire_large.png" alt="" />
                          </div>
                          <a className="nav-link" href="#"><span id="username">{this.props.username}</span></a> <img id="logbutton" src="https://www1.flightrising.com/static/icons/down_arrow.png" alt="" />
                          <span id="energy-bar">100%<br/><img src="https://www1.flightrising.com/static/bars/day3bar.png" alt=""/></span>
                          <div className="user-tab-icons">
                              <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://www1.flightrising.com/static/layout/icon_treasure.png" alt="treasure icon"/> <span id="treasure-count">{this.props.treasure_owned}</span></a></div>
                              <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://www1.flightrising.com/static/layout/icon_bestiary.png" alt="bestiary icon"/> <span id="familiar-count">{this.props.familiars_owned}</span></a></div>
                              <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://www1.flightrising.com/static/layout/icon_gems.png" alt="gems icon"/> <span id="gems-count">{this.props.gems_owned}</span></a></div>
                              <div className="user-bar-icon"><a className="nav-link" href="#"><img src="https://www1.flightrising.com/static/layout/icon_wing.png" alt="dragon wing icon"/> <span id="dragons-count">{this.props.dragons_owned}</span></a></div>
                          </div>
                      </div>
      );
  }
  }
  
  UserTab.defaultProps = {
    username: "curricle",
    user_id: 53671,
    treasure_owned: 306409,
    gems_owned: 322,
    familiars_owned: 200,
    dragons_owned: 77
  }
  
 export default UserTab;