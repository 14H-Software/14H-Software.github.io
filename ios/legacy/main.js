'use strict';

function checkdevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("iphone")) {
        return;
    }
    if (userAgent.includes("ipad")) {
        return;
    }
    window.location.href = "https://14h-software.github.io/404.html";
}

function main() {
    
}

if (_main != null) {
    main();
}