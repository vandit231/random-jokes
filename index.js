var jokeEl=document.getElementById('joke');
var jokebutton=document.getElementById('jokebtn');

function generatejoke(){
    fetch('https://icanhazdadjoke.com',{
        headers:{
            'Accept':'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        jokeEl.innerHTML=data.joke;
    })

}
generatejoke()
jokebutton.addEventListener('click',generatejoke)