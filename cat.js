//document.getElementById('fact')
fact.textContent = "Loading..."

fetch("https://catfact.ninja/fact")
.then(response = response.json())
.then(data => (
    console.log(data);
    console.log(data.fact);
    fact.textContent = data.fact;
))