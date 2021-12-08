const url = "http://localhost:5500/api";
const newUser = {
  name: "SHUERNAUS LARINGUIS",
  avatar: "https://avatars.githubusercontent.com/u/71463737?v=4",
  city: "Orlando",
};
const userUpdate = {
  name: "SHUERNAUS LARINGUIS",
  avatar: "https://avatars.githubusercontent.com/u/71463737?v=4",
  city: "Orlando",
};

/* GET USERS */

function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}
getUser();

/* ADD NEW USER */

function addNewUser() {
  axios
    .post(url, newUser)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}
// addNewUser();

/* UPDATE USER */

function updateUser() {
  axios
    .put(`${url}/3`, userUpdate)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}
// updateUser();

/* DELETE USER */

function deleteUser() {
  axios
    .delete(`${url}/5`, userUpdate)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// deleteUser();

/* GET ONE USER */

function getOneUser() {
  axios
    .get(`${url}/6`)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}
// getOneUser();
