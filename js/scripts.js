// business logic
var encrypt = function (inputString){
  inputString = inputString.replace(/\W/g, '');

  stringLength = inputString.length;
  var squareString = Math.sqrt(stringLength);
  // return (squareString)
  var encryptArr = [];
  var row = Math.ceil(squareString);
  var column = Math.ceil(stringLength/row);
  // alert(stringLength + " " + row + " " + column);
  // for (index = 0, k=0, j=0; index < Math.ceil(stringLength / 5); index++){
  //   for (i = 0; i < column * 5; i+= column, k++) {
  //     if (stringLength < (k * column)) {
  //       j++;
  //       k = j;
  //       alert(i + " " + k + " " + inputString[(k * column)]);
  //     }
  //     encryptArr.push(inputString[(k * column)]);
  //   }
  //   alert(encryptArr);
  // }
  for (i=0, j=0, k=0; i<=stringLength*column; i+=column, k+=column) {
    if (k > stringLength) {
      j++;
      k = j;
    }
    encryptArr.push(inputString[k % stringLength]);
  }
  return(encryptArr.join(''));

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
