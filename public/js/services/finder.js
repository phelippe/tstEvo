angular.module('app.services')
    .service('Finder', ['$resource', '$filter', 'appConfig', function ($resource, $filter, appConfig) {

        return $resource('http://api.tumblr.com/v2/blog/:blog_name.tumblr.com/posts/:objeto_retorno/?api_key='+appConfig.token, {
            blog_name: '@blog_name',
            objeto_retorno: '@objeto_retorno',
            callback: 'JSON_CALLBACK'
        }, {
            jsonp: {
                method: 'JSONP',
                isArray: false,
            }
        });
    }]);