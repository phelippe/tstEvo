angular.module('app.controllers')
    .controller('PostController', ['$scope', '$routeParams', 'Finder', function ($scope, $routeParams, Finder) {

        //console.log($routeParams);
        Finder.jsonp({
            blog_name: $routeParams.blog_name,
            post_id: $routeParams.post_id
        }, function(data){ //#success
            //console.log(data.response);
            $scope.post = data.response.posts[0];
            //console.log($scope.post);
        }, function(data){ //#error
            console.log('erro: ', data);
        });

    }]);