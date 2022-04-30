const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");
const creativetxt=document.querySelector(".creativetxt")
function clearg(){
    creativetxt.innerHTML=""
}

navToggle.addEventListener("click",()=>{
    links.classList.toggle("show-links");
    clearg()
})