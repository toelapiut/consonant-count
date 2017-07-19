var foundConsonants = [];
var consonantCount = function(count) {
  for (var index = 0; index <= count.length; index += 1) {
    if (count[index] === "a" || count[index] === "e" || count[index] === "i" || count[index] === "o" || count[index] === "u") {
      foundConsonants.push(count[index]);
    }
  }
  return foundConsonants;
};

//user interface Logic
$(document).ready(function() {
  $("form#blanks").submit(function(event) {

    var userInput = $("input#sentence").val();
    var letters = userInput.toLowerCase().split("");
    var sentenceletters = consonantCount(letters);
    var consonantlength = sentenceletters.length;
    $("#result").text("the number of consonant in your sentence is" + " " +
      consonantlength);
    event.preventDefault();
  });
});
