import React,{ Component } from 'react'
import './directory.scss'

import MenuItem from '../menu-item/menu-item'

class Directory extends Component{
    constructor(){
        super ();

        this.state = {
            categories: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                  }
            ]
        }
    }
    
    render() {
        const { categories } = this.state
        return(
            <div className="directory-menu">
                {
                    categories.map(({title, imageUrl, id, large}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={large} />
                    ))
                }
            </div>
        )
    }
}

export default Directory