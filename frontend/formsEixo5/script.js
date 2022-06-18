$(document).ready(function(){
    var url = '/Pergunta' //endpoint
    var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
    xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
    xhttp.send() //envia o request
    var perguntas = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
    console.log(perguntas)
    if (perguntas){
            url = '/Opcao' //endpoint
            xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
            xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
            xhttp.send() //envia o request
            var options = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
            console.log(options)
            perguntas = perguntas.filter(pergunta => pergunta.idEixo === 5);
            if (options){
                for (var i =0; i < perguntas.length; i++){
                    /*--linha das questões */
                    var caixa = (`<div class="row"> <h4 id=" ${perguntas[i].idPergunta} "> ${perguntas[i].Pergunta} </h4>
                    <div style="width: 550px;"> <select class="form-select" aria-label="Default select example">
                        <option selected> Escolha uma opção </option>`)
                    for (var j=0; j<options.length; j++){
                        if (perguntas[i].idTipo == options[j].idTipo){
                            caixa += (`<option value="1"> ${options[j].Alternativa} </option>`)
                        }
                    }
                    caixa += (`</select> </div> </div>`)
                    $(font2).append(caixa)
                }
            }
    }
    const eixo5 = { perguntas: [] };

    $("#sizebutton").on('click', function(event) {
        event.preventDefault();

        console.log("elon musk")
        $("select").each(function() {
            eixo5.perguntas.push($(this).val());
        });

        window.localStorage.setItem("eixo5", JSON.stringify(eixo5));

        console.log(eixo5);
        return false;
    });
});