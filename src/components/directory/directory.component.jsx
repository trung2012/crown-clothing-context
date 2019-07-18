import React, { useContext } from 'react';

import { ShopContext } from '../../providers/shop/shop.provider';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
	const { sections } = useContext(ShopContext);

	return (
	  <div className='directory-menu'>
	    {sections.map(({ id, ...otherSectionProps }) => (
	      <MenuItem key={id} {...otherSectionProps} />
	    ))}
	  </div>
	);
}

export default Directory;
