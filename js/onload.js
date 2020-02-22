onloadfunctions = []
function callEverything(){
	onloadfunctions.forEach(x=>x());
}
window.onload = callEverything;
