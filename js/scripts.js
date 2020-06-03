$(document).ready(function() {
  $("#saySomething").submit(function() {
    const inputGiven = $("input#userInput").val();
    
    $("#output").text(inputGiven.toUpperCase());
    event.preventDefault();
  })
})