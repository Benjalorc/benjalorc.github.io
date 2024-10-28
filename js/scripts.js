const logos = {
	html5: {
		src: "./img/html5-logo.svg",
		alt: "HTML5"
	},
	css3: {
		src: "./img/css3-logo.svg",
		alt: "CSS3"
	},
	bs: {
		src: "./img/bs-logo.svg",
		alt: "Bootstrap"
	},
	fa: {
		src: "./img/fa-logo.svg",
		alt: "Font Awesome"
	},
	js: {
		src: "./img/js-logo.svg",
		alt: "JavaScript"
	},
	chartjs: {
		src: "./img/chartjs-logo.svg",
		alt: "Chart.js"
	},
	leaflet: {
		src: "./img/leaflet-logo.svg",
		alt: "leaflet"
	},
	ts: {
		src: "./img/ts-logo.svg",
		alt: "TypeScript"
	},
	ng: {
		src: "./img/ng-logo.svg",
		alt: "Angular"
	},
	react: {
		src: "./img/react-logo.svg",
		alt: "React"
	},
	mui: {
		src: "./img/mui-logo.svg",
		alt: "Material UI"
	},
	ngMat: {
		src: "./img/ng-mat-logo.svg",
		alt: "Angular Material"
	},
	rxjs: {
		src: "./img/rxjs-logo.svg",
		alt: "RxJs"
	},
	redux: {
		src: "./img/redux-logo.svg",
		alt: "Redux"
	},
	strapi: {
		src: "./img/strapi-logo.svg",
		alt: "Strapi"
	},
	idb: {
		src: "./img/idb-logo.png",
		alt: "IndexedDB"
	}
}

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

		const stacks = [
			["html5","react","ts","redux","css3","mui","idb"],
			["html5","ng","ts","rxjs","css3","ngMat","strapi"],
			["html5","react","js","redux","chartjs","css3","bs","fa"],
			["html5","ng","ts","rxjs","leaflet","css3","bs","fa"]
		];
		document.querySelectorAll(".stack").forEach((el, i)=>{
			for(const tech of stacks[i]){
				el.innerHTML += `<img src="${logos[tech].src}" alt="${logos[tech].alt}">`;
			}
		});

		wasOpen = true;
	}
}

document.querySelector("#portfolio").addEventListener("click", OpenModal);
document.querySelector("#modal-close").addEventListener("click", CloseModal);
document.querySelector("#backdrop").addEventListener("click", CloseModal);

// const pdf = document.querySelector("#getPdf");

document.querySelector("#languages").addEventListener("click", (e)=>{

	// pdf.href = /US/.test(pdf.href) ? "./docs/CV(es-ES).pdf" : "./docs/CV(en-US).pdf";
	// pdf.download = /US/.test(pdf.download) ? "CV Benjamin Escobar (Angular-React-MEAN).pdf" : "Benjamin Escobar CV [en-US] (Angular-React-MEAN).pdf";

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