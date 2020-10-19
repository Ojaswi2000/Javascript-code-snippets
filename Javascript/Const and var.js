//Here, we talk about the const keyword which is similar to the let keyword but we cannot change the value as it is not allowed.
const number=89
undefined
number
89
number++                //updating the variable number now gives an error as it is const !!!!

//VM134:1 Uncaught TypeError: Assignment to constant variable.
//    at <anonymous>:1:7
//(anonymous) @ VM134:1

const pi=3.14             //useful for values that don't change
undefined
radius=8
8
2*pi*radius              //getting the circumference of the circle 
50.24


var h=89                //creating variable using the var keyword
undefined
h
89
h++
89


var base=78              //another example for creating variables usong the var keyword
undefined
var height=98
undefined
1/2*base*height
3822