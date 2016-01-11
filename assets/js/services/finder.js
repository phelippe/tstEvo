angular.module('app.services')
    .service('Finder', ['$resource', '$filter', 'appConfig', '$http', function ($resource, $filter, appConfig, $http) {

        $http.defaults.useXDomain = true;

        return $resource('http://api.tumblr.com/v2/blog/:blog_name.tumblr.com/posts/:type?token=:token&jsonp=JSON_CALLBACK', {
        //return $resource('http://' + ':name' + '.tumblr.com/api/read/json', {
            blog_name: '@blog_name',
            type: '@type',
            //api_key: '@api_key',
            token: 'j1xXo8WWivIQgbcj0eFBRJDNnsZuPPkoQL3MBBBmdEgqI3tZbb',
        }, {
            jsonp:{
                return: 'JSONP'
            }
        });
    }]);