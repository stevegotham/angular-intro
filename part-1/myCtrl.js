app.controller("myCtrl", function($scope) {
    $scope.myFunc = function() {
        console.log("You clicked the button. Don't ever click the button.");
    $scope.message = "You clicked the button. Don't ever click the button.";
    };
    $scope.el = document.getElementById('list');
    $scope.secondFunc = function() {
        if($scope.el.className == "hide") {
            $scope.el.className = "show";
        }
    };
});
