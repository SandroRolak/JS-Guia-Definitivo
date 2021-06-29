function moveon() {
    let answer = confirm("Ready to move on?")
    if (answer) window.location = "http://google.com";
}
setTimeout(moveon, 60000);