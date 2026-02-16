const products = [
  {
    id: 1,
    name: "AirFlex Running Shoes",
    category: "Sport",
    price: 89,
    image: "https://picsum.photos/seed/shoes1/300/200",
  },
  {
    id: 2,
    name: "Urban Classic Hoodie",
    category: "Clothing",
    price: 59,
    image: "https://picsum.photos/seed/hoodie1/300/200",
  },
  {
    id: 3,
    name: "ProFit Smart Watch",
    category: "Electronics",
    price: 199,
    image: "https://picsum.photos/seed/watch1/300/200",
  },
  {
    id: 4,
    name: "NoiseCancel Headphones",
    category: "Electronics",
    price: 149,
    image: "https://picsum.photos/seed/headphones1/300/200",
  },
  {
    id: 5,
    name: "Mountain Trek Backpack",
    category: "Sport",
    price: 120,
    image: "https://picsum.photos/seed/backpack1/300/200",
  },
  {
    id: 6,
    name: "Slim Fit Jeans",
    category: "Clothing",
    price: 75,
    image: "https://picsum.photos/seed/jeans1/300/200",
  },
  {
    id: 7,
    name: "Wireless Mouse X200",
    category: "Electronics",
    price: 45,
    image: "https://picsum.photos/seed/mouse1/300/200",
  },
  {
    id: 8,
    name: "Yoga Comfort Mat",
    category: "Sport",
    price: 35,
    image: "https://picsum.photos/seed/yoga1/300/200",
  },
];

const main = document.getElementById("cards-content");
function showProducts(products) {
  main.textContent = "";
  for (let i = 0; i < products.length; i++) {
    const product = document.createElement("div");
    const image = document.createElement("img");
    image.src = products[i].image;
    product.append(image);
    const name = document.createElement("h2");
    name.textContent = products[i].name;
    const category = document.createElement("p");
    category.textContent = products[i].category;
    const price = document.createElement("p");
    price.textContent = products[i].price;
    product.append(name);
    product.append(category);
    product.append(price);
    main.append(product);
  }
}

function searchProducts(text) {
  const array = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category.includes(text)) {
      array.push(products[i]);
    }
  }
  showProducts(array);
}

showProducts(products);
