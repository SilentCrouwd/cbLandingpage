/**
 * LANDING PAGE INTERACTION LOGIC
 * Fokus: Animation on View, Dynamic Content, Skill-Slider & Galerie
 */

// --- 1. INTERSECTION OBSERVER (Scroll-Animationen) ---
// Sucht alle Elemente mit der Klasse ".animated"
const animated = document.querySelectorAll(".animated");

// Hilfsfunktion: Prüft, ob ein Element eine bestimmte Klasse besitzt
const istrigger = (element, className) => {
  return element.classList.contains(className);
};

// Startet die CSS-Animation durch Hinzufügen der Klasse ".animation"
const startanimation = (element, status) => {
  if (status) {
    element.classList.add("animation");
  }
};

// Der Observer überwacht, ob Elemente in den Sichtbereich (Viewport) kommen
const myobserver = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (istrigger(element.target, "animated")) {
      // Triggered die Animation, wenn das Element sichtbar wird (isIntersecting)
      startanimation(element.target, element.isIntersecting);
    }
  });
});

// Aktiviert den Observer für jedes gefundene Element
animated.forEach((elm) => {
  myobserver.observe(elm);
});

// --- 2. DYNAMISCHE INFO-PLATTE (Skill-Section) ---
// Daten-Array für die Einzeiler/Schlagwörter
const plateinfo = [
  { id: 0, info: "Von der Datenbank bis zum letzten Pixel alles im Griff." },
  { id: 1, info: "Code schreiben, den nicht nur der Compiler versteht." },
  { id: 2, info: "Wo komplexe Algorithmen auf ästhetisches Design treffen." },
  { id: 3, info: "Responsive Erlebnisse, die auf jedem Screen glänzen." },
  { id: 4, info: "Stylesheets sind für mich keine Pflicht, sondern Kunst." },
  { id: 5, info: "Layouts zähmen, ohne den Überblick zu verlieren." },
  { id: 6, info: "Weil der Unterschied zwischen gut und perfekt 1px ist." },
  { id: 7, info: "Interfaces, die durch Bewegung zum Leben erwachen." },
  { id: 8, info: "Interfaces, die durch Bewegung zum Leben erwachen." },
  { id: 9, info: "Seit den ersten PC-Tagen fasziniert von Bits und Bytes." },
  { id: 10, info: "Ich suche nicht nach Fehlern, sondern nach Lösungen." },
  {
    id: 11,
    info: "Stillstand ist im Code keine Option – Weiterbildung ab Mai.",
  },
  {
    id: 12,
    info: "Technik ist nur dann gut, wenn der Mensch sie gerne nutzt.",
  },
  { id: 13, info: "Webentwicklung als echtes digitales Handwerk." },
  { id: 14, info: "Moderne Stacks für skalierbare und schnelle Webseiten." },
  { id: 15, info: "Schnelle Ladezeiten durch optimierte Assets und Code." },
  {
    id: 16,
    info: "Die Brücke zwischen Design-Vision und technischer Realität.",
  },
];

const hoveredplate = document.querySelectorAll(".plate");
const infoPlate = document.querySelector(".middle-plate");

// Event-Handling für die Interaktiven Info-Kacheln
hoveredplate.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    if (plateinfo[index] !== undefined) {
      infoPlate.style.opacity = "1";
      infoPlate.innerHTML = ""; // Container leeren

      const p = document.createElement("p");
      p.textContent = plateinfo[index].info;
      infoPlate.appendChild(p);
      infoPlate.classList.add("animationPlate");
    } else {
      console.log("Keine Daten für Index " + index + " vorhanden");
    }
  });

  // Reset beim Verlassen der Kachel
  element.addEventListener("mouseout", () => {
    infoPlate.style.opacity = "0";
    infoPlate.classList.remove("animationPlate");
  });
});

// --- 3. HORIZONTALES SCROLLEN (Skill-Container) ---
const scrollContainer = document.querySelector(".skill-container");

// Konvertiert vertikales Mausrad-Scrollen in horizontales Scrollen
scrollContainer.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault(); // Verhindert das normale Seitenscrollen

    scrollContainer.scrollBy({
      left: event.deltaY,
      behavior: "auto", // 'auto' für unmittelbare Reaktion auf das Mausrad
    });
  },
  { passive: false },
);

// --- 4. GALERIE-INTERAKTION (Smooth Hover & S napping) ---
const galerieContainer = document.querySelector(".galerie-container");
const galiereCard = document.querySelectorAll(".galerie-card");
const galieriewrapper = document.querySelectorAll(".wrapper-card");

galieriewrapper.forEach((element, index) => {
  let hoverTimeout;

  // Mouseenter mit Delay gegen "flackernde" Animationen am Rand
  element.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      galiereCard[index].classList.add("active");
      galiereCard[index].classList.remove("inactive");
    }, 200);
  });

  // Mouseleave setzt die Karte zurück
  element.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
    galiereCard[index].classList.add("inactive");
    galiereCard[index].classList.remove("active");
  });
});

// --- 5. GALERIE-NAVIGATION (Button-Steuerung) ---
/**
 * Scrollt die Galerie per Knopfdruck
 * @param {string} direction - 'left' oder 'right'
 */
function scrollOnClick(direction) {
  const scrollContainer = document.querySelector(".galerie-container");
  const scrollAmount = 300; // Pixelwert für einen Scroll-Schritt

  if (direction === "left") {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  } else if (direction === "right") {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
}
document
  .getElementById("scoll-left")
  .addEventListener("click", () => scrollOnClick("left"));
document
  .getElementById("scroll-right")
  .addEventListener("click", () => scrollOnClick("right"));

// --- Github Projekt Beschreibung ---
// Sozial media on klick events
const gitImg = document.querySelectorAll(".git");
gitImg.forEach((element) => {
  element.addEventListener("click", () => loadgit());
});
function loadgit() {
  window.open("https://github.com/SilentCrouwd?tab=repositories");
}
// #### Für Linkedin ####

const LinkedinImg = document.querySelectorAll(".linked");

LinkedinImg.forEach((element) => {
  element.addEventListener("click", () => loadLinked());
});

function loadLinked() {
  window.open("https://www.linkedin.com/in/christian-buchholz-36aa60234/");
}

//array Pooject Beschreibung

const repositoryInfo = [
  {
    id: 0,
    info: "Das Projekt ist eine interaktive Web-Schnittstelle für Authentifizierung, die einen physischen Kartenstapel imitiert. Anstatt klassische Seitenwechsel zu nutzen, werden die verschiedenen Ansichten (Willkommen, Login, Registrierung) durch CSS-Animationen ein- und ausgeschoben.",
    infoCss:
      "Optik: Das Design nutzt einen modernen Look mit radialen Verläufen und starken Schatten (box-shadow), um Tiefe zu erzeugen. Orange (#ff6d19) dient als konsistente Akzentfarbe.Animationen: * @keyframes switch: Simuliert das Aussortieren einer Karte, indem sie zur Seite gleitet und sich dann mit verändertem z-index wieder in den Stapel einfügt.",
    infoJs:
      "Zustandsmanagement: Die Funktionen (toggleSignIn, toggleSignUp, toggleBack) steuern den Stapel, indem sie CSS-Klassen (active, active2) hinzufügen oder entfernen.Rendering-Fix: In toggleBack wird requestAnimationFrame genutzt, um sicherzustellen, dass der Browser das Entfernen der alten Klassen verarbeitet, bevor die neue Animation startet.",
  },
  {
    id: 1,
    info: "Dies ist ein funktionaler, webbasierter Taschenrechner, der über die Standard-Rechenarten hinaus personalisierbare Designs und eine Cheat-Funktion für geometrische Formeln bietet.",
    infoCss: `
   Rechenoperationen: Die Kernlogik nutzt die eval()-Funktion, um mathematische Ausdrücke direkt aus dem Display-String zu berechnen.

Sonderfunktionen:

Prozentrechnung: Eine spezielle Logik rechnet den aktuellen Wert in einen Prozentwert um.

"Cheat"-Modus: Über ein Dropdown-Menü können Formeln für Umfang/Durchmesser von Kreisen, Quadraten und Rechtecken direkt im Display angezeigt werden.
    `,
    infoJs:
      "Zustandsmanagement: Die Funktionen (toggleSignIn, toggleSignUp, toggleBack) steuern den Stapel, indem sie CSS-Klassen (active, active2) hinzufügen oder entfernen.Rendering-Fix: In toggleBack wird requestAnimationFrame genutzt, um sicherzustellen, dass der Browser das Entfernen der alten Klassen verarbeitet, bevor die neue Animation startet.",
  },

  {
    id: 2,
    info: "Dynamische ToDo-App Dieses Projekt ist eine funktionsreiche Aufgabenverwaltung, die über eine einfache Liste hinausgeht. Sie unterstützt mehrere Listen-Kategorien, eine visuelle Trennung von erledigten Aufgaben und integriert sogar eine externe API für zusätzlichen Content.",
    infoCss: `
 Layout: Das Design nutzt ein 3-Spalten-Grid (grid-template-columns: 250px 1fr 250px):

Links: Navigation und Listen-Management (mit einem coolen Hover-Slide-Effekt).

Mitte: Der Hauptbereich für die aktuelle ToDo-Liste.

Rechts: Bereich für die API-Daten (Cat Facts).

Interaktivität: Die linke Seitenleiste ist platzsparend konzipiert. Sie ist standardmäßig fast vollständig aus dem Sichtfeld geschoben (translateX(-180px)) und gleitet bei Hover sanft herein.
    `,
    infoJs: `
    Listen-Management: Die App verwaltet Aufgaben in einem komplexen lists-Array aus Objekten. Dies ermöglicht es, verschiedene Listen (Kategorien) zu erstellen und zwischen ihnen zu wechseln.

Aufgaben-Status: * Beim Abhaken einer Aufgabe (checkedTask) wird nicht nur der Text durchgestrichen, sondern das gesamte Element physisch in den Bereich .taskDone verschoben.

Eine Löschfunktion ermöglicht das Entfernen einzelner Tasks oder ganzer Listen.

API-Integration: Ein besonderes Feature ist die Funktion addCatData. Hier wird mittels fetch die Cat Fact API aufgerufen, um einen zufälligen Katzen-Fakt in der rechten Seitenleiste anzuzeigen.
    `,
  },
  {
    id: 3,
    info: `Funktionsumfang:
Entwicklung einer responsiven Web-Applikation zur Echtzeit-Umrechnung globaler Währungen. Die Anwendung ermöglicht die Eingabe beliebiger Beträge und berechnet den Zielwert basierend auf tagesaktuellen Wechselkursen.

Fokus:
Priorisierung von sauberem Code-Design, effizientem API-Handling und einer barrierefreien Benutzeroberfläche durch konsistente Nutzung von CSS-Variablen und semantischen Elementen.
`,
    infoCss: `Layout-Engines: Implementierung komplexer Raster mit Flexbox und CSS Grid.
Responsive Design: Anwendung von Media Queries und modernen Funktionen wie clamp(), min() und max() für fluide Layouts.
Custom Properties: Nutzung von CSS-Variablen (:root) für konsistente Design-Systeme und einfache Wartbarkeit.
Box-Modell: Präzise Steuerung von Content, Padding, Border und Margin unter Verwendung von box-sizing: border-box.,
     `,

    infoJs: `Asynchrone Programmierung: Datenabfrage von REST-APIs mittels fetch, Promises und async/await.
DOM-Manipulation: Dynamisches Erstellen, Ändern und Löschen von HTML-Elementen über die Web-API (createElement, appendChild).
Event-Handling: Steuerung der Benutzerinteraktion durch effiziente Event-Listener.
Logik und Daten: Anwendung moderner Syntax wie Destructuring, Template Literals und Array-Methoden (map, filter, forEach) zur Datenverarbeitung.    
  `,
  },

  {
    id: 4,
    info: "Stylesheets sind für mich keine Pflicht, sondern Kunst.",
    infoCss:
      "Optik: Das Design nutzt einen modernen Look mit radialen Verläufen und starken Schatten (box-shadow), um Tiefe zu erzeugen. Orange (#ff6d19) dient als konsistente Akzentfarbe.Animationen: * @keyframes switch: Simuliert das Aussortieren einer Karte, indem sie zur Seite gleitet und sich dann mit verändertem z-index wieder in den Stapel einfügt.",
    infoJs:
      "Zustandsmanagement: Die Funktionen (toggleSignIn, toggleSignUp, toggleBack) steuern den Stapel, indem sie CSS-Klassen (active, active2) hinzufügen oder entfernen.Rendering-Fix: In toggleBack wird requestAnimationFrame genutzt, um sicherzustellen, dass der Browser das Entfernen der alten Klassen verarbeitet, bevor die neue Animation startet.",
  },
  {
    id: 5,
    info: "Layouts zähmen, ohne den Überblick zu verlieren.",
    infoCss:
      "Optik: Das Design nutzt einen modernen Look mit radialen Verläufen und starken Schatten (box-shadow), um Tiefe zu erzeugen. Orange (#ff6d19) dient als konsistente Akzentfarbe.Animationen: * @keyframes switch: Simuliert das Aussortieren einer Karte, indem sie zur Seite gleitet und sich dann mit verändertem z-index wieder in den Stapel einfügt.",
    infoJs:
      "Zustandsmanagement: Die Funktionen (toggleSignIn, toggleSignUp, toggleBack) steuern den Stapel, indem sie CSS-Klassen (active, active2) hinzufügen oder entfernen.Rendering-Fix: In toggleBack wird requestAnimationFrame genutzt, um sicherzustellen, dass der Browser das Entfernen der alten Klassen verarbeitet, bevor die neue Animation startet.",
  },
];
// ########################## DIscription #######################
// Discription
// Selektiert den Container (das Eltern-Element), in dem die Beschreibung erscheinen soll
const infounsichtbar = document.querySelectorAll(".unsichtbar");

// Selektiert alle Elemente mit der Klasse "discription" (vermutlich die Info-Icons)
const discriptionIcon = document.querySelectorAll(".discription");

// Selektiert alle Projektbilder, um deren Deckkraft später zu manipulieren
const img = document.querySelectorAll(".card-img");

// Iteriert über jedes gefundene Info-Icon
discriptionIcon.forEach((element, index) => {
  // Fügt jedem Icon einen Klick-Event-Listener hinzu
  element.addEventListener("click", () => {
    // PRÜFUNG: Ist der Info-Container aktuell leer?
    if (infounsichtbar[index].textContent === "") {
      const repoInfo = document.createElement("p");

      repoInfo.textContent = repositoryInfo[index].info;
      repoInfo.className = "p repoinfo";
      repoInfo.classList.add("animationGalerie");
      infounsichtbar[index].appendChild(repoInfo);
      img[index].classList.remove(
        "animationGalierereverse",
        "animationGalerie",
      );
      void img[index].offsetWidth; // hier muss der browser eine pause haben sonst erkennt er nicht das die klasse eine andere ist

      img[index].classList.add("animationGalierereverse");
    } else {
      infounsichtbar[index].innerHTML = "";
      img[index].classList.remove(
        "animationGalierereverse",
        "animationGalerie",
      );
      void img[index].offsetWidth; // hier muss der browser eine pause haben sonst erkennt er nicht das die klasse eine andere ist
      img[index].classList.add("animationGalerie");
    }
  });
});
//  CSS Discription

const cssImg = document.querySelectorAll(".css-galerie");

cssImg.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (infounsichtbar[index].textContent === "") {
      const cssInfo = document.createElement("p");

      cssInfo.textContent = repositoryInfo[index].infoCss;
      cssInfo.className = "p repoinfo";
      cssInfo.classList.add("animationGalerie");
      infounsichtbar[index].appendChild(cssInfo);
      img[index].classList.remove(
        "animationGalierereverse",
        "animationGalerie",
      );
      void img[index].offsetWidth; // hier muss der browser eine pause haben sonst erkennt er nicht das die klasse eine andere ist

      img[index].classList.add("animationGalierereverse");
    } else {
      infounsichtbar[index].innerHTML = "";
      img[index].classList.remove(
        "animationGalierereverse",
        "animationGalerie",
      );
      void img[index].offsetWidth; // hier muss der browser eine pause haben sonst erkennt er nicht das die klasse eine andere ist
      img[index].classList.add("animationGalerie");
    }
  });
});

//  Js Discription
const jsImg = document.querySelectorAll(".js-galerie");

jsImg.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (infounsichtbar[index].textContent === "") {
      const jsInfo = document.createElement("p");
      jsInfo.textContent = repositoryInfo[index].infoJs;
      jsInfo.className = "p repoinfo";
      jsInfo.classList.add("animationGalerie");
      infounsichtbar[index].appendChild(jsInfo);
      img[index].classList.remove(
        "animationGalierereverse",
        "animationGalerie",
      );
      void img[index].offsetWidth; // hier muss der browser eine pause haben sonst erkennt er nicht das die klasse eine andere ist

      img[index].classList.add("animationGalierereverse");
    } else {
      infounsichtbar[index].innerHTML = "";
      img[index].classList.remove(
        "animationGalierereverse",
        "animationGalerie",
      );
      void img[index].offsetWidth; // hier muss der browser eine pause haben sonst erkennt er nicht das die klasse eine andere ist
      img[index].classList.add("animationGalerie");
    }
  });
});

const kontaktBtn = document.querySelector(".kontakt-btn");

kontaktBtn.addEventListener("click", () => {
  const ziel = document.querySelector(".footer-bottom");
  ziel.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
