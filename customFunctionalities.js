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

    loadData(true);
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

    loadData(false);
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

function loadHeader(values) {

    values.forEach( (val) => {
        document.getElementById(val.id).getElementsByTagName('a')[0].innerHTML = val.content;
    });

    let sideBarElements = document.getElementById('mySidebar').childNodes[3].querySelectorAll('a');
    sideBarElements.forEach( (elem, index) => {
        elem.innerText = values[index].content;
    });

}

function loadContentEsp(content) {
    content.forEach( (contentItem) => {
        document.getElementById(contentItem.id).innerHTML = contentItem.contentEsp;
    });
}

function loadContentEng(content) {
    content.forEach( (contentItem) => {
        document.getElementById(contentItem.id).innerHTML = contentItem.contentEng;
    });
}

function loadData(isEsp) {
    fetch('./contentData.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        if (isEsp) {
            loadContentEsp(data.pageContent)
            loadHeader(data.headerEsp)
        } else {
            loadContentEng(data.pageContent)
            loadHeader(data.headerEng)
        }
    });
}

loadData(true);