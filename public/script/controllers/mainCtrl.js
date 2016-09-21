DashboardSL.controller('mainCtrl', function($scope, templateService, $mdSidenav, menu) {    
    $scope.searchText = "";
    $scope.tpl = templateService;
    $scope.name = "Oscar";
    $scope.apellido = "Enriquez";
    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };


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
});