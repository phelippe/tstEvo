angular.module('app.controllers')
    .controller('HomeController', ['$scope', '$http', 'Finder', function ($scope, $http, Finder) {
        //console.log('homeController');

        $scope.posts = '';

        $scope.buscar = function () {

            $scope.posts = '';

            //@namikamusik
            Finder.jsonp({
                blog_name: $scope.tumblr.nome,
                objeto_retorno: $scope.tumblr.retorno,
            }, function(data){ // success
                //console.log('sucesso');
                //console.log(data.response.posts);
                $scope.posts = data.response.posts;
            }, function(data){//error
                console.log('error');
                console.log(data);
            })

        }

    }]);