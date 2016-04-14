app.controller("myCtrl", function($scope) {
    $scope.swap = function() {
        var popup = document.getElementById('popup');
        if (event.target.id === 'btn') {
            popup.style = "visibility: visible;"
        }
        else {
            popup.style = "visibility: hidden;"
        }
    }
})