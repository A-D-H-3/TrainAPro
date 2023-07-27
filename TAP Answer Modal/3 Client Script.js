api.controller=function($sce, $scope, spUtil) {
  /* widget controller */
  var c = this;
	
 $scope.criteria = $sce.trustAsHtml(c.data.storyAnswer.criteria);
	
	  $scope.submitAnswer = function() {
    c.data.action = "submitAnswer";
    c.server.update().then(function(){
      $scope.$parent.$parent.$dismiss();
      c.data.action = undefined;
      spUtil.addInfoMessage("Story Answered")
			console.log("Answer sent")
    });
  }
};