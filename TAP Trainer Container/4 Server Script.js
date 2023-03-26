(function () {
  data.classList = $sp.getWidget("tap_class_list");

  /*---------------------------------------------
		The input checks to see if we are getting anything
		from the client(html/angularjs) if we are
		it checks teh data object for input of action
		then if that action string matches it will run
		this will only be triggered if there is input
		from the client. This input will be triggered
		at load time because it finds somethign in the
		root scope. the root scope is already broadcasting
		from the other widget of clas list and will
		give teh sys ID of the current class.
		this will give you enough info to find associated
		modules and do different data manipulation
		all things are connected to the class its just
		figuring out how to query the proper tables.
	---------------------------------------------*/

  if (input && input.action === "loadClass") {
    loadData();
  }

  function loadData() {
    console.log("load your data here to populate tiles");
    // var classGR = new GlideRecord('')
  }
})();
