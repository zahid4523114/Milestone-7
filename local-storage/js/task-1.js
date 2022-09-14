// let bio = () => {
//   let userName = "Dewan Mohammod Zahid Hasan";
//   let age = 22;
//   localStorage.setItem("name", userName);
//   localStorage.setItem("age", age);
// };

let bioData = () => {
  let userInfo = {
    name: "Dewan Mohammod Zahid Hasan",
    age: 22,
  };
  let stringified = JSON.stringify(userInfo);
  localStorage.setItem("bioData", stringified);
};

let remove = () => {
  localStorage.clear();
};
