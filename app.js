// Global variables
var video1 = document.getElementById('bgVideoFront');
var video2 = document.getElementById('bgVideoBack');
var portrait = document.querySelector('.portrait');
var figure = document.querySelectorAll('.project-section figure');

var homeNav = document.getElementById('homeNav');
var projectsNav = document.getElementById('projectsNav');
var aboutNav = document.getElementById('aboutNav');
var scrollNav = document.getElementById('scrollNav');

var projectBox = document.querySelectorAll('.project-box');

var floraImg = document.querySelector("#projectBox1 img");
var visualImg = document.querySelector("#projectBox2 img");
var bookImg = document.querySelector("#projectBox3 img");

const scrollArea = document.querySelector('#scrollWrapper');
mainContainer = document.querySelector(".main-container");

// copy to clipboard variables
var clipboard = document.getElementById('clipboard');
var clipboard2 = document.getElementById('clipboard2');
var iconCopy = document.querySelector('.iconCopy');
var iconCopy2 = document.querySelector('.iconCopy2');
var copyto = document.querySelector('.copyto');
var copyto2 = document.querySelector('.copyto2');
// match media variables
var screenS = window.matchMedia("(max-width:425px)");
var screenM = window.matchMedia("(min-width:768px)");
var screenSmin = window.matchMedia("(min-width:425px)");
var screenMmax = window.matchMedia("(max-width:768px)");


// project images animation mouse
function mouseAnimationMove(menu,circle){
    $(menu).mousemove(function (e) {
        var i = $(circle),
        s = e.pageX - i.offset().left,
        o = e.pageY - i.offset().top;
    
        TweenMax.to($(circle), .3, {
            x: (s - i.width() / 2) / i.width() * 50,
        y: (o - i.height() / 2) / i.height() * 50,
        scale: 1.2,
        ease: Power2.easeOut
        })
    });
}
function mouseAnimationLeave(menu,circle){
    $(menu).mouseleave(function (e) {
        TweenMax.to($(circle), .3, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Power2.easeOut
        })
    });
}
window.onload = function() {
    if(screenMmax.matches){
      video1.currentTime = 1;
    }
    if(screenS.matches){
      video1.currentTime = 4;
    }
    if(!screenMmax.matches){
        menu1= document.querySelector('.menu1');
        circle1= document.querySelector('.circle1');
        mouseAnimationMove(menu1,circle1);
        mouseAnimationLeave(menu1,circle1);

        menu2= document.querySelector('.menu2');
        circle2= document.querySelector('.circle2');
        mouseAnimationMove(menu2,circle2);
        mouseAnimationLeave(menu2,circle2);
             
        menu3= document.querySelector('.menu3');
        circle3= document.querySelector('.circle3');
        mouseAnimationMove(menu3,circle3);
        mouseAnimationLeave(menu3,circle3);
    }
}

//!skew animaiton
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#skewer", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20); 

ScrollTrigger.create({
  scroller: "#scrollWrapper",
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -250);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: .8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});
gsap.set("#skewer", {transformOrigin: "center center", force3D: true});


// gsap animation

// animation portrait opacity
gsap.to(".portrait", {
    scrollTrigger: {
      trigger: ".home-section",
      markers:false,
    },
    opacity:0.65,
    duration:6, 
  });
  
  // animation portrait slide down
  gsap.to(".portrait", {
    scrollTrigger: {
      trigger: ".text-section",
      toggleActions: "restart none reverse reverse",                     
      start: "top 80%",
      end: "top 30%",
      scroller: "#scrollWrapper",
      markers:false,
      scrub:1,
    },
    y:'50vh',
    x:'0',
    duration: 2,
  });
  
  gsap.to("#homeSection header", {
    scrollTrigger: {
      trigger: ".nav-bottom",
      toggleActions: "restart none reverse reverse",
      start: "top 83%",
      end: "top 85%",
      scroller: "#scrollWrapper",
      markers:false,
    },
    y: "-420px",
    ease: "Power1.easeInOut",
    duration: 1.5,
  });
  

// underline nav animation
homeNav.onclick = function(){
    homeNav.classList.add("underline");
    projectsNav.classList.remove("underline");
    aboutNav.classList.remove("underline");
  }
  projectsNav.onclick = function(){
    projectsNav.classList.add("underline");
    aboutNav.classList.remove("underline");
    homeNav.classList.remove("underline");
  }
  aboutNav.onclick = function(){
    aboutNav.classList.add("underline");
    homeNav.classList.remove("underline");
    projectsNav.classList.remove("underline");
  }
  
  
// transition videos when scroll

// video starting point
video1.style.opacity = "1";
video1.playbackRate = 2;
video2.playbackRate = 2;


//transition from video1 to video2
function transitionVideo(opacity1, opacity2, videoFront,videoBack, value){
  video1.style.opacity = opacity1;
  video2.style.opacity = opacity2;
  videoFront.style.transition ='all 0s ease 0.5s';
  //sets both videos in the same frame when clicked to change
  videoBreak = videoFront.currentTime;
  videoBack.currentTime = videoBack.duration - videoBreak - value;
  videoBack.play();
}
  
function colorToggle(add, remove1, remove2, remove3, remove4, remove5, remove6, remove7){
    mainContainer.classList.add(`${add}`);
    mainContainer.classList.remove(`${remove1}`);
    mainContainer.classList.remove(`${remove2}`);
    mainContainer.classList.remove(`${remove3}`);
    mainContainer.classList.remove(`${remove4}`);
    mainContainer.classList.remove(`${remove5}`);
    mainContainer.classList.remove(`${remove6}`);
    mainContainer.classList.remove(`${remove7}`);
}
function underlineAbout(){
    var underline = document.querySelector('#aboutNav');
    underline.style.borderColor = "rgb(79, 81, 90)";
    underline.style.transition = "border-color 3s ease 6s, color 3s ease 6s";
}
function underlineAbout2(){
    var underline = document.querySelector('#aboutNav');
    underline.style.borderColor =  "rgba(164, 210, 231, 0.603)";
    underline.style.transition = "border-color 2s ease 4s, color 2s ease 2s";  
}
function videoback(){
    // video transition
    if(video2.currentTime >12){
      transitionVideo(0,1,video1, video2, 2.3);
    }
    else{
      transitionVideo(0,1,video1, video2, 1.7);
    }
    // change scroll down to scroll up
    scrollNav.innerHTML = "scroll up";
    
    mainContainer = document.querySelector(".main-container");

    // color transition
        // when video1 is almost finished
        switch (true) {
            case (video1.currentTime > 13):
                day = "Sunday";
                console.log(day);
                colorToggle( "color-toggle", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
            underlineAbout();
                break;
            case (video1.currentTime > 11)  &&  (video1.currentTime <= 13):
                day = "Monday";
                console.log(day);
                colorToggle( "color-toggle5", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle", "color-toggle6", "color-toggle7", "color-toggle8");
                underlineAbout();
                break;
            case (video1.currentTime > 6 )&&  (video1.currentTime <= 11) :
                day = "Tuesday";
                console.log(day);
                colorToggle( "color-toggle6", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle", "color-toggle7", "color-toggle8");
                underlineAbout();
                break;
            case (video1.currentTime > 3 &&  (video1.currentTime <= 6)):
                day = "Wednesday";
                console.log(day);
                colorToggle( "color-toggle7", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle", "color-toggle8");
                underlineAbout();
                break;
            case (video1.currentTime > 2 ) &&  (video1.currentTime <= 3):
                day = "Thursday";
                console.log(day);
                colorToggle( "color-toggle8", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle");
                underlineAbout();
                break;
            case   (video1.currentTime <= 2) :
                day = "Friday";
                console.log(day);
                colorToggle( "color-toggle8", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle");
                break;
                default:
                underlineAbout();
            }
      
}
function videostart(){
    // video transition
    transitionVideo(1,0,video2, video1, 2.5);
    // change scroll up to scroll down
    scrollNav.innerHTML = "scroll down";
    // color transition
    switch (true) {
        case (video1.currentTime < 2):
            day = "Sunday";
            console.log(day);
            colorToggle( "color-toggle2", "color-toggle", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
            underlineAbout2();
            break;
        case (video1.currentTime <8 )  &&  (video1.currentTime >= 2):
            day = "Monday";
            console.log(day);
            colorToggle( "color-toggle4", "color-toggle2", "color-toggle3", "color-toggle", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
            underlineAbout2();
            break;
        case (video1.currentTime > 8 ) &&  (video1.style.display != "none") :
            day = "Tuesday";
            console.log(day);
            colorToggle( "color-toggle3", "color-toggle2", "color-toggle", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
            underlineAbout2();
            break;
    }
    //end video transition
}

function underlineToggle(remove1,remove2,add){
    remove1.classList.remove("underline");
    remove2.classList.remove("underline");
    add.classList.add("underline");
  }

  scrollArea.addEventListener('scroll', function(e){
  if((e.target.scrollTop >= 2775) && (video1.style.opacity == 1)){
    // about section
    underlineToggle(projectsNav,homeNav,aboutNav);
    videoback();
  }
  // project section
  if((e.target.scrollTop > 975) && (e.target.scrollTop < 2075)){
    underlineToggle(homeNav,aboutNav,projectsNav);
  }
  // home section
  if(e.target.scrollTop <=975){
    underlineToggle(aboutNav,projectsNav,homeNav);
  }
  if((e.target.scrollTop < 2775) && (video1.style.opacity == 0)){
    underlineToggle(homeNav,aboutNav,projectsNav);
    videostart();
  }
  });
  

 // copy to clipboard
function copyElementText(id) {
    var text = document.querySelector(id).innerText;
    // console.log(text);
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }
  
  // animation clipboard buttons
  function clipboardAnimation(op,elm1,elm2){
    elm1.style.opacity = op;
    elm1.style.transition ="all 1s ease";
    elm2.style.opacity = op;
    elm2.style.transition ="all 1s ease";
  }
  clipboard.addEventListener('mouseenter', function(){
    clipboardAnimation(1,iconCopy,copyto);
  });
  clipboard.addEventListener('mouseleave', function(){
    clipboardAnimation(0,iconCopy,copyto);

  });
  clipboard2.addEventListener('mouseenter', function(){
    clipboardAnimation(1,iconCopy2,copyto2);

  });
  clipboard2.addEventListener('mouseleave', function(){
    clipboardAnimation(0,iconCopy2,copyto2);

  });

//   animation when click on clipboard
  function removeAddClass(elm){
     elm.classList.remove("animation");
     void elm.offsetWidth;
     elm.classList.add("animation");
  }

  clipboard.addEventListener('click', function(e){
    e.preventDefault;
    removeAddClass(clipboard);
  });
  clipboard2.addEventListener('click', function(e){
    e.preventDefault;
    removeAddClass(clipboard2);
  });
  
