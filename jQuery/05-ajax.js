$(document).ready(function(){
    //Load
    //obtiene el html de alguna pagina no peticion que estemos usando
    //$("#datos").load()

    //Get y post

    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        console.log(response);
    })

})