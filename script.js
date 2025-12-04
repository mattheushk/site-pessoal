// Animação de fade-in
const secoes = document.querySelectorAll('.secao');


function animar() {
secoes.forEach(secao => {
const pos = secao.getBoundingClientRect().top;
if (pos < window.innerHeight - 100) {
secao.style.transition = '1s';
secao.style.opacity = '1';
secao.style.transform = 'translateY(0)';
}
});
}


window.addEventListener('scroll', animar);


secoes.forEach(secao => {
secao.style.opacity = '0';
secao.style.transform = 'translateY(40px)';
});