api.controller = function ($scope) {
  /* widget controller */
  var c = this;

  broadcasting(c.data.userRole);

    function broadcasting(userRole) {
    $rootScope.$broadcast('userRole', {
      userRole: userRole,
    });
  }

  
};
