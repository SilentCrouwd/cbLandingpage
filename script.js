/// Intersection Observer API wird verwendet um die Animation zu starten wenn die Elemente in den Viewport kommen
const animated = document.querySelectorAll(".animated");

const istrigger = (element, className) => {
  return element.classList.contains(className);
};
const startanimation = (element, status) => {
  if (status) {
    element.classList.add("animation");
  }
};

const myobserver = new IntersectionObserver((animated) => {
  animated.forEach((element) => {
    if (istrigger(element.target, "animated")) {
      startanimation(element.target, element.isIntersecting);
    }
  });
});

animated.forEach((elm) => {
  myobserver.observe(elm);
});

const plateinfo = [
  { id: 0, info: "Von der Datenbank bis zum letzten Pixel alles im Griff." },
  {
    id: 1,
    info: "Code schreiben, den nicht nur der Compiler versteht.",
  },
  { id: 2, info: "Wo komplexe Algorithmen auf ästhetisches Design treffen." },
  { id: 3, info: "Responsive Erlebnisse, die auf jedem Screen glänzen." },
  {
    id: 4,
    info: "Stylesheets sind für mich keine Pflicht, sondern Kunst.",
  },
  { id: 5, info: "Layouts zähmen, ohne den Überblick zu verlieren." },
  { id: 6, info: "Weil der Unterschied zwischen gut und perfekt 1px ist." },
  {
    id: 7,
    info: "Interfaces, die durch Bewegung zum Leben erwachen.",
  },
  { id: 8, info: "Interfaces, die durch Bewegung zum Leben erwachen." },
  { id: 9, info: "Seit den ersten PC-Tagen fasziniert von Bits und Bytes." },
  {
    id: 10,
    info: "Ich suche nicht nach Fehlern, sondern nach Lösungen.",
  },
  { id: 11, info: "Stillstand ist im Code keine Option – Weiterbildung ab Mai." },
  { id: 12, info: "Technik ist nur dann gut, wenn der Mensch sie gerne nutzt." },
  {
    id: 13,
    info: "Webentwicklung als echtes digitales Handwerk.",
  },
  { id: 14, info: "WModerne Stacks für skalierbare und schnelle Webseiten." },
  { id: 15, info: "Schnelle Ladezeiten durch optimierte Assets und Code." },
  { id: 16, info: "Die Brücke zwischen Design-Vision und technischer Realität." },
];

//console.log(plateinfo[1].info);

hoveredplate = document.querySelectorAll(".plate");
infoPlate = document.querySelector(".middle-plate");

hoveredplate.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    if (plateinfo[index] !== undefined) {
      infoPlate.style.opacity = "1";
      infoPlate.innerHTML = "";
      
      const p = document.createElement("p");

      p.textContent = plateinfo[index].info;
      infoPlate.appendChild(p);
      infoPlate.classList.add("animationPlate");

    } else {
      console.log("keine Daten vorhanden");
    }

    element.addEventListener("mouseout", () => {
      infoPlate.style.opacity = "0";
      infoPlate.classList.remove("animationPlate");

    });
  });
});
