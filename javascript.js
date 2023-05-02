const bner = document.querySelectorAll(".icons img");
const hrn = document.querySelector(".backgroundimg");
bner.forEach(img =>{
    img.addEventListener("mouseenter",()=>{
        hrn.style.backgroundImage = `url(${img.alt})`;
    console.log(`url(${img.alt})`)
    })
    img.addEventListener("mouseleave",()=>{
        hrn.style.backgroundImage =`url(img/daihocdanang.jpg)`
    })
})
const slidesh = document.querySelector(".slideimg")
let count = 0;
function setbackground(){
slidesh.style.backgroundImage= `url(${bner[count].alt})`
    count++
    if(count===10){
        count=0
    }
    slidesh.style.animation = 'slidenext 4s normal'
    console.log(`url(${bner[count].alt})`)
}
setInterval(setbackground,2000)
const styleSheet = new CSSStyleSheet(); 
const rotateRule = `@keyframes slidenext {
    from {
      transform: translateX(-100%);
    }
    to {
      transform:translateX(0);
    }
  }`;
  styleSheet.insertRule(rotateRule);
