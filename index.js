var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var simplePrefs = require("sdk/simple-prefs");

var button = buttons.ActionButton({
    id: "tenbucks-link",
    label: "Visit tenbucks",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    locale = simplePrefs.prefs.locale;
    url = "https://apps.tenbucks.io/" + locale + "/my_account/";
    tabs.open({
        url: url,
        onReady: function(tab) {
            tab.attach({
                contentScript: "document.body.className = '';"
            });
        }
    });
}

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
    callback(text);
}

exports.dummy = dummy;
