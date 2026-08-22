/* ==========================================
   HEADER ON SCROLL
========================================== */

const header = document.querySelector(".header");

function updateHeader() {
    if (window.scrollY > 20) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* ==========================================
   TRANSLATIONS
========================================== */

const translations = {

    en: {

        footerText:
            "Designed and built with purpose.",

        contactLabel:
            "05 / Contact",

        contactTitleStart:
            "Let's build",

        contactTitleHighlight:
            "something useful.",

        contactDescription:
            "I'm open to software development opportunities and projects where technology can turn a real problem into a functional solution.",

        contactButton:
            "Send me a message",

        contactGitHub:
            "Code and projects",

        contactLinkedIn:
            "Professional profile",

        contactResumeTitle:
            "Resume",

        contactResumeText:
            "Experience and education",

        aboutLabel:
            "04 / About",

        aboutTitleStart:
            "Behind",

        aboutTitleHighlight:
            "the code.",


        aboutRole:
            "Software Developer",


        aboutDescription:
            "I study Systems Analysis and Development at FATEC and focus my work on software, backend development and data-driven solutions. I enjoy understanding how each part of a system connects and turning that understanding into functional, documented projects.",


        aboutQuote:
            "I don't build projects just to make them work. I like making them feel finished.",


        aboutEducationLabel:
            "Education",

        aboutLocationLabel:
            "Location",

        aboutFocusLabel:
            "Focus",

        aboutFocusValue:
            "Backend · Web · Data",

        aboutResume:
            "View resume",

        processLabel:
            "03 / Process",

        processTitleStart:
            "From problem",

        processTitleHighlight:
            "to delivery.",


        processUnderstandTitle:
            "Understand",

        processUnderstandText:
            "Turn the initial need into a clear problem, requirements and expected outcomes.",


        processDesignTitle:
            "Design",

        processDesignText:
            "Define structure, data, responsibilities and the flow between each part of the system.",


        processBuildTitle:
            "Build",

        processBuildText:
            "Implement the solution progressively, keeping each part understandable and verifiable.",


        processValidateTitle:
            "Validate",

        processValidateText:
            "Check expected behavior, errors, integrations and the experience of actually using the solution.",


        processRefineTitle:
            "Refine",

        processRefineText:
            "Review details, improve the experience, document decisions and prepare the final delivery.",

        capabilitiesLabel:
            "02 / Capabilities",

        capabilitiesTitleStart:
            "What I can",

        capabilitiesTitleHighlight:
            "build.",


        backendTitle:
            "Backend",

        backendDescription:
            "APIs, business logic, databases and integrations designed to turn requirements into reliable systems.",

        seeBackendWork:
            "See where I used it",


        webTitle:
            "Web",

        webDescription:
            "Responsive interfaces that connect users to real application functionality with clarity and usability.",

        seeWebWork:
            "See where I used it",


        dataTitle:
            "Data",

        dataDescription:
            "Data treatment, indicators and visualizations built to transform information into something useful for decision-making.",

        seeDataWork:
            "See related work",

        /* NAVIGATION */

        navProjects: "Projects",

        navCapabilities: "Capabilities",

        navProcess: "Process",

        navAbout: "About",

        navContact: "Contact",

        resume: "Resume",


        /* HERO */

        heroEyebrow: "Software Developer",

        heroApi: "APIs",

        heroWeb: "Web",

        heroData: "Data",

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


        /* PROJECTS */

        projectsLabel:
            "01 / Selected projects",

        projectsTitleStart:
            "Work that can be",

        projectsTitleHighlight:
            "seen, tested and explained.",


        /* LUMINA */

        luminaEyebrow:
            "Featured project",

        luminaTitle:
            "Lumina Skin",

        luminaDescription:
            "AI-powered skin analysis and product recommendation system, designed to transform profile, text or image input into structured care suggestions.",

        caseStudy:
            "Explore case study",

        liveDemo:
            "Live demo",


        /* LUMINA — PUBLIC EXPERIENCE */

        luminaPublicLabel:
            "Public experience",

        luminaPublicTitle:
            "User-facing web experience",

        luminaPublicText:
            "A clean public interface focused on guidance, clarity and usability.",


        /* LUMINA — ADMIN */

        luminaAdminLabel:
            "Admin panel",

        luminaAdminTitle:
            "Product management system",

        luminaAdminText:
            "A dashboard for catalog operation, product control and recommendation support.",


        /* LUMINA — API */

        luminaApiLabel:
            "REST API",

        luminaApiTitle:
            "Documented backend layer",

        luminaApiText:
            "Structured endpoints, documentation and recommendation logic ready for integration."

    },


    pt: {

        footerText:
            "Projetado e construído com propósito.",

        contactLabel:
            "05 / Contato",

        contactTitleStart:
            "Vamos construir",

        contactTitleHighlight:
            "alguma coisa útil.",

        contactDescription:
            "Estou aberto a oportunidades em desenvolvimento de software e a projetos em que tecnologia possa transformar um problema real em uma solução funcional.",

        contactButton:
            "Enviar uma mensagem",

        contactGitHub:
            "Código e projetos",

        contactLinkedIn:
            "Perfil profissional",

        contactResumeTitle:
            "Currículo",

        contactResumeText:
            "Experiência e formação",

        aboutLabel:
            "04 / Sobre",

        aboutTitleStart:
            "Por trás",

        aboutTitleHighlight:
            "do código.",


        aboutRole:
            "Desenvolvedor de Software",


        aboutDescription:
            "Curso Análise e Desenvolvimento de Sistemas na FATEC e direciono meu trabalho para software, desenvolvimento backend e soluções orientadas a dados. Gosto de entender como cada parte de um sistema se conecta e transformar esse entendimento em projetos funcionais e documentados.",


        aboutQuote:
            "Não gosto de fazer projetos apenas funcionarem. Gosto de fazê-los parecer terminados.",


        aboutEducationLabel:
            "Formação",

        aboutLocationLabel:
            "Localização",

        aboutFocusLabel:
            "Foco",

        aboutFocusValue:
            "Backend · Web · Dados",

        aboutResume:
            "Ver currículo",

        processLabel:
            "03 / Processo",

        processTitleStart:
            "Do problema",

        processTitleHighlight:
            "à entrega.",


        processUnderstandTitle:
            "Entender",

        processUnderstandText:
            "Transformar a necessidade inicial em um problema claro, requisitos e resultados esperados.",


        processDesignTitle:
            "Projetar",

        processDesignText:
            "Definir estrutura, dados, responsabilidades e o fluxo entre cada parte do sistema.",


        processBuildTitle:
            "Construir",

        processBuildText:
            "Implementar a solução progressivamente, mantendo cada parte compreensível e verificável.",


        processValidateTitle:
            "Validar",

        processValidateText:
            "Verificar comportamento esperado, erros, integrações e a experiência de realmente utilizar a solução.",


        processRefineTitle:
            "Refinar",

        processRefineText:
            "Revisar detalhes, melhorar a experiência, documentar decisões e preparar a entrega final.",

        capabilitiesLabel:
            "02 / Capacidades",

        capabilitiesTitleStart:
            "O que consigo",

        capabilitiesTitleHighlight:
            "construir.",


        backendTitle:
            "Backend",

        backendDescription:
            "APIs, regras de negócio, bancos de dados e integrações pensadas para transformar requisitos em sistemas confiáveis.",

        seeBackendWork:
            "Ver onde usei isso",


        webTitle:
            "Web",

        webDescription:
            "Interfaces responsivas que conectam usuários às funcionalidades reais da aplicação com clareza e usabilidade.",

        seeWebWork:
            "Ver onde usei isso",


        dataTitle:
            "Dados",

        dataDescription:
            "Tratamento de dados, indicadores e visualizações construídos para transformar informação em algo útil para tomada de decisão.",

        seeDataWork:
            "Ver trabalhos relacionados",

        /* NAVEGAÇÃO */

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


        /* HERO */

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


        /* PROJETOS */

        projectsLabel:
            "01 / Projetos selecionados",

        projectsTitleStart:
            "Trabalho que pode ser",

        projectsTitleHighlight:
            "visto, testado e explicado.",


        /* LUMINA */

        luminaEyebrow:
            "Projeto em destaque",

        luminaTitle:
            "Lumina Skin",

        luminaDescription:
            "Sistema de análise de pele e recomendação de produtos com IA, pensado para transformar entradas de perfil, texto ou imagem em sugestões estruturadas de cuidado.",

        caseStudy:
            "Explorar estudo de caso",

        liveDemo:
            "Demo ao vivo",


        /* LUMINA — EXPERIÊNCIA PÚBLICA */

        luminaPublicLabel:
            "Experiência pública",

        luminaPublicTitle:
            "Experiência web para o usuário",

        luminaPublicText:
            "Uma interface pública limpa, focada em orientação, clareza e usabilidade.",


        /* LUMINA — ADMIN */

        luminaAdminLabel:
            "Painel admin",

        luminaAdminTitle:
            "Sistema de gestão de produtos",

        luminaAdminText:
            "Um painel para operação do catálogo, controle de produtos e apoio às recomendações.",


        /* LUMINA — API */

        luminaApiLabel:
            "API REST",

        luminaApiTitle:
            "Camada backend documentada",

        luminaApiText:
            "Endpoints estruturados, documentação e lógica de recomendação prontas para integração."

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


    /* Changes the language attribute of HTML */

    document.documentElement.lang =
        language === "pt"
            ? "pt-BR"
            : "en";


    /* Changes title and meta description */

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


    /* Highlights active language */

    languageEn.classList.toggle(
        "is-active",
        language === "en"
    );

    languagePt.classList.toggle(
        "is-active",
        language === "pt"
    );


    /* Saves visitor preference */

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

            /*
              Gets the position and dimensions
              of the architecture element.
            */

            const bounds =
                architecture.getBoundingClientRect();


            /*
              Mouse position inside the element.
            */

            const mouseX =
                event.clientX - bounds.left;

            const mouseY =
                event.clientY - bounds.top;


            /*
              Converts mouse position into
              a value between 0 and 1.
            */

            const percentageX =
                mouseX / bounds.width;

            const percentageY =
                mouseY / bounds.height;


            /*
              Converts that position into
              a subtle 3D rotation.
            */

            const rotateY =
                (percentageX - 0.5) * 6;

            const rotateX =
                (0.5 - percentageY) * 6;


            /*
              Sends values to CSS variables.
            */

            architecture.style.setProperty(
                "--rotate-x",
                `${rotateX}deg`
            );

            architecture.style.setProperty(
                "--rotate-y",
                `${rotateY}deg`
            );


            /*
              Moves the glow according
              to mouse position.
            */

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


    /* Reset when mouse leaves the graphic */

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

    /*
      English is the default language
      for the portfolio.
    */

    setLanguage("en");

}