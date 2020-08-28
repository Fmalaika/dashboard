import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar'
import SearchBar from './SearchBar'
class Header extends Component {
   
    render() {
        return (
          <header> 
                <div className="left-nav">
                    <nav>
                        <MenuIcon />
                    </nav>
                    <SearchBar/>
                </div>
                <div className="right-nav">
                    <div className="messages">
                        <DraftsOutlinedIcon fontSize="large"  />
                        <span className="badge"> 10 </span>
                    </div>
                    <div className="notifications">
                        <NotificationsNoneOutlinedIcon fontSize="large" />
                        <span className="badge"> 15 </span>
                    </div>
                   
                   
                    <Avatar>MF</Avatar>
                </div>
            </header> 
            )
        }
    }
    
export default Header