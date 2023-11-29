//navbar
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    navbar.classList.toggle('active');

}
window.onscroll=()=>{
    navbar.classList.remove('active');
}
//darkmode
let darkmode=document.querySelector('#darkmode');
darkmode.onclick=()=>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
//scroll reveal
const sr=ScrollReveal({
    origin:'top',
    distance:'40px',
     duration:2000,
     reset:true
 });
 sr.reveal(`.Home-text,.Home-img,.About-img,.About-text,.box,.s-box,.btn,.connect-text,.contact-box`,{
     interval:200
 })