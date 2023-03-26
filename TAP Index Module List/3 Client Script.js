api.controller = function ($rootScope, $scope) {
  /* widget controller */
  var c = this;

  $scope.selectedModule = function (modID) {
    moduleBroadcast(modID);
  };

  $rootScope.$on("currentClass", function (event, args) {
    loadClass(args.sys_id, args.modifiable);
  });

  function loadClass(id, modifiable) {
    c.data.sys_id = id;
    c.data.modifiable = modifiable;
    c.data.action = "loadClass";
    c.server.update().then(function () {
      c.data.action = undefined;
      $scope.selectedModule(c.data.moduleList[0].mod_sys_id);
    });
  }

  function moduleBroadcast(modID) {
    $rootScope.$broadcast("selectedModule", {
      mod_sys_id: modID,
    });
    console.log("This is the client :" + " " + modID);
  }
};
