const menu = document.querySelector("nav");
const botaoMenu = document.querySelector(".menu-mobile");

botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});

const botoes = document.querySelectorAll(".card button");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        alert("Abrindo notícia...");

    });

});