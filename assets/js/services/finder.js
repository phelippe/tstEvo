angular.module('app.services')
    .service('Finder', ['$resource', '$filter', 'appConfig', '$http', function($resource, $filter, appConfig, $http){

        $http.defaults.useXDomain = true;

        /*function transformData(data){
            var o = angular.copy(data);
            if(angular.isObject(data)){
                if(data.hasOwnProperty('start_date')){
                    o.start_date = $filter('date')(data.start_date, 'yyyy-MM-dd')
                }
                if(data.hasOwnProperty('due_date')){
                    o.due_date = $filter('date')(data.due_date, 'yyyy-MM-dd')
                }

                return appConfig.utils.transformRequest(o);
            }
            return data;
        };*/

        return $resource('http://'+ ':name' +'.tumblr.com/api/read/json', {
            name: '@name',
        }, {
            get: {
                method: 'GET',
                /*transformResponse: function(data, headers){
                    var o = appConfig.utils.transformResponse(data, headers);
                    if(angular.isObject(o)){
                        if(o.hasOwnProperty('start_date') && o.start_date){
                            var arrayDate = o.start_date.split('-'),//yyyy-MM-dd
                                month = parseInt(arrayDate[1])-1;
                            //dei split na ultima parte pra remover as horas
                            o.start_date = new Date(arrayDate[0], month, arrayDate[2].split(' ', 1));
                        }
                        if( o.hasOwnProperty('due_date') && o.due_date){
                            var arrayDate = o.due_date.split('-'),//yyyy-MM-dd
                                month = parseInt(arrayDate[1])-1;
                            //dei split na ultima parte pra remover as horas
                            o.due_date = new Date(arrayDate[0], month, arrayDate[2].split(' ', 1));
                        }
                    }
                    return o;
                }*/
            },
            /*queryAll: {
                method: 'GET',
                isArray: false,
            },
            save: {
                method: 'POST',
                transformRequest: transformData,
            },
            update: {
                method: 'PUT',
                transformRequest: transformData,
            },*/
        });
    }]);