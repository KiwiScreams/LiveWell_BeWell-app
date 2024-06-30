let text = document.getElementById('parallax-text');
let img1 = document.getElementById('img-1');
let img2 = document.getElementById('img-2');
let img3 = document.getElementById('img-3');
let img4 = document.getElementById('img-4');
window.addEventListener('scroll', () =>
{
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    img2.style.top = value * -0.1 + 'px';
    img3.style.top = value * -0.4 + 'px';
    img3.style.top = value * -0.8 + 'px';
    img4.style.top = value * 1.5 + 'px';
    img4.style.top = value * 1.5 + 'px';
})