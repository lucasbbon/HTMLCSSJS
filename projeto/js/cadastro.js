// Endpoint, API, de candidatos
let urlCandidatos = "http://localhost:3000/candidatos";

const formulario = $("#cadastro");
const msg = $("#mensagem");

formulario.on("submit", function (event) {
  event.preventDefault();
  let dados = {
    nome: $("#nome").val(),
    data: $("#data").val(),
    telefone: $("#telefone").val(),
    email: $("#email").val(),
    vaga: $("#vaga option:selected").text(),
  };

  /* Usando Ajax via jQuery */
  $.ajax({
    url: urlCandidatos,
    method: "POST" /* enviar/gravar dados no server */,
    data: dados,
    success: function () {
      //alert("Dados enviados com sucesso");
      msg.text("Dados enviados com sucesso");
      msg.css("color", "blue");
      formulario[0].reset();
    },
    error: function () {
      //alert("Deu ruim!");
      msg.text("Deu ruim!");
      msg.css("color", "red");
    },
  });
});
