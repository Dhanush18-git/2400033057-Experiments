import { books } from './books.js';
import { getCartItems, getCartTotal, removeFromCart } from './cart.js';

export function updateCartDisplay(container, rerender) {
  const items = getCartItems(books);
  if (items.length === 0) {
    container.innerHTML = "<i>Cart is empty.</i>";
    return;
  }
  container.innerHTML = items.map(b => 
    `<div>
      ${b.title} — ₹${b.price}
      <button data-remove="${b.id}">Remove</button>
    </div>`
  ).join('') + `<hr /><b>Total: ₹${getCartTotal(books)}</b>`;

  container.querySelectorAll('button[data-remove]').forEach(btn =>
    btn.onclick = () => {
      removeFromCart(Number(btn.dataset.remove));
      rerender();
    }
  );
}
