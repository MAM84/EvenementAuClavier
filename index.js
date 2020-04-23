var motDePasse = "BOOM"

var lettresTapées = []

nbLettresTapées = 0

/*function demolir (){
    document.write("")
}*/

function demolir (){
    document.getElementById("demolir").innerHTML = '<img src="Img/giphy.webp" alt="explosion" height="700px" width="1500px">'
}

document.addEventListener("keydown",function (e){
    console.log(String.fromCharCode(e.keyCode));
    lettresTapées [nbLettresTapées] = String.fromCharCode(e.keyCode);
    console.log(lettresTapées)
    nbLettresTapées++
    motDePasseSaisi = lettresTapées.join('')
    console.log(motDePasseSaisi)
    if(motDePasseSaisi.includes(motDePasse)){
        demolir()
    }
})

