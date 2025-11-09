import { books } from './books.js';
import { renderBookList } from './booklist.js';
import { addToCart } from './cart.js';
import { updateCartDisplay } from './ui.js';

const bookListDiv = document.getElementById('book-list');
const cartDiv = document.getElementById('cart');

function rerender() {
  updateCartDisplay(cartDiv, rerender);
}
renderBookList(bookListDiv, bookId => {
  addToCart(bookId);
  rerender();
});
rerender();
