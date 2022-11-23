const getColor = ()=>{
    const randomNumber = Math.floor(Math.random() * 16777215); // 16777215 is the total number of hexcode numbers so if multiplyed by any 0.number we will get the answer //
    const randomCode = "#" + randomNumber.toString(16); // converting the random number to hexcode //
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode;

    // from here after going to next color what should happen //
    document.getElementById('copy').innerText = "copy";
    document.getElementById('copy').style.color = 'rgba(0,0,0,0.5)';
    document.getElementById('copy').style.borderColor = 'black';

}

getColor() // this is a first call just to get the color and not blank //



document.getElementById('btn').addEventListener('click', getColor);


const copyBtn = ()=>{
    document.getElementById('copy').innerText = "copied";
    document.getElementById('copy').style.color = 'rgba(0, 200, 0,0.7)';
    document.getElementById('copy').style.borderColor = 'rgba(0, 200, 0,0.7)';

    navigator.clipboard.writeText(document.getElementById('color-code').innerText)
}

document.getElementById('copy').addEventListener('click', copyBtn);
