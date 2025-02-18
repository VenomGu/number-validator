
function validatePhoneNumber(number) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return regex.test(number);
}

function checkPhoneNumber() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (userInput.trim() === '') {
        alert('Please provide a phone number');
        return;
    }

    if (validatePhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
}

function clearResults() {
    const resultsDiv = document.getElementById('results-div');
    resultsDiv.textContent = '';
}

document.getElementById('check-btn').addEventListener('click', checkPhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);
