let post_section = document.getElementById("posts");
[
	{
		  "title":	"SimpleToDo"
		, "link":	"https://github.com/ScegfOd/SimpleToDo"
		, "img":	"images/SimpleToDoWalkthrough.gif"
		, "alt":	"gif of walkthrough of app"
		, "desc":	"A simple ToDo list for android"
	}
].forEach(x => {
	let art = document.createElement("article");
/*
	<header>
		<h2><a href="https://github.com/ScegfOd/SimpleToDo">SimpleToDo</a></h2>
	</header>
*/
	let head0 = document.createElement("header");
	let head1 = document.createElement("h2");
	let head2 = document.createElement("a");
	head2.innerText =	x["title"];
	head2.href =		x["link"];

	head1.appendChild(head2);
	head0.appendChild(head1);
	  art.appendChild(head0);

/*
	<a href="https://github.com/ScegfOd/SimpleToDo" class="image fit"><img src="images/SimpleToDoWalkthrough.gif" alt="" /></a>
*/
	let img0 = document.createElement("a");
	let img1 = document.createElement("img");
	img1.src =	x["img"];
	img1.alt =	x["alt"];
	img0.href =	x["link"];
	img0.classList.add("image");
	img0.classList.add("fit");

	img0.appendChild(img1);
	 art.appendChild(img0);

/*
	<p>A simple ToDo list for android</p>
*/
	let desc = document.createElement("p");
	desc.innerText=x["desc"];
	 art.appendChild(desc);

/*
	<ul class="actions special">
		<li><a href="https://github.com/ScegfOd/SimpleToDo" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
	</ul>
*/
	let button0 = document.createElement("ul");
	let button1 = document.createElement("li");
	let button2 = document.createElement("a");
	let button3 = document.createElement("span");
	button3.classList.add("label");
	button3.innerText="GitHub";
	button2.classList.add("icon");
	button2.classList.add("brands");
	button2.classList.add("fa-github");
	button2.href=x["link"];
	button0.classList.add("actions");
	button0.classList.add("special");

	button2.appendChild(button3);
	button1.appendChild(button2);
	button0.appendChild(button1);
	    art.appendChild(button0);

//	finally, add to the page!
	post_section.appendChild(art);
});

//example article after assembly:
/*
<article>
	<header>
		<h2><a href="https://github.com/ScegfOd/SimpleToDo">SimpleToDo</a></h2>
	</header>
	<a href="https://github.com/ScegfOd/SimpleToDo" class="image fit"><img src="images/SimpleToDoWalkthrough.gif" alt="" /></a>
	<p>A simple ToDo list for android</p>
	<ul class="actions special">
		<li><a href="https://github.com/ScegfOd/SimpleToDo" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
	</ul>
</article>
*/
