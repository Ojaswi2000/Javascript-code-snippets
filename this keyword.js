console.log(Window); // this return a window object on the screen

function myfunc(){
    var a=10;
    var b=20;
    console.log(this);
}
myfunc(); // this return a window object on the screen


// variable becomes a property and function becomes a method in the console using this

const servername={
    name:"Discord",
    getservername:function(){
        console.log(this);
    }
}
servername.getservername(); 
// // The output will be:const servername={
//     name:"Discord",
//     getservername:function(){
//         console.log(this);
//     }
// }
// 

const servername={
    name:"Discord",
    getservername:function(){
        console.log(name);
    }
}
servername.getservername();    // This code will will. The correct way of writing it is: this.name



var a=10;
function ab(){
    var a=20;
    console.log(this);
}
ab();                        // This code will print the global scope with value of a=10;


var a=10;
function ab(){
    var a=20;
    console.log(this.a);
}
ab();                       // This code will print a=10;
