const aparatCard = {
  title: "Aparati me i kerkuar ne bot",
  price: 1200,
  currency: "$",
  rating: 4.2,
  reviewsCount: 100,
  soldProducts: 230,
  inventoryStatus: "Ende ka produkte ne invertar",
};

const patikaCard = {
  title: "Patikat me te shendetshme",
  price: 99,
  currency: "$",
  rating: 4.9,
  reviewsCount: 2300,
  soldProducts: "10k+",
  inventoryStatus: "Nuk ka me produkte ne invertar",
};

const orCard = {
  title: "Ora me lluksoze ne treg",
  price: 999,
  currency: "$",
  rating: 3.2,
  reviewsCount: 450,
  soldProducts: 200,
  inventoryStatus: "Ende ka produkte ne invertar",
};

const kamerCard = {
  title: "Kamerat 2 + 1",
  price: 1800,
  currency: "$",
  rating: 5,
  reviewsCount: "5k+",
  soldProducts: "20k+",
  inventoryStatus: "Nuk ka me produkte ne invertar",
};

let produktObjects = [];
produktObjects.push(aparatCard);
produktObjects.push(patikaCard);
produktObjects.push(orCard);
produktObjects.push(kamerCard);

const cards_content = document.getElementById("cards-content");

// for (let i = 2; i <= 5; i++) {
//   addCard(i);
// }

let imageNumber = 2;
for (let i = 0; i < 4; i++) {
  addCard(imageNumber, produktObjects[i]);
  imageNumber++;
}

function addCard(imageNumber, object) {
  let cardClass = document.createElement("div");
  cardClass.className = "card";

  let imageCard = document.createElement("img");
  imageCard.className = "card-img";
  imageCard.src = imageNumber + ".jpg";

  let cardBody = document.createElement("card-body");
  cardBody.className = "card-body";

  let title = document.createElement("h2");
  title.textContent = object.title;

  let price = document.createElement("h4");
  price.textContent = object.price;

  let reviews = document.createElement("p");
  reviews.textContent = object.rating + " | " + object.reviewsCount;

  let soldProduct = document.createElement("p");
  soldProduct.textContent = object.soldProduct + " produkte te shitura";

  let inventory = document.createElement("p");
  inventory.textContent = object.inventoryStatus;

  cardBody.appendChild(title);
  cardBody.appendChild(price);
  cardBody.appendChild(reviews);
  cardBody.appendChild(soldProduct);
  cardBody.appendChild(inventory);

  let button1 = document.createElement("button");
  button1.className = "card-buy-btn";
  button1.textContent = "Buy Now";

  let button2 = document.createElement("button");
  button2.className = "card-buy-btn";
  button2.textContent = "Add to Card";

  cardClass.appendChild(imageCard);
  cardClass.appendChild(cardBody);
  cardClass.appendChild(button1);
  cardClass.appendChild(button2);

  cards_content.append(cardClass);
}

function createProduct() {
  const pTitle = document.getElementById("title").value;
  const pPrice = document.getElementById("cmimi").value;
  const pNumber = document.getElementById("numri-i-produkteve").value;
  const pFoto = document.getElementById("foto").value;

  const newProductObject = {
    title: pTitle,
    price: pPrice,
    currency: "$",
    rating: 0.0,
    rating: 0.0,
    reviewsCount: 0,
    soldProducts: 0,
    inventoryStatus: "Ende ka produkte ne invertar",
  };

  produktObjects.push(newProductObject);
  addCard(1, newProductObject)
}
