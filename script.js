/* =========================================================
   ANNIE BESANT NATIONAL SCHOOL
   JAVASCRIPT
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(function () {
        preloader.classList.add("hide");
    }, 700);

});


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ================= GALLERY LIGHTBOX ================= */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        if (!image) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");

        document.body.classList.add("no-scroll");

    });

});


/* ================= CLOSE LIGHTBOX ================= */

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.classList.remove("no-scroll");

    setTimeout(function () {
        lightboxImage.src = "";
    }, 300);

}


lightboxClose.addEventListener("click", closeLightbox);


/* Close when clicking outside image */

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* Close using ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".stat-card, .about-image-card, .about-content, .leader-card, .class-card, .why-item, .activity-card, .gallery-item, .contact-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


/* ================= STAGGER ANIMATION ================= */

document.querySelectorAll(".class-card").forEach(function (card, index) {

    card.style.transitionDelay = (index * 0.05) + "s";

});


document.querySelectorAll(".leader-card").forEach(function (card, index) {

    card.style.transitionDelay = (index * 0.1) + "s";

});


document.querySelectorAll(".contact-card").forEach(function (card, index) {

    card.style.transitionDelay = (index * 0.08) + "s";

});


/* ================= IMAGE ERROR HANDLING ================= */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.background = "#eef2f7";
        image.style.minHeight = "200px";

    });

});


/* ================= SMOOTH ANCHOR SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = anchor.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const offset = navbar.offsetHeight + 10;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

});


/* ================= BUTTON RIPPLE EFFECT ================= */

document.querySelectorAll(".btn, .nav-instagram, .instagram-button").forEach(function (button) {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = (event.clientX - rect.left) + "px";
        ripple.style.top = (event.clientY - rect.top) + "px";

        button.appendChild(ripple);

        setTimeout(function () {
            ripple.remove();
        }, 600);

    });

});


/* ================= CONSOLE ================= */

console.log(
    "%cAnnie Besant National School",
    "color:#123b72;font-size:20px;font-weight:bold;"
);

console.log(
    "%cLearn • Grow • Shine",
    "color:#d6a84f;font-size:13px;"
);
/* ==========================================
   CLASS EXPLORE DATA
========================================== */

const classData = {

    "Nursery": {
        icon: "🌱",
        focus: "Play-based learning, early communication, numbers, colours, shapes and basic concepts.",
        skills: "Listening, speaking, recognition, motor skills and social interaction.",
        activities: "Rhymes, storytelling, drawing, colouring, puzzles and creative play.",
        goals: "Build confidence, curiosity and a positive attitude towards learning."
    },

    "LKG": {
        icon: "🧸",
        focus: "Early literacy, numeracy, language development and everyday concepts.",
        skills: "Reading readiness, counting, communication and coordination.",
        activities: "Art, music, storytelling, games and classroom activities.",
        goals: "Develop independence, confidence and classroom participation."
    },

    "UKG": {
        icon: "⭐",
        focus: "Strengthening language, mathematics and environmental awareness.",
        skills: "Early reading, writing, counting, observation and communication.",
        activities: "Projects, drawing, puzzles, storytelling and group activities.",
        goals: "Prepare children for a smooth transition into primary education."
    },

    "Class 1": {
        icon: "📖",
        focus: "Strong foundations in English, Mathematics, EVS and Computer basics.",
        skills: "Reading, writing, basic calculations and communication.",
        activities: "Worksheets, stories, drawing, games and practical activities.",
        goals: "Develop confidence and interest in classroom learning."
    },

    "Class 2": {
        icon: "✏️",
        focus: "Concept building through language, mathematics, EVS and creative learning.",
        skills: "Problem solving, reading comprehension and basic reasoning.",
        activities: "Experiments, art, quizzes, projects and collaborative activities.",
        goals: "Encourage curiosity and independent thinking."
    },

    "Class 3": {
        icon: "🔬",
        focus: "Conceptual learning with greater emphasis on science, mathematics and language.",
        skills: "Reasoning, observation, problem-solving and communication.",
        activities: "Science activities, projects, quizzes and creative assignments.",
        goals: "Connect classroom concepts with everyday life."
    },

    "Class 4": {
        icon: "🌍",
        focus: "Developing deeper understanding across core academic subjects.",
        skills: "Critical thinking, research, communication and problem-solving.",
        activities: "Projects, presentations, experiments and group activities.",
        goals: "Build academic confidence and independent learning habits."
    },

    "Class 5": {
        icon: "💡",
        focus: "Strengthening core concepts and preparing students for middle school.",
        skills: "Logical thinking, mathematical reasoning, writing and presentation.",
        activities: "STEM activities, projects, quizzes and creative assignments.",
        goals: "Prepare students for more advanced academic challenges."
    },

    "Class 6": {
        icon: "🧪",
        focus: "Transition to deeper conceptual learning in Mathematics, Science, Social Science and Languages.",
        skills: "Analysis, reasoning, research and effective communication.",
        activities: "Experiments, projects, presentations and technology-based learning.",
        goals: "Develop stronger independent learning and analytical abilities."
    },

    "Class 7": {
        icon: "💻",
        focus: "Advanced conceptual learning with emphasis on analytical and digital skills.",
        skills: "Problem-solving, logical reasoning, communication and digital literacy.",
        activities: "Computer activities, experiments, projects and presentations.",
        goals: "Develop confidence, creativity and academic independence."
    },

    "Class 8": {
        icon: "🚀",
        focus: "Advanced middle-school learning with strong conceptual foundations.",
        skills: "Critical thinking, analysis, research and problem-solving.",
        activities: "STEM projects, presentations, debates and collaborative learning.",
        goals: "Prepare students for secondary-level academic learning."
    },

    "Class 9": {
        icon: "📐",
        focus: "Focused secondary education with stronger subject concepts and academic discipline.",
        skills: "Analytical thinking, problem-solving, research and effective writing.",
        activities: "Laboratory work, projects, presentations and academic activities.",
        goals: "Build a strong foundation for Class 10 and future academic choices."
    },

    "Class 10": {
        icon: "🏆",
        focus: "Focused secondary-level learning with systematic academic preparation.",
        skills: "Concept mastery, analytical thinking, time management and problem-solving.",
        activities: "Projects, practical learning, revision activities and assessments.",
        goals: "Develop confidence and strong academic foundations for future studies."
    }

};


/* ==========================================
   OPEN CLASS MODAL
========================================== */

function openClassModal(className) {

    const data = classData[className];

    if (!data) return;

    document.getElementById("modalTitle").textContent = className;

    document.getElementById("modalIcon").textContent = data.icon;

    document.getElementById("modalFocus").textContent = data.focus;

    document.getElementById("modalSkills").textContent = data.skills;

    document.getElementById("modalActivities").textContent = data.activities;

    document.getElementById("modalGoals").textContent = data.goals;

    document.getElementById("classModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ==========================================
   CLOSE CLASS MODAL
========================================== */

function closeClassModal() {

    document.getElementById("classModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* ==========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("classModal");

    if (
        event.target === modal
    ) {
        closeClassModal();
    }

});


/* ==========================================
   CLOSE WITH ESCAPE KEY
========================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeClassModal();
    }

});