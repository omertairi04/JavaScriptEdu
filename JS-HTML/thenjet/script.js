let thenjet = [
    { text: "You are your best thing", autor: "Toni Morrison", viti: 1987 },
    { text: "Live love laugh", autor: "Unknown", viti: 2000 },
    { text: "Do your best", autor: "Your Mom", viti: 1995 }
];

let numriRandomt = Math.floor(Math.random() * 3)

const thenja = document.getElementById("thenja")
const autori = document.getElementById("autori")
const vitet = document.getElementById("vitet")

thenja.innerHTML = thenjet[numriRandomt].text
autori.innerHTML = thenjet[numriRandomt].autor
vitet.innerHTML = thenjet[numriRandomt].viti

function krijo() {
    const thenja = document.getElementById("thenja-input").value
    const autori = document.getElementById("autori-input").value
    const vitet = document.getElementById("viti-input").value

    const thenjaObject = {
        text: thenja,
        autor: autori,
        viti: vitet
    }

    thenjet.push(thenjaObject)

}

function ndrroThenjen() {
    let numriRandomt = Math.floor(Math.random() * thenjet.length);
    console.log(numriRandomt);
    console.log(`THENJET`, thenjet.length);
    
    
    const thenja = document.getElementById("thenja")
    const autori = document.getElementById("autori")
    const vitet = document.getElementById("vitet")

    thenja.innerHTML = thenjet[numriRandomt].text
    autori.innerHTML = thenjet[numriRandomt].autor
    vitet.innerHTML = thenjet[numriRandomt].viti
}


