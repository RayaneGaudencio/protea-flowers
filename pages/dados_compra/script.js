document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o carrossel

    //Ativa o modal

    $(".sobre-submit").click(function(){
        $(".modal").fadeIn();

        $('#box-principal').css("background-color", "#0F270F");
        $('.buttons a').css("color", "gray");
        $('.buttons').css("color", "gray");
        $('#input-pesquisa').css("background-color", "gray");
        $('.icon-header').css("display", "none");
        $('#logo').css("display", "none");
        $('main').css("background-color", "#0F270F");
        $('html, body').css("background-color", "#0F270F");
        $('.box-centro-dados').css("background-color", "#0F270F");
        $('#input-pesquisa').css("background-color", "gray");

    });

    //Fecha o modal

    $(".img-fechar").click(function(){
        $(".modal").fadeOut();   
        $('#box-principal').css("background-color", "#859479"); 
        $('.buttons a').css("color", "#FFFFFF");
        $('.buttons').css("color", "#FFFFFF");
        $('#input-pesquisa').css("background-color", "#FFFFFF");
        $('.icon-header').css("display", "block");
        $('#logo').css("display", "block");
    });

});