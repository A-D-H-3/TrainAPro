(function () {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

  data.coffee = $sp.getWidget("coffee_maker", {});
  data.infoDisplay = $sp.getWidget("tap_info_display", {});

  if (input && input.action === "loadStories") {
    storyList(input.sys_id);
  }

  function storyList(classID) {
    var storyGR = new GlideRecordSecure("x_adsr_tap_story");
    storyGR.addQuery("module", classID);
    storyGR.query();
    if (!storyGR.next()) {
      data.storyList = undefined;
    } else if (storyGR.next()) {
      data.storyList = [];
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
    }
  }
})();
