import * as types from './../constants/ActionTypes'
export const actAddToCart = (product,quantity) => ({
  type: types.ADD_TO_CART,
  product,
  quantity
})
export const actChangeMessage = (message) => ({
  type: types.CHANGE_MESSAGE,
  message,
})
export const actDeleteProductInCart = (id) => ({
  type: types.DELETE_PRODUCT_IN_CART,
  id,
})
export const actUpdateProductInCart = (product,quantity) => ({
  type: types.UPDATE_PRODUCT_IN_CART,
  product,
  quantity
})
