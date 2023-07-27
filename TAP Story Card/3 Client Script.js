api.controller=function($scope, $rootScope, spModal) {
  /* widget controller */
  var c = this;


  $rootScope.$on("selectedStory", function (event, args) {
    $scope.name = args.name;
		$scope.strID = args.str_id;
    $scope.criteria = args.criteria;
    if (!args.criteria) {
      $scope.criteria = "Please select a Story to view the details";
    } else if (args.criteria == "") {
      $scope.criteria = "No Acceptance Criteria currently for this Story";
    }

  });

  // $scope.criteria = "Please select a Story to view the details";
	
	$scope.openAnswer = function(){
		spModal.open({
        title: $scope.name,
        footerStyle: { display: "none" },
				size: "lg",
        widget:"tap_answer_modal",
        widgetInput:{
          sys_id:$scope.strID,
        }
      }).then(function(){
        console.log("Widget Dissmissed")
      })
	}

  $scope.submitAnswer = function() {
    c.data.action = "submitAnswer";
    c.server.update().then(function(){
      reloadPage(sys_id, modifiableRecord)
      $scope.$parent.$parent.$dismiss();
      c.data.action = undefined;
      spUtil.addInfoMessage("Story Answered")
    });
  }
};