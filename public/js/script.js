$(document).ready( async function () {
  console.log(`script.js loaded`)
  const queryURL = "https://www.dnd5eapi.co/api/";
  const classArray = [];
  const spellArray = [];
  const raceArray = [];
  const langArray = [];
  var allChar = [];
  nameInput = $("#name-input");
  classInput = $("#class");
  spellInput = $("#spells");
  raceInput = $("#race");
  langInput = $("#lang");
  allCharDiv = $("#all-char")

  const result = await $.ajax({
    url: queryURL,
    type: "GET"
  })

  console.log(result)

  //for class
   const classResult = await $.ajax({
    url: queryURL + "classes/",
    type: "GET",
  });
  for (let i = 0; i < classResult.results.length; i++) {
    classArray.push(classResult.results[i].name);

  }

  const spellsResult = await $.ajax({
    url: queryURL + "spells/",
    type: "GET",
  });
  for (let i = 0; i < spellsResult.results.length; i++) {
    spellArray.push(spellsResult.results[i].name);
  }

  const raceResult = await $.ajax({
    url: queryURL + "races/",
    type: "GET",
  });
  for (let i = 0; i < raceResult.results.length; i++) {
    raceArray.push(raceResult.results[i].name);
  }

  const langResult = await $.ajax({
    url: queryURL + "languages/",
    type: "GET",
  });
  for (let i = 0; i < langResult.results.length; i++) {
    langArray.push(langResult.results[i].name);
  }

  $.ajax({
    url: "/api/characters",
    type: "GET",
  }).then(function(response){
    allChar = response;
    getCharacters();
  })

  function genOptions() {

    for (let i = 0; i < classArray.length; i++) {
        let newOption = $("<option>");
      newOption.text(classArray[i]);
      classInput.append(newOption);
    }

    for (let i = 0; i < spellArray.length; i++) {
        let newOption = $("<option>");
      newOption.text(spellArray[i]);
      spellInput.append(newOption);
    }

    for (let i = 0; i < raceArray.length; i++) {
        let newOption = $("<option>");
      newOption.text(raceArray[i]);
      raceInput.append(newOption);
    }

    for (let i = 0; i < langArray.length; i++) {
        let newOption = $("<option>");
      newOption.text(langArray[i]);
      langInput.append(newOption);
    }

  }
genOptions()

  
  function getCharacters(){
    allCharDiv.empty();
    let loadedChar = []
    console.log(allChar[0].name)
    for(var i = 0; i < allChar.length; i++){
      let currChar = $("<li>").text(allChar[i].name)
      console.log(allChar[i])
      currChar.attr('class', 'list-group-item prev')
      allCharDiv.append(currChar)
    }


  }


  
    $(".btn-floating").on("click", function(event) {
      event.preventDefault()
    console.log(`click heard`)
      // make a newCharacter obj
      let newCharacter = {
        // name from name input
        name: $("#name").val().trim(),
        class: $("#class").val().trim(),
        weapons: $("#spells").val().trim(),
        race: $("#race").val().trim(),
        primary_language: $("#lang").val().trim(),
        height: $("#height").val().trim(),
        age: $("#age").val().trim(),
      };
      console.log(newCharacter)
    
    
      // send an AJAX POST-request with jQuery
      $.ajax({
        method: "POST",
        url: "/api/characters",
        data: newCharacter,
        dataType: "json",
      })      
    
      // empty each input box by replacing the value with an empty string
      $("#name").val("");
      $("#class").val("");
      $("#spells").val("");
      $("#race").val("");
      $("#lang").val("");
      $("#height").val("");
      $("#age").val("");
    });
    
  
});
