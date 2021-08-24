/*

How this works: 
- content script on first run for any tab sends message to this backgrounds cript 
- background script fetches the current value of whether it's allowed and returns it to memeing.js contnet script  
- also run onInstallled method over here 
*/

console.log("dang"); 

const memezAllowed = () => {
    const cachedAllowed = localStorage.getItem("memezAllowed");
    if (cachedAllowed == null) {
        return false; 
    }
    else if (cachedAllowed == false) {
        localStorage.setItem("memezAllowed", false);
        return false; 
    }

    return true;
}

chrome.runtime.onMessage.addEventListener((request, sender, sendResponse) => {
    
    // in the case that they want to see if memez are allowed on run
    if (request.update == null) {
        sendResponse({
            allowed: memezAllowed()
        });
    }

    // in the case that they want to update the value of memezAllowed
    else {
        localStorage.setItem("memezAllowed", request.update);
        // no response sent back 
    }
    
}); 