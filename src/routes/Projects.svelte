<script>
	import image from '$lib/img/por-a-mais-b.png';
	import ibge from '$lib/img/ibge-educa.png';
	import rogixdev from '$lib/img/rogix-dev.jpeg';
	import rogixblog from '$lib/img/rogix-blog.jpeg';
	import petcare from '$lib/img/pet-care.jpeg';
</script>

<section class="projects" id="projects">
	<div class="projects__container">
		<div class="projects__content">
			<h2><span>03. </span>Some projects I've worked on</h2>
			<p>
				In my career, I've had the opportunity to work on some great projects. I've learned a lot
				from each of these experiences.
			</p>

			<ul class="projects__content--list">
				<li class="projects__content--list-item">
					<h3>Foco Escola</h3>
					<img src={image} alt="Por A Mais B" />
					<!-- <div class="text__content-right">
						<p>
							Foco Escola is a dynamic educational platform that streamlines the process of
							identifying students' learning needs and prioritizing pedagogical actions. It offers
							tools for organizing lesson materials and digital learning resources tailored to each
							school's unique requirements. The platform also facilitates effective pedagogical
							management by providing educators and administrators with essential educational
							insights, aiding in both addressing challenges and celebrating academic achievements.
						</p>
					</div> -->
				</li>
				<li class="projects__content--list-item">
					<h3>IBGE Educa</h3>
					<img src={ibge} alt="IBGE" />
					<!-- <div class="text__content-left">
						<p>
							IBGE Educa is an educational portal. It serves as an engaging online resource for
							learning about Brazil, targeting children, young people, and educators. The site
							offers a wide array of interactive materials, including games, maps, and research
							tools, aimed at simplifying and enlivening the learning projects about the country and
							its demographic aspects. This platform is ideal for enriching classroom discussions
							and providing a comprehensive understanding of Brazil's diverse realities.
						</p>
					</div> -->
				</li>
			</ul>
			<section class="other-projects">
				<h3>Other projects</h3>
				<p>
					Here are some other projects I've worked on. These are some projects I've worked on in my
					free time.
				</p>
				<div class="other-projects__content">
					<div>
						<h4>Website</h4>
						<a href="https://rogix.dev" target="_blank" rel="noopener noreferrer">
							<img src={rogixdev} alt="Rogix Dev" />
						</a>
					</div>
					<div>
						<h4>Blog</h4>
						<a href="https://blog.rogix.dev" target="_blank" rel="noopener noreferrer">
							<img src={rogixblog} alt="Rogix Blog" />
						</a>
					</div>
					<div>
						<h4>Pet Care</h4>
						<a href="https://pet-care-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
							<img src={petcare} alt="Pet Care" />
						</a>
					</div>
				</div>
			</section>
		</div>
	</div>
</section>

<style>
	#projects {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
	}

	.projects h2 {
		font-family: 'Mukta Vaani', sans-serif;
		font-size: 40px;
		line-height: 1.3;
		color: #fff;
		font-weight: 500;
		margin: 0;
	}

	.projects h2 span {
		color: #f57500;
		font-size: 40px;
	}

	.projects__content {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.projects__content p {
		font-family: 'Oswald', sans-serif;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.51);
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 2px;
	}

	.projects__content--list,
	.other-projects__content {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 40px;
		justify-content: center;
	}

	.other-projects {
		margin-top: 80px;
	}

	.other-projects h3 {
		font-family: 'Oswald', sans-serif;
		font-size: 30px;
		color: #fff;
		line-height: 1.4;
		font-weight: 500;
		margin: 0;
	}

	.other-projects h4 {
		font-size: 20px;
		color: #f57500;
		line-height: 1.4;
		font-weight: 500;
		margin: 0;
		margin-block-end: 5px;
	}

	.projects__content--list li {
		margin-bottom: 20px;
	}

	.projects__content--list li h3 {
		font-family: 'Oswald', sans-serif;
		font-size: 20px;
		color: #fff;
		line-height: 1.4;
		font-weight: 500;
		margin: 0;
	}

	.projects__content--list-item {
		padding-block-end: 20px;
	}

	.projects__content--list-item img {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 768px) {
		#projects {
			height: 100vh;
		}

		.projects__content {
			margin-inline-start: 80px;
			padding-block-start: 430px;
		}

		.projects h2 {
			font-size: 50px;
		}
	}

	@media (min-width: 1024px) {
		.projects__container {
			width: 100%;
			max-width: 1024px;
			margin: 0 auto;
		}
	}

	@media (min-width: 1280px) {
		.projects__content {
			margin-inline-start: 0px;
		}
	}
</style>
