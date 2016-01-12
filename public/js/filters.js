angular.module('app.filters')
    .filter('timestampToDateBr', ['$filter', function ($filter) {
        return function (data) {
            return $filter('date')(Date.parse(data), 'dd/MM/yyyy');
        }
    }]);