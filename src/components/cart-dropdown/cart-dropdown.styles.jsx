import styled from 'styled-components';
import Button from '../button/button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px; // old value based on legacy font: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

// currently not implemeneted
// export const EmptyMessage = styled.span`
//   font-size: 18px;
//   margin: 50px auto;
// `;

export const CartItemsContainer = styled.div`
  height: 240px;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

export const GoToCheckoutButton = styled(Button)`
  margin-top: auto;
`;
