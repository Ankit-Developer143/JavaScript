function BirdSelector(name) {
    var answer=" ";
    switch (name) {
        case "a":
            answer="Owl";
            
            break;
        case "b":
            answer="Duck";
            
            break;
        case "c":
            answer="parrot"
            break;
    
        default:
            answer="You Choose Wrong Input";
            break;
    }
    return answer;
}
console.log(BirdSelector("c"));

//Multiple Identical Options in Switch Statements

function Identical(values) {
    var result="";
    switch (values) {
        case 1:
        case 2:
        case 3:
            result="Vehicle";
            break;
        case 4:
        case 5:
        case 6:
            result="Animal";
            break;
        default:
            result="Wrong Inputs";
            break;     
    }
    return result;    
}
console.log(Identical(1));

//Replace if else statment using switch case with Different data type
function chainToSwitch(vals) {
    var answer = "";
    switch (vals) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
    }
    return answer;
  }
  console.log(chainToSwitch(7));  
  