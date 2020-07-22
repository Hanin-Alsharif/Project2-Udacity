/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sec = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



for( i=1; i<=sec.length; i++){
    const navElement1 = document.createElement('li');
    const navElement2 = document.createElement('a');

   navElement2.id ='nav' + i;
   
    navElement2.textContent = "section" + i;
    navElement2.classList.add('menu__link');

    navElement1.appendChild(navElement2);
    navbar.appendChild(navElement1);
  }
 
    function myfunction1(){
      let Element= document.querySelectorAll('li');
      for (let i=0; i<Element.length; i++){

        Element[i].onclick =function function2() {
          sec[i].scrollIntoView();
          
        }
      }}
      myfunction1();
   
      
// Add class 'active' to section when near top of viewport


function neartopofviewport(e){

    const bounding = e.getBoundingClientRect();
    return(bounding.top>=0 && 
           bounding.left>=0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
  }
  
// Scroll to anchor ID using scrollTO event


let activeTab = -1;
window.addEventListener('scroll', function scrolling(){
  for(i=0;i<sec.length;i++){

    let navitem = document.getElementById('nav'+ (i+1));

    if(neartopofviewport(sec[i])){

      navitem.style.backgroundColor="#88cacb";

      sec[i].classList.add('your-active-class');
    }else{
     
     activeTab = i+1;
          if(navitem != activeTab){
          
        document.getElementById('nav'+ activeTab).style.backgroundColor="#fff";
      }
     sec[i].classList.remove('your-active-class');

  }
  }
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


