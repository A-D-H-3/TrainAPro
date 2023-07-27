api.controller = function ($scope, $rootScope) {
	
	$scope.darkMode = false;
  /* widget controller */
  var c = this;
  broadcasting(c.data.userRole);
    function broadcasting(userRole) {
    $rootScope.$broadcast('userRole', {
      userRole: userRole,
    });
  }
};
