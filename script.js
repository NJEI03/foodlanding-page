const menu=document.querySelector(".menu");
const btn=document.querySelector(".btn1")
function show(){
    if(menu.style.display="none"){
        menu.style.display="block";
        btn.style.display="none"
    }else{
        menu.style.display="none";
    }
}
