/*
var turpinat = true;
while ( turpinat )
{
    let user = prompt("Turpināt ? Y/N");
    if (user.toLowerCase() == "n")
    {
        turpinat = false;
    }
}
console.log("end while");
*/

let turpinat = true;
let masivs = [];
while(turpinat)
{
    let user = parseFloat(prompt("Enter positive number"));
    if( user < 0 )
    {
        turpinat = false;
    }
    else
    {
        masivs.push(user);
    }
}
console.log(masivs);