api.controller = function ($scope, $timeout, spModal) {
	/* widget controller */
	var c = this;

	$scope.openResource = function (id, link, title) {
		spModal
			.open({
			title: "Resource Name",
			footerStyle: { display: "none" },
			size: "lg",
			widget: "tap_resource_modal",
			widgetInput: {
				sysID: id,
				link: link,
				title: title
			},
		})
			.then(function () {
			console.log("Widget Dissmissed");
		});
	};
};
