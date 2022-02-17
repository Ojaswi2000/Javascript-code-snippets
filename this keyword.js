console.log(Window); // this return a window object on the screen

function myfunc(){
    var a=10;
    var b=20;
    console.log(this);
}
myfunc(); // this return a window object on the screen
