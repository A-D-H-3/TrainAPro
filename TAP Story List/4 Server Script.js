(function () {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

  data.storyList = [];

  if (input && input.action === "loadStories") {
    storyList(input.sys_id);
  }

  function storyList(classID) {
    var storyGR = new GlideRecordSecure("x_adsr_tap_story");
    storyGR.addQuery("module", classID);
    // storyGR.addQuery("x_adsr_tap_story.module", input.moduleID);
    storyGR.query();
    while (storyGR.next()) {
      var storyObj = {
        name: storyGR.getElement("name").getDisplayValue(),
        criteria: storyGR.getElement("acceptance_criteria").getDisplayValue(),
        str_sys_id: storyGR.getDisplayValue("sys_id"),
        desc: storyGR.getDisplayValue("description"),
        selected: false,
      };
      data.storyList.push(storyObj);
    }
    console.log(data.storyList[0].criteria);
    console.log(data.storyList[0].str_sys_id);
  }
})();
