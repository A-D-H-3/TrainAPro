(function () {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

  data.trainer = gs.hasRole("x_adsr_tap.trainer");
  data.trainee = gs.hasRole("x_adsr_tap.trainee");
  data.widget = "";
  widgetView();

  function getWidgetData() {
    var widgetDataGR = new GlideRecordSecure("");
  }

  function widgetView() {
    if (data.trainer) {
      data.widget = $sp.getWidget("tap_trainer_container");
      data.classInformation = $sp.getWidget("tap_class_details", {});
      data.classList = $sp.getWidget("tap_class_list", {});
    } else if (data.trainee) {
      data.widget = $sp.getWidget("tap_trainee_container");
      data.stories = $sp.getWidget("tap_trainee_stories_list");
    }
  }
})();
