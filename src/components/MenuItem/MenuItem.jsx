import React from 'react'

const MenuItem =({ title })=> (
    <div className='menu-item'>
        <div className='content'>
            <h2 className='title'> {title}</h2>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>

)
export default MenuItem