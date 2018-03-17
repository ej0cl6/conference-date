function getDate(){
	var date = new Date();
	var yy = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var mm = m<10 ? "0"+m : m;
	var dd = d<10 ? "0"+d : d;
	return yy + '/' + mm + '/' + dd;
}

$(document).ready(function () {
	data.sort(function(x, y){
		if(x["date"] < y["date"])
			return -1;
		else if(x["date"] > y["date"])
			return 1;
		else
			return 0;
	});
	var date = getDate();
	
	var table = document.getElementById("conf");
	for(var i=0; i<data.length; i++){
		var row = table.insertRow(i+1);
		for(var j=0; j<check.length; j++){
			if(data[i][check[j]].length>0 && data[i][check[j]]<date)
				data[i][check[j]] = '<span style="color: #999;"><del>' + data[i][check[j]] + '</del></span>';
		}
		for(var j=0; j<label.length; j++){
			var cell = row.insertCell(j);
			cell.innerHTML = data[i][label[j]];
		}
		var cell = row.insertCell(label.length);
		cell.innerHTML = '<a href="' + data[i]["link"] + '">Link</a>';
	}
});