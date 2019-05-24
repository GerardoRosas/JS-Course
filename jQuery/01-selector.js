$(document).ready(function(){ //Metodo ready es un evento

    //Selector de ID
    $("#rojo").css('background', 'red');
    //con el metodo .css puedo cambiar los valores (primer parametro clave, segundo parametro valor)

    var amarillo = $("#amarillo").css('background', 'yellow')
                                .css('color', 'green');

    $("#green").css('background', 'green');

    //Sleectores de clase
    //Se utiliza el . para hacer seleccion de las clases

    let mi_clase = $('.zebra');
    mi_clase.css('border', '5px dashed black');
    console.log(mi_clase);

    //Selector de etiqueta
    var parrafos = $('p').css('cursos', 'pointer');
    parrafos.click(function(){
        if($(this).hasCLass('zebra')){
            $(this).removeClass('zebra');
        }
        
    });

    //Selector de atributo
    $('[title = "Google"]').css('backgroud', '#css');

    //Otros
    





})