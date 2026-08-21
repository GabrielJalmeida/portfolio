/* ==========================================
   HEADER ON SCROLL
========================================== */

const header =
    document.querySelector(".header");


function updateHeader() {

    if (window.scrollY > 20) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();



/* ==========================================
   TRANSLATIONS
========================================== */

const translations = {

    en: {

        navProjects:
            "Projects",

        navCapabilities:
            "Capabilities",

        navProcess:
            "Process",

        navAbout:
            "About",

        navContact:
            "Contact",

        resume:
            "Resume",

        heroEyebrow:
            "Software Developer",

        heroApi:
            "APIs",

        heroWeb:
            "Web",

        heroData:
            "Data",

        heroTitleStart:
            "I build software that solves",

        heroTitleHighlight:
            "real problems.",

        heroDescription:
            "I turn needs into APIs, web applications and data-driven solutions, with a focus on clarity, reliability and real-world use.",

        viewProjects:
            "View projects",

        proofCode:
            "Public code",

        proofDocs:
            "Documentation",

        proofTests:
            "Tests",

        proofProjects:
            "Functional projects",

        selectedProjects:
            "Selected projects",

        projectsLabel:
            "01 / Selected projects",

        projectsTitleStart:
            "Work that can be",

        projectsTitleHighlight:
            "seen, tested and explained."

    },


    pt: {

        navProjects:
            "Projetos",

        navCapabilities:
            "Capacidades",

        navProcess:
            "Processo",

        navAbout:
            "Sobre",

        navContact:
            "Contato",

        resume:
            "Currículo",

        heroEyebrow:
            "Desenvolvedor de Software",

        heroApi:
            "APIs",

        heroWeb:
            "Web",

        heroData:
            "Dados",

        heroTitleStart:
            "Construo software para resolver",

        heroTitleHighlight:
            "problemas reais.",

        heroDescription:
            "Transformo necessidades em APIs, aplicações web e soluções orientadas a dados, com foco em clareza, confiabilidade e uso real.",

        viewProjects:
            "Ver projetos",

        proofCode:
            "Código público",

        proofDocs:
            "Documentação",

        proofTests:
            "Testes",

        proofProjects:
            "Projetos funcionais",

        selectedProjects:
            "Projetos selecionados",

        projectsLabel:
            "01 / Projetos selecionados",

        projectsTitleStart:
            "Trabalho que pode ser",

        projectsTitleHighlight:
            "visto, testado e explicado."

    }

};



/* ==========================================
   LANGUAGE ELEMENTS
========================================== */

const languageButton =
    document.querySelector(".language-switch");


const languageEn =
    document.querySelector(".language-switch__en");


const languagePt =
    document.querySelector(".language-switch__pt");


const metaDescription =
    document.querySelector("#meta-description");



/* ==========================================
   CHANGE LANGUAGE
========================================== */

function setLanguage(language) {

    const selectedTranslation =
        translations[language];


    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.dataset.i18n;


            if (selectedTranslation[key]) {

                element.textContent =
                    selectedTranslation[key];

            }

        });


    document.documentElement.lang =
        language === "pt"
            ? "pt-BR"
            : "en";


    if (language === "pt") {

        document.title =
            "Gabriel Almeida | Desenvolvedor de Software";


        metaDescription.content =
            "Portfólio de Gabriel Almeida — Desenvolvimento de Software, APIs, Web e Dados.";

    } else {

        document.title =
            "Gabriel Almeida | Software Developer";


        metaDescription.content =
            "Gabriel Almeida's portfolio — Software Development, APIs, Web and Data.";

    }


    languageEn.classList.toggle(
        "is-active",
        language === "en"
    );


    languagePt.classList.toggle(
        "is-active",
        language === "pt"
    );


    localStorage.setItem(
        "portfolio-language",
        language
    );

}



/* ==========================================
   LANGUAGE BUTTON
========================================== */

languageButton.addEventListener(
    "click",
    () => {

        const currentLanguage =
            document.documentElement.lang;


        if (currentLanguage === "en") {

            setLanguage("pt");

        } else {

            setLanguage("en");

        }

    }
);

/* ==========================================
   HERO ARCHITECTURE INTERACTION
========================================== */

const architecture =
    document.querySelector(".architecture");


const reduceMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


const finePointer =
    window.matchMedia(
        "(pointer: fine)"
    );


if (
    architecture &&
    !reduceMotion.matches &&
    finePointer.matches
) {

    architecture.addEventListener(
        "mousemove",
        (event) => {

            const bounds =
                architecture.getBoundingClientRect();


            const mouseX =
                event.clientX - bounds.left;


            const mouseY =
                event.clientY - bounds.top;


            const percentageX =
                mouseX / bounds.width;


            const percentageY =
                mouseY / bounds.height;


            const rotateY =
                (percentageX - 0.5) * 6;


            const rotateX =
                (0.5 - percentageY) * 6;


            architecture.style.setProperty(
                "--rotate-x",
                `${rotateX}deg`
            );


            architecture.style.setProperty(
                "--rotate-y",
                `${rotateY}deg`
            );


            architecture.style.setProperty(
                "--glow-x",
                `${percentageX * 100}%`
            );


            architecture.style.setProperty(
                "--glow-y",
                `${percentageY * 100}%`
            );

        }
    );


    architecture.addEventListener(
        "mouseleave",
        () => {

            architecture.style.setProperty(
                "--rotate-x",
                "0deg"
            );


            architecture.style.setProperty(
                "--rotate-y",
                "0deg"
            );


            architecture.style.setProperty(
                "--glow-x",
                "50%"
            );


            architecture.style.setProperty(
                "--glow-y",
                "50%"
            );

        }
    );

}

/* ==========================================
   LOAD SAVED LANGUAGE
========================================== */

const savedLanguage =
    localStorage.getItem(
        "portfolio-language"
    );


if (savedLanguage) {

    setLanguage(savedLanguage);

} else {

    setLanguage("en");

}