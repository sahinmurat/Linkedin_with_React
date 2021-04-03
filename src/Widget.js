import React from 'react'
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import './Widget.css'

function Widget() {

    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className='widget' >
            <div className="widget_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React Server Component", "Top news - 7555 readers")}
            {newsArticle("Coronavirus: Third Wave", "Top news - 876")}
            {newsArticle("Tesla hits new hips", "Cars & Auto - 307")}
            {newsArticle("Bitcoin breaks $22k", "Crypro - 8000 readers")}
            {newsArticle("Is Redux too good", "Code - 123 Readers")}
        </div>
    )
}

export default Widget
