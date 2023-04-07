api.controller = function ($rootScope, $scope) {
  /* widget controller */
  var c = this;

  $rootScope.$on("selectedModule", function (event, args) {
    loadStories(args.mod_sys_id);
  });

  function loadStories(id) {
    c.data.sys_id = id;
    c.data.action = "loadStories";
    c.server.update().then(function () {
      c.data.action = undefined;
      $scope.selectedStory(c.data.storyList[0].str_sys_id);
    });
  }

  $scope.selectedStory = function (modID) {
    storyBroadcast(modID);
  };

  function storyBroadcast(modID) {
    $rootScope.$broadcast("selectedStory", {
      str_sys_id: modID,
    });
  }
};
