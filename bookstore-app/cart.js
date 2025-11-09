let cart = [];

export function addToCart(bookId) {
  cart.push(bookId);
}

export function removeFromCart(bookId) {
  cart = cart.filter(id => id !== bookId);
}

export function getCartItems(books) {
  return cart.map(id => books.find(b => b.id === id));
}

export function getCartTotal(books) {
  return getCartItems(books).reduce((sum, b) => sum + (b ? b.price : 0), 0);
}
