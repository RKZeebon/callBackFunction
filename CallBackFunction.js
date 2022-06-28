function morning() {
    console.log("Good Morning");
}

function afternoon() {
    console.log("Good Afternoon");
}

function greetings(name, func) {
    func()
    console.log(name);
}

greetings("Musfique", afternoon)