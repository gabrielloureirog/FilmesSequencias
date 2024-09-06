const filmesHarryPotter = [
    {
        nome: "Harry Potter e a Pedra Filosofal",
        ano: 2001,
        personagens: ["Harry Potter", "Ron Weasley", "Hermione Granger"],
        foto: "imagens/harry_potter_1.jpg",
        descricao: "Harry Potter descobre que é um bruxo e vai estudar em Hogwarts.",
        acao: function () {
            alert(alertas[Math.floor(Math.random() * alertas.length)]);
        }
    }
];

const alertas = [
    "Você é um bruxo, Harry!",
    "A varinha escolhe o bruxo.",
    "A cicatriz de Harry Potter é a marca da morte.",
    "A magia está no ar.",
    "Expecto Patronum!",
    "Lumos!",
    "Nox!",
    "Wingardium Leviosa!",
    "Expelliarmus!",
    "Riddikulus!"
];