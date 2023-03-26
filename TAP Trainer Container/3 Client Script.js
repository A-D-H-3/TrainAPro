api.controller=function($rootScope) {
  /* widget controller */
  var c = this;

  $rootScope.$on('currentClass', function (event, args) {
    loadClass(args.sys_id, args.modifiable);
  });

  function loadClass(id, modifiable) {
    c.data.sys_id = id;
    c.data.modifiable = modifiable;
    c.data.action = "loadClass";
    c.server.update().then(function(){
      c.data.action = undefined;
    });
  }
  
};