/* Função que faz uma requisição GET */
   $(document).ready(function(event){
    var url = '/Pergunta' //endpoint
    var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
    xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
    xhttp.send() //envia o request
    var perguntas = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
    
    if (perguntas){
            url = '/Opcao' //endpoint
            xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
            xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
            xhttp.send() //envia o request
            var options = JSON.parse(xhttp.responseText) //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
            
            perguntas = perguntas.filter(pergunta => pergunta.idEixo === 1);  
            if (options){
                var arrayPerguntas = [];
                for (var i =0; i < perguntas.length; i++){
                    arrayPerguntas.push(perguntas[i].idPergunta);
            
                    /*--linha das questões */
                    var caixa = (`<div class="row" id="test"> <h4 id=" ${perguntas[i].idPergunta} "> ${perguntas[i].Pergunta} </h4>
                    <div style="width: 550px;"> <select class="form-select" aria-label="Default select example" id="input${i}">
                        <option selected> Escolha uma opção </option>`)
                    for (var j=0; j<options.length; j++){
                        
                        if (perguntas[i].idTipo == options[j].idTipo){
                            caixa += (`<option value=${options[j].idOpcao}> ${options[j].Alternativa}</option>`)
                            
                        } 
                    }

                    caixa += (`</select> </div> </div>`) 
                    $(font2).append(caixa)
                   
                    }
            }
        }

    const eixo1 = { perguntas: arrayPerguntas , respostas: [] };

    $("#sizebutton").on('click', function(event) {
        event.preventDefault();

        if (window.localStorage.getItem(eixo1)) {
            window.localStorage.removeItem(eixo1)
        }

        
        $("select").each(function() {
            eixo1.respostas.push($(this).val());
        });

        window.localStorage.setItem("eixo1", JSON.stringify(eixo1));

        console.log(window.location)
        console.log(window.Location)

        //window.location.replace(window.location.origin + "/formsEixo2")


       
        return false;

    });
});

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
    
    if (linha.idEixo == 2){
        listapergunta.push(linha.idPergunta); 
    }
}
console.log(listapergunta)
console.log(listapergunta.length)
console.log(listapergunta[0])
console.log(listapergunta.length + listapergunta[0] - 1)
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

    
}

}