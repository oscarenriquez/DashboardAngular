DashboardSL.directive('menuLink', function() {
    return {
        scope: {
            section: '='
        },
        templateUrl: 'template/menu-link.html',
        link: function($scope, $element) {
            var controller = $scope.$parent.$parent.$parent;
            $scope.focusSection = function() {
                // set flag to be used later when
                // $locationChangeSuccess calls openPage()
                controller.autoFocusContent = true;
            };
        }
    };
});