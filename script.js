// function blueprint(){
    
// }

window.onload = function () {

    document.getElementById("blueprint").onclick = function () { 
        chrome.tabs.insertCSS({ file: "smooth.css" });   
        chrome.tabs.insertCSS({ file: "blueprint.css" });
     };
    
    document.getElementById("night").onclick = function () { 
        chrome.tabs.insertCSS({ file: "smooth.css" });
        chrome.tabs.insertCSS({ file: "night.css" });
        
     };
    
    document.getElementById("light").onclick = function () { 
        chrome.tabs.insertCSS({ file: "smooth.css" });
        chrome.tabs.insertCSS({ file: "light.css" });
     };

     document.getElementById('reset').onclick = function() {
         chrome.tabs.insertCSS({ file: "reset.css" });
     }
    
};


// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.insertCSS({ file: "blueprint.css" });
// });