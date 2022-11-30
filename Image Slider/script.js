const slides = document.querySelectorAll('.slide');
let counter = 0;
let length = slides.length


slides.forEach(
    (slide,index) =>{
        slide.style.left = `${index * 100}%`                           
    }
)




const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
function goPrevious(){
    
    counter--;

    if(counter < 0){
        counter = length-1
    };
    
    slideImage()
    // console.log(counter)

}

function goNext(){
    counter++;
    if(counter === length){
        counter=0;
    }
    slideImage();
    // console.log(counter)

}

