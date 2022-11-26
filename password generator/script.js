const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";


//Selectors //

const passwordBox = document.getElementById('input')
const upperInput = document.getElementById('cont-uppercase')
const lowerInput = document.getElementById('cont-lowercase')
const numberInput = document.getElementById('cont-numbers')
const symbolInput = document.getElementById('cont-symbols')
const totalCharInput = document.getElementById('tot-number')


const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    if((password.length < totalCharInput.value) && (upperInput.checked || lowerInput.checked || numberInput.checked || symbolInput.checked)){
        return generatePassword(password)
    }

    
    passwordBox.value = turncate(password, totalCharInput.value)
    
}

function turncate(string, limit){
    if(string.length > limit){
        let subStr = string.substring(0, limit);
        return subStr
    } else{
        return string
    }
}


document.getElementById('generate').addEventListener('click', ()=>{generatePassword()})

