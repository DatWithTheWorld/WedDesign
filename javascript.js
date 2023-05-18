const bner = document.querySelectorAll(".icons img");
const hrn = document.querySelector(".backgroundimg");
const selecttitle = document.getElementById("titlenew")
bner.forEach(img =>{
    img.addEventListener("mouseenter",e =>{
        switch(e.target){
            case bner[0]: selecttitle.innerHTML = "Viet Nam - Korea University"; break;
            case bner[1]: selecttitle.innerHTML = "Đại học Bách Khoa";break;
            case bner[2]: selecttitle.innerHTML = "Đại học Sư Phạm Kỹ Thuật";break;

            case bner[3]: selecttitle.innerHTML = "Viện Nghiên cứu Việt Anh";break;

            case bner[4]: selecttitle.innerHTML = "Khoa y dược";break;

            case bner[5]: selecttitle.innerHTML = "Đại học Kinh Tế";break;

            case bner[6]: selecttitle.innerHTML = "Đại học kỹ thuật y dược";break;

            case bner[7]: selecttitle.innerHTML = "Đại học Thể Dục Thể Thao";break;

            case bner[8]: selecttitle.innerHTML = "Đại học Sư phạm";break;
            case bner[9]: selecttitle.innerHTML = "Đại học Ngoại Ngữ";break;



            // default: selecttitle.innerHTML = "Da Nang University"
        }
        hrn.style.backgroundImage = `url(${img.alt})`;
    console.log(`url(${img.alt})`)
    })
    img.addEventListener("mouseleave",()=>{
        hrn.style.backgroundImage =`url(img/daihocdanang.jpg)`
        selecttitle.innerHTML="Da Nang University"
    })
})
const slidesh = document.querySelector(".slideimg")
let count = 0;

const styleSheet = new CSSStyleSheet(); 
const rotateRule = `@keyframes slidenext {
    from {
      transform: translateX(200%);
    }
    to {
      transform:translateX(0);
    }
  }`;
  styleSheet.insertRule(rotateRule);
  document.adoptedStyleSheets = [styleSheet]
  let isam = false
  function setbackground(){
slidesh.style.backgroundImage= `url(${bner[count].alt})`
    count++
    isam = true
    if(count===bner.length){
        count=0
    }
  
    console.log(`url(${bner[count].alt})`)
}

let checkcr = true;
let intervalid;
function getcr(){ slidesh.addEventListener("mouseenter", e=>{
    
  checkcr = false;
  clearInterval(intervalid)
})
}
function getcrout(){ slidesh.addEventListener("mouseleave", e=>{

  checkcr = true; intervalid = setInterval(setbackground,3000);
})
}
intervalid = setInterval(setbackground,3000);
getcr();
getcrout();
  const scrollElements = document.querySelectorAll(".js-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });