api.controller = function ($rootScope, $scope, $sce) {
  /* widget controller */
  var c = this;
	
	$scope.resourceLink = $sce.trustAsResourceUrl(c.data.link);

	
  console.log(c.data);
};
