document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // ENTER BOTÓN
    // ======================
    const startBtn = document.getElementById("startBtn");
    const introSection = document.getElementById("introSection");
    const gamesSection = document.getElementById("gamesSection");

    if (startBtn && introSection && gamesSection) {
        startBtn.addEventListener("click", () => {
            introSection.style.opacity = "0";
            setTimeout(() => {
                introSection.style.display = "none";
                gamesSection.style.display = "block";
                setTimeout(() => {
                    gamesSection.style.opacity = "1";
                }, 50);
            }, 500);
        });
    }

    // ======================
    // DARK / LIGHT MODE
    // ======================
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });

    // ======================
    // SONIDO + INFO
    // ======================
    const cards = document.querySelectorAll(".game-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const soundPath = card.dataset.sound;
            if (soundPath) {
                const sound = new Audio(soundPath);
                sound.currentTime = 0;
                sound.play();
            }

            const name = card.dataset.name || "???";
            const desc = card.dataset.desc || "No info available.";
            alert(`${name}\n\n${desc}`);
        });
    });

    // ======================
    // FILTROS
    // ======================
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            cards.forEach(card => {
                if (filter === "all" || card.classList.contains(filter)) {
                    card.classList.remove("character-hidden");
                } else {
                    card.classList.add("character-hidden");
                }
            });
        });
    });
});
