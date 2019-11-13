import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Carts from '../components/Carts';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as message from '../constants/Message';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from '../actions/index';
class CartContainer extends Component {
  render() {
    let {cart} = this.props;
    return (
      <Carts>
        {this.showCart(cart)}
        {this.showTotalAmount(cart)}
      </Carts>
    )
  }
  showCart = (cart) => {
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    var result = <tr>
      <td>
        {message.MSG_CART_EMPTY}
      </td>
    </tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem
          key={index}
          item={item}
          index={index}
          onDeleteProductInCart={onDeleteProductInCart}
          onChangeMessage={onChangeMessage}
          onUpdateProductInCart={onUpdateProductInCart}></CartItem>
      });
    }
    return result;
  }
  showTotalAmount = (cart) => {
    if (cart.length > 0) {
      return <CartResult cart={cart}></CartResult>
    }
  }
}
CartContainer.propTypes = {
  cart: PropTypes
    .arrayOf(PropTypes.shape({
    product: PropTypes
      .shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
      .isRequired,
    quantity: PropTypes.number.isRequired
  }))
    .isRequired
}

const mapStateToProps = (state) => {
  return {cart: state.cart}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteProductInCart: (id) => {
      dispatch(actDeleteProductInCart(id))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    },
    onUpdateProductInCart: (product,quantity) => {
      dispatch(actUpdateProductInCart(product,quantity))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);