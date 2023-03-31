api.controller = function ($rootScope, $scope) {
  /* widget controller */
  var c = this;

  $rootScope.$on("selectedModule", function (event, args) {
    loadClass(args.mod_sys_id);
  });

  function loadClass(id) {
    console.log(id);
    c.data.sys_id = id;
    c.data.action = "loadClass";
    c.server.update().then(function () {
      c.data.action = undefined;
    });
  }

  // $scope.changeSelected = function (id) {
  //   for (var k = 0; k < c.data.storyList.length; k++) {
  //     c.data.storyList[k].selected = false;
  //   }

  //   for (var j = 0; j < c.data.storyList.length; j++) {
  //     if (c.data.storyList[j].name == id) {
  //       c.data.storyList[j].selected = true;
  //       console.log(c.data.storyList[j].name);
  //       break;
  //     }
  //   }
  // };
};
