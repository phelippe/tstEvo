var app = angular.module('app', [
    'ngRoute', 'app.controllers', 'app.services', 'app.filters', 'ngSanitize'
]);

angular.module('app.controllers', ['ngSanitize']);
angular.module('app.filters', []);
angular.module('app.services', ['ngResource']);

app.provider('appConfig', function () {
    var config = {
        //baseUrl: 'http://localhost/sites/teste_evolux/public/',
        token: 'ECjL3qWZkVMKNPLYxzGF45lX5IWiFrrKOnJ8vRvuDf8Mc0Cln1',
    }

    return {
        config: config,
        $get: function () {
            return config;
        }
    };
});

app.config([
    '$routeProvider',
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'public/views/home.html',
                controller: 'HomeController',
                title: 'Home',
            })
            .when('/:blog_name/post/:post_id', {
                templateUrl: 'public/views/post.html',
                controller: 'PostController',
            })
        ;

    }]);