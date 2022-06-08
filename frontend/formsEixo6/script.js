$(document).ready(function () {
    var url = '/Pergunta' //endpoint
    var xttp = new XMLHttpRequest() //Script que faz request para o servidor a partir do URL usando o protocolo http, sem ter que atualizar a pagina
    xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou não
    xhttp.send() //envia o request
    var data = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
    console.log(data)
    document.getElementById("font2").innerHTML = data [58].Pergunta
    document.getElementById("font3").innerHTML = data [59].Pergunta
    document.getElementById("font4").innerHTML = data [60].Pergunta
    document.getElementById("font5").innerHTML = data [61].Pergunta
    document.getElementById("font6").innerHTML = data [62].Pergunta
    document.getElementById("font7").innerHTML = data [63].Pergunta
    document.getElementById("font8").innerHTML = data [64].Pergunta
    document.getElementById("font9").innerHTML = data [65].Pergunta
    document.getElementById("font10").innerHTML = data [66].Pergunta
    document.getElementById("font11").innerHTML = data [67].Pergunta
    document.getElementById("font12").innerHTML = data [68].Pergunta
    document.getElementById("font13").innerHTML = data [69].Pergunta
    document.getElementById("font14").innerHTML = data [70].Pergunta
    document.getElementById("font15").innerHTML = data [71].Pergunta
    document.getElementById("font16").innerHTML = data [72].Pergunta
});