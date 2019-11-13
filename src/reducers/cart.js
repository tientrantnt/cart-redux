import * as types from './../constants/ActionTypes'
let data = JSON.parse(localStorage.getItem('CART'));
const InitialState = data ? data : [];
const cart = (state = InitialState, action) => {
    let {product, quantity,id} = action;
    let index = -1;
    switch (action.type) {  
        case types.ADD_TO_CART :
            index = state.findIndex( index => index.product.id === product.id);
            if(index !== -1){
                state[index].quantity += quantity;
                
            }else{
                state.push({
                    product,
                    quantity
                });  
            }
            localStorage.setItem('CART',JSON.stringify(state));                           
            return [...state];
        case types.DELETE_PRODUCT_IN_CART :
            index = state.findIndex( index => index.product.id === id);
            if(index !== -1){
                state.splice(index,1);
            }     
            localStorage.setItem('CART',JSON.stringify(state));                      
            return [...state];  
        case types.UPDATE_PRODUCT_IN_CART : 
            index = state.findIndex( index => index.product.id === product.id);
            if(index !== -1){
                state[index].quantity = quantity;                
            }
            localStorage.setItem('CART',JSON.stringify(state));     
            return [...state];                   
        default:
            return [...state];
    }
}

export default cart;