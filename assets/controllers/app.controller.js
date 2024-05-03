app.controller("AppController", [
    "$scope",
    "zendeskService",
    function ($scope, zendeskService) {
        // Função para pesquisar dados do CEP
        $scope.pesquisaCEP = function () {
            $scope.errorMessage = "";

            zendeskService
                .consultarCep($scope.cep)
                .then((response) => {
                    if (response.erro) {
                        // Se a resposta for um objeto vazio, exibir mensagem de erro
                        $scope.cepData = {};
                        $scope.errorMessage =
                            "CEP não encontrado. Verifique se o CEP está correto e tente novamente.";
                    } else {
                        // Se a resposta não for vazia, exibir os dados do CEP
                        $scope.cepData = response;
                    }
                })
                .catch(function (error) {
                    $scope.errorMessage = "CEP Inválido";
                    $scope.cepData = {};
                    console.error(error);
                });
        };

        // Função para verificar se um objeto está vazio
        $scope.isEmptyObject = function (obj) {
            return Object.keys(obj).length === 0 && obj.constructor === Object;
        };
    },
]);
