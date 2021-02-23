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

const pdf = document.querySelector("#getPdf");

document.querySelector("#languages").addEventListener("click", (e)=>{

	pdf.href = /US/.test(pdf.href) ? "./docs/CV(es-ES).pdf" : "./docs/CV(en-US).pdf";
	pdf.download = /US/.test(pdf.download) ? "CV Benjamin Escobar (Angular-React-MEAN).pdf" : "Benjamin Escobar CV [en-US] (Angular-React-MEAN).pdf";

	textos.forEach((el)=>{

		let prop = el.outer ? "outerHTML" : "innerHTML";

		if(el.all){

			let elems = document.querySelectorAll(el.selector);
			el.contenido.forEach((html, i)=>{

				let mid = elems[i][prop];
				elems[i][prop] = html;
				el.contenido[i] = mid;
			});
		}
		else{

			let elem = document.querySelector(el.selector);
			let mid = elem[prop];
			elem[prop] = el.contenido;
			el.contenido = mid;
		}
	});
});