$(document).ready(function () {
    var url = '/Pergunta' //endpoint
    var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
    xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
    xhttp.send() //envia o request
    var data = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
    console.log(data)
    document.getElementById("font2").innerHTML = data[73].Pergunta
    document.getElementById("font3").innerHTML = data[74].Pergunta
    document.getElementById("font4").innerHTML = data[75].Pergunta
    document.getElementById("font5").innerHTML = data[76].Pergunta
    document.getElementById("font6").innerHTML = data[77].Pergunta

});