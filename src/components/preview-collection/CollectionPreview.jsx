import React from 'react'


const CollectionPreview = ({title, items,}) =>(
    <div className='collection-preview'> 
        <h1 className>{title.toUpperCase()}</h1>
        <div ClassName='preview'>
            {items
                .filter((item, idx) => idx > 4)
                .map(item =>(
                    <div key={item.id}> {item.name}</div>
                ))
            }

        </div>
    </div>
    )



export default CollectionPreview