const favIcon = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg==";
const docHead = document.getElementsByTagName("head")[0];
const newLink = document.createElement("link");
newLink.rel = "shortcut icon";
newLink.href = "data:image/png;base64," + favIcon;
docHead.appendChild(newLink);

const searchFunction = () => {
    const input = document.getElementById("filterInput");
    const filter = input.value.toUpperCase();
    const links = document.getElementsByClassName("b");

    for (i = 0; i < links.length; i++) {
        const foundLinks = links[i];

        if (foundLinks.innerHTML.toUpperCase().indexOf(filter) > -1) {
            foundLinks.style.color = "";
            foundLinks.style.borderColor = "";
        } else {
            foundLinks.style.color = "var(--main-text-unselected)";
            foundLinks.style.borderColor = "var(--main-border-unselected)";
        }
    }
};

Mousetrap.bind("1", () => {
    document.getElementById("filterInput").focus();
    return false;
});

Mousetrap.bind("2", () => {
    document.getElementById("searchDDG").focus();
    return false;
});

Mousetrap.bind("3", () => {
    document.getElementById("searchGoogleEn").focus();
    return false;
});

Mousetrap.bind("4", () => {
    document.getElementById("SearchGoogle").focus();
    return false;
});

Mousetrap.bind("5", () => {
    document.getElementById("searchWikipedia").focus();
    return false;
});

Mousetrap.bind("6", () => {
    document.getElementById("searchHinta").focus();
    return false;
});

Mousetrap.bind("7", () => {
    document.getElementById("searchYouTube").focus();
    return false;
});