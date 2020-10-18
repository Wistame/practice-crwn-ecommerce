
import React, { useState } from 'react'
import SHOP_DATA from './2.2 shop.data.js'
import CollectionPreview from '../../components/preview-collection/CollectionPreview'


const ShopPage = () =>{

    const  [collection, setCollection ] = useState(SHOP_DATA);
    return (
    <div className='shop-page'> {
    collection.map(({id, ...otherCollectionProps}) =>(
        <div key={id}>
            <CollectionPreview key={id} {...otherCollectionProps}/>
            
        </div>
    ))

     }</div>
    )
}


export default ShopPage