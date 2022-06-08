/* Função que faz uma requisição GET */
function json(){
    var url = '/Pergunta' //endpoint
    var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
    xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
    xhttp.send() //envia o request
    var data = JSON.parse(xhttp.responseText)[0] //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
    console.log(data)
    ocument.getElementById("bancoDados1").innerHTML = data.Pergunta + "  " +  data.idPergunta
}

