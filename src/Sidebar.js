import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

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
                <Avatar />
                <h2>Murat Sahin</h2>
                <h4>murat@gmail.com</h4>
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
