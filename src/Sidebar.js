import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import {useSelector} from 'react-redux'
import { selectUser } from "./features/userSlice";

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src='https://definitelynotsooc.files.wordpress.com/2011/11/cac_finished1.jpg' alt='' />
                <Avatar src={user.photoUrl} >{user.email[0]} </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who wieved you?</p>
                    <p className='sidebar_statNumber'> 2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Wievs On Posts</p>
                    <p className='sidebar_statNumber'> 2,513</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                { recentItem('reactjs')}
                { recentItem('programming')}
                { recentItem('softwareengineering')}
                { recentItem('design')}
                { recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
