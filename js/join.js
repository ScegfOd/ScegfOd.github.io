function signup(){
	dialog = document.getElementById("ThanksDialog");
	data = document.getElementById("name").value;
	dialog.children[1].textContent = "Name: " + data;
	data = document.getElementById("email").value;
	dialog.children[1].textContent += ", Email: <" + data +">";
	data = document.getElementById("password1").value;
	dialog.children[1].textContent += ", Password:" + data;
	data = document.getElementById("password2").value;
	dialog.children[1].textContent += ", Retyped Password:" + data;
	data = document.getElementById("pilot").value;
	dialog.children[1].textContent += "; you are " + data + " at piloting";
	data = document.getElementById("build").value;
	dialog.children[1].textContent += "; you are " + data + " at building";
	dialog.setAttribute("class","ShowDialog");
}
function goaway(){
	document.getElementById("ThanksDialog").removeAttribute("class");
}
