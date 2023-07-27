(function () {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

  data.resources = [];

  //const userID = gs.getUserID();

  resourceLoad();

  function resourceLoad() {
    var storyResourceGR = new GlideRecordSecure("x_adsr_tap_resource");
    //storyResourceGR.addQuery("resource_type", "OneDrive");
    storyResourceGR.query();
    while (storyResourceGR.next()) {
      var resourceOBJ = {
        title: storyResourceGR.getDisplayValue("title"),
        source: storyResourceGR.getDisplayValue("resource_type"),
        link: storyResourceGR.getDisplayValue("link"),
        sys_id: storyResourceGR.getDisplayValue("sys_id"),
      };
      data.resources.push(resourceOBJ);
    }
    console.log(data.resources);
  }
})();
