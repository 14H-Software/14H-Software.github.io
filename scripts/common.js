Init();

function ByID(id) {
    return document.getElementById(id);
}

function JsNavigate(tab) {
    var pagecont = ByID('PageTabContainer');
    if (!tab) {
        pagecont.style.visibility = 'collapse';
        return;
    }
    pagecont.style.visibility = 'visible';
    pagecont.src = './tabs/' + tab + '.html';
}

function JsPopups(tab) {
    var pucont = ByID('PopupContainer');
    if (!tab) {
        pucont.style.visibility = 'collapse';
        return;
    }
    pucont.style.visibility = 'visible';
    pucont.src = './popups/' + tab + '.html';
}

function IsMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function IsMainentance() {
    return false;
}

function Init() {
    JsNavigate(false);
}