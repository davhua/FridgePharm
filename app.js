var app = angular.module('fridgePharm',[]);
app.controller('AuthController', function($scope, $firebaseObject) {
	$scope.options = {'Doctor', 'Patient' };
	$scope.testval = "it worked";
}]);

app.controller("MedSchedController", function($scope, $firebaseObject) {
  var ref = new Firebase("https://glaring-torch-8214.firebaseio.com");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});