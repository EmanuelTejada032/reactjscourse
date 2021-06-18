import React from 'react'
import './directory.styles.scss'

import data from '../../directory.data'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: []
        }
    }

    componentDidMount(){
        this.setState({sections: data}, () => console.log(this.state.sections))
    }

render(){
    return (
        <div className='directory-menu'>
            {
                this.state.sections.map( ({id, ...restProps}) =>(
                    <MenuItem key={id} {...restProps} />
                ))
            }
        </div>
    )
}
    
}

export default Directory;
