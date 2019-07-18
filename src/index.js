import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/cart/cart.provider';
import ShopProvider from './providers/shop/shop.provider';

import './index.css';
import App from './App';

ReactDOM.render(
	<ShopProvider>
	  <CartProvider>
			  <BrowserRouter>
			      <App />
			  </BrowserRouter>
		</CartProvider>
	</ShopProvider>,
  document.getElementById('root')
);
