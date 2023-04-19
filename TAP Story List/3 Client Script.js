api.controller = function ($rootScope, $scope) {
  /* widget controller */
  var c = this;

  $scope.loading = true;

  $rootScope.$on("selectedModule", function (event, args) {
    loadStories(args.mod_sys_id);
  });

  function loadStories(id) {
    $scope.loading = true;
    c.data.storyList = undefined;
    c.data.sys_id = id;
    c.data.action = "loadStories";
    c.server.update().then(function () {
      c.data.action = undefined;
      if (!c.data.storyList) {
        storyBroadcast(undefined, undefined);
      } else {
        storyBroadcast(
          c.data.storyList[0].str_sys_id,
          c.data.storyList[0].criteria
        );
        c.data.storyList[0].selected = true;
      }
    });
  }

  function storyBroadcast(modID, details) {
    $rootScope.$broadcast("selectedStory", {
      str_sys_id: modID,
      criteria: details,
    });
    $scope.loading = false;
  }

  $scope.selectedStory = function (modID, details) {
    for (var i = 0; i < c.data.storyList.length; i++) {
      c.data.storyList[i].selected = false;
      if (c.data.storyList[i].str_sys_id == modID) {
        c.data.storyList[i].selected = true;
      }
      storyBroadcast(modID, details);
    }
  };
};
