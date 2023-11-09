chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "switchNovaUser") {
        var event = new CustomEvent('switchNovaUser', { detail: request.detail });
        window.dispatchEvent(event);
    }
});