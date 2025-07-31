const llaptopArray = [];
const telefonArray = [];
const monitorArray = [];

let gjeneroPrejNfillim = false;

function krijoProduct() {
  const kompanija = document.getElementById("kompanija").value;
  const modeli = document.getElementById("modeli").value;
  const cmimi = document.getElementById("cmimi").value;
  const shuma = document.getElementById("shuma").value;
  const lloji = document.getElementById("select").value;

  const product = {
    emri: kompanija,
    modeli: modeli,
    cmimi: cmimi,
    shuma: shuma,
  };

  if (lloji === "llaptop") {
    llaptopArray.push(product);
  } else if (lloji === "telefon") {
    telefonArray.push(product);
  } else {
    monitorArray.push(product);
  }

  if (!gjeneroPrejNfillim) {
    displayElement(product, lloji);
  } else {
    shfaqProduktet();
  }
}

function displayElement(product, lloji) {
  const container = document.getElementById("container");

  // If sections don't exist, create them
  if (!document.getElementById("llaptopat")) {
    const llaptopDiv = document.createElement("div");
    llaptopDiv.id = "llaptopat";
    container.appendChild(llaptopDiv);

    const telefonDiv = document.createElement("div");
    telefonDiv.id = "telefonat";
    container.appendChild(telefonDiv);

    const monitorDiv = document.createElement("div");
    monitorDiv.id = "monitorat";
    container.appendChild(monitorDiv);
  }

  const sectionId = {
    llaptop: "llaptopat",
    telefon: "telefonat",
    monitor: "monitorat",
  }[lloji];

  const section = document.getElementById(sectionId);
  const paragraf = document.createElement("p");
  paragraf.innerHTML = `Firma ${product.emri} - Modeli: ${product.modeli} - Cmimi: ${product.cmimi} Euro`;
  section.appendChild(paragraf);
}

function shfaqProduktet() {
	gjeneroPrejNfillim = false
	const container = document.getElementById("container");
  container.innerHTML = ""; // Clear all

  // Helper function
  const shtoProdukte = (titulli, array) => {
    const h2 = document.createElement("h2");
    h2.textContent = titulli;
    container.appendChild(h2);

    for (let produkt of array) {
      const p = document.createElement("p");
      p.innerHTML = `Firma ${produkt.emri} - Modeli: ${produkt.modeli} - Cmimi: ${produkt.cmimi} Euro`;
      container.appendChild(p);
    }
  };

  shtoProdukte("Llaptopat", llaptopArray);
  shtoProdukte("Telefonat", telefonArray);
  shtoProdukte("Monitorat", monitorArray);
}

function filtroSipas() {
  gjeneroPrejNfillim = true;
  const filtro = document.getElementById("filtroSipas").value;
  const container = document.getElementById("container");
  container.innerHTML = "";

  const titulli = {
    llaptop: "Llaptopat",
    telefon: "Telefonat",
    monitor: "Monitorat",
  }[filtro];

  const arrayi = {
    llaptop: llaptopArray,
    telefon: telefonArray,
    monitor: monitorArray,
  }[filtro];

  const h2 = document.createElement("h2");
  h2.textContent = titulli;
  container.appendChild(h2);

  for (let produkt of arrayi) {
    const p = document.createElement("p");
    p.innerHTML = `Firma ${produkt.emri} - Modeli: ${produkt.modeli} - Cmimi: ${produkt.cmimi} Euro`;
    container.appendChild(p);
  }
}


