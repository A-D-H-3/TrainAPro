api.controller = function($rootScope, $scope, $timeout) {
    /* widget controller */
    var c = this;

    $scope.loading = true;
    $scope.stories = false;

    $scope.storyShow = function() {
        $scope.stories = true;
    };

    $rootScope.$on("selectedModule", function(event, args) {
        $scope.stories = false;
        loadStories(args.mod_sys_id);
    });

    function loadStories(id) {
        $scope.loading = true;
        c.data.storyList = undefined;
        c.data.sys_id = id;
        c.data.action = "loadStories";
        c.server.update().then(function() {
            c.data.action = undefined;
            if (!c.data.storyList) {
                storyBroadcast(undefined, undefined, undefined, undefined);
            } else {
                storyBroadcast(
										id,
                    c.data.storyList[0].criteria,
                    c.data.storyList[0].name,
									  c.data.storyList[0].str_sys_id
                );
                c.data.storyList[0].selected = true;
            }
        });
    }

    function storyBroadcast(modID, details, name, strID) {
			$timeout(function () {
        $rootScope.$broadcast("selectedStory", {
            str_sys_id: modID,
            criteria: details,
            name: name,
            str_id: strID
        });
        $scope.loading = false;
    },
      1);
  }

    $scope.selectedStory = function(modID) {
        for (var i = 0; i < c.data.storyList.length; i++) {
            c.data.storyList[i].selected = false;
            if (c.data.storyList[i].str_sys_id == modID) {
                c.data.storyList[i].selected = true;
                storyBroadcast(
                    modID,
                    c.data.storyList[i].criteria,
                    c.data.storyList[i].name,
                    c.data.storyList[i].str_sys_id
                );
            }
        }
    };

    // $scope.criteria = "Please select a Story to view the details";

    // $rootScope.$on("selectedStory", function (event, args) {
    //   $scope.name = args.name;
    //   $scope.criteria = args.criteria;
    //   if (!args.criteria) {
    //     $scope.criteria = "Please select a Story to view the details";
    //   }
    //   if (args.criteria == "") {
    //     $scope.criteria = "No Acceptance Criteria currently for this Story";
    //   }
    // });
};