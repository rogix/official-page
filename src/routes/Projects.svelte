<script>
	import image from '$lib/img/poramaisb.png';
	import ibge from '$lib/img/ibge.png';
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
				<li class="projects__content--list-item side__content">
					<img src={image} alt="Por A Mais B" />
					<div class="text__content-right">
						<h3>Foco Escola</h3>
						<p>
							Foco Escola is a dynamic educational platform that streamlines the process of
							identifying students' learning needs and prioritizing pedagogical actions. It offers
							tools for organizing lesson materials and digital learning resources tailored to each
							school's unique requirements. The platform also facilitates effective pedagogical
							management by providing educators and administrators with essential educational
							insights, aiding in both addressing challenges and celebrating academic achievements.
						</p>
					</div>
				</li>
				<li class="projects__content--list-item side__content">
					<div class="text__content-left">
						<h3>IBGE Educa</h3>
						<p>
							IBGE Educa is an educational portal. It serves as an engaging online resource for
							learning about Brazil, targeting children, young people, and educators. The site
							offers a wide array of interactive materials, including games, maps, and research
							tools, aimed at simplifying and enlivening the learning projects about the country and
							its demographic aspects. This platform is ideal for enriching classroom discussions
							and providing a comprehensive understanding of Brazil's diverse realities.
						</p>
					</div>
					<img src={ibge} alt="IBGE" />
				</li>
			</ul>
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

	.projects__content--list {
		list-style: none;
		padding: 0;
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
		max-width: 50%;
		height: 100%;
	}

	.projects__content--list-item p {
		font-family: 'Oswald', sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.51);
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 2px;
		margin: 0;
		padding-block-start: 16px;
	}

	.side__content {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 80px;
		position: relative;
	}

	.text__content-right {
		margin-top: 40px;
	}

	.text__content-right p,
	.text__content-left p {
		width: 500px;
		background-color: #f57500;
		padding: 30px;
		font-size: 12px;
		top: 120px;
		color: #fff;
	}

	.text__content-right h3 {
		font-size: 20px;
		color: #fff;
		padding-bottom: 10px;
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
