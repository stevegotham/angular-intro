app.controller("myCtrl", function($scope) {
    
    // ====== change paragraph color ======
    $scope.paragraphs = document.getElementsByTagName('p');
    for (var i=0; i<$scope.paragraphs.length; i++) {
        $scope.paragraphs[i].addEventListener('mouseover', function() {
            event.target.style="color:pink;"
        });
        $scope.paragraphs[i].addEventListener('mouseleave', function() {
            event.target.style="color:black;"
        });
    };
    
    // ===== add exclamation point ======
    $scope.shout = function() {
        h1.innerHTML +='!'
    }
    
    // ===== confirm link clicks ======
    $scope.doubleCheck = function() {
        var result = confirm("Do you want to go to the link?");
            if(!result) {
                event.preventDefault();
                document.getElementById('body').removeChild(this);
            }
        }
    $scope.links = document.getElementsByTagName('a');
    for (var i=0; i<$scope.links.length; i++) {
        $scope.links[i].addEventListener('click', $scope.doubleCheck);
    }

})  


