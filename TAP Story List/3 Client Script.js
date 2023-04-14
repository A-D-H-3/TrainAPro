api.controller = function ($rootScope, $scope) {
	/* widget controller */
	var c = this;

	$scope.loading = true;

	$rootScope.$on("selectedModule", function (event, args) {
		loadStories(args.mod_sys_id);
	});

	function loadStories(id) {
		$scope.loading = true;
		c.data.storyList = undefined;
		c.data.sys_id = id;
		c.data.action = "loadStories";
		c.server.update().then(function () {
			c.data.action = undefined;
			if (!c.data.storyList) {
				storyBroadcast(undefined, undefined);
			}
			else {
				storyBroadcast(
					c.data.storyList[0].str_sys_id,
					c.data.storyList[0].criteria
				);
			}
		});
	}

	function storyBroadcast(modID, details) {
		$rootScope.$broadcast("selectedStory", {
			str_sys_id: modID,
			criteria: details,
		});
		$scope.loading = false;
	}

	$scope.selectedStory = function (modID, details) {
		storyBroadcast(modID, details);
	};
};
