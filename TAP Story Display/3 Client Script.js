api.controller = function ($scope, $rootScope) {
  /* widget controller */
  var c = this;
$scope.criteria = "Please select a Story to view the details";


  $rootScope.$on("selectedStory", function (event, args) {
		$scope.criteria = args.criteria;
		if(!args.criteria) {
			$scope.criteria = "Please select a Story to view the details";
		}
		if(args.criteria == "") {
			$scope.criteria = "No Acceptance Criteria currently for this Story";
		}

  });


};
