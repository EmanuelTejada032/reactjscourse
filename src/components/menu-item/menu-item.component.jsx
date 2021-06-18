
import React from 'react'
import './menu-item.styles.scss'

// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, linkUrl, match, history}) => {
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{backgroundImage: `url(${imageUrl})`}}  className='background-image' />
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
      </div>
    )
}

export default withRouter(MenuItem);
