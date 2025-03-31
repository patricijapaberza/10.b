function myFunction()
{
    let h1_obj = document.getElementById("myh1");
    //console.log(h1_obj);
    let user_name = document.getElementById("input_name");
    h1_obj.innerText = "Hello, " + user_name.value + "!";
    let user_surname = document.getElementById("input_surname");
    let user_age = document.getElementById("input_age");
    console.log(user_surname.value);
    console.log(user_age.value);

if(!user_name.value.match(/[A-z]/) || user_name.value == "")
{
    alert("Error: name is not correct!");
    return;
}

if(user_age.value <= 0 || !user_age.value.match(/[0-9]/))
{
    alert("Error: age is not correct!");
    return;
}

let table = document.getElementById("myTable");
let row = table.isertRow();
let cell1 = row.insertCell();
let cell2 = row.insertCell();
let cell3 = row.insertCell();
cell1.innerHTML = user_name.value;
cell2.innerHTML = user_surname.value;
cell3.innerHTML = user_age.value;
}