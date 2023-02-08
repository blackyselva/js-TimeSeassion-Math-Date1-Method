// user input time 

 
let date1 = new Date();
let hour = date1.setTime(prompt("Enter the Time"));


    if (hour <= 3) {
        console.log("This is Mid Night")
    }   else if (hour < 12) {
        console.log("This is Morning");
    }   else if (hour < 15) {
        console.log("This is Afternoon");
    }   else if (hour < 18) {
        console.log("This is Evening");
    }   else if (hour <= 23) {
        console.log("This is Night");
    }   else if (hour > 23) {
        console.log("Enter a correct Time");
    }