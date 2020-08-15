$(document).ready(function() {
    const queryURL = "https://www.dnd5eapi.co/api/";
    $.ajax({ 
        url: queryURL,
        type: "GET",
        success: function (result){
            console.log(result)
        },
        error: function(error){
            console.log(error);
        }
    }) 
})