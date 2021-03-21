import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import SHOP_DATA from './shop.data.js'

function ShopPage() {
    const collections = SHOP_DATA

    return (<div className='shop-page'>
            {
               collections.map(({id, ...otherCollectionProps})=> (
                   <CollectionPreview key = {id} {...otherCollectionProps}/>
               )) 
            }
        </div>
      );
}

export default ShopPage