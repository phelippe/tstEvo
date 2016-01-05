angular.module('app.controllers')
    .controller('HomeController', ['$scope', 'Finder', function ($scope, Finder) {
        console.log('homeController');

        $scope.buscar = function () {
            console.log('Buscando por: ' + $scope.tumblr.nome);

            Finder.get({
                name: $scope.tumblr.nome,
            }, function(data){ // success
                console.log(data);
            })

            /*if ($scope.form.$valid) {
             $scope.project_task.$save({id_project: $routeParams.id_project}).then(function () {
             $location.path('/projetos/' + $routeParams.id_project + '/tarefas');
             });
             }*/
        }

    }]);