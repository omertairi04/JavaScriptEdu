let allUsers = [];
console.log("length users: " + allUsers.length);

let divAllUsers = document.getElementById("all-users");

function renderUsers() {
  if (divAllUsers) divAllUsers.innerHTML = "";
  for (let i = 0; i < allUsers.length; i++) {
    const userData = document.createElement("p");
    let allInfo =
      allUsers[i].name +
      " " +
      allUsers[i].surname +
      " " +
      allUsers[i].email +
      " ***\n";
    userData.textContent = allInfo;
    console.log("USER DATA" + allInfo);

    divAllUsers.appendChild(userData);
  }
}

function checkPassword(p1, p2) {
  if (p1 === p2) return true;
  return false;
}

function createUser() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const pass1 = document.getElementById("pass1").value;
  const pass2 = document.getElementById("pass2").value;

  if (
    name === "" ||
    surname === "" ||
    email === "" ||
    checkPassword(pass1, pass2) === false
  ) {
    alert("Probleme me input-at");
    return;
  }

  const userObject = {
    name: name,
    surname: surname,
    email: email,
    password: pass1,
  };

  allUsers.push(userObject);
  console.log("LENGTH: " + allUsers.length);

  renderUsers();

  alert("CREATED USER " + name + " SUCCESSFULLY!");
}
