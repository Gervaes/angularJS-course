window.addEventListener('hashchange', function() {
    if(this.window.location.hash === "#/bookmark/1")
        console.log("Page 1 is cool!");
    if(this.window.location.hash === "#/bookmark/2")
        console.log("Let me go get page 2");
    if(this.window.location.hash === "#/bookmark/3")
        console.log("Here is page 3!");
})