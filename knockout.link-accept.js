var ko = require("knockout");
var $ = require("jquery");

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
