
export const addItemToCart = (cartItems, itemToAdd) => {
    const exists = cartItems.find( item => item.id === itemToAdd.id)
    if (exists) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem)
    }
    return [...cartItems, {...itemToAdd, quantity: 1}]
}
