window.addEventListener("scroll", function () { /*external javascript for that sticky thing for our nav bar which is only implemented after scrolling the first window*/
  const header = document.querySelector("header");
  if (window.scrollY > window.innerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});