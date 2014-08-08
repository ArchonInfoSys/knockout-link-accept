(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery", "knockout"], factory);
	} else {
		// Browser globals
		factory(jQuery, ko);
	}
}(this, function ($, ko) {
	ko.bindingHandlers.linkAccept = {
		init: function (element, valueAccessor) {
			$(element).on("click", function () {
				$.ajax({
					url: $(element).attr("href"),
					type: "GET",
					headers: {
						Accept: ko.unwrap(valueAccessor())
					}
				}).done(function (data) {
					var uri = "data:" + ko.unwrap(valueAccessor()) + ";charset=UTF-8," + encodeURIComponent(data);
					window.location = uri;
				});

				return false;
			});
		}
	};
}));
