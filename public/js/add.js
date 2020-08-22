$("#submit-btn").on("click", function (event) {
  event.preventDefault();

  // make a newCharacter obj
  var newCharacter = {
    // name from name input
    name: $("#name").val().trim(),
    class: $("#class").val().trim(),
    spells: $("#spells").val().trim(),
    race: $("#race").val().trim(),
    language: $("#lang").val().trim(),
    height: $("#height").val().trim(),
    age: $("#age").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/character", newCharacter);
  console
    .log(newCharacter)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Creating character...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#class").val("");
  $("#spells").val("");
  $("#race").val("");
  $("#lang").val("");
  $("#height").val("");
  $("#age").val("");
});
