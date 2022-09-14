let globalValue = (id) => {
  let getId = document.getElementById(id);
  let getValue = getId.value;
  getId.value = "";
  return getValue;
};

//add item
document.getElementById("add-items").addEventListener("click", function () {
  let setNameId = globalValue("user-name");
  let setEmailId = globalValue("user-email");
  let setPassId = globalValue("user-password");

  displayInformation(setNameId, setEmailId, setPassId);
  storDataToLocalStorage(setNameId, setEmailId, setPassId);
});

//get data form local storage
let getDataFromLocalStorage = () => {
  let savedData = localStorage.getItem("userinfo");
  let data = {};
  //null is falsy value.so we have to use truthy value to run this statement.
  if (savedData === true) {
    data = JSON.parse(savedData);
  }
  return data;
};

// set item to local storage
let storDataToLocalStorage = (setNameId, setEmailId, setPassId) => {
  let data = getDataFromLocalStorage();
  data["username"] = setNameId;
  data["email"] = setEmailId;
  data["password"] = setPassId;
  let stringifiedData = JSON.stringify(data);
  localStorage.setItem("userinfo", stringifiedData);
};

//display item
let displayInformation = (setNameId, setEmailId, setPassId) => {
  let listContainer = document.getElementById("user-info-list");
  listContainer.innerHTML = `
  <li>${setNameId}</li>
  <li>${setEmailId}</li>
  <li>${setPassId}</li>
  `;
};

// let showInUi = () => {
//   let data = getDataFromLocalStorage();
//   for (const userinfo in data) {
//     let name = data[userinfo.username];
//     let gmail = data[userinfo.email];
//     let pass = data[userinfo.password];
//     console.log(name);
//     displayInformation(name, gmail, pass);
//   }
// };
// showInUi();
