let userInput = document.getElementById("user-input");
let checkBtn = document.getElementById("check-btn");
let clearBtn = document.getElementById("clear-btn");
let resultsDiv = document.getElementById("results-div");

let regexConfigBr = /^\s*(\(\d{2}\)\s?|\d{2}\s?)?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

let regexConfigUs = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

let currentVersion = "us";

function brazilianVersion() {
    currentVersion = "br";
    document.getElementById("title").textContent = "Validador de Telefone Brasileiro";
    document.getElementById("phone-label").textContent = "Insira um telefone brasileiro:";
    document.getElementById("check-btn").textContent = "Checar";
    document.getElementById("clear-btn").textContent = "Limpar";
}

function usVersion() {
    currentVersion = "us";
    document.getElementById("title").textContent = "US Telephone Number Validator";
    document.getElementById("phone-label").textContent = "Enter a US phone number:";
    document.getElementById("check-btn").textContent = "Check";
    document.getElementById("clear-btn").textContent = "Clear";
}

function checkNumber() {
    const regex = currentVersion === "us" ? regexConfigUs : regexConfigBr;

    if (userInput.value == "") {
        let alertMessage = currentVersion === "us" ? "Please provide a US phone number" : "Por favor, forneça um telefone brasileiro";
        return alert(alertMessage);
    }

    let item = document.createElement("p");

    if (resultsDiv.children.length > 3) {
        resultsDiv.innerHTML = "";
    }
    resultsDiv.appendChild(item);

    if (regex.test(userInput.value)) {
        item.innerHTML = `${currentVersion === "us" ? "US valid number" : "Número br válido"} : <br/>` + userInput.value;
        item.classList.add("valid");
        userInput.value = "";
    } else {
        item.innerHTML = `${currentVersion === "us" ? "US invalid number" : "Número br inválido"}: <br/>` + userInput.value;
        item.classList.add("invalid");
        userInput.value = "";
    }
}

checkBtn.addEventListener("click", checkNumber);

clearBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = "";
});

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        checkNumber();
    }
});
