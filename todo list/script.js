const btn = document.querySelector('#btn');
const text = document.querySelector('#text')
const bottom = document.querySelector('#bottom')
const cross = document.getElementsByClassName('cross') //get Element by query selector was not working for class //



//Appending p one by one
const send = ()=>{
    if(text.value != ''){

        const elem = document.createElement('p');
        elem.innerHTML = `${text.value} <i class="fa-solid fa-xmark cross"></i>`


        elem.addEventListener('click', ()=>{
            elem.classList.toggle('done')                /*toogle is a digital on off switch*/
        })

        // To remove 
        elem.querySelector('i').addEventListener('click', ()=>{
            elem.remove()
        })


        bottom.appendChild(elem);
        text.value =''

    }
}


// ADding todos using Enter key
text.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        send()
    }
})

//ADding Todos using Click 
btn.addEventListener('click', send)