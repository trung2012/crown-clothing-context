import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { ShopContext } from '../../providers/shop/shop.provider';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
	const { collections } = useContext(ShopContext);

	return (
	  <div className='collections-overview'>
	    {collections.map(({ id, ...otherCollectionProps }) => (
	      <CollectionPreview key={id} {...otherCollectionProps} />
	    ))}
	  </div>
	);
}

export default CollectionsOverview;
