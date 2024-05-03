app.service("zendeskService", function ($q) {
    this.consultarCep = function (cep) {
        var deferred = $q.defer();
        client
            .request({
                url: `https://viacep.com.br/ws/${cep}/json/`,
                type: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                deferred.resolve(response);
            })
            .catch(function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };
});
