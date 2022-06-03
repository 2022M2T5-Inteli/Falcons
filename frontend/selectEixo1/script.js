function Seletor(){
    var eixo = document.getElementById("Selector")
    var opcaoTexto = eixo.options[eixo.selectedIndex].text;
    
    var opcaoValor = eixo.options[eixo.selectedIndex].value;

    console.log(opcaoTexto)

    if(opcaoValor == "1"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../formsEixo1/index.html'>Começar</a></button>"
    }
    else if(opcaoValor == "2"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../formsEixo2/index.html'>Começar</a></button>"
    }
    else if(opcaoValor == "3"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../formsEixo3/index.html'>Começar</a></button>"
    }
    else if(opcaoValor == "4"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../formsEixo4/index.html'>Começar</a></button>"
    }
    else if(opcaoValor == "5"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../formsEixo5/index.html'>Começar</a></button>"
    }
    else if(opcaoValor == "6"){
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../formsEixo6/index.html'>Começar</a></button>"
    }
    else{
        document.getElementById("select-btn").innerHTML= "<button type='button' style= 'border-radius: 20px; width: 100px; background-color:#000; color:#fff'><a style= 'color: #fff; text-decoration: 'none'; font-family: Poppins;' href='../formsEixo7/index.html'>Começar</a></button>"
    }
}