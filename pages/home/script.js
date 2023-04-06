document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o carrossel
    $('.carrossel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


    //Ativa o modal

    $("#entrar").click(function(){

        $(".modal").show();   
        $('#box-principal').css("background-color", "#0F270F");
        $('.buttons').css("color", "gray");
        $('#input-pesquisa').css("background-color", "gray");
        $('.icon-header').css("display", "none");
        $('#logo').css("display", "none");
    });

    //Fecha o modal

    $(".img-fechar").click(function(){
        $(".modal").hide();   
        $('#box-principal').css("background-color", "#859479"); 
        $('.buttons').css("color", "#FFFFFF");
        $('#input-pesquisa').css("background-color", "#FFFFFF");
        $('.icon-header').css("display", "block");
        $('#logo').css("display", "block");
    });

});