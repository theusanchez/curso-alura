var tempoInicio = $("#segundos-restantes").text();
var campoDigitacao = $(".campo-digitacao");


$(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text(); // Pegando a frase 
    var contarPalavras = frase.split(" ").length; // Separando a frase por espacos e contando quantas palavras.
    $("#tamanho-frase").text(contarPalavras); // Acrescentando a dinamicidade do contador de palavras.
}

function inicializaContadores() {
    campoDigitacao.on("input", function(){
        var conteudo = campoDigitacao.val();

        var qtdPalavras = conteudo.split(/\S+/).length -1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    
    }) 
}

function inicializaCronometro() {
    campoDigitacao.one("focus", function(){
        $("#botao-reiniciar").attr("disabled",true);
        var segundosRestantes = $("#segundos-restantes").text();
        var cronometroId = setInterval(function() {
            segundosRestantes--;
            $("#segundos-restantes").text(segundosRestantes);
            if (segundosRestantes < 1) {
                campoDigitacao.attr("disabled", true);
                clearInterval(cronometroId);
                $("#botao-reiniciar").attr("disabled",false);
                campoDigitacao.toggleClass("campo-desabilitado");
                console.log("teste");
                
            }
        }, 1000);
    });  
}

function reiniciaJogo() {
    var botaoReiniciar = $("#botao-reiniciar");
    botaoReiniciar.click(function(){
    campoDigitacao.attr("disabled", false);
    segundosRestantes = $("#segundos-restantes").text(tempoInicio);
    campoDigitacao.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    campoDigitacao.toggleClass("campo-desabilitado");
    console.log("tste");
    inicializaCronometro();

});
}
