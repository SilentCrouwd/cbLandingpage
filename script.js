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

// --- 4. GALERIE-INTERAKTION (Smooth Hover & Snapping) ---
const galerieContainer = document.querySelector(".galerie-container");
const galiereCard = document.querySelectorAll(".galerie-card");

galiereCard.forEach((element) => {
  let hoverTimeout;

  // Mouseenter mit Delay gegen "flackernde" Animationen am Rand
  element.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      element.classList.add("active");
      element.classList.remove("inactive");
    }, 200);
  });

  // Mouseleave setzt die Karte zurück
  element.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
    element.classList.add("inactive");
    element.classList.remove("active");
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
    document.getElementById('scoll-left').addEventListener('click', () => scrollOnClick('left'));
document.getElementById('scroll-right').addEventListener('click', () => scrollOnClick('right'));

// --- Github Projekt Beschreibung ---


const gitImg=document.querySelectorAll('.git');
gitImg.forEach(element => {
  element.addEventListener('click',() => loadgit());
  
});
function loadgit(){
  window.open('https://github.com/SilentCrouwd?tab=repositories');
}


// Selektiert den Container (das Eltern-Element), in dem die Beschreibung erscheinen soll
const infounsichtbar = document.getElementById("unsichtbar");

// Selektiert alle Elemente mit der Klasse "discription" (vermutlich die Info-Icons)
const discriptionIcon = document.querySelectorAll(".discription");

// Selektiert alle Projektbilder, um deren Deckkraft später zu manipulieren
const img = document.querySelectorAll(".card-img");

// Iteriert über jedes gefundene Info-Icon
discriptionIcon.forEach((element, index) => {
  // Fügt jedem Icon einen Klick-Event-Listener hinzu
  element.addEventListener("click", () => {
    // PRÜFUNG: Ist der Info-Container aktuell leer?
    if (infounsichtbar.textContent === "") {
      // 1. Erstellt ein neues Absatz-Element (<p>) im Speicher
      const repoInfo = document.createElement("p");


      //
      //  hier entsteht noch ein Array für die Projekt Daten
      //
      //
      // 2. Weist dem neuen Element den gewünschten Text zu 
      repoInfo.textContent = "test 123";

      // 3. Setzt Klassen für das Styling (kombiniert zwei Klassen: 'p' und 'repoinfo')
      repoInfo.className = "p repoinfo";

      // 4. Fügt die Animations-Klasse hinzu, die du im CSS definiert hast
      repoInfo.classList.add("animation");

      // 5. Fügt das fertige <p>-Element in den Container "infounsichtbar" ein
      infounsichtbar.appendChild(repoInfo);

      // 6. Setzt die Deckkraft des zugehörigen Bildes auf 30%, um den Fokus auf den Text zu legen
      // Hier wird der 'index' genutzt, damit genau das richtige Bild angesprochen wird
      img[index].style.opacity = "0.3";
    }
    // FALLS NICHT LEER: (Der User klickt erneut oder ein Text ist bereits da)
    else {
      // 1. Leert den Inhalt des Containers komplett (löscht das <p>-Element)
      // Das ist wichtig, damit das Element beim nächsten Klick wieder erstellt werden kann
      infounsichtbar.innerHTML = "";

      // 2. Setzt die Deckkraft des Bildes wieder auf 100% (Normalzustand)
      img[index].style.opacity = "1";
    }
  });
});
