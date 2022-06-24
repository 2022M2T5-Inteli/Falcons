$(document).ready(function () {
    var url = '/Pergunta' //endpoint
    var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
    xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
    xhttp.send() //envia o request
    var perguntas = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
    console.log(perguntas)
    if (perguntas) {
        url = '/Opcao' //endpoint
        xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
        xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
        xhttp.send() //envia o request
        var options = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
        console.log(options)
        perguntas = perguntas.filter(pergunta => pergunta.idEixo === 6);
        if (options) {
            for (var i = 0; i < perguntas.length; i++) {
                /*--linha das questões */
                var caixa = (`<div class="row"> <h4 id=" ${perguntas[i].idPergunta} "> ${perguntas[i].Pergunta} </h4>
                    <div style="width: 550px;"> <select class="form-select" aria-label="Default select example" id="input${i}">
                        <option selected> Escolha uma opção </option>`)
                for (var j = 0; j < options.length; j++) {
                    if (perguntas[i].idTipo == options[j].idTipo) {
                        caixa += (`<option value=${options[j].idOpcao}> ${options[j].Alternativa}</option>`)
                    }
                }
                caixa += (`</select> </div> </div>`)
                $(font2).append(caixa)
            }
        }
    } /*
    const eixo6 = { perguntas: [] };

    $("#sizebutton").on('click', function(event) {
        event.preventDefault();

        console.log("elon musk")
        $("select").each(function() {
            eixo6.perguntas.push($(this).val());
        });

        window.localStorage.setItem("eixo6", JSON.stringify(eixo6));

        console.log(eixo6);
        return false;
    */});


    function enviarBanco(){

        var nomeEscola = sessionStorage.getItem("nomeEscola");
        var inputs = document.getElementById("input1")
        var input = inputs.options[inputs.selectedIndex].text;
        console.log(input)
        
        
        var url = '/Pergunta' //endpoint
        var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
        xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
        xhttp.send() //envia o request
        var perguntas = JSON.parse(xhttp.responseText)
        var perguntasize = perguntas.length
        var listapergunta = []
        
        for (var i = 0; i < perguntasize; i++){
            var linha = JSON.parse(xhttp.responseText)[i]
            
            if (linha.idEixo == 6){
                listapergunta.push(linha.idPergunta); 
            }
        }
        
        for (var i = 0; i  <  (listapergunta.length) ; i++){
            var respostas = document.getElementById("input" + i)
            var resposta = respostas.options[respostas.selectedIndex].text;
            var idPergunta = listapergunta[i]           
            console.log(resposta);
            
            $.ajax({
                type: 'POST',
                url: '/respostaeducacionalupdate',
                data: { idPergunta:(listapergunta[i]), Escola: nomeEscola, Resultado: resposta }
              });    
        }}
        
    
    