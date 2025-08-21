let seats = document.getElementById("seats");
let balance = document.getElementById("balance");
let balanceValue = 100;
balance.innerHTML = `${balanceValue}`;
for (let i = 0; i < 15; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.innerHTML = "15$";
  seats.appendChild(seat);

  seat.addEventListener("click", () => {
    if (seat.classList.contains("taken")) {
      seat.classList.remove("taken");
      balanceValue = balanceValue + 15;
      balance.innerHTML = `${balanceValue}`;
    } else {
      if (balanceValue >= 15) {
        seat.classList.add("taken");
        balanceValue = balanceValue - 15;
        balance.innerHTML = `${balanceValue}`;
      } else alert("Not enough money!");
    }
  });
}
