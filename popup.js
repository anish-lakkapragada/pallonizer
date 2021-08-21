let ALLOW = false; 

$(() => {
    $("#input-check").click(() => {
        ALLOW = !ALLOW; // invert 
    })
    fs.writeFile("./answer.dat", ALLOW ? "true" : "false", (err) => {
        if (err) throw err;
    }); 

})
