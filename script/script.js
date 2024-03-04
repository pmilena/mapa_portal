// Função para atualizar as cores com base na seleção do curso
function atualizarCores() {
    var cursoSelect = document.getElementById("cursoSelect");
    var cursoSelecionado = cursoSelect.value;

    // Obter todos os elementos .dot
    var dots = document.querySelectorAll(".dot");

    // Resetar todas as cores para inativo
    dots.forEach(function (dot) {
      dot.classList.remove(
        "administracao",
        "arqueologia",
        "ciencias_biologicas",
        "ciencias_contabeis",
        "ciencias_sociais",
        "comunicacao_jornalismo",
        "comunicacao_radio_tv",
        "comunicacao_relacoes_publicas",
        "design",
        "direito",
        "educacao_fisica",
        "enfermagem",
        "engenharia_agronomica",
        "engenharia_bioprocessos_biotecnologia",
        "engenharia_minas",
        "engenharia_pesca",
        "engenharia_producao_civil",
        "engenharia_sanitaria_ambiental",
        "farmacia",
        "filosofia",
        "fisica",
        "fisioterapia",
        "fonoaudiologia",
        "geografia",
        "historia",
        "jogosdigitais",
        "letras_francesa_literaturas",
        "letras_inglesa_literaturas",
        "letras_portuguesa_literaturas",
        "letras_espanhola_literaturas",
        "matematica",
        "medicina_veterinaria",
        "medicina",
        "musica",
        "nutricao",
        "pedagogia",
        "psicologia",
        "quimica",
        "sistemas_informacao",
        "teatro",
        "turismo_hotelaria",
        "turismo"
      );
      dot.classList.add("inativo");
    });

    // Atualizar cores com base na seleção do curso
    switch (cursoSelecionado) {
      case "administracao":
        ["salvador", "juazeiro", "saj", "serrinha", "guanambi", "irece", "bjlapa", "eunapolis", "ipiau"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("administracao");
        });
        break;
      case "arqueologia":
        document.getElementById("pafonso").classList.remove("inativo");
        document.getElementById("pafonso").classList.add("arqueologia");
        break;
      case "ciencias_biologicas":
        ["alagoinhas", "caetite", "bonfim", "pafonso", "barreiras", "tfreitas"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("cienciasbiologicas");
        });
        break;
      case "ciencias_contabeis":
        ["salvador", "bonfim", "barreiras", "itaberaba", "bjlapa", "camacari"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("cienciascontabeis");
        });
        break;
      case "ciencias_sociais":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("cienciassociais");
        break;
      case "comunicacao_jornalismo":
        ["juazeiro", "seabra"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("comunicacaojornalismo");
        });
        break;
      case "comunicacao_radio_tv":
        document.getElementById("ccoite").classList.remove("inativo");
        document.getElementById("ccoite").classList.add("comunicacaoradioetv");
        break;
      case "comunicacao_relacoes_publicas":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("comunicacaorelacoespublicas");
        break;
      case "design":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("design");
        break;
      case "direito":
        ["salvador", "juazeiro", "jacobina", "pafonso", "itaberaba", "valenca", "camacari", "brumado"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("direito");
        });
        break;
      case "educacao_fisica":
        ["alagoinhas", "jacobina", "tfreitas", "guanambi"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("educacaofisica");
        });
        break;
      case "enfermagem":
        ["salvador", "bonfim", "guanambi"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("enfermagem");
        });
        break;
      case "engenharia_agronomica":
        ["juazeiro", "barreiras", "euclides"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("engenhariaagronomica");
        });
        break;
      case "engenharia_bioprocessos_biotecnologia":
        document.getElementById("juazeiro").classList.remove("inativo");
        document.getElementById("juazeiro").classList.add("engenhariabioprocessosbiotecnologia");
        break;
      case "engenharia_minas":
        document.getElementById("caetite").classList.remove("inativo");
        document.getElementById("caetite").classList.add("engenhariademinas");
        break;
      case "engenharia_pesca":
        ["pafonso", "xique-xique"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("engenhariadepesca");
        });
        break;
      case "engenharia_producao_civil":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("engenhariadeproducaocivil");
        break;
      case "engenharia_sanitaria_ambiental":
        ["alagoinhas", "xique-xique"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("engenhariasanitariaambiental");
        });
        break;
      case "farmacia":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("farmacia");
        break;
      case "filosofia":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("filosofia");
        break;
      case "fisica":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("fisica");
        break;
      case "fisioterapia":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("fisioterapia");
        break;
      case "fonoaudiologia":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("fonoaudiologia");
        break;
      case "geografia":
        ["jacobina", "saj", "caetite", "serrinha"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("geografia");
        });
        break;
      case "historia":
        ["alagoinhas", "jacobina", "saj", "caetite", "tfreitas", "itaberaba", "ccoite", "eunapolis"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("historia");
        });
        break;
      case "jogos_digitais":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("jogosdigitais");
        break;
      case "letras_francesa_literaturas":
        ["salvador", "alagoinhas"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("letrasfranceseliteraturas");
        });
        break;
      case "letras_inglesa_literaturas":
        ["salvador", "alagoinhas", "jacobina", "saj", "caetite", "tfreitas", "ccoite", "seabra"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("letrasinglesaliteraturas");
        });
        break;
      case "letras_portuguesa_literaturas":
        ["salvador", "alagoinhas", "jacobina", "saj", "caetite", "tfreitas", "ccoite", "irece", "eunapolis", "brumado", "ipiau", "seabra", "xique-xique"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("letrasportuguesaliteraturas");
        });
        break;
      case "letras_espanhola_literaturas":
        ["salvador", "saj"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("letrasespanholaliteraturas");
        });
        break;
      case "matematica":
        ["caetite", "alagoinhas", "bonfim", "pafonso", "barreiras", "tfreitas"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("matematica");
        });
        break;
      case "medicina_veterinaria":
        document.getElementById("barreiras").classList.remove("inativo");
        document.getElementById("barreiras").classList.add("medicinaveterinaria");
        break;
      case "medicina":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("medicina");
        break;
      case "musica":
        document.getElementById("tfreitas").classList.remove("inativo");
        document.getElementById("tfreitas").classList.add("musica");
        break;
      case "nutricao":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("nutricao");
        break;
      case "pedagogia":
        ["salvador", "lfreitas", "alagoinhas", "juazeiro", "bonfim", "pafonso", "barreiras", "tfreitas", "serrinha", "guanambi", "itaberaba", "valenca", "irece", "bjlapa", "seabra"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("pedagogia");
        });
        break;
      case "psicologia":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("psicologia");
        break;
      case "quimica":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("quimica");
        break;
      case "sistemas_informacao":
        ["salvador", "alagoinhas"].forEach(function (curso) {
          document.getElementById(curso).classList.remove("inativo");
          document.getElementById(curso).classList.add("sistemasdeinformacao");
        });
        break;
      case "teatro":
        document.getElementById("bonfim").classList.remove("inativo");
        document.getElementById("bonfim").classList.add("teatro");
        break;
      case "turismo_hotelaria":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("turismohotelaria");
        break;
      case "turismo":
        document.getElementById("eunapolis").classList.remove("inativo");
        document.getElementById("eunapolis").classList.add("turismo");
        break;
      case "urbanismo":
        document.getElementById("salvador").classList.remove("inativo");
        document.getElementById("salvador").classList.add("urbanismo");
        break;
      default:
        // Caso "cursos de graduação" seja selecionado, resete todas as cores
        dots.forEach(function (dot) {
          dot.classList.remove("inativo");
        });
        break;
    }

    dots.forEach(function (dot) {
     
var opcaoSelecionada = document.getElementById("cursoSelect").value;

if (!dot.classList.contains("inativo") && opcaoSelecionada !== "all") {
  dot.classList.add("pulsar", "vermelho");
} else {
  dot.classList.remove("pulsar", "vermelho");
}
});

}