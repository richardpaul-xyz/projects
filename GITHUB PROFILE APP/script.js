const APIURL = 'https://api.github.com/users/';
const main = document.querySelector('#main')
const name = document.querySelector('#name')
const btn = document.querySelector('#btn')
const input = document.querySelector('#input')

const getUser = async(username)=>{
    const response = await fetch(APIURL + username);
    const data =  await response.json()
    // console.log(data)

    // I made this because it was coming as null in the card if there was no bio, so i removed it 
    let dataBio = data.bio;
    if(dataBio == null){
        dataBio = ''
    } else{
        dataBio = data.bio
    }

    const card = `
    
        <div id="card">
            <div id="userBox">
                <div id="image">
                    <img src="${data.avatar_url}" id='img' />
                </div>
                <div id="content">
                    <div id="nameAndPos">
                        <h2 id="name">${data.name}</h2>
                        <p id="position">${dataBio}</p>    
                    </div>
                    <div id="ffr">
                        <p><span id='follower'>${data.followers}</span> Followers</p>
                        <p id="center-ffr"><span id="following">${data.following}</span> Following</p>
                        <p><span id="repository">${data.public_repos}</span> Repos</p>

                    </div>
                    <div id="repos">

                        
            

                    </div>
                </div>
            </div>
        </div>
    `
    main.innerHTML = card;
    getRepos(username)
}



const getRepos = async(username) =>{
    const repos = document.querySelector('#repos')
    const response = await fetch(APIURL+username+'/repos')
    const data = await response.json()
    data.forEach(
        (item)=>{
            const elem = document.createElement('a')
            elem.innerText = item.name;
            elem.href = item.html_url;
            elem.target = "_blank"
            repos.appendChild(elem)
        }
    )
}


btn.addEventListener('click',()=>{
    if(input.value != ''){ 
        getUser(input.value);
        input.value=''
    }
    else{
        falseUser()
    }
        
    
})


//This shows a new card if it was an empty and submited
const falseUser = ()=>{
    main.innerHTML = ''

    const show = document.createElement('div');
    show.className = 'show';
    show.innerHTML = `<h3>Enter the Username<h3>`;
    setTimeout(
        ()=>{
            show.parentNode.removeChild(show)
        },1500
    )
    main.appendChild(show);

}
