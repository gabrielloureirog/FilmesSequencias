// Variaveis globais
let filmes = []; // Array de filmes

// Função para criar os cards dos filmes
function criarCards() {
    const container = document.getElementById("container-cards");
    container.innerHTML = ""; // Limpa o container antes de adicionar novos cards

    for (const filme of filmesAlien) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = filme.foto;
        img.alt = filme.nome;
        img.addEventListener("click", () => {
            filme.acao(); // Executa a ação definida no objeto do filme
        });
        card.appendChild(img);

        const info = document.createElement("div");
        info.classList.add("info");

        const titulo = document.createElement("h2");
        titulo.textContent = `${filme.nome} (${filme.ano})`;
        info.appendChild(titulo);

        const personagensDiv = document.createElement("div");
        personagensDiv.classList.add("personagens");
        personagensDiv.textContent = `Personagens: ${filme.personagens.join(", ")}`;
        info.appendChild(personagensDiv);

        const btnDescricao = document.createElement("button");
        btnDescricao.textContent = "Descrição";
        btnDescricao.addEventListener("click", () => {
            document.getElementById("modal").style.display = "block";
            document.getElementById("modal-titulo").textContent = filme.nome;
            document.getElementById("modal-descricao").textContent = filme.descricao;
        });
        info.appendChild(btnDescricao);

        card.appendChild(info);
        container.appendChild(card);
    }
}

// Função para filtrar os cards por titulo
function filtrarPorTitulo() {
    const termoBusca = document.getElementById("busca-titulo").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const h2Element = card.querySelector(".info h2");
        if (h2Element) {
            const tituloFilme = h2Element.textContent.split(" (")[0].toLowerCase(); // Extrai o título antes do ano
            const encontrado = tituloFilme.includes(termoBusca);
            card.style.display = encontrado ? "block" : "none";
        }
    });

    atualizarBotaoLimpar();
}

// Função para filtrar os cards por personagem
function filtrarPorPersonagem() {
    const termoBusca = document.getElementById("busca-personagem").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const personagensElement = card.querySelector(".personagens");

        if (personagensElement) {
            const personagensTexto = personagensElement.textContent.toLowerCase();
            const encontrado = personagensTexto.includes(termoBusca);
            card.style.display = encontrado ? "block" : "none";
        }
    });

    atualizarBotaoLimpar();
}

function atualizarBotaoLimpar() {
    const termoBuscaTitulo = document.getElementById("busca-titulo").value;
    const termoBuscaPersonagem = document.getElementById("busca-personagem").value;
    const btnLimpar = document.getElementById("btn-limpar-filtros");

    if (termoBuscaTitulo || termoBuscaPersonagem) {
        btnLimpar.style.display = "block";
    } else {
        btnLimpar.style.display = "none";
    }
}

function limparFiltros() {
    document.getElementById("busca-titulo").value = "";
    document.getElementById("busca-personagem").value = "";
    criarCards();
    atualizarBotaoLimpar();
}

// Adiciona evento de clique ao botão de busca
// document.getElementById("btn-busca-titulo").addEventListener("click", filtrarPorTitulo);
// document.getElementById("btn-busca-personagem").addEventListener("click", filtrarPorPersonagem);

// Cria os cards iniciais
criarCards();

document.addEventListener("DOMContentLoaded", function () {
    const spanClose = document.getElementsByClassName("close")[0];
    if (spanClose) {
        spanClose.onclick = function () {
            document.getElementById("modal").style.display = "none";
        }
    } else {
        console.error("Elemento com a classe 'close' não encontrado.");
    }
});

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";

    }
}