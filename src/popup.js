console.log("starting");
const checkElement = document.getElementById("input-check");
const button = document.getElementsByClassName("switch-btn")[0];

let checked; // whether to toggle the switch buton 

chrome.storage.sync.set({"firstCheck":"N/A"});

async function update(newValue) {
    // update the chrome storage and wait until it is updated. 
    await new Promise((resolve, reject) => {
        chrome.storage.sync.set({"memeTime":newValue}, () => {
            resolve(); 
        }); 
    }); 
}

async function bootUp() {
    await new Promise((resolve, reject) => {
        chrome.storage.sync.get(["memeTime"], (result) => {
            checked = result.memeTime; // it's actually stored as a boolean, thanks extension storage

            console.log("dang we in here"); 
            if (checked == undefined) {
                console.log("it undefined, so we running this"); 
                checked = false; 
                update(false); 
            }
            resolve(); 
        }); 
    })

    await new Promise((resolve, reject) => {
        if (checked) {
            console.log("I am going to check this"); 
            checkElement.checked = true;
            checkedTrue = true; 
        }
        resolve(); 
    }); 

    await new Promise((resolve, reject) => {
        chrome.storage.sync.set({"firstCheck":"done"}, () => {
            resolve(); 
        }); 
    }); 

    console.log("we did all these things!"); 

}

bootUp(); // load it up 

chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log("we got a change");
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        // check if key is memeTime 
        if (key === "firstCheck") {
            console.log("we have a nice change"); 
            if (newValue === "done") {
                button.style.setProperty("--transition", "all 0.3s ease-in-out");
            }
        }
    }
});


$(() => {
    $("#input-check").click(() => {
        checked = !checked;
        update(checked);
        
    })
})