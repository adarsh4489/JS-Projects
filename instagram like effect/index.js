var a = document.querySelector(".effect");
var b = document.querySelector("i");
a.addEventListener("dblclick", function () {
  b.style.transform = "translate(-50%,-50%) scale(1)";
  setTimeout(function () {
    b.style.color = "crimson";
    b.style.opacity = "0.8";
    b.style.transform = "translate(-50%,-50%) scale(0)";
    console.log("liked the photo");
  }, 1000);
});
