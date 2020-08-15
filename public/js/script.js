$(document).ready(function () {
    const queryURL = "https://www.dnd5eapi.co/api/";
    $.ajax({
        url: queryURL,
        type: "GET",
        success: function (result) {
            console.log(result)
        },
        error: function (error) {
            console.log(error);
        }
    })
    //for spells
    const spellSelect = $("#spells")
    spellSelect.on('change', function (event) {
        const spellname = $(this).val()
        console.log(spellname)
        $.ajax({
            url: queryURL + "spells/" + spellname,
            type: "GET",
            success: function (result) {
                console.log(result)
            },
            error: function (error) {
                console.log(error);
            }
        })
    })

})