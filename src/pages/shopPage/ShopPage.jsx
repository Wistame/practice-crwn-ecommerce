
import React, { useState } from 'react'
import SHOP_DATA from './2.2 shop.data.js'


const ShopPage = () =>{

    const { collection } = useState(SHOP_DATA);
    return (
    <> <div>ShopPAge</div>{/* {
    collection.map(
        <>
    )
    } */}</>
    )
}


export default ShopPage