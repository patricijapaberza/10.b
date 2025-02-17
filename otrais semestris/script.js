// alert("Hello World!");
// console.log("Hello World!");


/*
let x = 5;
let y = 10;
let summa = x + y;
alert("summa ir " + summa );
console.log("summa ir: "+ (x + y) );
*/

/*
let number = promt("Enter number: ");
if (number > 0)
{
    console.log("Pozitīvs");
} else if( number < 0)
{
    console.log("Negatīvs");
} else if( number == 0)
{
    console.log("Ir vienāds ar 0");
}
*/

let age = 21;
let citizenship = false;
if ( age >= 18 && citizenship == true)
{
    console.log("Var balsot");
} else if (age < 18 && citizenship)
{
    console.log("Ir pilsonis, bet nav 18 gadi ");
}else if(age >= 18 && citizenship == false)
{
    console.log("Ir 18, bet nav pilsonis ");
}