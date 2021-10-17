var textWrapper = document.querySelector('.dinamic');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.dinamic .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.dinamic .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
// navigation burger
const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');
 
  navLinks.forEach((link,index) =>{
    if (link.style.animation) {
      link.style.animation = ''
    } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
    burger.classList.toggle('toggle');

});
}
navSlide();
///videos

var slider_video = document.querySelector('.slider-video');
var videos = ['video1.mp4', 'video2.mp4', 'video8.mp4', 'video9.mp4', 'video12.mp4'];
var i = 0;

function prev(){
	if(i <= 0) i = videos.length;	
	i--;
	return setVd();			 
}

function next(){
	if(i >= videos.length-1) i = -1;
	i++;
	return setVd();			 
}

function setVd(){
	return slider_video.setAttribute('src', "videos/"+videos[i]);
	
}







