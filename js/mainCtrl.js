angular.module('friendsList').controller('mainCtrl', function($scope) {

	$scope.friends = ['Tim', 'Josh', 'Zach', 'Brad'];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriendName);
		
		// below sets cleared field
		$scope.newFriendName = '';
	}

});