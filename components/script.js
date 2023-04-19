function test2(){
    var linktest = document.getElementById('link2');
    linktest.onclick = function () {
        window.location = "../perfil_comprador/perfil_comprador.html";
    };
}

function test(){
    var linktest = document.getElementById('link');
    linktest.onclick = function () {
        window.location = "../perfil_vendedor/perfil_vendedor.html";
    };
}


document.addEventListener('DOMContentLoaded', function() {


    //Ativa o modal

    $(".entrar").click(function(){
            
        $(".cliente-modal").fadeIn();
        $(".cliente").fadeIn();
        
        $('body').css("overflow", "hidden");
        
    });

    $(".Central-vendedor").click(function(){
        
        $(".vendedor-modal").fadeIn();
        $(".vendedor").fadeIn();
       
        $('body').css("overflow", "hidden");
       
    });

    //Fecha o modal

    $(".img-fechar").click(function(){
        $(".fundo-modal").fadeOut();
        $(".modal").fadeOut();
        $('body').css("overflow", "visible");   
       
    });

    //Abrir menu mobile

    $(".menu-img").click(function(){
        $(".box-menu-mobile").toggle();
    });

});