let root = document.querySelector(':root')
     
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function changeToEsp() {

    let engElems = document.querySelectorAll(".idiomaEng");
    engElems.forEach( (elem) => {
        elem.style.display = 'none';
    });

    let espElems = document.querySelectorAll(".idiomaEsp");
    espElems.forEach( (elem) => {
        elem.style.display = 'block';
    });
}

function changeToEng() {

    let espElems = document.querySelectorAll(".idiomaEsp");
    espElems.forEach( (elem) => {
        elem.style.display = 'none';
    });
    
    let engElems = document.querySelectorAll(".idiomaEng");
    engElems.forEach( (elem) => {
        elem.style.display = 'block';
    });
}

function changeToLight() {

    root.style.setProperty('--accentLight', '#0099DA')
    root.style.setProperty('--accentDark', '#032970')
    root.style.setProperty('--primary', '#000000')
    root.style.setProperty('--secondary', '#FFFFFF')
    
    let oscElems = document.querySelectorAll(".modoOscuro");
    oscElems.forEach( (elem) => {
        elem.style.display = 'none';
    });

    let luzElems = document.querySelectorAll(".modoLuz");
    luzElems.forEach( (elem) => {
        elem.style.display = 'block';
    });
}

function changeToDark() {

    root.style.setProperty('--accentLight', '#45CAE3')
    root.style.setProperty('--accentDark', '#0099DA')
    root.style.setProperty('--primary', '#FFFFFF')
    root.style.setProperty('--secondary', '#000000')
    
    let luzElems = document.querySelectorAll(".modoLuz");
    luzElems.forEach( (elem) => {
        elem.style.display = 'none';
    });
    
    let oscElems = document.querySelectorAll(".modoOscuro");
    oscElems.forEach( (elem) => {
        elem.style.display = 'block';
    });
}
