console.log("dang"); 

let numCapacity = 500; // only allowed to change 500 images 

function memezAllowed() {
    const cachedAllowed = localStorage.getItem("memezAllowed");
    if (cachedAllowed == null) {
        localStorage.setItem("memezAllowed",false);
        return false; 
    }

    return localStorage.getItem("memezAllowed");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    // in the case that they want to see if memez are allowed on run
    if (request.update == null) {
        console.log(localStorage.getItem("memezAllowed")); 
        console.log(`new tab just opened, this is memez status : ${memezAllowed()}`); 
        sendResponse({
            memeTime: memezAllowed()
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
        console.log(`We settin update to ${update}`); 
        localStorage.setItem("memezAllowed", update);
        sendResponse({SUCCESS: true}); 
        console.log("sent succesful response"); 
        console.log(localStorage.getItem("memezAllowed")); 
    }
    
}); 
