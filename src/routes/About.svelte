<section class="about" id="about">
	<div class="about__container">
		<div class="about__content">
			<h2><span>01.</span> About me</h2>
			<p>
				Hello! I'm a software engineer hailing from Brazil with seven years of experience in the
				field. My passion for crafting digital experiences ignited my journey, with a particular
				focus on user interfaces in the early days. While I still thoroughly enjoy crafting web UIs,
				my interests have expanded to encompass other domains, including iOS mobile development,
				backend work, and the entire software development lifecycle. I have a deep-seated passion
				for problem-solving, irrespective of the technology stack, although I have primarily been
				immersed in the world of React.js and Node.js.
			</p>
		</div>
	</div>
</section>

<style>
	.about {
		display: flex;
		flex-direction: column;
	}

	.about h2 {
		font-family: 'Mukta Vaani', sans-serif;
		font-size: 40px;
		color: #fff;
		font-weight: 500;
		margin: 0;
	}

	.about h2 span {
		color: #f57500;
		font-size: 30px;
	}

	.about__content {
		margin-block: 40px;
	}

	.about__content p {
		font-family: 'Oswald', sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.51);
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 2px;
	}

	@media (min-width: 768px) {
		.about h2 span {
			font-size: 40px;
		}

		.about h2 {
			font-size: 50px;
		}

		.about__content {
			max-width: 600px;
			margin-inline-start: 80px;
		}
	}

	@media (min-width: 1024px) {
		.about {
			height: 100vh;
		}

		.about__container {
			width: 100%;
			max-width: 1024px;
			margin: 0 auto;
		}

		.about__content {
			margin-inline-start: 15%;
		}
	}

	@media (min-width: 1280px) {
		.about__content {
			margin-inline-start: 0px;
		}
	}
</style>
