api.controller = function ($scope, $rootScope, spModal) {
  /* widget controller */
  var c = this;

  $rootScope.$on("selectedResource", function (event, args) {
    $scope.title = args.title;
    $scope.source = args.source;
    $scope.link = args.link;
    $scope.sysID = args.res_sys_id;
    if (args.res_sys_id) {
      console.log($scope.title);
    }
  });

  // $scope.criteria = "Please select a Story to view the details";

  $scope.openResource = function () {
    spModal
      .open({
        title: "Resource Name",
        footerStyle: { display: "none" },
        size: "lg",
        widget: "tap_resource_modal",
        widgetInput: {
          //sys_id:$scope.strID,
          //sys_id: $scope.strID,
        },
      })
      .then(function () {
        console.log("Widget Dissmissed");
      });
  };

  // $scope.submitAnswer = function() {
  //   c.data.action = "submitAnswer";
  //   c.server.update().then(function(){
  //     reloadPage(sys_id, modifiableRecord)
  //     $scope.$parent.$parent.$dismiss();
  //     c.data.action = undefined;
  //     spUtil.addInfoMessage("Story Answered")
  //   });
  // }
};
