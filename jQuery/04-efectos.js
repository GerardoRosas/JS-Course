$(document).ready(function(){
    
    //Efecto Hide y Show

    let caja = $("#caja");
    let mostrar = $("#mostrar");
    let ocultar = $("#ocultar");

    mostrar.hide();

    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        caja.show('fast'); //Efecto fadeIn
    })

    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        caja.hide('fast'); //Efecto fadeOut
    })

    $("#todoenuno").click(function(){
        caja.slideToggle('fast');
    })

})