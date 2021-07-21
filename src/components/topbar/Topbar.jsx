import React from 'react';
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
// import User from '../../assets/user.jpg';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className='topbarWrapper'>
                <div className="topLeft">
                    <h3 className="logo">theTechBoi.<span style={{color:"red"}}><i>nugagee</i></span></h3>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topbarIconContainer">
                    <img src="https://images.pexels.com/photos/2285334/pexels-photo-2285334.jpeg?cs=srgb&dl=pexels-oleg-magni-2285334.jpg&fm=jpg" alt="" className="topAvatar" />
                    </div>
                    {/* <div className="topAvatar">
                        <img scr={User} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}