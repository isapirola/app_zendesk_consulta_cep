app.controller("app", [
    "$scope",
    "zendeskService",
    function ($scope, zendeskService) {
        var client = ZAFClient.init();
    },
]);
