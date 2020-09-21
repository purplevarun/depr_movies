window.addEventListener("load",()=>{

    //const proxy=`https://cors-anywhere.herokuapp.com/`;
    var moviename="devil all the time";
    document.querySelector("#btn").onclick=function(){
        moviename=document.querySelector("#inp").value;
        document.querySelector("#inp").value="";
        document.getElementById("frm").style.display="none";
    
        const byname=`https://www.omdbapi.com/?apikey=d25a5f01&t=${moviename}&plot=full&type=movie`;
        console.log(byname);
        fetch(byname)
        .then(response =>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            document.querySelector("#title").innerHTML=data.Title;
            document.querySelector("#paste").innerHTML=`<img src=${data.Poster} width="100%">`;
            document.querySelector("#actors").innerHTML="Actors : "+data.Actors;
            document.querySelector("#director").innerHTML="Director : " + data.Director;
            document.querySelector("#genre").innerHTML="Genre : " + data.Genre;
            document.querySelector("#plot").innerHTML="Synopsis : "+data.Plot;
            document.querySelector("#date").innerHTML="Released in : "+data.Released;
        })
    }
})
