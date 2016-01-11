angular.module('app.controllers')
    .controller('HomeController', ['$scope', '$http', 'Finder', function ($scope, $http, Finder) {
        console.log('homeController');

        $scope.buscar = function () {

            Finder.jsonp({
                blog_name: $scope.tumblr.nome,
                //type: 'post',
            }, function(data,status, headers){ // success
                console.log('sucesso');
                console.log(data);
            }, function(data,status, headers){//error
                console.log('error');
                console.log(data);
            })

        }

    }]);