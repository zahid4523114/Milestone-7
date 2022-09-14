let globalInputValue = (id) => {
  let getId = document.getElementById(id);
  let getValue = getId.value;
  getId.value = "";
  return getValue;
};

//set or delete name
document.getElementById("save-name").addEventListener("click", function () {
  let inputId = globalInputValue("user-name");
  localStorage.setItem("name", inputId);
  //   console.log(inputId);
});
document.getElementById("delete-name").addEventListener("click", function () {
  localStorage.removeItem("name");
  //   console.log(inputId);
});
//set or delete email
document.getElementById("save-email").addEventListener("click", function () {
  let inputId = globalInputValue("user-email");
  localStorage.setItem("email", inputId);
  //   console.log(inputId);
});
document.getElementById("delete-email").addEventListener("click", function () {
  localStorage.removeItem("email");
  //   console.log(inputId);
});
//set or delete password
document.getElementById("save-password").addEventListener("click", function () {
  let inputId = globalInputValue("user-password");
  localStorage.setItem("password", inputId);
  console.log(inputId);
});
document
  .getElementById("delete-password")
  .addEventListener("click", function () {
    localStorage.removeItem("password");
    // console.log(inputId);
  });

//send all
document.getElementById("send-all").addEventListener("click", function () {
  let userName = globalInputValue("user-name");
  let userEmail = globalInputValue("user-email");
  let userPassword = globalInputValue("user-password");
  let restData = { userName, userEmail, userPassword };
  //stringified object
  let stringified = JSON.stringify(restData);
  localStorage.setItem("userInformation", stringified);
  //   console.log(stringified);
});
//reset all
document.getElementById("reset-all").addEventListener("click", function () {
  localStorage.clear();
});
