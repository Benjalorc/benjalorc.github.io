var textos = [{
	selector: "#languages",
	contenido: `<img class="flag" src="./img/england-plain.jpeg">`
},{
	selector: "h1",
	contenido: "Benjamín Saúl Escobar García <span>Front-end Web Development</span>",
},{
	selector: ".resumen>p",
	contenido: "Front-end Developer with strong experience in HTML5, CSS3, and SCSS preprocessor; High expertise with JavaScript and React.js with Next.js framework. Experience with morphological image processing; development of transactional, medical, and geographic information systems; using Git tools and REST API’s; and teamwork with Agile methodologies on interdisciplinary teams. Active self-taught learner. New technologies enthusiast, loving hardware world and passionate musician."
},{
	selector: ".resumen h2",
	contenido: "Availability",
},{
	selector: ".resumen .icons .detalle>h3",
	all: true,
	contenido: [
		`Work starting availability`,
		`In order and available to travel`,
		`Schedule flexibility and adaptability`
	]
},{
	selector: "main>section:nth-child(n+4):nth-child(-n+9)",
	all: true,
	contenido: [
		`
			<h3>Front-end Developer. Applaudo. <span>Apr 2021-Currently</span></h3>
			<p>
				I've built high performant solutions with <strong>React.js</strong> and <strong>Next.js</strong> framework for server side rendering,
				in a wide variety of projects for US-based clients as well as clients based in El Salvador, adhering to best practices and coding standards.
			</p>
			<p>
				Crafted next-generation, pixel-perfect <strong>Tailwind</strong> powered, user interfaces from <strong>Figma</strong> designs,
				thereby ensuring exceptional user experiences. Tested code-quality against self-written <strong>Jest</strong> automated tests, and documented
				components by creating <strong>Storybook</strong> stories as necessary.
			</p>
			<p>
				Worked in collaborative environments with multidisciplinary teams, implementing agile methodologies such as <strong>Scrum</strong> and <strong>Kanban</strong>.
				Maintained strong performance and high standards of work, thus getting the most recent client to keep loyal and extend the contract twice.
			</p>
		`,
		`
			<h3>Front-end Developer. AsteratNet. <span>Jul 2020-Dec 2021</span></h3>
			<p>
				I created scalable functional components with <strong>React.js 16</strong>, powered by Server Side Rendering framework <strong>Next.js</strong>
				and integrating <strong>Material-UI</strong> components in developed views. I built a <strong>Backend for Frontend</strong> to manage all 
				<strong>REST API</strong> request prior to <strong>JWT</strong> authentication, and handled application state through <strong>Redux</strong>.
				I managed tasks progress through <strong>Jira</strong> and maintained a git repository on <strong>GitHub</strong> creating branches for every task, defined during <strong>Scrum</strong> meetings.
			</p>
		`,
		`
			<h3>Front-end Developer. Oralsys. <span>Apr 2018-Apr 2020</span></h3>
			<p>
				I developed components using <strong>Angular 5-8</strong>, powered by <strong>Angular Material</strong> components and CSS framework <strong>Bootstrap 3</strong>,
				handling data through a <strong>REST API</strong>, maintaining a git repository on <strong>GitLab</strong>, and managing progress through <strong>Taiga</strong> and <strong>Asana</strong>.
				I created view for calendar management powered by <strong>FullCalendar</strong> library. I adapted pdf documents creation using <strong>PdfMake</strong> library.
				I managed to handle RX image visualization and 3D Rendering using <strong>Web Workers</strong> and <strong>Ami.js</strong> library.
				I proposed my own problems solutions ideas and led freelancers hired for specific requirements. I debugged my own and third party front-end errors.
			</p>
		`,
		`
			<h3>Front-end Developer. CSUDO. <span>Sep 2017-Mar 2018</span></h3>
			<p>
				I developed <strong>Angular 4</strong> components for capturing and fetching earthquakes geographic data, powered by CSS Framework <strong>Bootstrap 4</strong>,
				handling data through a <strong>REST API</strong>, maintaining a git repository on <strong>GitHub</strong>, and reporting my progress through Trello.
				I created an interactive web map for data georeferencing, with custom icons and dynamic data visualization, powered by <strong>Leaflet</strong> library.
				I was able to lead problem-solving and  managed to include extra features for calculating distances and areas measurements. I debugged front-end bugs due to system changes.
			</p>
		`,
		`
			<h3>Full-stack Developer. UPTOS. <span>Oct 2016-Sep 2017</span></h3>
			<p>
				I created a geographic information system to support decision-making using <strong>Angular 4</strong> and <strong>Bootstrap 3</strong> frameworks in
				front, <strong>Node.js</strong> with <strong>Express</strong> on the web server, and <strong>Mongodb</strong> as database management system.
				I designed <strong>UML</strong> artifacts for whole system design and documentation; handled user authentication through <strong>JWT</strong>;
				developed components for capturing population and students data from my own <strong>REST API</strong>, powered by <strong>Mongoose</strong> middleware for database connection;
				managed to include georeferencing capabilities for data using <strong>Leaflet</strong> library; and maintained a git repository on <strong>GitHub</strong> for versioning. <em>Ad honorem</em> project as partial requirement in Computer Science career.
			</p>
		`,
		`
			<h3>JavaScript Developer. UPTOS. <span>Oct 2015-Sep 2016</span></h3>
			<p>
				I created algorithms for <strong>JavaScript</strong> implementation, about image manipulation and  morphology,
				using <strong>Canvas</strong> API from <strong>HTML5</strong>, to set the base of an images features extraction and sign language translation system.
				I developed filters for color threshold, grayscale, gaussian, laplacian, and convolution filter; researched about human features on images;
				implemented filters and algorithms to recognize and extract hands and faces features. <em>Ad honorem</em> project as final requirement to get my Associate's in Computer Science degree.
			</p>
		`
	]
},{
	selector: "main>h2",
	all: true,
	contenido: ["Experiences","Courses / Certifications","Education","Knowledge / Skills / Profiency"]
},{
	selector: "article p",
	all: true,
	contenido: [
		`Completed <span>3h 20m</span>`,
		`Completed <span>1h 0m</span>`,
		`Completed <span>2h 51m</span>`,
		`Completed <span>1h 53m</span>`,
		`Completed <span>1h 2m</span>`,
		`Completed <span>1h 26m</span>`,
	]
},{
	selector: ".tiempo .descripcion",
	all: true,
	contenido: [
		`
			<h4>Engineering: Computer Science</h4>
			<p>UPTOS (Polytechnic University)</p>
		`,
		`
			<h4>Associate's in Computer Science</h4>
			<p>UPTOS (Polytechnic University)</p>
		`,
		`
			<h4>High School in Computer Science</h4>
			<p>Nuestra Señora del Valle (High School)</p>
		`,
	]
},{
	selector: "ul",
	contenido: 
	`
		<li><strong>Programming</strong>: High expertise in <strong>JavaScript</strong> and frameworks or libraries based on this language, with <strong>PWA</strong> development experience on <strong>React.js</strong> and <strong>Angular 2+</strong>.</li>
		<li><strong>Web Layouts</strong>: Strong experience with <strong>HTML5</strong> and <strong>CSS3</strong> trends with <strong>Responsive Design</strong>, controling <strong>CSS Grid</strong>, <strong>SCSS</strong> preprocessor usage, and handling <strong>Bootstrap 3 ~ 4</strong> and <strong>Tailwind CSS</strong> frameworks, efectively enhancing usability and improving <strong>UI/UX</strong>.</li>
		<li><strong>Versioning</strong>: Git Version control management on main platforms as GitHub, BitBucket or Gitlab.</li>
		<li><strong>C1 English:</strong> High conversational, reading and writing <strong>english</strong> level, both for technical and commercial english.</li>
		<li>Adaptability to environment changes. Fast Learning in development time.</li>
		<li>Proactivity, problems analysis and solving capabilities.</li>
		<li>Teamwork skills. <strong>Agile</strong> practicioner Mind-open to accept and offer support.</li>
	`
},{
	selector: ".modal.portfolio h2",
	contenido: `Portfolio`
},{
	selector: ".project-preview>h3",
	all: true,
	contenido: [
		`Comics browsing app featuring React + Material UI`,
		`Full CRUD demo featuring Angular + Angular Material`,
		`Dashboard demo featuring Oauth-based Google Sign-in`,
		`GIS for seismicity data capture and displaying (only front)`
	]
}];