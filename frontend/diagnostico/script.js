function updateData(){
  var Escola = document.getElementById("Escola").value

  var url = '/RespostaEducacional' //endpoint
  var xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
  xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
  xhttp.send() //envia o request
  var dados1 = JSON.parse(xhttp.responseText)

  var url2 = '/RespostaGestao' //endpoint
  var xhttp2 = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
  xhttp2.open("get", url2, false) //define o metódo do request (/get), o endpoint (url), async ou n
  xhttp2.send() //envia o request
  var dados2 = JSON.parse(xhttp2.responseText)

  var url3 = '/Peso' //endpoint
  var xhttp3 = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
  xhttp3.open("get", url3, false) //define o metódo do request (/get), o endpoint (url), async ou n
  xhttp3.send() //envia o request
  var pesos = JSON.parse(xhttp3.responseText)

  var RespostasEducacional = dados1.filter(dados1 => dados1.Escola === Escola); 
  var RespostasGestao = dados2.filter(dados2 => dados2.Escola === Escola);  

  var Eixo1 = RespostasEducacional.filter(dados1 => dados1.Eixo == 1)
  var Eixo2 = RespostasEducacional.filter(dados1 => dados1.Eixo == 2)
  var Eixo3 = RespostasEducacional.filter(dados1 => dados1.Eixo == 3)
  var Eixo4 = RespostasEducacional.filter(dados1 => dados1.Eixo == 4)
  var Eixo5 = RespostasEducacional.filter(dados1 => dados1.Eixo == 5)
  var Eixo6 = RespostasEducacional.filter(dados1 => dados1.Eixo == 6)
  var Eixo7 = RespostasEducacional.filter(dados1 => dados1.Eixo == 7)
  var Tema1 = RespostasGestao.filter(dados1 => dados1.Tema == 40)
  var Tema2 = RespostasGestao.filter(dados1 => dados1.Tema == 41)
  var Tema3 = RespostasGestao.filter(dados1 => dados1.Tema == 42)
  var Tema4 = RespostasGestao.filter(dados1 => dados1.Tema == 43)
  var Tema5 = RespostasGestao.filter(dados1 => dados1.Tema == 44)
  var Tema6 = RespostasGestao.filter(dados1 => dados1.Tema == 45)
  var Tema7 = RespostasGestao.filter(dados1 => dados1.Tema == 46)
  var Tema8 = RespostasGestao.filter(dados1 => dados1.Tema == 47)
  var Tema9 = RespostasGestao.filter(dados1 => dados1.Tema == 48)

  var listaNotasEixo1 = []
  var listaNotasEixo2 = []
  var listaNotasEixo3 = []
  var listaNotasEixo4 = []
  var listaNotasEixo5 = []
  var listaNotasEixo6 = []
  var listaNotasEixo7 = []
  var listaNotasTema1 = []
  var listaNotasTema2 = []
  var listaNotasTema3 = []
  var listaNotasTema4 = []
  var listaNotasTema5 = []
  var listaNotasTema6 = []
  var listaNotasTema7 = []
  var listaNotasTema8 = []
  var listaNotasTema9 = []


  // Consolidação e Calculo - Notas da Agenda Educacional 
  // Nota Eixo 1 
  for (var i = 0; i < Eixo1.length; i++){
    listaNotasEixo1.push(Eixo1[i].Resultado * pesos[1].Peso)
  }
  var notaEixo1 = 0;
  for (var i = 0; i < listaNotasEixo1.length; i++) {
    notaEixo1 += listaNotasEixo1[i];
  }
   var notaFinalEixo1 = Math.trunc(notaEixo1/listaNotasEixo1.length)
   console.log(notaFinalEixo1) 

  // Nota Eixo 2 
  for (var i = 0; i < Eixo2.length; i++){
    listaNotasEixo2.push(Eixo2[i].Resultado * pesos[1].Peso)
  }
  var notaEixo2 = 0;
  for (var i = 0; i < listaNotasEixo2.length; i++) {
    notaEixo2 += listaNotasEixo2[i];
  }
   var notaFinalEixo2 = Math.trunc(notaEixo2/listaNotasEixo2.length)
   console.log(notaFinalEixo2) 


  // Nota Eixo 3
  for (var i = 0; i < Eixo3.length; i++){
    listaNotasEixo3.push(Eixo3[i].Resultado * pesos[1].Peso)
  }
  var notaEixo3 = 0;
  for (var i = 0; i < listaNotasEixo3.length; i++) {
    notaEixo3 += listaNotasEixo3[i];
  }
   var notaFinalEixo3 = Math.trunc(notaEixo3/listaNotasEixo3.length)
   console.log(notaFinalEixo3) 

  // Nota Eixo 4
  for (var i = 0; i < Eixo4.length; i++){
    listaNotasEixo4.push(Eixo4[i].Resultado * pesos[1].Peso)
  }
  var notaEixo4 = 0;
  for (var i = 0; i < listaNotasEixo4.length; i++) {
    notaEixo4 += listaNotasEixo4[i];
  }
   var notaFinalEixo4 = Math.trunc(notaEixo4/listaNotasEixo4.length)
   console.log(notaFinalEixo4) 


  // Nota Eixo 5
  for (var i = 0; i < Eixo5.length; i++){
    listaNotasEixo5.push(Eixo5[i].Resultado * pesos[1].Peso)
  }
  var notaEixo5 = 0;
  for (var i = 0; i < listaNotasEixo5.length; i++) {
    notaEixo5 += listaNotasEixo5[i];
  }
   var notaFinalEixo5 = Math.trunc(notaEixo5/listaNotasEixo5.length)
   console.log(notaFinalEixo5) 


  // Nota Eixo 6
  for (var i = 0; i < Eixo6.length; i++){
    listaNotasEixo6.push(Eixo6[i].Resultado * pesos[1].Peso)
  }
  var notaEixo6 = 0;
  for (var i = 0; i < listaNotasEixo6.length; i++) {
    notaEixo6 += listaNotasEixo6[i];
  }
   var notaFinalEixo6 = Math.trunc(notaEixo6/listaNotasEixo6.length)
   console.log(notaFinalEixo6) 


  // Nota Eixo 7
  for (var i = 0; i < Tema1.length; i++){
    listaNotasEixo7.push(Eixo7[i].Resultado * pesos[1].Peso)
  }
  var notaEixo7 = 0;
  for (var i = 0; i < listaNotasEixo7.length; i++) {
    notaEixo7 += listaNotasEixo7[i];
  }
   var notaFinalEixo7 = Math.trunc(notaEixo7/listaNotasEixo7.length)
   console.log(notaFinalEixo7) 

  // Preenchimento de Notas da Tabela 
  document.getElementById("valor1").innerHTML = notaFinalEixo1
  document.getElementById("valor2").innerHTML = notaFinalEixo2
  document.getElementById("valor3").innerHTML = notaFinalEixo3
  document.getElementById("valor4").innerHTML = notaFinalEixo4
  document.getElementById("valor5").innerHTML = notaFinalEixo5
  document.getElementById("valor6").innerHTML = notaFinalEixo6
  document.getElementById("valor7").innerHTML = notaFinalEixo7

  // Preenchimento de Oportunidades da Tabela 
  var op1 = 5 - notaFinalEixo1;
  var op2 = 5 - notaFinalEixo2;
  var op3 = 5 - notaFinalEixo3;
  var op4 = 5 - notaFinalEixo4;
  var op5 = 5 - notaFinalEixo5;
  var op6 = 5 - notaFinalEixo6;
  var op7 = 5 - notaFinalEixo7;

  document.getElementById("oportunidade1").innerHTML = op1;
  document.getElementById("oportunidade2").innerHTML = op2;
  document.getElementById("oportunidade3").innerHTML = op3;
  document.getElementById("oportunidade4").innerHTML = op4;
  document.getElementById("oportunidade5").innerHTML = op5;
  document.getElementById("oportunidade6").innerHTML = op6;
  document.getElementById("oportunidade7").innerHTML = op7;

  // Plotagem do Gráfico
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
        data: [notaFinalEixo1, notaFinalEixo2, notaFinalEixo3, notaFinalEixo4, notaFinalEixo5, notaFinalEixo6, notaFinalEixo7],
      }),
    ],
  };
  
  var myRadarChart = new Chart(canva.getContext("2d"), {
    type: "radar",
    data: data,
  });


// Nota - Tema 40: Formulação Estratégica
   for (var i = 0; i < Tema1.length; i++){
    listaNotasTema1.push(Tema1[i].Resultado)
  }
  var notaTema1 = 0;
  for (var i = 0; i < listaNotasTema1.length; i++) {
    notaTema1 += listaNotasTema1[i];
  }
   var notaFinalTema1 = Math.trunc(notaTema1/listaNotasTema1.length)
   console.log(notaFinalTema1)
   document.getElementById("Ag2Valor1").innerHTML = notaFinalTema1

   
// Nota - Tema 41: Gestão para Diretrizes
for (var i = 0; i < Tema2.length; i++){
  listaNotasTema2.push(Tema2[i].Resultado)
}
var notaTema2 = 0;
for (var i = 0; i < listaNotasTema2.length; i++) {
  notaTema2 += listaNotasTema2[i];
}
 var notaFinalTema2 = Math.trunc(notaTema2/listaNotasTema2.length)
 console.log(notaFinalTema2) 
 document.getElementById("Ag2Valor2").innerHTML = notaFinalTema2


// Nota - Tema 42: Gestão de Projetos
for (var i = 0; i < Tema3.length; i++){
  listaNotasTema3.push(Tema3[i].Resultado)
}
var notaTema3 = 0;
for (var i = 0; i < listaNotasTema3.length; i++) {
  notaTema3 += listaNotasTema3[i];
}
 var notaFinalTema3 = Math.trunc(notaTema3/listaNotasTema3.length)
 console.log(notaFinalTema3) 
 document.getElementById("Ag2Valor3").innerHTML = notaFinalTema3


 // Nota - Tema 43: Gestão de Rotina
for (var i = 0; i < Tema4.length; i++){
  listaNotasTema4.push(Tema4[i].Resultado)
}
var notaTema4 = 0;
for (var i = 0; i < listaNotasTema4.length; i++) {
  notaTema4 += listaNotasTema4[i];
}
 var notaFinalTema4 = Math.trunc(notaTema4/listaNotasTema4.length)
 console.log(notaFinalTema4) 
 document.getElementById("Ag2Valor4").innerHTML = notaFinalTema4

 var totalSisGestao = (notaFinalTema1 + notaFinalTema2 + notaFinalTema3 + notaFinalTema4)/4
 document.getElementById("Ag2Valor5").innerHTML = totalSisGestao


  // Nota - Tema 44: Atrair e Integrar
for (var i = 0; i < Tema5.length; i++){
  listaNotasTema5.push(Tema5[i].Resultado)
}
var notaTema5 = 0;
for (var i = 0; i < listaNotasTema5.length; i++) {
  notaTema5 += listaNotasTema5[i];
}
 var notaFinalTema5 = Math.trunc(notaTema5/listaNotasTema5.length)
 console.log(notaFinalTema5) 
 document.getElementById("Ag2Valor6").innerHTML = notaFinalTema5

   // Nota - Tema 45: Treinar e Desenvolver
for (var i = 0; i < Tema6.length; i++){
  listaNotasTema6.push(Tema6[i].Resultado)
}
var notaTema6 = 0;
for (var i = 0; i < listaNotasTema6.length; i++) {
  notaTema6 += listaNotasTema6[i];
}
 var notaFinalTema6 = Math.trunc(notaTema6/listaNotasTema6.length)
 console.log(notaFinalTema6) 
 document.getElementById("Ag2Valor7").innerHTML = notaFinalTema6

    // Nota - Tema 46: Gerenciar Desempenho
for (var i = 0; i < Tema7.length; i++){
  listaNotasTema7.push(Tema7[i].Resultado)
}
var notaTema7 = 0;
for (var i = 0; i < listaNotasTema7.length; i++) {
  notaTema7 += listaNotasTema7[i];
}
 var notaFinalTema7 = Math.trunc(notaTema7/listaNotasTema7.length)
 console.log(notaFinalTema7) 
 document.getElementById("Ag2Valor8").innerHTML = notaFinalTema7


    // Nota - Tema 47: Reconhecer, Recompensar e Reter 
for (var i = 0; i < Tema8.length; i++){
  listaNotasTema8.push(Tema8[i].Resultado)
}
var notaTema8 = 0;
for (var i = 0; i < listaNotasTema8.length; i++) {
  notaTema8 += listaNotasTema8[i];
}
 var notaFinalTema8 = Math.trunc(notaTema8/listaNotasTema8.length)
 console.log(notaFinalTema8) 
 document.getElementById("Ag2Valor9").innerHTML = notaFinalTema8

   // Nota - Tema 48: Administrar e Estruturar 
   for (var i = 0; i < Tema9.length; i++){
    listaNotasTema9.push(Tema9[i].Resultado)
  }
  var notaTema9 = 0;
  for (var i = 0; i < listaNotasTema9.length; i++) {
    notaTema9 += listaNotasTema9[i];
  }
   var notaFinalTema9 = Math.trunc(notaTema9/listaNotasTema9.length)
   console.log(notaFinalTema9) 
   document.getElementById("Ag2Valor10").innerHTML = notaFinalTema9

   var totalGestaoPes = (notaFinalTema5 + notaFinalTema6 + notaFinalTema7 + notaFinalTema8 + notaFinalTema9)/5
   document.getElementById("Ag2Valor11").innerHTML = Math.round(totalGestaoPes)
  
   const canva2 = document.getElementById("myChart2");

   var data2 = {
     labels: [
       "Atrair e Integrar",
       "Treinar e Desenvolver",
       "Gerenciar Desempenho",
       "Reconhecer, Recompensar e Reter",
       "Administrar e Estruturar",
       
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
         data: [notaFinalTema5, notaFinalTema6, notaFinalTema7, notaFinalTema8, notaFinalTema9],
       }),
     ],
   };
   
   var myRadarChart = new Chart(canva2.getContext("2d"), {
     type: "radar",
     data: data2,
   });
   
   
   // 
   const canva3 = document.getElementById("myChart3");
   
   var data3 = {
     labels: [
       "Formulação Estratégica",
       "Gestão pelas Diretrizes",
       "Gestão de Projetos",
       "Gestão de Rotina",
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
         data: [5, 5, 5, 5],
       }),
       (item2 = {
         label: "Status Atual",
         fillColor: "rgba(151,187,205,0.2)",
         strokeColor: "rgba(151,187,205,1)",
         pointColor: "rgba(151,187,205,1)",
         pointStrokeColor: "#fff",
         pointHighlightFill: "#fff",
         pointHighlightStroke: "rgba(151,187,205,1)",
         data: [notaFinalTema1, notaFinalTema2, notaFinalTema3, notaFinalTema4],
       }),
     ],
   };
   
   var myRadarChart = new Chart(canva3.getContext("2d"), {
     type: "radar",
     data: data3,
   });

   var notaAgGestao = document.getElementById("notaFinal")
   notaAgGestao.innerHTML = Math.round((totalGestaoPes + totalSisGestao)/2)

}


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

