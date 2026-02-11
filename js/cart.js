function addToCart(id) {
  const size = document.getElementById(`size-${id}`).value;
  const color = document.getElementById(`color-${id}`).value;
  const product = products.find(p => p.id === id);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...product, size, color, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✔️");
}

