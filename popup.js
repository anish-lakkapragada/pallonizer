const checkElement = document.getElementById("input-check"); 
const button = document.getElementsByClassName("switch-btn")[0]; 

button.classList.add("disable-transition"); 

try {
    chrome.storage.sync.get(["checked"], function(data) {
        console.log(data);
        if (data["checked"]) {
            checkElement.checked = true;
        } else {
            checkElement.checked = false;
        }
    }); 
} catch(e) {
    checkElement.checked = false; 
}

button.classList.remove("disable-transition"); 

function update(checked) {
    chrome.storage.sync.set({"checked": checked});
    checkElement.checked = checked;
}

$(() => {
    $("#input-check").click(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
                update(response.ALLOWED); 
            });
          });
    })
})
