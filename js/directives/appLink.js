app.directive('appLink', function() { 
    return { 
        restrict: 'E', 
        scope: { 
            link: '=' 
        }, 
        templateUrl: 'http://localhost:8888/webAngular/js/directives/appLink.html' 
    }; 
});