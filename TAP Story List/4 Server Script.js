(function () {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

  data.storyList = [];

  if (input && input.action === "loadClass") {
    storyList(input.sys_id, "");
  }

  function storyList(classID, moduleID) {
    var traineeGR = new GlideRecordSecure("x_adsr_tap_m2m_trainee");
    traineeGR.addQuery("x_adsr_tap_class", classID);
    traineeGR.setLimit(1);
    traineeGR.query();
    while (traineeGR.next()) {
      var storyGR = new GlideRecordSecure("x_adsr_tap_m2m_story_instance");
      storyGR.addQuery("x_adsr_tap_m2m_trainee", traineeGR.sys_id.toString());
      // storyGR.addQuery("x_adsr_tap_story.module", input.moduleID);
      storyGR.query();
      while (storyGR.next()) {
        var storyObj = {
          name: storyGR.x_adsr_tap_story.getDisplayValue(),
          acceptanceCri:
            storyGR.x_adsr_tap_story.acceptance_criteria.getDisplayValue(),
        };
        data.storyList.push(storyObj);
      }
    }
  }
  console.log(data.storyList);
})();
