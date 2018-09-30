app.directive('appLink', function() { 
    return { 
        restrict: 'E', 
        scope: { 
            link: '=' 
        }, 
        templateUrl: 'js/directives/appLink.html' 
    }; 
});