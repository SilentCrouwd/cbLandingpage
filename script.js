
/// Intersection Observer API wird verwendet um die Animation zu starten wenn die Elemente in den Viewport kommen
const animated=document.querySelectorAll('.animated')

const istrigger=(element,className)=>{
    return element.classList.contains(className);
}
const startanimation = (element,status) =>{
if (status){
element.classList.add('animation');
}

}

const myobserver= new IntersectionObserver(animated=> {
    animated.forEach(element=>{
    if (istrigger(element.target,'animated')){
        startanimation(element.target,element.isIntersecting);
    }
    })

});

animated.forEach(elm =>{
    myobserver.observe(elm);

});