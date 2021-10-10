//Navigation
function hideIconBar(){
    let inconBar = document.getElementById("iconBar");
    let navigation = document.getElementById("navigation"); 
    inconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    let inconBar = document.getElementById("iconBar");
    let navigation = document.getElementById("navigation"); 
    inconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}