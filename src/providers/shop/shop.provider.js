import React, { createContext, useState, useEffect } from 'react';

import { selectCollectionsForPreview } from './shop.utils';

import SHOP_DATA from './shop.data';

const directory = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

export const ShopContext = createContext({
	collections: [],
	sections: []
});


const ShopProvider = ({ children }) => {
	const [ collections, setCollections ] = useState([]);
	const [ sections, setSections ] = useState([]);

	useEffect(() => {
		setCollections(selectCollectionsForPreview(SHOP_DATA));
		setSections(directory.sections);
	}, [])

	return (
		<ShopContext.Provider
			value = {{
				collections,
				sections
			}}
		>
			{ children }
		</ShopContext.Provider>
	)
}

export default ShopProvider;