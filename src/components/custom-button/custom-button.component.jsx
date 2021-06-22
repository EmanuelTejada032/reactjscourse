import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleButton, ...otherProps}) =>(   
        <button className={`${isGoogleButton? 'google-signin': ''} custom-button `}{...otherProps}>
            {children}
        </button>
    )


export default CustomButton
