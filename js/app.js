let trueNumber = Math.floor(Math.random() * 1000);

console.log(trueNumber);

let form = document.getElementsByTagName("form")[0];

let div = document.getElementsByTagName("div")[0];

let div1 = document.getElementsByTagName("div")[1];

let health = 10;

let body = document.getElementsByTagName("body")[0];

form.addEventListener("submit", (e) => {
  let userGess = e.target.userGess.value;
  div.innerText = health;
  if (userGess == trueNumber) {
    body.classList.add("hidden");
    alert("you win good job. refresh to play agan.");

  } else if (userGess < trueNumber) {
    div1.innerText = "it is biger";
    health--;
    if (health == 0) {
      body.classList.add("hidden");
      alert("you lose");
      alert('Please refresh, you can win the next game')
    }
  } else if (userGess > trueNumber) {
    div1.innerText = "it is smaler";
    health--;
    if (health == 0) {
      body.classList.add("hidden");
      alert("you lose");
      alert('Please refresh, you can win the next game')
    }
  }
  e.preventDefault();
});
