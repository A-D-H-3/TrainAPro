api.controller = function () {
  /* widget controller */
  var c = this;

  $rootScope.$on("selectedStory", function (event, args) {
    console.log(args.str_sys_id);
    console.log(args.criteria);
  });
};
