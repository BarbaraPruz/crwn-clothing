export const addItemToCart = (cartItems, itemToAdd) => {
  const exists = cartItems.find((item) => item.id === itemToAdd.id)
  if (exists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id)
  if (existingItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
}
