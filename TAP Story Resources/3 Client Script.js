api.controller = function ($scope) {
  /* widget controller */
  var c = this;
  $scope.embedLink = c.data.resources[1].link;
  console.log(
    "******** - AH here is your console log - ******** " + $scope.embedLink
  );
  console.log(
    "******** - AH here is your console log - ******** " +
      typeof c.data.resources[2].source
  );
};
