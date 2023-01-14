//-----
//-- Vars

var themes= ["normal", "blue"]
const themes_colors= {
    "normal": ["rgb(255,255,255)","rgb(19,17,17)","rgb(49,49,49)"
        ,"rgb(189,183,107)","rgb(170, 163, 71)","rgb(117, 45, 45)"
        ,"rgb(146, 59, 59)","rgb(104, 57, 104)"]
    ,"blue": ["#d4f1f4","#05445e","#189ab4","#75e6da","#266660","#1a5653","#107869","#5cd85a"]
}

//-----
//-- Events

document.getElementById("btn-theme").addEventListener("click", changeTheme)
document.getElementById("btn-translate").addEventListener("click", setIdiomaGatuno)

//-----
//-- Functions

    //Temas

function changeTheme(){
    //Cambia el tema actual a la última posición del array
    themes.push(themes.shift())
    setTheme(themes[0])
}

function setTheme(theme){
    var colors= document.querySelector(":root")
    colors.style.setProperty("--col1", themes_colors[theme][0])
    colors.style.setProperty("--col2", themes_colors[theme][1])
    colors.style.setProperty("--col3", themes_colors[theme][2])
    colors.style.setProperty("--col4", themes_colors[theme][3])
    colors.style.setProperty("--col5", themes_colors[theme][4])
    colors.style.setProperty("--col6", themes_colors[theme][5])
    colors.style.setProperty("--col7", themes_colors[theme][6])
    colors.style.setProperty("--col8", themes_colors[theme][7])
}
    
    //Idioma Gatuno
    
    //Aplica el idioma gatuno al documento
function setIdiomaGatuno(){
    
    var texto= document.getElementsByClassName("traduc")
    
    var cadena
    for (let i = 0; i < texto.length; i++) {
        texto[i].innerHTML = translateFraseGatuna(texto[i].innerHTML)
        
    }
}

    //Retorna una frase gatuna en base al nro de palabras de la frase original
function translateFraseGatuna(frase){
    var contPalabras= frase.trim().split(" ").length
    var resFrase= ""

    for (let i = 0; i < contPalabras; i++){
        resFrase+= getPalabraGatuna()+" "
    }

    return resFrase
}

    //Retorna una palabra gatuna al azar
function getPalabraGatuna(){
    var palabrasGatunas= ["miauu", "miiiau", "miaaa", "miau", "meeow"]
    var indice= Math.floor(Math.random() * palabrasGatunas.length)

    return palabrasGatunas[indice]
}