function changeBg() {
    var scroll_v = window.scrollY;
    var navbar = document.getElementById('nav');
    if(scroll_v < 142) {
        navbar.classList.remove('bg-gray-900/50');
        document.getElementById("logo-area").src = "assets/model-un-logo-outline.png";
        
        
    } else {
        navbar.classList.add('bg-gray-900/50');
        document.getElementById("logo-area").src = "assets/model-un-logo.png";
    }
    console.log(scroll_v);
}
window.addEventListener('scroll', changeBg);

function showDiv() {
    document.getElementById('sidenav').classList.remove('-right-80');
    document.getElementById('sidenav').classList.add('right-0');
    
    
}

function hideDiv() {
    document.getElementById('sidenav').classList.add('-right-80');
    document.getElementById('sidenav').classList.remove('right-0');
}

