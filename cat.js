//document.getElementById('fact')
fact.textContent = "Loading..."

fetch("https://catfact.ninja/#/Facts/getRandomFact")
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.fact);
    fact.textContent = data.fact;
});

fetch("https://cataas.com/cat")
.then(response => response.json())
.then(data=>{
    console.log(data.url);
    catimage.src = data.url;
})