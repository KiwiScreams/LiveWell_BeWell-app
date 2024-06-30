const nav = document.getElementById('navigation');
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'none'? 'block' : 'none';
});
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 730) {
    button.style.display = 'none';
  } else {
    nav.style.display = 'none';
    button.style.display = 'block';
  }
});
window.dispatchEvent(new Event('resize'));