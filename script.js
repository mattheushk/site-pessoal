// Fade-in nas seções
const secoes = document.querySelectorAll('.secao');


function animar() {
secoes.forEach(secao => {
const top = secao.getBoundingClientRect().top;
if (top < window.innerHeight - 120) {
secao.style.opacity = '1';
secao.style.transform = 'translateY(0)';
secao.style.transition = '0.9s';
}
});
}


window.addEventListener('scroll', animar);


secoes.forEach(secao => {
secao.style.opacity = '0';
secao.style.transform = 'translateY(40px)';
});