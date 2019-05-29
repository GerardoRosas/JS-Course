$(document).ready(function(){

    reloadLink();

    $('#add-button').click(function(){
        $('#menu').append('<li><a href = "'+$("#add-link").val()+'"></a></li>');
    })

  
})

function reloadLink(){
    $('a').each(function(index){
        //attr selecciona el atributo
        var that = $(this);
        var enlace = that.attr("href");
        //meter texto
        that.text(enlace);

    })
}