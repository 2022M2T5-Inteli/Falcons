const canva = document.getElementById("myChart");
const config = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};

var data = {
  labels: [
    "Ensino",
    "Equidade",
    "Pessoas",
    "Fluxo",
    "Gestão para Resultados",
    "Infra e TI",
    "Incentivos",
  ],
  datasets: [
    (item1 = {
      label: "Valores Ideais",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [5, 5, 5, 5, 5, 5, 5],
    }),
    (item2 = {
      label: "Status Atual",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [2, 3, 4, 1, 3, 2, 5],
    }),
  ],
};

var myRadarChart = new Chart(canva.getContext("2d"), {
  type: "radar",
  data: data,
});

function updateTabela() {
  document.getElementById("valor1").innerHTML = data.datasets[1].data[0];
  document.getElementById("valor2").innerHTML = data.datasets[1].data[1];
  document.getElementById("valor3").innerHTML = data.datasets[1].data[2];
  document.getElementById("valor4").innerHTML = data.datasets[1].data[3];
  document.getElementById("valor5").innerHTML = data.datasets[1].data[4];
  document.getElementById("valor6").innerHTML = data.datasets[1].data[5];
  document.getElementById("valor7").innerHTML = data.datasets[1].data[6];

  var op1 = 5 - data.datasets[1].data[0];
  var op2 = 5 - data.datasets[1].data[1];
  var op3 = 5 - data.datasets[1].data[2];
  var op4 = 5 - data.datasets[1].data[3];
  var op5 = 5 - data.datasets[1].data[4];
  var op6 = 5 - data.datasets[1].data[5];
  var op7 = 5 - data.datasets[1].data[6];

  document.getElementById("oportunidade1").innerHTML = op1;
  document.getElementById("oportunidade2").innerHTML = op2;
  document.getElementById("oportunidade3").innerHTML = op3;
  document.getElementById("oportunidade4").innerHTML = op4;
  document.getElementById("oportunidade5").innerHTML = op5;
  document.getElementById("oportunidade6").innerHTML = op6;
  document.getElementById("oportunidade7").innerHTML = op7;

  //Resultados Referentes ao Eixo de Ensino para Agenda Educacional
  if (op1 == 1) {
    document.getElementById("diag1").innerHTML = "<strong>1. Ensino: </strong>Resultado1";
  } else if (op1 == 2) {
    document.getElementById("diag1").innerHTML = "<strong>1. Ensino: </strong>Resultado2";
  } else if (op1 == 3) {
    document.getElementById("diag1").innerHTML = "<strong>1. Ensino: </strong>Resultado3";
  } else if (op1 == 4) {
    document.getElementById("diag1").innerHTML = "<strong>1. Ensino: </strong>Resultado4";
  } else if (op1 == 5) {
    document.getElementById("diag1").innerHTML = "<strong>1. Ensino: </strong>Resultado5";
  } else if (op1 == 6) {
    document.getElementById("diag1").innerHTML = "<strong>1. Ensino: </strong>Resultado6";
  } else {
    document.getElementById("diag1").innerHTML = "<strong>1. Ensino: </strong>Resultado7";
  }

  //Resultados Referentes ao Eixo de Equidade para Agenda Educacional
  if (op2 === 1) {
    document.getElementById("diag2").innerHTML = "<strong>2. Equidade: </strong>Resultado1";
  } else if (op2 === 2) {
    document.getElementById("diag2").innerHTML = "<strong>2. Equidade: </strong>Resultado2";
  } else if (op2 === 3) {
    document.getElementById("diag2").innerHTML = "<strong>2. Equidade: </strong>Resultado3";
  } else if (op2 === 4) {
    document.getElementById("diag2").innerHTML = "<strong>2. Equidade: </strong>Resultado4";
  } else if (op2 === 5) {
    document.getElementById("diag2").innerHTML = "<strong>2. Equidade: </strong>Resultado5";
  } else if (op2 === 6) {
    document.getElementById("diag2").innerHTML = "<strong>2. Equidade: </strong>Resultado6";
  } else {
    document.getElementById("diag2").innerHTML = "<strong>2. Equidade: </strong>Resultado7";
  }

  //Resultados Referentes ao Eixo de Pessoas para Agenda Educacional
  if (op3 == 1) {
    document.getElementById("diag3").innerHTML = "<strong>3. Pessoas: </strong>Resultado1";
  } else if (op3 == 2) {
    document.getElementById("diag3").innerHTML = "<strong>3. Pessoas: </strong>Resultado2";
  } else if (op3 == 3) {
    document.getElementById("diag3").innerHTML = "<strong>3. Pessoas: </strong>Resultado3";
  } else if (op3 == 4) {
    document.getElementById("diag3").innerHTML = "<strong>3. Pessoas: </strong>Resultado4";
  } else if (op3 == 5) {
    document.getElementById("diag3").innerHTML = "<strong>3. Pessoas: </strong>Resultado5";
  } else if (op3 == 6) {
    document.getElementById("diag3").innerHTML = "<strong>3. Pessoas: </strong>Resultado6";
  } else {
    document.getElementById("diag3").innerHTML = "<strong>3. Pessoas: </strong>Resultado7";
  }

  //Resultados Referentes ao Eixo de Fluxo para Agenda Educacional
  if (op4 == 1) {
    document.getElementById("diag4").innerHTML =
      "<strong>4. Fluxo:</strong>Resultado1";
  } else if (op4 == 2) {
    document.getElementById("diag4").innerHTML =
      "<strong>4. Fluxo: </strong>Resultado2";
  } else if (op4 == 3) {
    document.getElementById("diag4").innerHTML =
      "<strong>4. Fluxo: </strong> Resultado3";
  } else if (op4 == 4) {
    document.getElementById("diag4").innerHTML =
      "<strong>4. Fluxo: </strong>Resultado4";
  } else if (op4 == 5) {
    document.getElementById("diag4").innerHTML =
      "<strong>4. Fluxo: </strong>Resultado5";
  } else if (op4 == 6) {
    document.getElementById("diag4").innerHTML =
      "<strong>4. Fluxo: </strong>Resultado6";
  } else {
    document.getElementById("diag4").innerHTML =
      "<strong>4. Fluxo: </strong>Resultado7";
  }


  //Resultados Referentes ao Eixo de Fluxo para Agenda Educacional
  if (op5 == 1) {
    document.getElementById("diag5").innerHTML =
      "<strong>5. Gestão para Resultados:</strong>Resultado1";
  } else if (op5 == 2) {
    document.getElementById("diag5").innerHTML =
      "<strong>5. Gestão para Resultados:</strong>Resultado2";
  } else if (op5 == 3) {
    document.getElementById("diag5").innerHTML =
      "<strong>5. Gestão para Resultados:</strong>Resultado3";
  } else if (op5 == 4) {
    document.getElementById("diag5").innerHTML =
      "<strong>5. Gestão para Resultados:</strong>Resultado4";
  } else if (op5 == 5) {
    document.getElementById("diag5").innerHTML =
      "<strong>5. Gestão para Resultados:</strong>Resultado5";
  } else if (op4 == 6) {
    document.getElementById("diag5").innerHTML =
      "<strong>5. Gestão para Resultados:</strong>Resultado6";
  } else {
    document.getElementById("diag5").innerHTML =
      "<strong>5. Gestão para Resultados:</strong>Resultado7";
  }

  //Resultados Referentes ao Eixo de Infra e TI para Agenda Educacional
  if (op6 == 1) {
    document.getElementById("diag6").innerHTML =
      "<strong>6. Infra e TI:</strong>Resultado1";
  } else if (op6 == 2) {
    document.getElementById("diag6").innerHTML =
      "<strong>6. Infra e TI:</strong>Resultado2";
  } else if (op6 == 3) {
    document.getElementById("diag6").innerHTML =
      "<strong>6. Infra e TI:</strong>Resultado3";
  } else if (op6 == 4) {
    document.getElementById("diag6").innerHTML =
      "<strong>6. Infra e TI:</strong>Resultado4";
  } else if (op6 == 5) {
    document.getElementById("diag6").innerHTML =
      "<strong>6. Infra e TI:</strong>Resultado5";
  } else if (op6 == 6) {
    document.getElementById("diag6").innerHTML =
      "<strong>6. Infra e TI:</strong>Resultado6";
  } else {
    document.getElementById("diag6").innerHTML =
      "<strong>6. Infra e TI:</strong>Resultado7";
  }

  if (op7 == 1) {
    document.getElementById("diag7").innerHTML =
      "<strong>7. Incentivos:</strong>Resultado1";
  } else if (op7 == 2) {
    document.getElementById("diag7").innerHTML =
      "<strong>7. Incentivos:</strong>Resultado2";
  } else if (op7 == 3) {
    document.getElementById("diag7").innerHTML =
      "<strong>7. Incentivos:</strong>Resultado3";
  } else if (op7 == 4) {
    document.getElementById("diag7").innerHTML =
      "<strong>7. Incentivos:</strong>Resultado4";
  } else if (op7 == 5) {
    document.getElementById("diag7").innerHTML =
      "<strong>7. Incentivos:</strong>Resultado5";
  } else if (op7 == 6) {
    document.getElementById("diag7").innerHTML =
      "<strong>7. Incentivos:</strong>Resultado6";
  } else {
    document.getElementById("diag7").innerHTML =
      "<strong>7. Incentivos:</strong>Resultado7";
  }
}

const canva2 = document.getElementById("myChart2");

var data2 = {
  labels: [
    "Ensino",
    "Equidade",
    "Pessoas",
    "Fluxo",
    
  ],
  datasets: [
    (item1 = {
      label: "Valores Ideais",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [5, 5, 5, 5, 5, 5, 5],
    }),
    (item2 = {
      label: "Status Atual",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [2, 3, 4, 1, 3, 2, 5],
    }),
  ],
};

var myRadarChart = new Chart(canva2.getContext("2d"), {
  type: "radar",
  data: data,
});


// 
const canva3 = document.getElementById("myChart3");

var data3 = {
  labels: [
    "Ensino",
    "Equidade",
    "Pessoas",
    "Fluxo",
    "Gestão para Resultados",
    "Infra e TI",
    "Incentivos",
  ],
  datasets: [
    (item1 = {
      label: "Valores Ideais",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [5, 5, 5, 5, 5, 5, 5],
    }),
    (item2 = {
      label: "Status Atual",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [2, 3, 4, 1, 3, 2, 5],
    }),
  ],
};

var myRadarChart = new Chart(canva3.getContext("2d"), {
  type: "radar",
  data: data2,
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

function updateData(){

  var Escola = document.getElementById("Escola").value

  var url = '/Respostas1?Escola:"'+Escola+'"' //endpoint
  var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
  xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
  xhttp.send() //envia o request
  var dados1 = JSON.parse(xhttp.responseText)

  var url2 = '/Respostas2?Escola:"'+Escola+'"' //endpoint
  var xhttp2 = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
  xhttp2.open("get", url2, false) //define o metódo do request (/get), o endpoint (url), async ou n
  xhttp2.send() //envia o request
  var dados2 = JSON.parse(xhttp.responseText)

  console.log(dados2)
  console.log(dados1)

}