api.controller = function ($rootScope, $scope) {
  /* widget controller */
  var c = this;

  $rootScope.$on("selectedResource", function (event, args) {
    $scope.title = args.resTitle;
    $scope.source = args.resSource;
    $scope.link = args.resLink;
    $scope.sysID = args.resSysID;
    console.log("******* - AH You are here - *******" + " " + args.resTitle);
    console.log(args.resTitle);
  });

  console.log($scope.title);
};
