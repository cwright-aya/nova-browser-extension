// This function will get called when the popup is loaded
console.log('hi dad');

document.addEventListener('DOMContentLoaded', function () {
    //load user data?
    });

document.addEventListener('DOMContentLoaded', function () {
    var switchUserButton = document.getElementById('switch-user-btn-dg');
    switchUserButton.addEventListener('click', function () {
        // Get the current tab and send a message to the content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "switchNovaUser",
                detail: "dan.gallagher"
            });
        });
    }, false);
    var switchUserButton = document.getElementById('switch-user-btn-ke');
    switchUserButton.addEventListener('click', function () {
        // Get the current tab and send a message to the content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "switchNovaUser",
                detail: "kurtecho"
            });
        });
    }, false);
    var switchUserButton = document.getElementById('switch-user-btn-ps');
    switchUserButton.addEventListener('click', function () {
        // Get the current tab and send a message to the content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "switchNovaUser",
                detail: "product.support"
            });
        });
    }, false);
});