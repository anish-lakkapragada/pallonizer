/*

How this works: 
- content script on first run for any tab sends message to this backgrounds cript 
- background script fetches the current value of whether it's allowed and returns it to memeing.js contnet script  
- also run onInstallled method over here 
*/

console.log("dang"); 

let numCapacity = 500; // only allowed to change 500 images 

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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    // in the case that they want to see if memez are allowed on run
    if (request.update == null) {
        console.log(`new tab just opened, this is memez status : ${memezAllowed()}`); 
        sendResponse({
            memezAllowed: memezAllowed()
        });
    }

    // in the case that they want to update the value of memezAllowed
    else {
        console.log("oop update"); 
        let update = request.update;
        numCapacity -= request.used; 
        if (numCapacity <= 0) {
            update = false; 
            console.log('TOO MUCH BOY'); 
        }
        localStorage.setItem("memezAllowed", update);
    }
    
}); 