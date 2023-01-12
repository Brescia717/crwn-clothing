import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  GoToCheckoutButton,
  CartItemsContainer,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    toggleIsCartOpen();
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </CartItemsContainer>
      <GoToCheckoutButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </GoToCheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
