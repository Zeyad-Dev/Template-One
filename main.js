let menu = document.querySelector("header .container .links i");
let ul = document.querySelector("header .container .links ul");
let close = document.querySelector("header .container .links ul i");
let lis = document.querySelectorAll("header .container .links ul li");
let up = document.querySelector(".up");
document.addEventListener("click", function (e) {
  if (e.target === menu) {
    ul.style.visibility = "visible";
    ul.style.transform = "translate(0)";
    ul.style.transition = "transform 0.7s";
  }
});
close.addEventListener("click", () => {
  ul.style.transform = "translate(-999px)";
});
lis.forEach((li) => {
  li.onclick = function () {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    if (window.innerWidth <= 767) {
      close.click();
    }
  };
});
window.onresize = function () {
  if (window.innerWidth >= 768) {
    ul.style.transition = "none";
    ul.style.transform = "translate(0)";
    ul.style.visibility = "visible";
  } else {
    ul.style.visibility = "hidden";
    ul.style.transform = "translate(-999px)";
  }
};
window.onscroll = function () {
  if (scrollY >= 600) {
    up.style.transform = "translateX(0)";
  } else {
    up.style.transform = "translateX(999px)";
  }
};
up.onclick = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
