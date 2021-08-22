let allow = false; 

$(() => {
    $("#input-check").click(() => {
        allow = !allow;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {allowed: allow}, function(response) {});
          });
    })
}); 
