"use strict"

function scrollToSection(id, smooth = true) {
    const target = document.getElementById(id);

    if(!target) return;

    target.scrollIntoView({
        behavior: smooth ? "smooth" : "auto"
    });
}


function getSectionFromUrl() {
    return window.location.pathname.replace("/", "");
}

// interception des liens internes

document.addEventListener("click", e => {
    const link = e.target.closest("a[data-section]");
    if(!link) return;

    e.preventDefault();

    const section = link.dataset.section;

    history.pushState(null, "", `/?section=${section}`);
    scrollToSection(section);
});

// scroll au chargement / refresh
window.addEventListener("popstate", () => {
    const section = getSectionFromUrl();
    if(section) scrollToSection(section, false);
});

window.addEventListener("popstate", () => {
    const section = getSectionFromUrl();
    scrollToSection(section, false);
});