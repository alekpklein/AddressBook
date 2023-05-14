let arrayOfUsers;
let arrayOfUser1;

window.onload = function () {
  getUser();
  getMultipleUser();
};

const getUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((users) => (arrayOfUser1 = users.results));
};

const consoleUsers = () => {
  console.log(arrayOfUser1);
};

const getUserNamePicture = () => {
  fetch("https://randomuser.me/api/?inc=picture,name")
    .then((res) => res.json())
    .then((users) => (arrayOfUsers = users));
};

const getMultipleUser = () => {
  fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((users) => (arrayOfUsers = users.results));
  console.log(arrayOfUsers);
};

const displayUser = () => {
  const allUsers = document.getElementById("all-users");
  arrayOfUsers.map((user, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `Name: ${user.name.first} ${user.name.last}`
    );
    const picture = document.createElement("img");
    picture.src = user.picture.large;
    li.appendChild(picture);
    li.appendChild(text);
    allUsers.append(li);

    const button = document.createElement("button");
    button.innerHTML = "Info";
    button.onclick = () => {
      let moreInfo = document.createElement("div");
      moreInfo.innerHTML = user.name.first;
      moreInfo.innerHTML = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}<br>`;
      moreInfo.innerHTML += ` Date of Birth: ${user.dob.date}`;

      li.appendChild(moreInfo);
    };
    li.appendChild(button);
  });
};
