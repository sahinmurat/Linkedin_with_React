import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post" >
            <div className="post_header">
                <Avatar />
                <div className="div post_info">
                    <h2>Murat Sahin</h2>
                    <p>description</p>
                </div>
            </div>
            <div className="post_body">
                <p>Messages go here</p>
            </div>
            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post
