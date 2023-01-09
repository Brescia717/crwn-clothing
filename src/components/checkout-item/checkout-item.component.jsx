import { useContext, useState } from 'react';

import './checkout-item.styles.scss';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  const total = price * quantity;

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow value' onClick={removeItemHandler}>
          <span style={{ visibility: `${quantity <= 1 ? 'hidden' : ''}` }}>
            &#10094;
          </span>
        </div>
        {quantity}
        <div className='arrow value' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{total}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
