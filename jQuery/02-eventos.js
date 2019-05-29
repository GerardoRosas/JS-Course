$(document).ready(function(){
    
    //Eventos mouseOver y Mouse
    var caja = $("#caja");
    var datos = $("#datos");

    /*
    caja.mouseover(function(){ //cuando pasa el cursor por encima
        $(this).css("background", "red");
    })

    caja.mouseout(function(){ //cuando sale el cursosr de un elemento
        $(this).css("background", "green");
    })
    */

    function cambiaRojo(){ //cuando pasa el cursor por encima
        $(this).css("background", "red");
    }

   
    function cambiaVerde(){ //cuando sale el cursosr de un elemento
        $(this).css("background", "green");
    }

    //Evento over
    caja.hover(cambiaRojo, cambiaVerde);
    //datos.hover(cambiaRojo, cambiaVerde);



    //click
    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
    })

    datos.click(function(){
        $(this).css("background", "orange");
    })

    //dobleclick
    caja.dblclick(function(){
        $(this).css("background", "pink")
                .css("color", "yellow");
    })

    datos.dblclick(function(){
        $(this).css("background", "black").css("color", "white");
    })

    //Evento Focus y blur

    var nombre = $("#nombre");

    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    })

    datos.focus(function(){
        $(this).css("background", "red");
    })

    nombre.blur(function(){ 
        $(this).css("border", "1px solid #ccc");
    })

    //mousedown y mouseup
    //cuando se hace presion al click

    datos.mousedown(function(){
        $(this).css("border-color", "green");
    })

    datos.mouseup(function(){
        $(this).css("border-color", "yellow");
    })

    //mousemove
    $(document).mousemove(function(){
        //console.log(event.clientX+" "+ event.clientY);
        let sigueme = $("#sigueme");
        sigueme.css("left",event.clientX).css("top",event.clientY);;
                
    })

});