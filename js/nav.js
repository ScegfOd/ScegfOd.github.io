all_links = {};
all_links["index.html"]=String.fromCodePoint(0x1F916)+" Home Page";
all_links["activities.html"]=String.fromCodePoint(0x1F996)+" Club Activities";
all_links["login.html"]=String.fromCodePoint(0x1F409)+" Login";
all_links["about.html"]=String.fromCodePoint(0x1F995)+" About Page";

function addNav(){
	nav = document.getElementsByTagName('nav')[0];
	navlist = nav.children[0];
	for(var ref in all_links){
		navlist.appendChild(document.createElement('li'));
		navlist.lastChild.appendChild(document.createElement('a'));
		navlist.lastChild.lastChild.href=ref;
		navlist.lastChild.lastChild.append(all_links[ref]);
		if( navlist.baseURI.match("[^/]*$")[0] == ref ){
			navlist.lastChild.classList.add("active");
		}
	}
}

onloadfunctions.push(addNav);

