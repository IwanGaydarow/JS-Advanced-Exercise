function createArticle() {
	let tittle = document.getElementById('createTitle');
	let content = document.getElementById('createContent');

	if (tittle.value !== "" && content.value !== "") {
		let section = document.getElementById('articles');
		let h3 = document.createElement('h3')
		h3.textContent = tittle.value;
		let p = document.createElement('p')
		p.textContent = content.value;

		let article = document.createElement('article');
		article.appendChild(h3);
		article.appendChild(p);
		section.appendChild(article);

		tittle.value = "";
		content.value = "";
	} else {
		tittle.value = "";
		content.value = "";
	}
}