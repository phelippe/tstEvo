var app = angular.module('app', [
    'ngRoute', 'app.controllers', 'app.services', 'app.filters', 'app.directives',
]);

angular.module('app.controllers', [/*'ngMessages', 'ngSanitize'*/]);
angular.module('app.filters', []);
angular.module('app.directives', []);
angular.module('app.services', ['ngResource', 'jtt_tumblr']);

app.provider('appConfig', ['$httpParamSerializerProvider', function ($httpParamSerializerProvider) {
    var config = {
        baseUrl: 'http://localhost/sites/teste_evolux/public/',
    }

    return {
        config: config,
        $get: function () {
            return config;
        }
    };
}]);

app.config([
    '$routeProvider',
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'public/views/home.html',
                controller: 'HomeController',
                title: 'Home',
            })
            /*.when('/home', {
                templateUrl: 'public/views/home.html',
                controller: 'HomeController',
                title: 'Home',
            })*/
            .when('/post/:id', {
                templateUrl: 'public/views/post.html',
                controller: 'PostController',
            })
        ;

    }]);