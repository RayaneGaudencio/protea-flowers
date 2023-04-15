document.addEventListener('DOMContentLoaded', function() {


    //Ativa o modal

    $(".entrar, .Central-vendedor").click(function(){
        if ($(this).attr('class') == "Central-vendedor") {
            $(".vendedor-modal").fadeIn();
            $(".vendedor").fadeIn();
        }else{
            $(".cliente-modal").fadeIn();
            $(".cliente").fadeIn();

        }
        $('body').css("overflow", "hidden");
        
    });

    //Fecha o modal

    $(".img-fechar").click(function(){
        $(".fundo-modal").fadeOut();
        $(".modal").fadeOut();

        $('body').css("overflow", "visible");   
        
    });

});