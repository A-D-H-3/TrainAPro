(function() {
	data.time = new GlideDateTime().getDisplayValue();

	var userID = gs.getUserID();

	if(!input){
		onLoad(false)
	}

	if(input && input.action == "toggleDarkTheme"){

		onLoad(true);
	}

	function onLoad(loaded){

		var userThemeGR = new GlideRecordSecure("x_adsr_tap_dark_theme");	
		userThemeGR.addQuery("user", userID);
		userThemeGR.query();
		if(!userThemeGR.hasNext()){
			userThemeGR.initialize();
			userThemeGR.dark_mode = data.darkTheme;
			userThemeGR.user = userID;
			userThemeGR.insert()
		} else {
			while (userThemeGR.next()) {
				if(!loaded){
					data.darkTheme = userThemeGR.dark_mode.toString();
				} else {
					userThemeGR.dark_mode = input.darkTheme;
					userThemeGR.update();
					data.darkTheme = input.darkTheme;
				}

			}

		}

	}
		function backgroundColor (options) {
    options.styles.footer = "background-color: #1E0A25";
    return options;
}

})();