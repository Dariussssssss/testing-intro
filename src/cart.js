// function notImplemented() {
//   throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
// }

function addToCart(cart, product, quantity = 1) {
  // return notImplemented();
  if (!Number.isFinite(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным числом');
  }

  const existing = cart.find((item) => item.id === product.id);
  const nextQuantity = (existing ? existing.quantity : 0) + quantity;

  if (nextQuantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  if (existing) {
    return cart.map((item) =>
      item.id === product.id ? {...item, quantity: nextQuantity} : item
    );
  }
  return [...cart, {...product, quantity}];
}


function changeQuantity(cart, id, quantity) {
  // return notImplemented();
  if (!Number.isFinite(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным числом');
  }

  const existing = cart.find((item) => item.id === id);
  if (!existing) return cart;

  if (quantity > existing.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  return cart.map((item) =>
    item.id === id ? {...item, quantity} : item
  );
}

function removeFromCart(cart, id) {
  // return notImplemented();
  return cart.filter((item) => item.id !== id);
}

function calculateCartSubtotal(cart) {
  // return notImplemented();
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode) {
  // return notImplemented();
  const subtotal = calculateCartSubtotal(cart);

  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.round(subtotal * 0.1);
  }

  const delivery = subtotal >= 50000 ? 0 : 30000;
  const total = subtotal - discount + delivery;

  return {subtotal, discount, delivery, total};
}

const cartApi = {addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
