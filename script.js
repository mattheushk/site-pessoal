/**
 * =====================================
 * Funções de Interatividade (7 FUNÇÕES)
 * =====================================
 */

// 1. Alternar Tema Claro/Escuro
function mudarTema() {
    document.body.classList.toggle('dark-mode');
    
    // 7. Salvar e Carregar Preferência do Tema (Função de Persistência)
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'dark');
        alertSimples('Tema Escuro Ativado! 🌙');
    } else {
        localStorage.setItem('tema', 'light');
        alertSimples('Tema Claro Ativado! ☀️');
    }
}

// 2. Destacar Frase de Efeito no Perfil
function destacarFrase() {
    const frase = document.getElementById('fraseEfeito');
    frase.classList.toggle('destaque');
    
    if (frase.classList.contains('destaque')) {
        alertSimples('Frase de efeito destacada!');
    } else {
        alertSimples('Destaque removido.');
    }
}

// 3. Alternar Visibilidade de um Elemento (para "Ver Mais Detalhes")
function alternarVisibilidade(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento.style.display === 'none' || elemento.style.display === '') {
        elemento.style.display = 'block';
        alertSimples('Detalhes expandidos.');
    } else {
        elemento.style.display = 'none';
        alertSimples('Detalhes recolhidos.');
    }
}

// 4. Adicionar Habilidade Dinamicamente na seção TI (DS)
function adicionarHabilidade() {
    const novaHabilidade = prompt("Digite a nova habilidade para a lista de TI (DS):");
    if (novaHabilidade && novaHabilidade.trim() !== "") {
        const lista = document.getElementById('listaHabilidades');
        const novoItem = document.createElement('li');
        novoItem.textContent = novaHabilidade.trim();
        lista.appendChild(novoItem);
        alert(`Habilidade "${novaHabilidade.trim()}" adicionada com sucesso!`);
    } else if (novaHabilidade !== null) {
        alert("Nenhuma habilidade foi digitada.");
    }
}

// 5. Calcular Tempo de Experiência Profissional
function calcularTempoTrabalho(dataInicioString) {
    const dataInicio = new Date(dataInicioString);
    const dataAtual = new Date();
    
    // Diferença em milissegundos
    const diferencaMs = dataAtual - dataInicio;
    
    // Converte milissegundos para anos (aproximado)
    const msPorAno = 1000 * 60 * 60 * 24 * 365.25; 
    const anos = diferencaMs / msPorAno;
    
    const meses = Math.round(anos * 12);

    const resultado = document.getElementById('tempoTrabalhoResultado');
    resultado.textContent = `Tempo de experiência: ${Math.floor(anos)} anos e ${meses % 12} meses (aproximadamente ${meses} meses no total).`;
    alertSimples('Cálculo de tempo de trabalho realizado.');
}

// 6. Exibir a Data e Hora Atual (no rodapé)
function exibirDataHora() {
    const dataAtual = new Date();
    const opcoes = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const formato = dataAtual.toLocaleDateString('pt-BR', opcoes);
    
    document.getElementById('dataHora').textContent = `Atualizado em: ${formato}`;
    alertSimples('Data e hora exibidas.');
}

// **EXTRA/AUXILIAR**: Validação de Formulário
// O preventDefault() é para evitar que a página recarregue ao enviar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!email || !mensagem) {
        alert('Por favor, preencha todos os campos do formulário de contato.');
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
         alert('Por favor, insira um endereço de e-mail válido.');
         return false;
    }

    // Se a validação passar, você faria o envio real dos dados.
    // Por enquanto, apenas simula o envio:
    document.getElementById('formularioContato').reset();
    alert('Mensagem enviada com sucesso (simulado)! Entrarei em contato em breve.');
    return true;
}

// **AUXILIAR**: Função simples para alertas discretos (Melhora a experiência do usuário)
function alertSimples(mensagem) {
    console.log(`JS INFO: ${mensagem}`);
    // Você pode substituir por uma notificação mais visual no CSS/HTML se quiser algo mais sofisticado.
}


// Inicialização: Carregar o tema preferido do usuário (Função 7)
document.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Exibe a data e hora ao carregar a página (opcional, mas útil)
    exibirDataHora();
});