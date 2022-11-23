const endDate = "22 March 2023 12:00 AM";

document.getElementById('end-date').innerText = endDate;

const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0){
        return;
    }

    let days = Math.floor(diff / 3600 / 24);
    inputs[0].value = days;

    let hours = Math.floor(diff / 3600 % 24);
    inputs[1].value = hours ;

    let minutes = Math.floor((diff / 60) % 60) ;
    inputs[2].value = minutes;
    
    let seconds = Math.floor(diff % 60)
    inputs[3].value = seconds;




}

clock()

setInterval(
    ()=>{
        clock()
    },1000
)