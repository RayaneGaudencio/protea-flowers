document.addEventListener('DOMContentLoaded', function() {


    //Ativa o modal

    $(".entrar, .Central-vendedor").click(function(){
        if ($(this).attr('class') == "Central-vendedor") {
            $(".vendedor").fadeIn();
        }else{
            $(".cliente").fadeIn();
        }

        $('#box-principal').css("background-color", "#0F270F");
        $('.buttons a').css("color", "gray");
        $('.buttons').css("color", "gray");
        $('#input-pesquisa').css("background-color", "gray");
        $('.icon-header').css("display", "none");
        $('#logo').css("display", "none");
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