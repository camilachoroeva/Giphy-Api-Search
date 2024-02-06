let APIKEY = "R9cNW0bikZFrPaE95fSWLDelKGttaWNr";
let search = document.getElementById("search");
let output = document.querySelector(".output");
document.addEventListener("DOMContentLoaded", init);
    function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault();
        while (output.firstChild) {
            output.removeChild(output.firstChild);
        }
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=25&q=`;
        let str = search.value;
        url = url.concat(str);
        fetch(url)
        .then(response => response.json())
        .then(content => {
            if(content.data.length === 0){
                console.log(output)
                let phar  = document.createElement("p");
                phar.innerText = "You wrote something wrong or this GIF doesn't exist, sorry:(";
                output.appendChild(phar);
            }
            for(let i = 0; i < 26; i++){
            let fig = document.createElement("figure");
            let img = document.createElement("img");
            img.src = content.data[i].images.downsized.url;
            fig.appendChild(img);
            output.appendChild(fig);
            }
            document.search.value = "";
        })
    });
    }