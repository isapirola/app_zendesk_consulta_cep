app.controller("AppController", [
    "$scope",
    "zendeskService",
    function ($scope, zendeskService) {
        var client = ZAFClient.init();

        // Função para pesquisar dados do CEP
        $scope.pesquisaCEP = function () {
            zendeskService
                .consultarCep($scope.cep)
                .then(function (response) {
                    // Armazenar os dados do CEP na variável $scope.cepData
                    $scope.cepData = response.data;
                })
                .catch(function (error) {
                    // Manipular erros aqui
                    console.error(error);
                });
        };
    },
]);
