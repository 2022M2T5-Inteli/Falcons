// mockupCards
let questionCards = [
  {
    id: 1,
    number: "2",
    domain: "Tema 2",
    question: "Questão 2",
    weight: 1,
    options: [
      {
        id: 1,
        name: "opcao A",
        point: 2,
      },
      {
        id: 2,
        name: "opcao B",
        point: 3,
      },
      {
        id: 3,
        name: "opcao C",
        point: 4,
      },
      {
        id: 4,
        name: "opcao D",
        point: 2,
      },
    ],
  },
  {
    id: 2,
    number: "3",
    domain: "Tema 3",
    question:
      "Questão 3",
    weight: 1,
    options: [
      {
        id: 1,
        name: "opcao A segunda",
        point: 2,
      },
      {
        id: 2,
        name: "opcao B segunda",
        point: 3,
      },
      {
        id: 3,
        name: "opcao C segunda",
        point: 4,
      },
      {
        id: 4,
        name: "opcao D segunda",
        point: 2,
      },
    ],
  },
  {
    id: 3,
    number: "4",
    domain: "Tema 4",
    question:
      "Questão 4",
    weight: 2,
    options: [
      {
        id: 1,
        name: "opcao A terceira",
        point: 2,
      },
      {
        id: 2,
        name: "opcao B terceira",
        point: 3,
      },
      {
        id: 3,
        name: "opcao C terceira",
        point: 4,
      },
      {
        id: 4,
        name: "opcao D terceira",
        point: 2,
      },
    ],
  },
];

function createQuestionCard(
  questionId,
  questionNumber,
  questionDomain,
  question
) {
  let newQuestionCard = `<div class="row col-12 text-center align-items-center m-2 questions" id="question${questionId}">
  <!--linha das questões-->
  <div class="col-lg-1">
    <h6 style="border:black solid 1pt; border-radius:50px;">Questão${questionNumber}</h6>
  </div>

  <div class="col-lg-3">
    <h6>${questionDomain}</h6>
  </div>

  <div class="col-lg-5">
    <h6>${question.substring(0, 46) + "..."}</h6>
  </div>

  <div class="col-lg-3 d-flex justify-content-center">
    <button  id="editBtn" onclick="openQuestion(${questionId});">
      <!--botão editar questões-->
      <i class="bi bi-brush" id="edit"></i>
    </button>
  </div>

</div>`;
  return newQuestionCard;
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

