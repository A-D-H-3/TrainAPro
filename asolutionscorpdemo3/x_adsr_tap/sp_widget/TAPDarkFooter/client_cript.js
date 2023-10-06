api.controller = function($scope, $window) {
	// widget controller
	var c = this;

	
	$scope.toggleDarkTheme = function() {
		if(c.data.darkTheme == "false"){
			c.data.darkTheme = "true"
		} else {
			c.data.darkTheme = "false"
		}
		c.data.action = "toggleDarkTheme";
		c.server.update().then(function(){
			c.data.action = undefined;
		});
		$window.location.reload()
	}
	
};                            