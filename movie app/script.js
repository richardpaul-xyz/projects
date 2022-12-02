//this brings the most popular movies list 
const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const IMGPATH = "https://image.tmdb.org/t/p/w1280";

//this bring the movies which you have searched
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const boxContainer = document.querySelector('#box-container')

const getMovies = async(api)=>{
    const response = await fetch(api);
    const data = await response.json()
    // console.log(data)
    showMovies(data.results)
}

const showMovies = (data) =>{
    boxContainer.innerHTML='';
    //empty the box because it saves the previous box also
    data.forEach(
        (item)=>{
            console.log(item)
            const box = document.createElement('div')
            box.classList.add('box');
            box.innerHTML=`
            <img src="${IMGPATH+item.poster_path}" />

            <div class="overlay">
                <div class="title">
                    <h2>${item.title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>Overview</h3>
                <p>
                    ${item.overview}
                </p>
            </div>
            `
            boxContainer.appendChild(box)
        }
    )
}
//init call -initial call when page loads
getMovies(APIURL)




document.querySelector('#search').addEventListener('keyup',(event)=>{
    if(event.target.value != ''){
        getMovies(SEARCHAPI + event.target.value)
        //SEARCHED MOVIES ONLY
    } else{
        getMovies(APIURL)
        //POPULAR MOVIES
    }
})