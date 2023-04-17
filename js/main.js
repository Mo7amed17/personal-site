
let otherlinks=document.querySelector(".otherlinks")
let hiddenMenu=document.querySelector(".hiddenMenu")
hiddenMenu.style.opacity="0"
document.addEventListener("click",function(ele){
if(ele.target===otherlinks){
    if(hiddenMenu.style.opacity==="0")
    {if(screen.width<=767&&screen.width>431){
        hiddenMenu.style.top="109px"
    }else if(screen.width<=900&&screen.width>767){
        hiddenMenu.style.top="78px"
    }else if(screen.width<=431){
        hiddenMenu.style.top="99px"
    }
    else{hiddenMenu.style.top="81px"} 
    hiddenMenu.style.opacity="1"
    hiddenMenu.style.visibility="visible"}
else if(hiddenMenu.style.opacity==="1")
{
    hiddenMenu.style.top="40%"
    hiddenMenu.style.opacity="0"
    hiddenMenu.style.visibility="hidden"
    hiddenMenu.style.transitonDuration="0.6s"
    
}
}else{
    hiddenMenu.style.top="40%"
    hiddenMenu.style.opacity="0"
    hiddenMenu.style.visibility="hidden"
    hiddenMenu.style.transitonDuration="0.6s"
}
})

let readmorebutton=document.querySelectorAll(".readmorebutton")
let readlessbutton=document.querySelectorAll(".readlessbutton")
let readmoreparagraph=document.querySelectorAll(".article .bottom .hidden")
readmorebutton.forEach(button => {
    button.addEventListener("click",function(ele){
        ele.target.parentElement.parentElement.lastElementChild.classList.add("pVisible")
        ele.target.parentElement.style.display="none"
    })
});
readlessbutton.forEach(button => {
    button.addEventListener("click",function(ele){
        ele.target.parentElement.parentElement.classList.remove("pVisible")
        ele.target.parentElement.parentElement.parentElement.firstElementChild.style.display="flex"
    })
});

let featuremore=document.querySelectorAll(".featuremore")
let featureless=document.querySelectorAll(".featureless")

featuremore.forEach(button => {
    button.addEventListener("click",function(ele){
        ele.target.nextElementSibling.classList.add("pVisible")
        ele.target.style.display="none"
    })
});
featureless.forEach(button => {
    button.addEventListener("click",function(ele){
        ele.target.parentElement.classList.remove("pVisible")
        ele.target.parentElement.previousElementSibling.style.display="initial"
    })
});
let rightarrow=document.getElementById("right")
let leftarrow=document.getElementById("left")
let circles=document.querySelectorAll(".circles div")
let players=document.querySelectorAll(".player")
 let activecircle=5

leftarrow.onclick=function(ele){
    leftarrow.style.color="#009dff"
    rightarrow.style.color="white"
    leftarrow.style.transitionDuration="0.5s"
    circles.forEach(circle => {
        circle.classList.remove("activecircle")
    });
    players.forEach(player => {
        player.classList.remove("visibleplayer")
        player.classList.remove("playertoright")
        player.classList.remove("playertoleft")
    });
        if(activecircle===1){
            activecircle=8
        }else
    {activecircle--;}

    circles[activecircle-1].classList.add("activecircle")
    players[activecircle-1].classList.add("visibleplayer")
    players[activecircle-1].classList.add("playertoright")
}

rightarrow.onclick=function(ele){
   rightarrow.style.color="#009dff"
    leftarrow.style.color="white"
    rightarrow.style.transitionDuration="0.5s"
    circles.forEach(circle => {
        circle.classList.remove("activecircle")
        circle.style.transitionDuration="0.5s"
    });
    players.forEach(player => {
        player.classList.remove("visibleplayer")
        player.classList.remove("playertoleft")
        player.classList.remove("playertoright")
    });
        if(activecircle===8){
            activecircle=1
        }else
    {activecircle++;}
    circles[activecircle-1].classList.add("activecircle")
    players[activecircle-1].classList.add("visibleplayer")
    players[activecircle-1].classList.add("playertoleft")
}
let month=document.querySelector(".months")
let days=document.querySelector(".days")
let hours=document.querySelector(".hours")
let minutes=document.querySelector(".minutes")
let seconds=document.querySelector(".seconds")

setInterval(function time(){
    seconds.innerHTML--;
    if(seconds.innerHTML==-1){
        seconds.innerHTML=59
        minutes.innerHTML--;
    }
    if(minutes.innerHTML==-1){
        minutes.innerHTML=59
        hours.innerHTML--;
    }
    if(hours.innerHTML==-1){
        hours.innerHTML=23
        days.innerHTML--;
    }
    if(days.innerHTML==-1){
        days.innerHTML=29
        month.innerHTML--;
    }
    if(month.innerHTML==-1){
        clearInterval
    }
},1000)

let arrowtoup=document.querySelector(".arrowtoup")
let header=document.querySelector("header")
window.onscroll=function(){
    if(scrollY>=header.scrollHeight)
{
    arrowtoup.style.display="block"
}
    else if(scrollY<=header.scrollHeight)
{
    arrowtoup.style.display="none"
}
}
arrowtoup.addEventListener("click",function(){
    scrollTo(0,0)
})


