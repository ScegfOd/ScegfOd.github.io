let all_links = {"index.html":"&#x1F916; Home Page", "activities.html":"&#x1F996; Club Activities", "about.html":"&#x1F995; About Page"};

function addNav(){
	navlist = document.getElementsByTagName('nav').children[0];
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
addNav();

// note: figure out how to make a nice dictionary/map for getting from URLs to page link contents (including the emoji!)
