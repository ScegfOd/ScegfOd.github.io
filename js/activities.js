function loadData(activity){
	columns = ["name","type","dates"];
	table = document.getElementsByTagName("table")[0];
	events.forEach(function(activity){
		table.appendChild(document.createElement("tr"));
		columns.forEach(function(column){
			table.lastChild.appendChild(document.createElement("td"));
			table.lastChild.lastChild.textContent=activity[column].join(', ');
		});
	});
}

onloadfunctions.push(loadData);
