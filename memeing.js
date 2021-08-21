(() => {
    const src = chrome.runtime.getURL('main.js');
    console.log(src); 
    const contentScript = import(src);
    console.log(contentScript);
    contentScript.mainy(/* chrome: no need to pass it */);
  })();