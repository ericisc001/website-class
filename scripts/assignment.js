//Prompt user for input for X and Y Values
var x = parseInt(prompt("Enter Value Of X:"));
var y = parseInt(prompt("Enter Value Of Y:"));

//Print Sum, Product
document.write('The sum of '+x+' and '+y+' is '+(x+y))
document.write('<br>The product of '+x+' and '+y+' is '+(x*y))

//Print Result if X is bigger than Y, Y is bigger than X, or X and Y are equal.
if(x>y)
{
    document.write('<br>'+x+' is bigger than '+y)
}
else if (y>x)
{
     document.write('<br>'+y+' is bigger than '+x)
}
else
{
    document.write('<br>'+x+' and '+y+' are equal')
}
       
    