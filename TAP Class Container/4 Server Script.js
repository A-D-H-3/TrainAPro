(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	data.addNewClass = $sp.getWidget('tap_new_class', {});
	data.classInformation = $sp.getWidget('tap_class_details', {});
	data.classList = $sp.getWidget('tap_class_list', {});
	data.traineeList = $sp.getWidget('tap_trainee_list', {});
})();