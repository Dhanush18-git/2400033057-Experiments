import { books } from './books.js';

export function renderBookList(container, onAddToCart) {
  container.innerHTML = books.map(book =>
    `<div style="margin-bottom:18px;">
      <b>${book.title}</b> by ${book.author} — ₹${book.price}
      <br>Status: ${book.available ? "In Stock" : "Out of Stock"}
      <br>
      <button ${!book.available ? "disabled" : ""} data-id="${book.id}">Add to Cart</button>
    </div>`
  ).join('');

  container.querySelectorAll('button[data-id]').forEach(btn =>
    btn.onclick = () => onAddToCart(Number(btn.dataset.id))
  );
}
