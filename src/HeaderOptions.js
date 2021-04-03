import React from 'react'
import './HeaderOptions.css'
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux'
import { selectUser } from "./features/userSlice";

function HeaderOptions({ avatar, Icon, title, onClick }) {

    const user = useSelector(selectUser);
    return (
        <div className='headerOption' onClick={onClick} >
            { Icon && <Icon className='headerOption_icon' />}
            {avatar && <Avatar className='headerOption_icon' src={user?.photoUrl}> {user?.email[0]} </Avatar>}
            <h4 className='headerOption_title'>{title} </h4>
        </div>
    )
}

export default HeaderOptions
