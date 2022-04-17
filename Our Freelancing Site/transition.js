

const carouselslide=document.querySelector('.carousel-slide');
const carouselImages=document.querySelector('.carousel-slide img');

const prevBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');

const size= 400;
var counter=1;
setInterval(() => { counter++;counter=counter%4;
    if (counter%4!=0) {
        carouselslide.style.transition="transform 0.4s ease-in-out";
    }
    else{ carouselslide.style.transition="none";}
    carouselslide.style.transform='translateX(' +(-size*counter)+ 'px)';
    

    
}, 2000);
nextBtn.addEventListener('click',()=>{
counter++;
counter=counter%4;
if (counter%4!=0) {
    carouselslide.style.transition="transform 0.4s ease-in-out";
}
else{ carouselslide.style.transition="none";}
carouselslide.style.transform='translateX(' +(-size*counter)+ 'px)';

})

prevBtn.addEventListener('click',()=>{
counter--; 
if (counter<0){counter=0; return;}
counter=(counter%4);
if (counter%4!=0) {
    carouselslide.style.transition="transform 0.4s ease-in-out";
}
else{ carouselslide.style.transition="none";}
carouselslide.style.transform='translateX(' +(-size*counter)+ 'px)';

})
