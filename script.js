function check() {
    let intelect = Math.floor(Math.random() * 10);
    let person = document.querySelector("input").value;
    let result = document.querySelector("h1").innerHTML = person;


    if (person != "" && person.length <= intelect) {
        result = person + " You are Brave!";


    } else if (person != "" && person.length >= intelect) {
        result = person + " You are Smart!";


    } else if (person != "" && person.length == intelect) {
        result = person + " You are Lucky!";


    } else if (person != "" && person.length > intelect) {
        result = person + " You are dumb!";

    } else if (person != "" && person.length < intelect) {
        result = person + " You are Intelligent!";
    } else if (person == false) {
        result = person + alert("Please enter your name");
    }


    console.log(result);

}