window.onload=function(){
    // document.getElementById("skip").onclick=function(){
    //     window.location.href="index2.html";
    // }
    document.querySelector("#anal").onclick=function(){
        document.getElementById("wrapper").style.display="none";
        document.getElementById("back").style.display="block";
        
        var genre = document.getElementById("choice").value;
        var timeline = document.getElementById("choice1").value;
        var moviename="";
        if(genre=="horror"){
            if(timeline=="2010") moviename="get out";
            if(timeline=="2000") moviename="saw";
            if(timeline=="1990") moviename="the exorcist";
        }
        if(genre=="comedy"){
            if(timeline=="2010") moviename="deadpool";
            if(timeline=="2000") moviename="superbad";
            if(timeline=="1990") moviename="the big lebowski";
        }
        if(genre=="drama"){
            if(timeline=="2010") moviename="whiplash";
            if(timeline=="2000") moviename="catch me if you can";
            if(timeline=="1990") moviename="forrest gump";
        }
        if(genre=="crime"){
            if(timeline=="2010") moviename="murder on the orient express";
            if(timeline=="2000") moviename="sherlock holmes";
            if(timeline=="1990") moviename="se7en";
        }
        if(genre=="thriller"){
            if(timeline=="2010") moviename="uncut gems";
            if(timeline=="2000") moviename="the departed";
            if(timeline=="1990") moviename="the silence of the lambs";
        }
        if(genre=="biography"){
            if(timeline=="2010") moviename="bohemian rhapsody";
            if(timeline=="2000") moviename="the social network";
            if(timeline=="1990") moviename="Schindler's List";
        }
        document.getElementById("back").onclick=function(){
            location.reload();
        }
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
        document.querySelector("#plot").innerHTML="Synopsis : "+"<p style='color:red;'>"+data.Plot+"</p>";
        document.querySelector("#date").innerHTML="Released in : "+data.Released;
        })
    }
}

    
