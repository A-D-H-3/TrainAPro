(function() {
    data.classList = $sp.getWidget("tap_class_list", {});
    data.trainerTile = $sp.getWidget("tap_trainer_tile", {});
    data.classInfo = $sp.getWidget('tap_class_details', {});
    data.storyList = $sp.getWidget('tap_story_list', {});
    data.moduleList = $sp.getWidget('tap_index_module_list', {});
    data.storyDisp = $sp.getWidget('tap_story_display', {});

    data.loggedInUser = gs.getUser().getFirstName();

	data.userRole = new x_adsr_tap.userRoleUtility().privileges();
})();