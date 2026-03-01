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
  { id: 0, info: "dies ist der erste Test" },
  {
    id: 1,
    info: "dies ist der test nr 2.",
  },
];

//console.log(plateinfo[1].info);

hoveredplate = document.querySelectorAll(".plate");
infoPLate = document.querySelector(".middle-plate");

hoveredplate.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    if (plateinfo[index]!==undefined){
    infoPLate.style.opacity = "1";
    infoPLate.innerHTML = "";
    const p = document.createElement("p");
    
   p.textContent = plateinfo[index].info;
    infoPLate.appendChild(p);
    }
    else{
      console.log('keine Daten vorhanden')
    }  

element.addEventListener('mouseout',()=>{
  infoPLate.style.opacity='0';
})

  });

});
