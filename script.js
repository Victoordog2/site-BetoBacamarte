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

const priorityCards = document.querySelectorAll(".priority-card");
const results = document.querySelectorAll(".result");

priorityCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const topic = card.getAttribute("data-topic");
        const result = document.querySelector('.result[data-result="' + topic + '"]');

        if (!result) return;

        // Fechar todos os outros resultados
        results.forEach(function (res) {
            res.classList.remove("show");
        });

        // Remover active de todos os cards
        priorityCards.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Mostrar o resultado selecionado
        result.classList.add("show");
        card.classList.add("active");
    });
});

/* ================= ANIMAÇÃO SUAVE ================= */
const animatedElements = document.querySelectorAll(
    ".card, .agenda-item, .info-box, .priority-card, .proposal-card"
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

animatedElements.forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";
    observer.observe(element);
});


/* ================= HEADER ================= */
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
        header.style.boxShadow = "none";
    }
});


/* ================= CONSOLE ================= */
console.log("Site Beto Bacamarte carregado com sucesso.");
