let memes = []; 

function getMeme(image) {
    let givenMeme =  memes[Math.floor(Math.random() * memes.length)];
    return givenMeme;
}


let numChanged = 0; let ALLOWED; 
const SUBREDDIT = "pallone"; 
const REDDIT_URL = "https://www.reddit.com/r/" + SUBREDDIT + ".json"; 

async function update(newValue) {
    // update the chrome storage and wait until it is updated. 
    await new Promise((resolve, reject) => {
        chrome.storage.sync.set({"memeTime":newValue}, () => {
            resolve(); 
        }); 
    }); 
}

async function init() {
    // this function first finds value of ALLOWED, and if it's true then uses reddit API to get memes 
    await new Promise((resolve, reject) => {
        chrome.storage.sync.get(['memeTime'], (result) => {
            ALLOWED = result.memeTime;
            console.log("we got it"); 
            console.log(ALLOWED);
            if (ALLOWED == undefined) {
                update(false); 
            }

            resolve();
        }); 
    }); 

    console.log("this is value of ALLOWED", ALLOWED);

    // okay, got value of ALLOWED now use reddit API. 
    if (ALLOWED == true) {
        console.log('dank we in here'); 
        await fetch(REDDIT_URL).then(response => response.json()).then((body) => {
            let i; 
            for (i =0; i < body.data.children.length; i++) {
                if (body.data.children[i].data.post_hint === "image") {
                    memes.push(body.data.children[i].data.url);
                    console.log("pushed", memes[memes.length - 1]);
                }
            }
        })
    }

    document.addEventListener("DOMNodeInserted", (event) => {
        console.log(`This is allowed ${ALLOWED}`);
    
        if (ALLOWED) {
            console.log(`Allowed is this ${ALLOWED} and we are running`); 
            const changeObjects = ['img', 'source', 'video', 'iframe'];
            for (let o = 0; o < changeObjects.length; o++) {
                let objects = document.getElementsByTagName(changeObjects[o]);
                run(objects);
            }
        }
    })
}

init(); 

function run(images) {
    if (!ALLOWED) {
        console.log("ALLOWED is false, rbeaking out"); 
        return; 
    }
    for (let i = 0; i < images.length; i++) {
        if (images[i].hasAttribute("added")) { continue; }

        // has src 
        if (images[i].hasAttribute("src")) {
            
            const memeURL = getMeme(images[i]); 

            // next create HTML object with src component 
            const dummyImage = document.createElement("img"); 
            dummyImage.src = memeURL; 

            images[i].setAttribute("src", memeURL);
            
            const aspectRatio = dummyImage.height / dummyImage.width; 
            const originalHeight = images[i].height;
            const originalWidth = images[i].width;

            if (Math.random() > 0.5) {
                images[i].width = originalWidth * aspectRatio;  
            } else {images[i].width = originalHeight / aspectRatio; }
            
            images[i].setAttribute("added", true);
            numChanged++;
        }

        // no src
        else {
            // first get url link from getMeme() function 
            const memeURL = getMeme(images[i]); 

            // next create HTML object with src component 
            const dummyImage = document.createElement("img"); 
            dummyImage.src = memeURL; 

            images[i].setAttribute("src", memeURL);
            
            const aspectRatio = dummyImage.height / dummyImage.width; 
            const originalHeight = images[i].height;
            const originalWidth = images[i].width;

            if (Math.random() > 0.5) {
                images[i].width = originalWidth * aspectRatio;  
            } else {images[i].width = originalHeight / aspectRatio; }
            
            images[i].setAttribute("added", true);
            numChanged++;
        }

        // remove all the weird stuff 
        const attributes = images[i].attributes;
        for (let j = 0; j < attributes.length; j++) {
            if (attributes[j].name.substring(0, 4) === "data") {
                images[i].removeAttribute(attributes[j].name);
            }

            if (attributes[j].name === "srcset") {
                images[i].removeAttribute(attributes[j].name)
            }
        }

        console.log(`num used: ${numChanged}`);
    }
}


const onUpdate = (oldValue, newValue) => {

    console.log('inside onUpdate', newValue);

    if (newValue == true) {
        console.log("we should be in here"); 
        //re-run for fun 
        const changeObjects = ['img', 'source', 'video', 'iframe'];
        for (let o = 0; o < changeObjects.length; o++) {
            let objects = document.getElementsByTagName(changeObjects[o]);
            run(objects);
        }
    }

    else {
        // if it's not allowed, then we need to rewrite everything on the page right? 
        // honestly we can just reload the page here 
        
        window.location.reload();
    }
}
// detect when the value of memeTime in chrome storage has changed. 
chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log("we got a change");
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        // check if key is memeTime 
        if (key === "memeTime") {
            console.log("we in here dawg"); 
            console.log(oldValue, newValue);
            
            ALLOWED = newValue;
            onUpdate(oldValue, newValue);
        }

    }
});


