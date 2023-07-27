api.controller=function($window, $scope) {
  /* widget controller */
  var c = this;

  $scope.goToOverviewPage = function() {
    $window.location.href = "training?id=tap_overview";
  };
  $scope.goToClassPage = function() {
    $window.location.href = "training?id=tap_class_information";
  };
};