const llaptopArray = [
    {emri: "ACER", modeli: "ASPIRE 5", cmimi: "550", shuma:"20"}
]
const telefonArray = []
const monitorArray = [] 
/*
    {emri: "ACER", modeli: "ASPIRE 5", cmimi: "550", shuma:"20"}

*/



function krijoProduct() {
    const kompanija = document.getElementById("kompanija").value
    const modeli = document.getElementById("modeli").value
    const cmimi = document.getElementById("cmimi").value
    const shuma = document.getElementById("shuma").value
    const lloji = document.getElementById("select").value

    let product = {
        emri:kompanija,
        modeli:modeli,
        cmimi:cmimi,
        shuma:shuma
    }

    if (lloji === "llaptop") {
        llaptopArray.push(product)
    } else if (lloji === "telefon") {
        telefonArray.push(product)
    } else {
        monitorArray.push(product)
    }

    displayElement(product, lloji)

}

function displayElement(product, lloji) {
    const llaptopat = document.getElementById("llaptopat")
    const telefonat = document.getElementById("telefonat")
    const monitorat = document.getElementById("monitorat")

    const paragraf = document.createElement("p")
    
    let text = `Firma ${product.emri} - Modeli: ${product.modeli} - Cmimi: ${product.cmimi} Euro`
    paragraf.innerHTML = text

    if (lloji === "llaptop") {
        llaptopat.appendChild(paragraf)
    } else if (lloji === "telefon") {
        telefonat.appendChild(paragraf)
    } else {
        monitorat.appendChild(paragraf)
    }


}

function filtroSipas() {
    const filtro = document.getElementById("filtroSipas").value
    const container = document.getElementById("container")

    container.innerHTML = ""


    const h2 = document.createElement("h2")
    const paragraf = document.createElement("p")
    h2.innerHTML = "Llaptopat"
    container.appendChild(h2)

    if (filtro === "llaptop") {
        for (let i=0;i<llaptopArray.length;i++) {
            let text = ""
            text = `Firma ${llaptopArray[i].emri} - Modeli: ${llaptopArray[i].modeli} - Cmimi: ${llaptopArray[i].cmimi} Euro`
            paragraf.innerHTML += text + "\n"
            container.appendChild(paragraf)
        }

    } else if (filtro === "telefon") {

    } else {

    }


}
