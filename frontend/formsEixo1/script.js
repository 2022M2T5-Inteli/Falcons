/* Função que faz uma requisição GET */
   $(document).ready(function(){
    var url = '/Pergunta' //endpoint
      var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
      xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
      xhttp.send() //envia o request
      var data = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
      console.log(data.Pergunta)
    for (var i =0; i < data.length; i++){
        /*--linha das questões */
        $(font2).append(`<div class="row"> <h4 id=" ${data[i].idPergunta} "> ${data[i].Pergunta} </h4>
        <div style="width: 550px;"> <select class="form-select" aria-label="Default select example">
            <option selected> Escolha uma opção </option>
            <option value="1"> ${data[i].idOpcao} </option>
            <option value="2"> ${data[i].idOpcao} </option>
            <option value="3"> ${data[i].idOpcao} </option>
            <option value="4"> ${data[i].idOpcao} </option>
            </select>
        </div>`)
    }})
