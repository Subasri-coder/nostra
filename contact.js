var menuicon=document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
menuicon.addEventListener("click",function(){
    sidenav.style.marginLeft="50%"
})

document.getElementById("closenav").addEventListener("click",()=>{
    sidenav.style.marginLeft = "-50%"
})
