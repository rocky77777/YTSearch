//AIzaSyDxSn7-h3gdKYaP4jCNDMAkV6unHiPtmCw

$(function() {
	$("#search-form").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm) {
	var params = {
		part:'snippet',
		key:"AIzaSyDxSn7-h3gdKYaP4jCNDMAkV6unHiPtmCw",
		q:searchTerm,
		//s: searchTerm,
		r: "json"
	};
	url = "https://www.googleapis.com/youtube/v3/search"
	$.getJSON(url, params, function(data) {
		console.log("data is", data);
		OBJ = data;
		showResults(data);
	});
}

function showResults (results) {
	var html = "";
	$.each(results, function(index,value) {
		console.log("test");
		html += "<p>" + value.items + "</p>";
	});
	$("#search-results").html(html);
};

//item.snippet.thumbnails.medium.url.