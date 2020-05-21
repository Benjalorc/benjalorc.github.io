var textos = [{
	selector: "#languages",
	contenido: `<img class="flag" src="./images/england-plain.jpg">`
},{
	selector: "h1",
	contenido: "Benjamín Saúl Escobar García <span>Front-end Web Development</span>",
},{
	selector: ".resumen>p",
	contenido: "Front-end Developer with strong experience in HTML5 and CSS3. High expertise with Javascript and Angular Framework. New technologies enthusiast, loving hardware world and passionate musician."
},{
	selector: "table tr:nth-child(3) td",
	all: true,
	contenido: [
		`<a href="https://www.linkedin.com/in/benjaseg/?locale=en_US" target="_blank"><img src="./img/linkedin.png"></a>`,
		`<a href="https://www.linkedin.com/in/benjaseg/?locale=en_US" target="_blank">linkedin.com/in/benjaseg/?locale=en_US</a>`
	]
},{
	selector: "main>section:nth-child(n+4):nth-child(-n+7)",
	all: true,
	contenido: [
		`
			<h3>Front-end Developer. Oralsys. <span>Apr 2018-Apr 2020</span></h3>
			<p>
				I developed components using <strong>Angular 5-8</strong>, handling data trough a <strong>REST API</strong>, and mantaining
				a git repository on <strong>GitLab</strong>. I created view for calendar management powered by <strong>Fullcalendar</strong> library.
				I adapted pdf documents creation using <strong>PdfMake</strong> library. I managed to handle RX image visualization
				and 3D Rendering using <strong>Web Workers</strong> and <strong>Ami.js</strong> library. I led freelancers which weer hired for
				specific requirements. I debugged my own and third party front-end errors.
			</p>
		`,
		`
			<h3>Front-end Developer. CSUDO. <span>Sep 2017-Mar 2018</span></h3>
			<p>
				I developed <strong>Angular 4</strong> components for capturing and fetching earthquakes geographic data,
				handling data trough a <strong>REST API</strong>, and mantaining a git repository on <strong>GitHub</strong>. I created an interactive
				web map for data geo-referencing, with custom icons and dynamic data visualization, powered by
				<strong>Leaflet</strong> library. I managed to include extra features for calculating distances and areas measurements. I
				debugged front-end bugs due to system changes.
			</p>
		`,
		`
			<h3>Full-stack Developer. UPTOS. <span>Oct 2016-Sep 2017</span></h3>
			<p>
				I created a geographic information system using <strong>Angular 4</strong> and <strong>Bootstrap 3</strong> frameworks in
				front, <strong>Node.js</strong> with <strong>Express</strong> on the web server, and <strong>Mongodb</strong> as database management system. I
				designed <strong>UML</strong> artifacts for system documentation. I developed components for capturing popoulation
				and students data from my <strong>REST API</strong>. I managed to include geo-referencing capabilities for data using
				<strong>Leaflet</strong> library. I mantained a git repository on <strong>GitHub</strong> for versioning. Ad honorem project as partial
				requirement in Computer Science career.
			</p>
		`,
		`
			<h3>Javascript Developer. UPTOS. <span>Oct 2015-Sep 2016</span></h3>
			<p>
				I created algorythms for <strong>Javascript</strong> implementation, about image manipulation and
				morphology, using <strong>Canvas</strong> API from <strong>HTML5</strong>. I developed filters for colour thereshold, grayscale,
				gaussian, laplacian, and convolution filter. Ad honorem project as final requirement to get my Associate's in Computer Science degree.
			</p>
		`
	]
},{
	selector: "h2",
	all: true,
	contenido: ["Experiences","Courses","Education","Knowledge / Skills / Profiency"]
},{
	selector: "article p",
	all: true,
	contenido: [
		`Completed <span>3h 20m</span>`,
		`Studying <span>2h 51m</span>`
	]
},{
	selector: ".tiempo .descripcion",
	all: true,
	contenido: [
		`
			<h4>High School in Computer Science</h4>
			<p>Nuestra Señora del Valle</p>
			<h5>2007 - 2012</h5>
		`,
		`
			<h4>Associate's in Computer Science</h4>
			<p>UPTOS: Clodosbaldo Russián</p>
			<h5>2013 - 2016</h5>
		`,
		`
			<h4>Bachelor of Science: Computer Science*</h4>
			<p>UPTOS: Clodosbaldo Russián</p>
			<h5 class="pd">*Unfinished <small>(final year)</small></h5>
		`,
	]
},{
	selector: "ul",
	contenido: 
	`
		<li><strong>Programming</strong>: High expertise in <strong>Javascript</strong> and frameworks or libraries based on this language.</li>
		<li><strong>Web Layouts</strong>: Strong experience with <strong>HTML5</strong> and <strong>CSS3</strong> trends, controling <strong>CSS Grid</strong>, and handling <strong>Bootstrap 3 - 4</strong> framework, to increase usability and user experience.</li>
		<li><strong>Versioning</strong>: Git Version control management on main platforms as GitHub, BitBucket or Gitlab.</li>
		<li>Adaptability to environment changes.</li>
		<li>Proactivity, problems analysis and solving capabilities.</li>
		<li>Teamwork skills. Mind-open to accept and offer support.</li>
		<li>High conversational, reading and writing <strong>english</strong> level, both for technical and commercial english.</li>
	`
}];