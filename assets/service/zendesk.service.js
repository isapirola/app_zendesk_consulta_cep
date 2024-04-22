app.service("zendeskService", function ($http) {
    this.consultarCep = function (cep) {
        var url = `https://viacep.com.br/ws/${cep}/json/`;
        return $http.get(url);
    };
});
