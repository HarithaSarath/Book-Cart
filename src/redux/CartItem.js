export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = []

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem.id !== action.payload.id)
  }
  return state
}

export default cartItemsReducer

// import { getProduct } from './services/ProductsService.js';
// export const ADD_TO_CART = 'ADD_TO_CART'
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// const initialState = []

// const cartItemsReducer = (getProduct = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...getProduct, action.payload]
//     case REMOVE_FROM_CART:
//       return  item.filter(item => item.id !== action.payload.id)
//   }
//   return item
// }

// export default cartItemsReducer


// export const ADD_TO_CART = 'ADD_TO_CART'
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// const initialState = []

// const cartItemsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, action.payload]
//     case REMOVE_FROM_CART:
//       return state.filter(cartItem => cartItem.id !== action.payload.id)
//   }
//   return state
// }

// export default cartItemsReducer