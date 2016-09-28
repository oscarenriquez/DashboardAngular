(function(angular) {

    angular.module('DashboardSL').directive('menuToggle', function($timeout) {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'template/menu-toggle.html',
            link: function(scope, el) {
                var controller = scope.$parent.$parent.$parent;
                scope.isOpen = function() {
                    return controller.isOpen(scope.section);
                };

                scope.toggle = function() {
                    controller.toggleOpen(scope.section);
                };

            }
        };
    });

})(angular);