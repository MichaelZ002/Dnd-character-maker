$(document).ready(function () {
    const queryURL = "https://www.dnd5eapi.co/api/";
    const classArray = []
    const spellArray = []
    const raceArray = []
    const langArray = []
    nameInput = $("#name-input")
    classInput = $("#class-option")
    spellInput = $("#spell-option");
    raceInput = $("#race-option");
    langInput = $("#lang-option")
    
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
        $.ajax({
            url: queryURL + "classes/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    classArray.push(results.results[i].name)
                    console.log(classArray)
                }
            },
            error: function (index) {
                console.log(index.results);
            }
        })

        $.ajax({
            url: queryURL + "spells/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    spellArray.push(results.results[i].name)
                    console.log(spellArray)
                }
                genOptions()
            },
            error: function (index) {
                console.log(index.results);
            }
        })

        $.ajax({
            url: queryURL + "races/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    raceArray.push(results.results[i].name)
                    console.log(raceArray)
                }
            },
            error: function (index) {
                console.log(index.results);
            }
        })

        $.ajax({
            url: queryURL + "languages/",
            type: "GET",
            success: function (results) { 
                console.log(results, results.length)
                for(let i = 0; i < results.results.length; i++){
                    langArray.push(results.results[i].name)
                    console.log(langArray)
                }
            },
            error: function (index) {
                console.log(index.results);
            }
        })
    

    function genOptions(){

    let newOption = $('<option>');
        for(let i = 0; i < classArray.length; i++){
            newOption.text(classArray[i]);
            classInput.append(newOption)
        }

        for(let i = 0; i < spellArray.length; i++){
            newOption.text(spellArray[i]);
            spellInput.append(newOption)
        }

        for(let i = 0; i < raceArray.length; i++){
            newOption.text(raceArray[i]);
            raceInput.append(newOption)
        }

        for(let i = 0; i < langArray.length; i++){
            newOption.text(langArray[i]);
            langInput.append(newOption)
        }
    };


    
        

    })