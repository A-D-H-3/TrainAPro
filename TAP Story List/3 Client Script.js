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
	
	
};
