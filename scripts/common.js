Init();

function ByID(id) {
    return document.getElementById(id);
}

function AddClass(elementID, className) {
    if (!elementName || !classname) {
        return false;
    }
    var el2mod = ByID(elementID);
    el2mod.element.classList.add(className);
    return true;
}

function RemoveClass(elementID, className) {
    if (!elementName || !classname) {
        return false;
    }
    var el2mod = ByID(elementID);
    el2mod.element.classList.remove(className);
    return true;
}


function JsNavigate(tab) {
    var pagecont = ByID('PageTabContainer');
    if (!tab) {
        ByID('PageTabContainer').style.width = '0%';
        ByID('PageTabContainer').style.opacity = '0';
        return;
    }
    ByID('PageTabContainer').style.width = '100%'
    ByID('PageTabContainer').style.opacity = '1';
    if (IsPublicBranch()) {
        pagecont.src = './tabs/' + tab + '.html';
    } else {
        pagecont.src = '../tabs/' + tab + '.html';
    }
}

function JsPopups(tab) {
    var pucont = ByID('PopupContainer');
    if (!tab) {
        pucont.style.visibility = 'collapse';
        ByID('PopupContainer').opacity = 0;
        ByID('JsPopupFrame').style.visibility = 'collapse';
        ByID('JsStdPopup').style.visibility = 'collapse';
        ByID('JsStdPopupBtn').style.visibility = 'collapse';
        return;
    }
    pucont.style.visibility = 'visible';
    ByID('PopupContainer').opacity = 1;
    ByID('JsPopupFrame').style.visibility = 'visible';
    ByID('JsStdPopup').style.visibility = 'collapse';
    if (IsPublicBranch()) {
        ByID('JsPopupFrame').src = './popups/' + tab + '.html';
    } else {
        ByID('JsPopupFrame').src = '../popups/' + tab + '.html';
    }
}

function JsStandardPopups(title, message, button, isbtnenabled) {
    ByID('PopupContainer').style.visibility = 'visible';
    ByID('JsStdPopupBtn').style.visibility = 'visible';
    ByID('PopupContainer').opacity = 1;
    ByID('JsStdPopupTitle').textContent = title;
    ByID('JsStdPopupDesc').textContent = message;
    ByID('JsStdPopupBtn').textContent = button;
    ByID('JsStdPopup').style.visibility = 'visible';
    ByID('PopupStdBtn').style.visibility = isbtnenabled ? 'visible' : 'collapse';
    ByID('JsStdPopupBtn').style.visibility = 'visible';
    ByID('JsStdPopupBtn').style.opacity = '1';
} 

function JsStandardPopupsNoBtn(title, message, button, isbtnenabled) {
    ByID('PopupContainer').style.visibility = 'visible';
    ByID('JsStdPopupBtn').style.visibility = 'visible';
    ByID('PopupContainer').opacity = 1;
    ByID('JsStdPopupTitle').textContent = title;
    ByID('JsStdPopupDesc').textContent = message;
    ByID('JsStdPopupBtn').textContent = button;
    ByID('JsStdPopup').style.visibility = 'visible';
    ByID('JsStdPopupBtn').style.visibility = 'collapse';
    ByID('JsStdPopupBtn').style.opacity = '0';
} 


function IsMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function IsPublicBranch() {
    if (!ByID('devbranch')) {
		return true;
	}
	return false;
}

function IsMainentance() {
    // return true;
	return IsPublicBranch();
}

function Init() {
    JsNavigate(false);
    JsPopups(false);
    if (IsMainentance()) {
        JsStandardPopupsNoBtn('MAINTENANCE', '14H Website is temporarily unavailable. Please try again later.', 'Continiue', false);
    }
    if (!IsMobile) {
        JsStandardPopupsNoBtn('14H', '14H Website is unavailable on mobile devices', '', false);
    }
    var brname = 'dev'
    if (IsPublicBranch()) {
        brname = 'public';
    } 
    console.log( 'Running in ' + brname + ' branch.' );
}