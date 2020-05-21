document.querySelector("#languages").addEventListener("click", (e)=>{

	textos.forEach((el)=>{

		if(el.all){

			let elems = document.querySelectorAll(el.selector);
			el.contenido.forEach((html, i)=>{

				let mid = elems[i].innerHTML;
				elems[i].innerHTML = html;
				el.contenido[i] = mid;
			});
		}
		else{

			let elem = document.querySelector(el.selector);
			let mid = elem.innerHTML;
			elem.innerHTML = el.contenido;
			el.contenido = mid;
		}
	});
});