$(document).ready(function () {
	data.sort(function(x, y){
		if(x["date"] < y["date"])
			return -1;
		else if(x["date"] > y["date"])
			return 1;
		else
			return 0;
	});
	var table = document.getElementById("conf");
	for(var i=0; i<data.length; i++){
		var row = table.insertRow(i+1);
		for(var j=0; j<label.length; j++){
			var cell = row.insertCell(j);
			cell.innerHTML = data[i][label[j]];
		}
		var cell = row.insertCell(label.length);
		cell.innerHTML = '<a href="' + data[i]["link"] + '">Link</a>';
	}
});