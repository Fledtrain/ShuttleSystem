// const bus = document.getElementById("bus");

// let x = 0;
// let y = 0;
// let speed = 5;

// setInterval(() => {
//   x += speed;
//   y += speed;
//   bus.style.left = x + "px";
//   bus.style.top = y + "px";
// }, 50);

const openMenu = () => {
  document.body.classList += " menu--open"
 }
const closeMenu = () =>{
 document.body.classList.remove('menu--open')
 }