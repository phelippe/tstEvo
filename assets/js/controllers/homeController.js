angular.module('app.controllers')
    .controller('HomeController', ['$scope', '$http', 'Finder', function ($scope, $http, Finder) {
        console.log('homeController');

        $scope.buscar = function () {

            //@namikamusik
            Finder.jsonp({
                blog_name: $scope.tumblr.nome,
                object_return: $scope.tumblr.retorno,
            }, function(data){ // success
                console.log('sucesso');
                console.log(data);
            }, function(data){//error
                console.log('error');
                console.log(data);
            })

        }

    }]);