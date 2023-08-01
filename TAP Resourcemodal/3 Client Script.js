api.controller=function($sce, $scope, spUtil, $window) {
  /* widget controller */
  var c = this;
	
 $scope.criteria = $sce.trustAsHtml(c.data.storyAnswer.criteria);
	
	  $scope.submitAnswer = function() {
    c.data.action = "submitAnswer";
    c.server.update().then(function(){
      $scope.$parent.$parent.$dismiss();
      c.data.action = undefined;

    });
  }	
	
	$scope.inProgress = function() {
		c.data.state = 2;
    c.data.action = "submitAnswer";
    c.server.update().then(function(){
      $scope.$parent.$parent.$dismiss();
      c.data.action = undefined;

    });
  }	
	
	$scope.completeStory = function() {
		c.data.state = 3;
    c.data.action = "submitAnswer";
    c.server.update().then(function(){
      $scope.$parent.$parent.$dismiss();
      c.data.action = undefined;

    });
  }	
};