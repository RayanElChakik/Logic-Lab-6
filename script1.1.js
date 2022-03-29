var input = prompt("Please enter the array")


function isUpper(str) {
    return  ( !/[a-z]/.test(str) && /[A-Z]/.test(str) && /[]*/.test(str) && !/\W/.test(str));
}
isUpper(input);


if(isUpper(input)){
    var charRepeats = function(input) {
        for (var i=0; i<input.length; i++) {
          if ( input.indexOf(input[i]) !== input.lastIndexOf(input[i]) ) {
            return true; // repeats
          }
        }
      return false;
    }
    let array = [...input];
    function includesSpace (array){
          for(i=0;i<array.length;i++){
        if(array.includes('_')){
            return true
        }
        else{
            return false 
        }
    }
    }
    function doublicateChars(str){
        return /([A-Z])\1/g.test(str)
    }

    if(charRepeats(input) === true && includesSpace(array) === true){
        alert('Yes Happy LadyBug');
    }
    else if(includesSpace(array) === false && doublicateChars(input) === true){
        alert('Yes Happy LadyBug :)');
    }
    else alert('No, LadyBug is Sad :(');

}
else{
    alert('Please enter a pattern that only contains Capitalized characters or an underscore')
}