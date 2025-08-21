let balance = 100;
const seatPrice = 15;
const balanceDisplay = document.getElementById("balance");
const seatsContainer = document.getElementById("seats");

// Create 15 seats
for (let i = 0; i < 15; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.innerText = "$" + seatPrice;
  seat.dataset.taken = "false";

  seat.addEventListener("click", () => {
    if (seat.dataset.taken === "false") {
      // Buy seat
      if (balance >= seatPrice) {
        balance -= seatPrice;
        seat.dataset.taken = "true";
        seat.classList.add("taken");
        seat.innerText = "Sold";
      } else {
        alert("Not enough money!");
      }
    } else {
      // Sell seat
      balance += seatPrice;
      seat.dataset.taken = "false";
      seat.classList.remove("taken");
      seat.innerText = "$" + seatPrice;
    }
    balanceDisplay.innerText = "Balance: $" + balance;
  });

  seatsContainer.appendChild(seat);
}
