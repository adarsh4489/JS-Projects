var a = document.querySelector(".btn-remove");
var b = document.querySelector(".btn-add");
var c = document.querySelector(".discription");

var flag = 0;

b.addEventListener("click", function () {
  if (flag == 0) {
    c.style.color = "green";
    c.innerHTML = "Friends";
    flag = 1;
  }
});
a.addEventListener("click", function () {
  if (flag == 1) {
    c.style.color = "red";
    c.innerHTML = "Unknown";
    flag = 0;
  }
});
