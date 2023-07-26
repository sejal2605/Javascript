console.log("Hello")
// var x = "Welcome to our Web page"
// alert(x);
/*document.write(x)
document.write("<br>")*/

var a=10;
var b=20;
var c=a+b;
//document.write(c);
console.log(c)
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length;
    document.getElementById("demo").innerHTML = size;*/

 //   06-07-2023

 // Array Sort
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.sort();
 console.log(fruits)




// Javascript if else Statement:

    var x = 10;
    /*document.write(x)
    document.write("<br>")*/
    var y = "10";
    if(x === y){
       //document.write("Both are equal")
       console.log("Both are Equal")
    }
    else{
       //document.write("Not")
       console.log("Not")
    }

    //javascript switch case Statement:
    // The switch statement is used to perform different actions based on different conditions.
    // switch: Use the switch statement to select one of many code blocks to be executed.
    // Break: When JavaScript reaches a break keyword, it breaks out of the switch block.This will stop the execution inside the switch block.It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.


    /*switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        default:
          text = "Looking forward to the Weekend";
      }
      console.log("Today is " + day)*/

// var today = new Date().getDay();
// var tomorrow = (today+4)%7;
// switch (tomorrow) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     text = "Looking forward to the weekend";
//     break;
// }

// console.log("tomorrow is " + day);

// Function



   let z = document.body
   console.log("First child of b is ", z.firstChild) 