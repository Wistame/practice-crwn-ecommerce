import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'
import './CollectionPreview.scss'
const CollectionPreview = ({title, items}) =>(
    <div className='collection-preview'> 
        <h1 >{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...CollectionPreviewProps }) =>(
                    <CollectionItem key={id} {...CollectionPreviewProps}/>
                ))
            }

        </div>
    </div>
    )



export default CollectionPreview