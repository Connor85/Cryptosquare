// business logic
var encrypt = function (inputString){
  var stringLength = inputString.length;
  var squareString = Math.sqrt(stringLength);
  // return (squareString)

  var row = Math.ceil(squareString);
  var column = Math.ceil(stringLength/row);

  // return ("The phrase " + inputString + " is " + stringLength + " long and will use a " + row + " X " + column + " grid.");
  return(inputString[0]);

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
