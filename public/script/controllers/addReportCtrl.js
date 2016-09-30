(function(angular, DashboardSL) {

    DashboardSL.AddReportCtrl = function AddReportCtrl($scope, $mdDialog, $mdMedia) {
        $scope.$watch(function() { return ($mdMedia('sm') || $mdMedia('xs')); }, function(big) {
            $scope.screenSize = big;
        });
        $scope.report = {};
        $scope.closeDialog = function() {
            $mdDialog.cancel();
        };
        $scope.save = function() {
            $mdDialog.hide($scope.report)
        };
    };

    angular.module('DashboardSL').controller('AddReportCtrl', DashboardSL.AddReportCtrl);

})(angular, DashboardSL || (DashboardSL = {}));