import React from 'react'
import './InputOptions.css'

function InpuutOptions({title, Icon, color}) {
    return (
        <div className='inputOptions'>
            <Icon style ={{ color: color}} />
            <h4> {title} </h4>
        </div>
    )
}

export default InpuutOptions
