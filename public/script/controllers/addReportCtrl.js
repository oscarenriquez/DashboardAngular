(function(angular, DashboardSL) {

    DashboardSL.AddReportCtrl = function AddReportCtrl($scope, $mdDialog) {
        $scope.holaMundo = "Hola Mundo";
        $scope.closeDialog = function() {
            $mdDialog.hide();
        };
    }

    angular.module('DashboardSL').controller('AddReportCtrl', DashboardSL.AddReportCtrl);

})(angular, DashboardSL || (DashboardSL = {}));