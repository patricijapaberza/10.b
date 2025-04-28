function myFunction1()
{
    const nameObj = document.getElementById("user_name");
    const surnameObj = document.getElementById("user_surname");
    const urlObj = document.getElementById("user_url");

    console.log(nameObj.value);
    console.log(surnameObj.value);
    console.log(urlObj.value);

    localStorage.setItem("name", nameObj.value);
    ocalStorage.setItem("surname", surnameObj.value);
    ocalStorage.setItem("url", urlObj.value);
}