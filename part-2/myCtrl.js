app.controller("myCtrl", function($scope) {
    $scope.paragraphs = document.getElementsByTagName('p');
    for (var i=0; i<$scope.paragraphs.length; i++) {
        $scope.paragraphs[i].addEventListener('mouseover', function() {
            event.target.style="color:pink;"
        });
        $scope.paragraphs[i].addEventListener('mouseleave', function() {
            event.target.style="color:black;"
        });
    };
    $scope.shout = function() {
        h1.innerHTML = h1.innerHTML + '!'
    };
    
})  

