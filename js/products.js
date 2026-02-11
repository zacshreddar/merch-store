const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Merch Item ${i + 1}`,
  price: 2500
}));

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>KES ${p.price}</p>

    <select id="size-${p.id}">
      <option>S</option>
      <option>M</option>
      <option>L</option>
    </select>

    <select id="color-${p.id}">
      <option>Black</option>
      <option>White</option>
    </select>

    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  container.appendChild(div);
});

