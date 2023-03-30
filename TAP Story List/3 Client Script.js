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
	
/*	function decodeHTML(str) {
    var a = str.replace(/<\/?[^>]+(>|$)/g, ""); //Remove tags
    var b = a.replace(/&amp;/g, '&'); //Retain any ampersands that are just ampersands
    return b.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec); //Returns the special character from the decimal code representation and returns the entire decoded string.
    });
}
	decodeHTML("test");
	*/
	
/*	  $scope.changeSelected = function (id) {
    for (var k = 0; k < c.data.classes.length; k++) {
      c.data.classes[k].selected = false;
    }

    for (var j = 0; j < c.data.classes.length; j++) {
      if (c.data.classes[j].sys_id == id) {
        c.data.classes[j].selected = true;
        //console.log(c.data.classes);
        break;
      }
    }

  }
	*/
};
