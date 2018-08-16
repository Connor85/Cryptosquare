// business logic
var encrypt = function (inputString){
  var stringLength = inputString.length;
  var squareString = Math.sqrt(stringLength);
  // return (squareString)
  var encryptArr = [];
  var row = Math.ceil(squareString);
  var column = Math.ceil(stringLength/row);
  alert(stringLength + " " + row + " " + column);
for (i = 0; i < column * 5; i+= column){
  alert(column + " " + i)
  encryptArr.push(inputString[i]);
}
  return(encryptArr.join());

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
