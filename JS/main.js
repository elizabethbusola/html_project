function search(){
	const fragment = document.createDocumentFragment()
	for (let i = 1; i <= 5; i++) {
		const headerText= `This is header text ${i}`
		const urlText=`https://google.com/${i}`
		const descriptionText=`This is the description for the result ${1}`

		const element=document.createElement('div')
		
		const headerParagraph =document.createElement('p')
		headerParagraph.textContent=headerText
		const descriptionParagraph =document.createElement('p')
		descriptionParagraph.textContent=descriptionText
		const urlParagraph =document.createElement('p')
		urlParagraph.textContent=urlText
		element.appendChild(headerParagraph)
		element.appendChild(urlParagraph)
		element.appendChild(descriptionParagraph)
		fragment.appendChild(element);
	}
	const form=document.getElementById("form")

	form.appendChild(fragment)
	console.log(fragment)
	//document.body.appendChild(fragment);
}

function search2(){
	const fragment = document.createDocumentFragment()
	for (let i = 1; i <= 5; i++) {
		//console.log("bieng called");
		const textContent=`<p>This is header text ${i}</p><p>https://google.com/${i}</p><p>This is the description for the result ${i}</p>`
		const element=document.createElement('div')
		const spanElement =document.createElement('span')
		spanElement.innerHTMl=textContent
		element.appendChild(spanElement)
	}
	document.body.appendChild(fragment);
}
