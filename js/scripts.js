const modal = document.querySelector(".modal");
let wasOpen = false;

function CloseModal(){
	modal.classList.remove("open");
	document.body.style.overflow = 'auto';
}
function OpenModal(){
	modal.classList.add("open");
	document.body.style.overflow = 'hidden';

	if(!wasOpen){

		let imgs = modal.querySelectorAll("img");
		imgs.forEach(el => el.src = el.dataset.src);
		wasOpen = true;
	}
}

document.querySelector("#portfolio").addEventListener("click", OpenModal);
document.querySelector("#modal-close").addEventListener("click", CloseModal);
document.querySelector("#backdrop").addEventListener("click", CloseModal);

document.querySelector("#languages").addEventListener("click", (e)=>{

	textos.forEach((el)=>{

		if(el.all){

			let elems = document.querySelectorAll(el.selector);
			el.contenido.forEach((html, i)=>{

				let mid;
				if(el.outer){
					mid = elems[i].outerHTML;
					elems[i].outerHTML = html;
				}
				else{
					mid = elems[i].innerHTML;
					elems[i].innerHTML = html;
				}
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