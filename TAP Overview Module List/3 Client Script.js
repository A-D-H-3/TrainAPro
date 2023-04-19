api.controller = function ($rootScope, $scope) {
  /* widget controller */
  var c = this;
	
	$scope.showWidget = "stories";
	
	for(var i = 0; i < c.data.moduleList.length; i++) {
		c.data.moduleList[i].selected = true;
		break;
	}

  $scope.selectedModule = function (modID) {
		for(var i = 0; i < c.data.moduleList.length; i++) {
			c.data.moduleList[i].selected = false;
		if(c.data.moduleList[i].mod_sys_id == modID) {
			c.data.moduleList[i].selected = true;
		}
	}
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
  }
};
