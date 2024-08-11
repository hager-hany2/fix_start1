let btns =document.querySelectorAll(".btns button")
for(let btn of btns){
    console.log(btn)
    btn.onclick =function(){
        document.querySelector(".text-primary").className=""
        event.target.className="text-primary"
    let type = event.target.innerHTML;
    let related_image=document.querySelectorAll(".photo-1 .row"+type)
   
    let all_images=document.querySelectorAll(".photo-1 .row > div")
    for(let image of all_images){
        image.style.display="none"
    }
    for( image of related_image){
        image.style.display="block"
        
    }
    }
}
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });
  document.addEventListener('scroll', function () {
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 100) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

document.getElementById('back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ---------------------------
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
let moods =document.querySelectorAll(".mood li")
for(let mood of moods){
    mood.onclick= function(){
        let type=event.target.getAttribute("name")
        document.querySelector("head link :last of type")
        .setAttribute("href","css/"+type+".css")
    }
}