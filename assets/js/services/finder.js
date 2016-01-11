angular.module('app.services')
    .service('Finder', ['$resource', '$filter', 'appConfig', function ($resource, $filter, appConfig) {

        var _token = 'ECjL3qWZkVMKNPLYxzGF45lX5IWiFrrKOnJ8vRvuDf8Mc0Cln1';

        return $resource('http://api.tumblr.com/v2/blog/:blog_name.tumblr.com/posts/?api_key='+_token, {
            blog_name: '@blog_name',
            callback: 'JSON_CALLBACK'
        }, {
            jsonp: {
                method: 'JSONP',
                isArray: false,
            }
        });
    }]);