function update(){ 
  var select = document.getElementById('agendas');//Importar Seletor = HTML 
  var text = select.options[select.selectedIndex].text; //Pegar o valor do seletor
  console.log(text); // Português

  if(text == "Agenda Educacional"){
    document.getElementById("Eixo").innerHTML = "<option value=''>Selecione...</option><option value='Eixo1'>Ensino</option> <option value='Eixo2'>Equidade</option> <option value='Eixo3'>Pessoas</option> <option value='Eixo4'>Fluxo</option> <option value='Eixo5'>Gestão para Resultados</option><option value='Eixo6'>Infraestrutura e TI</option> <option value='Eixo7'>Gestão para Resultados</option>"
  }
  else if (text == "Agenda de Gestão"){
    document.getElementById("Eixo").innerHTML = "<option value=''>Selecione...</option><option value='Eixo1'>Gestão de Pessoas</option> <option value='Eixo2'>Sistema de Gestão</option>"
  }

}


function updateQuestions(){
  var select = document.getElementById('Eixo');
  var eixoSelect = select.options[select.selectedIndex].text;
  console.log(eixoSelect); 

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
          perguntas = perguntas.filter(pergunta => pergunta.idEixo === 1);
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
});
}



function updateQuestions(){
  var select = document.getElementById('Eixo');
  var eixoSelect = select.options[select.selectedIndex].text;
  console.log(eixoSelect); // Português

  $(document).ready(function(){
    var url = '/Pergunta' //endpoint
      var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
      xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
      xhttp.send() //envia o request
      var data = JSON.parse(xhttp.responseText)

      if(eixoSelect == "Ensino"){
          var start = 0 
          var eixoLength = 12;
      }
      for (var i = start; i < eixoLength ;i++){
        $(dados1).append("")
        $(dados1).append(`<div class="row col-12 text-center align-items-center m-2 questions" id="question${data[i].idPergunta}"> 
        <!--linha das questões-->
        <div class="col-lg-1">
          <h6 style="border:black solid 1pt; border-radius:50px;">${data[i].idPergunta}</h6>
        </div>
      
        <div class="col-lg-3">
          <h6>${data[i].idPergunta}</h6>
        </div>
      
        <div class="col-lg-6">
          <h6>${data[i].Pergunta}</h6>
        </div>
      
        <div class="col-lg-2 d-flex justify-content-center">
          <button id="editBtn" onclick="openQuestion(${data[i].idPergunta});">
            <i class="bi bi-brush" id="edit"></i>
          </button>
        </div>
      </div>`)
    }
   });
}


function setQuestionModal(questionObj) {
  let radioButtons = [];

  // sets the modal content according
  // to the question object
  $("#questionNumberText").text(questionObj.number + ".");
  $("#questionModalTitle").text(questionObj.title);
  $("#questionModalText").text(questionObj.question);
  $("#questionWeightSelect").prop("selectedIndex", questionObj.weight);

  // add the question options
  const questionOptionsList = questionObj.options;
  questionOptionsList.forEach((questionOption) => {
    let radioButton = `<div class="form-check p-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio${questionOption.id}">
    <label class="form-check-label" contenteditable="true">
      <p>${questionOption.name}</p>
    </label>
  </div>`;

    radioButtons.push(radioButton);
  });

  $("#optionsBody").empty().append(radioButtons);
}

function removeQuestionCard(questionId) {
  questionCards = questionCards.filter((questionCard) => {
    return questionCard.id != questionId;
  });
  $(`#question${questionId}`).remove();
}

function openQuestion(questionId) {
  let questionObj = questionCards.filter((obj) => {
    return obj.id == questionId;
  })[0];
  setQuestionModal(questionObj);
  let questionModal = new bootstrap.Modal(
    document.getElementById("questionModal")
  );
  questionModal.toggle();
}

$(document).ready(function () {
  questionCards.forEach((question) => {
    let newQuestionCard = createQuestionCard(
      question.id,
      question.number,
      question.domain,
      question.question
    );
    $("#questionsWrapper").append(newQuestionCard);
  });
});

function test(){
  var tabsNewAnim = $('#navbarSupportedContent');
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px", 
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function(){
  setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
  setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
  setTimeout(function(){ test(); });
});

//Home

