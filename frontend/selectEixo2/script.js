function Seletor(){
    var eixo = document.getElementById("Selector")
    var opcaoTexto = eixo.options[eixo.selectedIndex].text;
    
    var opcaoValor = eixo.options[eixo.selectedIndex].value;

    console.log(opcaoTexto)

    if(opcaoValor == "1"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../forms2Eixo1/index.html'>Começar</a></button>"
    }
    else if(opcaoValor == "2"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../forms2Eixo2/index.html'>Começar</a></button>"
    }
}