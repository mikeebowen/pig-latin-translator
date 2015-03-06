$(document).ready(function() {
  $("#translate-button").on("click", function(){
    // create variable for pig latin word
    var pigLatinWord = "";
    // create variable to hold first letter
    var firstLetter;
    // split entered word into array of leters and assign input from #word-to-translate to variable
    var $wordToTranslate = $("#word-to-translate").val().split("");
    // assign first letter in array to variable and remove it from array
    firstLetter = $wordToTranslate.shift();
    // add first letter to end or array
    $wordToTranslate.push(firstLetter);
    // turn array back into string
    pigLatinWord = $wordToTranslate.join("");
    $("#pig-latin-words").append("<li>" + pigLatinWord + "ay" + "</li>");
  })
});
