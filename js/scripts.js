// business logic
var encrypt = function (inputString){
  var stringLength = inputString.length;
  var squareString = Math.sqrt(stringLength);
  return (squareString)

}
// user logic
$(document).ready(function() {
  $("form#txtTranslator").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputtxt").val();
    output = encrypt(userInput);
    $("#result").text(output);
  });
});
