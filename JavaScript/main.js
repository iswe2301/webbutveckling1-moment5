// Kör koden i strikt läge
"use strict";

// Funktion för att växla mellan klassen cross vid klick.
// Hämtar element genom class.
function transformMenu(menu) {
    menu.classList.toggle("cross");
}

// Funktion för att växla mellan att visa och dölja länkar i navigering när hamburgermenyn klickas.
function dropDownMenu() {
    // Hämtar element genom ID till länkarna.
    let navlinksEl = document.getElementById("navlinks");
    // Hämtar element genom ID till menytext.
    let menutextEl = document.getElementById("menutext");
    // Kontroll om menyn visas som flex, döljer länkar & visar menytext vid klick
    if (navlinksEl.style.display === "flex") {
        navlinksEl.style.display = "none";
        menutextEl.innerHTML = "MENU";
    } else {
        // Om länkar inte visas som flex (display: none), visar flex vid klick och döljer menytext
        navlinksEl.style.display = "flex";
        menutextEl.innerHTML = "";
    }
}

// Hämtar element för animation genom CSS-klass
let typewriteEl = document.querySelector(".typewrite");
// Kontroll om typewriteEl finns och kör koden isåfall
if (typewriteEl) {
    // Funktion för att ändra textinenhåll
    function animateText() {
        // Deklarerar variabel för textområdet genom att hämta css-klass
        let textEl = document.querySelector(".second")
        // Kod körs direkt
        setTimeout(() => {
            textEl.innerHTML = "WEB DEVELOPER"
        }, 0);
        // Kod körs efter 4s
        setTimeout(() => {
            textEl.innerHTML = "WEB DESIGNER"
        }, 4000);
        // Kod körs efter 8s
        setTimeout(() => {
            textEl.innerHTML = "MEDIA PRODUCER"
        }, 8000);
    }
    // Anropar funktion
    animateText();
    // Sätter interval på funktion, börjar om efter 12s
    setInterval(animateText, 12000);
}