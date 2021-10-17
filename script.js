// Slide in About US
window.onload = function(){
  
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
 
  prevBtn.addEventListener("click",function(){
    prevSlide();
 });
  nextBtn.addEventListener("click",function(){
    nextSlide();
 });
  
}
let slideNumber = 0;
const prevSlide = () =>{
  const slides = document.getElementsByClassName('slides');
const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName('current');
  currentSlide[0].classList.remove("current");
  if(slideNumber == 0){
    slideNumber = slides.length-1;
  }
  else{
      slideNumber = slideNumber-1;
  }
  slides[slideNumber].classList.add("current");
}
const nextSlide = () =>{
  const slides = document.getElementsByClassName('slides');
const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName('current');
  currentSlide[0].classList.remove("current");
  if(slideNumber == (slides.length-1)){
    slideNumber = 0;
  }
  else{
      slideNumber = slideNumber+1;
  }
  slides[slideNumber].classList.add("current");
}



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