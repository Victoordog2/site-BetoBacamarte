/* =====================================================
   BETO BACAMARTE
   SCRIPT.JS
   Compatível com o index.html enviado anteriormente
===================================================== */


/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", function () {

        menu.classList.toggle("open");

    });

}


/* Fecha o menu quando clicar em algum link */

const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (menu) {
            menu.classList.remove("open");
        }

    });

});


/* ================= PRIORIDADES ================= */

const priorities = document.querySelectorAll(".priority");

const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");


const topics = {

    saude: {
        icon: "🏥",
        title: "Saúde",
        text: "Conheça as propostas relacionadas à saúde e ao atendimento da população."
    },

    seguranca: {
        icon: "🛡️",
        title: "Segurança",
        text: "Conheça as propostas relacionadas à segurança, prevenção e proteção da comunidade."
    },

    educacao: {
        icon: "🎓",
        title: "Educação",
        text: "Conheça as propostas relacionadas à educação, qualificação e oportunidades."
    },

    emprego: {
        icon: "💼",
        title: "Emprego",
        text: "Conheça as propostas relacionadas ao trabalho, renda e desenvolvimento."
    },

    infra: {
        icon: "🛣️",
        title: "Infraestrutura",
        text: "Conheça as propostas relacionadas à infraestrutura, mobilidade e desenvolvimento."
    }

};


/* Quando clicar em uma prioridade */

priorities.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove seleção anterior */

        priorities.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Seleciona o botão */

        button.classList.add("active");


        /* Identifica o tema */

        const topic = button.getAttribute("data-topic");

        const information = topics[topic];


        /* Atualiza o conteúdo */

        if (information) {

            resultIcon.textContent = information.icon;

            resultTitle.textContent = information.title;

            resultText.textContent = information.text;

        }

    });

});


/* ================= ANIMAÇÃO SUAVE ================= */

const animatedElements = document.querySelectorAll(
    ".card, .agenda-item, .info-box, .priority"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


/* Configura os elementos */

animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


/* ================= HEADER ================= */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= CONSOLE ================= */

console.log(
    "Site Beto Bacamarte carregado com sucesso."
);
