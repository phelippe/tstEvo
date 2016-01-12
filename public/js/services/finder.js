angular.module('app.services')
    .service('Finder', ['$resource', '$filter', 'appConfig', function ($resource, $filter, appConfig) {

        return $resource('http://api.tumblr.com/v2/blog/:blog_name.tumblr.com/posts/:objeto_retorno/?api_key=:api_key&id=:post_id', {
            blog_name: '@blog_name',
            objeto_retorno: '@objeto_retorno',
            api_key: appConfig.token,
            callback: 'JSON_CALLBACK',
            post_id: '@post_id'
        }, {
            jsonp: {
                method: 'JSONP',
                isArray: false,
            }
        });
    }]);