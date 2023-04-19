(function () {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
  data.tile = {};


  if (input && input.action === "loadClass") {
    loadData();
  }

  function loadData() {
		var scriptInclude = new x_adsr_tap.userRoleUtility();
    var broadcastedID = input.sys_id;
    var tileInfoGR = new GlideRecordSecure("x_adsr_tap_class");
    tileInfoGR.addQuery("sys_id", broadcastedID);
    tileInfoGR.query();
    if (tileInfoGR.next()) {
			gs.addErrorMessage(tileInfoGR.getElement("start"));
      data.tile = {
        storyCompletion: scriptInclude.getStoryCompletion(),
        assessmentCompletion: scriptInclude.overallAssessmentScore(),
        moduleCompletion: scriptInclude.getModuleCompletion(),
        classCompletion: scriptInclude.overallClassCompletion(tileInfoGR.start.getDisplayValue(), tileInfoGR.end.getDisplayValue()),
      };
    }
  }
})();
