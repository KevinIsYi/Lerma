/*
const menuBars = document.getElementById('mobile-menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuIcon = document.getElementById('close-mobile-menu');

const clickRemoveMenu = () => {
    mobileMenu.style.display = 'none';
    closeMobileMenuIcon.removeEventListener('click', clickRemoveMenu);
}

const eventListeners = () => {
    menuBars.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
        closeMobileMenuIcon.addEventListener('click', clickRemoveMenu);
    });
}

eventListeners();
*/

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("lerma.json", function(text){
    var data = JSON.parse(text);
    console.log(data);

});
