function loadpk(){
   let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
   fetch(url)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    //what to do with data json format
    console.clear();
    console.log(data);
    document.getElementById('name').innerHTML = data['name'];
    document.getElementById('number').innerHTML = data['id'];
    let img = data['sprites']['front_default'];
    document.getElementById('pic').setAttribute('src', img);
    })
    .catch((erro) => {
    console.log("Error: " + erro);
    });
}
document.getElementById('btn1').onclick = loadpk;
