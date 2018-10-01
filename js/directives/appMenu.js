app.directive('appMenu', function() { 
    return { 
        restrict: 'E', 
        scope: {
            menu: '='
        }, 
        templateUrl: 'js/directives/appMenu.html' 
    }; 
});