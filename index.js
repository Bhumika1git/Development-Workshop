const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    avatar: "👩🏽‍💼"
  },
  {
    name: "John Smith",
    gender: "Male",
    avatar: "👨🏾‍💻"
  },
  {
    name: "Alex Rivera",
    gender: "Male",
    avatar: "🧑🏻‍🎨"
  }
];

let currentIndex = 0;

const userNameEl = document.getElementById("userName");
const userGenderEl = document.getElementById("userGender");
const userAvatarEl = document.getElementById("userAvatar");
const toggleUserBtn = document.getElementById("toggleUserBtn");
const randomUserBtn = document.getElementById("randomUserBtn");

function renderUser(index) {
  const user = users[index];
  userNameEl.textContent = user.name;
  userGenderEl.textContent = user.gender;
  userAvatarEl.textContent = user.avatar;
}

toggleUserBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % users.length;
  renderUser(currentIndex);
});

randomUserBtn.addEventListener("click", () => {
  let nextIndex = Math.floor(Math.random() * users.length);
  if (users.length > 1 && nextIndex === currentIndex) {
    nextIndex = (currentIndex + 1) % users.length;
  }
  currentIndex = nextIndex;
  renderUser(currentIndex);
});

// Initial render
renderUser(currentIndex);