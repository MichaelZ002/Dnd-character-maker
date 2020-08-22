$(document).ready(function () {
  console.log(`script.js loaded`)
  const queryURL = "https://www.dnd5eapi.co/api/";
  const classArray = [];
  const spellArray = [];
  const raceArray = [];
  const langArray = [];
  nameInput = $("#name-input");
  classInput = $("#class");
  spellInput = $("#spells");
  raceInput = $("#race");
  langInput = $("#lang");

  $.ajax({
    url: queryURL,
    type: "GET",
    success: function (result) {
      console.log(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
  //for class
  $.ajax({
    url: queryURL + "classes/",
    type: "GET",
    success: function (results) {
      for (let i = 0; i < results.results.length; i++) {
        classArray.push(results.results[i].name);
    
      }
    },
    error: function (index) {
    },
  });

  $.ajax({
    url: queryURL + "spells/",
    type: "GET",
    success: function (results) {
      for (let i = 0; i < results.results.length; i++) {
        spellArray.push(results.results[i].name);
      }
    },
    error: function (index) {
    },
  });

  $.ajax({
    url: queryURL + "races/",
    type: "GET",
    success: function (results) {
      for (let i = 0; i < results.results.length; i++) {
        raceArray.push(results.results[i].name);
      }
    },
    error: function (index) {
    },
  });

  $.ajax({
    url: queryURL + "languages/",
    type: "GET",
    success: function (results) {
      for (let i = 0; i < results.results.length; i++) {
        langArray.push(results.results[i].name);
      }
    },
    error: function (index) {
    },
  });

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

  function waitingme(){
      setTimeout(() => {genOptions();}, 500)
      }

    waitingme();

  
    $(".btn-floating").on("click", function(event) {
      event.preventDefault()
    console.log(`click heard`)
      // make a newCharacter obj
      let newCharacter = {
        // name from name input
        name: $("#name").val().trim(),
        class: $("#class").val().trim(),
        spells: $("#spells").val().trim(),
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
        data: newCharacter
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
