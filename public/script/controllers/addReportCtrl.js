(function(angular, DashboardSL) {

    DashboardSL.AddReportCtrl = function AddReportCtrl($scope, $mdDialog, $mdMedia) {
        $scope.$watch(function() { return ($mdMedia('sm') || $mdMedia('xs')); }, function(big) {
            $scope.screenSize = big;
        });
        $scope.changes = 0;
        $scope.report = {};
        $scope.holaMundo = "Hola Mundo";
        $scope.closeDialog = function() {
            $mdDialog.cancel();
        };
        $scope.save = function() {
            $mdDialog.hide($scope.report)
        }

        $scope.$watch('report.name', function() {
            $scope.changes++; 
        });
    };

    angular.module('DashboardSL').controller('AddReportCtrl', DashboardSL.AddReportCtrl);

})(angular, DashboardSL || (DashboardSL = {}));