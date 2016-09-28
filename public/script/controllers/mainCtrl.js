(function(angular, DashboardSL) {

    DashboardSL.MainCtrl = function($scope, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet, templateService, menu) {
        $scope.searchText = "";
        $scope.tpl = templateService;
        $scope.name = "Oscar";
        $scope.apellido = "Enriquez";
        $scope.toggleMenu = function() {
            $mdSidenav('left').toggle();
        };


        $scope.addReport = addReport;

        var aboutMeArr = ['Family', 'Location', 'Lifestyle'];
        var budgetArr = ['Housing', 'LivingExpenses', 'Healthcare', 'Travel'];
        var incomeArr = ['SocialSecurity', 'Savings', 'Pension', 'PartTimeJob'];
        var advancedArr = ['Assumptions', 'BudgetGraph', 'AccountBalanceGraph', 'IncomeBalanceGraph'];

        $scope.isOpen = isOpen;
        $scope.toggleOpen = toggleOpen;
        $scope.autoFocusContent = false;
        $scope.menu = menu;

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        function isOpen(section) {
            return menu.isSectionSelected(section);
        };

        function toggleOpen(section) {
            menu.toggleSelectSection(section);
        };

        function addReport($event) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
            $mdDialog.show({
                templateUrl: './view/dialog/newReportDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: 'AddReportCtrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function(report) {
                console.log('You submited the dialog');
            }, function() {
                console.log('You cancelled the dialog.');
            });
        }
    }

    angular.module('DashboardSL').controller('MainCtrl', DashboardSL.MainCtrl);
})(angular, DashboardSL || (DashboardSL = {}));