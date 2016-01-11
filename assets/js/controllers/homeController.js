angular.module('app.controllers')
    .controller('HomeController', ['$scope', '$http', 'Finder', function ($scope, $http, Finder) {
        console.log('homeController');

        //var token = 'j1xXo8WWivIQgbcj0eFBRJDNnsZuPPkoQL3MBBBmdEgqI3tZbb';
        var token = 'YlgYmTP0dbWoHbIIQuxTioxCv89oMTfb9FlCejGFH4jbzPQuhP';

        $scope.buscar = function () {
            console.log('Buscando por: ' + $scope.tumblr.nome);

            /*var deferred = $q.defer();
            $tst = $http.get('http://chrisburkard.tumblr.com/api/read/json')
                .success(function (data, status, headers, config) {
                    console.log(data);
                    deferred.resolve(data);
                    console.log('#fim#');
                })
                .error(function (data, status, headers, config) {
                    console.log(status);
                    defferd.reject(status);
                });*/

            $http.jsonp('http://api.tumblr.com/v2/blog/'+$scope.tumblr.nome+'.tumblr.com/posts?token='+token+'&jsonp=JSON_CALLBACK')
                .success(function(data,status,headers,config){
                    console.log(data);
                })
                .error(function(data,status,headers,config){
                    console.log(data, status, headers, config);
                });

            /*Finder.get({
                blog_name: $scope.tumblr.nome,
                type: 'post',
            }, function(data,status, headers){ // success
                console.log(data,status, headers);
            }, function(data,status, headers){//error
                console.log(data,status, headers);
            })*/

            /*Finder.jsonp({
                name: $scope.tumblr.nome,
             }, function(data,status, headers){ // success
                console.log(data,status, headers);
             }, function(data,status, headers){//error
                console.log(data,status, headers);
            })*/

        }

    }]);