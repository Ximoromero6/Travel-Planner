(function() {
    const openMenu = () => {
        document.getElementById("menuButton").addEventListener("click", (e) => {
            let buttonIcon = document.querySelector("#menuButton > i");
            let menu = document.querySelector("body > header > div.bottom");
            menu.classList.toggle("open");
            buttonIcon.className = menu.classList.contains("open") ? "fi fi-rr-cross" : "fi fi-rr-menu-burger";
            window.scrollTo(0, 0);
            document.body.classList.toggle("fixed");
            document.querySelector("body > header > div.top").classList.toggle("border");
        });
    };

    openMenu();
})();