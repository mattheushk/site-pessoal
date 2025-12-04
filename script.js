// Função para trocar imagem ao clicar no espaço vazio
const slots = document.querySelectorAll('.imagem-slot');


slots.forEach(slot => {
slot.addEventListener('click', () => {
const input = document.createElement('input');
input.type = 'file';
input.accept = 'image/*';


input.onchange = () => {
const file = input.files[0];
const img = document.createElement('img');
img.src = URL.createObjectURL(file);
img.style.width = '100%';
img.style.height = '100%';
img.style.objectFit = 'cover';
slot.innerHTML = '';
slot.appendChild(img);
};


input.click();
});
});


// Animação de fade-in nas seções
const secoes = document.querySelectorAll('.secao');


window.addEventListener('scroll', () => {
secoes.forEach(secao => {
const topo = secao.getBoundingClientRect().top;
if (topo < window.innerHeight - 100) {
secao.style.transition = '0.8s';
secao.style.opacity = '1';
secao.style.transform = 'translateY(0)';
}
});
});


// Estado inicial para animação
secoes.forEach(secao => {
secao.style.opacity = '0';
secao.style.transform = 'translateY(40px)';
});
