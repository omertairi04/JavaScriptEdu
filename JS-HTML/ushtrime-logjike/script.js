
function foo() {
    const msg = document.getElementById("message")
    const input = document.getElementById("vlerat").value;
    const numbers = input.split(" ");
    
    for (let i = 0;i<numbers.length;i++) {
        // cift
            // msg.innerHTML += `${arr[i]} `
    }

    
}

/*
Remove Duplicates

    Input: [1,2,2,3,1,4]

    Task: return a new array with duplicates removed.
    (Hint: loop and check if already in new array.)
*/

function bar() {
    const msg = document.getElementById("message")
    const input = document.getElementById("vlerat").value;
    const numbers = input.split(",");

    let newArray = []
    let text = ""

    for (let i=0;i<numbers.length;i++) {
        if (!newArray.includes(numbers[i])) {

            newArray.push(numbers[i])
            text += `${numbers[i]} `
        }
    }

    msg.innerHTML = text

}


let perdoruesit = [];

function shtoPerdorues() {
    const emri = document.getElementById("emri").value.trim();
    const cmimi = Number(document.getElementById("cmimi").value);

    if (emri !== "" && !isNaN(cmimi)) {
        const perdorues = { emri: emri, cmimi: cmimi };
        perdoruesit.push(perdorues);
    }
}

function filtroSipasCmimit() {
    const filtroSipas = Number(document.getElementById("filtroSipas").value);
    console.log("filtroSipas ", filtroSipas);
    
    const msg = document.getElementById("message");
    let text = "";

    for (let i = 0; i < perdoruesit.length; i++) {
        console.log("p: ", perdoruesit[i].cmimi);
        if (perdoruesit[i].cmimi < filtroSipas) {
            text += perdoruesit[i].emri + " ";
        }
    }

    msg.innerHTML = text;
}
