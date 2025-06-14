let speedTypingTestE1 = document.getElementById("speedTypingTest");
let timerE1 = document.getElementById("timer");
let quoteDisplayE1 = document.getElementById("quoteDisplay");
let quoteInputE1 = document.getElementById("quoteInput");
let submitBtnE1 = document.getElementById("submitBtn");
let resetBtnE1 = document.getElementById("resetBtn");
let resultE1 = document.getElementById("result");
let spinnerE1 = document.getElementById("spinner");



let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET",
};

spinnerE1.classList.add("d-none");
speedTypingTestE1.classList.remove("d-none");

fetch(url, options)

    .then(function(response) {
        return response.json();
    })
    .then(function(JsonData) {
        speedTypingTestE1.classList.add("d-none");
        spinnerE1.classList.remove("d-none");

        console.log(JsonData.content);
        quoteDisplayE1.textContent = JsonData.content;
    });


let counter = 0;
let timerId = setInterval(function() {
    counter += 1;
    timerE1.textContent = counter;
}, 1000);

resetBtnE1.addEventListener("click", function() {
    quoteInputE1="";
    counter = 0;
    clearInterval(timerId);
    timerId = setInterval(function() {

        counter += 1;
        timerE1.textContent = counter;
    }, 1000);
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET",
    };

    spinnerE1.classList.remove("d-none");
    speedTypingTestE1.classList.add("d-none");

    fetch(url, options)

        .then(function(response) {
            return response.json();
        })
        .then(function(JsonData) {
            speedTypingTestE1.classList.remove("d-none");
            spinnerE1.classList.add("d-none");


            console.log(JsonData.content);
            quoteDisplayE1.textContent = JsonData.content;
        });


});

submitBtnE1.addEventListener("click", function() {
    let quoteVal = quoteInputE1.value;
    let quoteDisVal = quoteDisplayE1.textContent;
    if (quoteVal === quoteDisVal) {
        clearInterval(timerId);
        resultE1.textContent = "You typed in " + counter + " seconds";
    } else {
        resultE1.textContent = "You typed incorrect sentence";
    }
})
