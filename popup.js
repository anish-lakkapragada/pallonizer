const checkElement = document.getElementById("input-check");
const button = document.getElementsByClassName("switch-btn")[0];

// we'll use synchronous localStorage instead of async chrome storage

const checked = localStorage.getItem("checked");
if (checked === null) {
    update(false);
}
if (checked == "true") {
    checkElement.checked = true;
}
else {
    checkElement.checked = false;
}

function update(checked) {
    console.log(`checked is ${checked}`); 
    localStorage.setItem("checked", checked);
    checkElement.checked = checked;
}

console.log(`About to set property, checkElement is ${checkElement.checked}`);
button.style.setProperty('--transition', 'all 250ms ease-in-out'); 
console.log('set it!'); 

$(() => {
    $("#input-check").click(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function (response) {
                console.log(window.getComputedStyle(button).getPropertyValue("--transition"));
                console.log(window.getComputedStyle(button, "::before").transition);
                console.log(window.getComputedStyle(button, "::after").transition); 
                update(response.ALLOWED);
            });
        });
    })
})
