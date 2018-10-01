app.directive('appMenu', function() { 
    return { 
        restrict: 'E', 
        scope: {
            menu: '='
        }, 
        templateUrl: 'http://localhost:8888/webAngular/js/directives/appMenu.html' 
    }; 
});