$(document).ready(function () {
    const queryURL = "https://www.dnd5eapi.co/api/";
    let classArray = []
    console.log(classArray)
    let spellArray = []
    let raceArray = []
    let langArray = []
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
    //for class
    function populateClass() {
        $.ajax({
            url: queryURL + "classes/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    console.log(results.results[i].name)
                }
            },
            error: function (index) {
                console.log(index.results);
            }
        })
    }
    populateClass()
    //for spells
    function populateSpells() {
        $.ajax({
            url: queryURL + "spells/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    console.log(results.results[i].name)
                }
            },
            error: function (index) {
                console.log(index.results);
            }
        })
    }
    populateSpells()
    //for races
    function populateRaces() {
        $.ajax({
            url: queryURL + "races/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    console.log(results.results[i].name)
                }
            },
            error: function (index) {
                console.log(index.results);
            }
        })
    }
    populateRaces()
    //to get languages
    function populateLang() {
        $.ajax({
            url: queryURL + "languages/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    console.log(results.results[i].name)
                }
            },
            error: function (index) {
                console.log(index.results);
            }
        })
    }
    populateLang()
})