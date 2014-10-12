var port = 8814;
var symfonyBindKey = function (routeName) {
    console.log(routeName);
    Mousetrap.bind('ctrl+shift+a', function (e) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:" + port + "/?route=" + routeName + "&type=controller", true);
        xmlhttp.send();
        return false;
    });
};
var symfonyFindRouteName = function () {
    checkToolbar();
    function checkToolbar() {
        var toolbar = document.querySelector(".sf-toolbar-info-piece");
        if (!toolbar) {
            setTimeout(function () {
                checkToolbar();
            }, 100);
            return;
        }
        var routeName = document.querySelectorAll(".sf-toolbar-info-piece")[10].querySelector("span").innerText;
        return symfonyBindKey(routeName);
    }
}();