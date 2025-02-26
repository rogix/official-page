<section class="experience" id="experience">
	<div class="experience__container">
		<div class="experience__content">
			<h2><span>02. </span>Where I've worked</h2>
			<p>
				In my career, I've had the opportunity to work with some fantastic companies and people.
				I've learned a lot from each of these experiences.
			</p>

			<ul class="experience__content--list">
				<li class="experience__content--list-item">
					<h3>Front-end Engineer <span>@ Bee2Pay</span></h3>
					<h4>2024 - present</h4>
					<p>
						Bee2Pay is a Brazilian fintech company that develops solutions for the financial sector.
					</p>
				</li>
				<li class="experience__content--list-item">
					<h3>Front-end | Full-stack Engineer <span>@ Ilegra</span></h3>
					<h4>2021 - 2024</h4>
					<p>
						Ilegra is a software factory that develops solutions for the digital transformation of
						businesses. I work as a front-end engineer, developing products for the company's
						clients.
					</p>
				</li>
				<li class="experience__content--list-item">
					<h3>Software Engineer <span>@ Por A Mais B</span></h3>
					<h4>2019 - 2021</h4>
					<p>
						Por A Mais B is a Brazilian startup that develops solutions for the education sector. I
						worked as a software engineer, developing new features and maintaining the company's
						main product.
					</p>
				</li>
				<li class="experience__content--list-item">
					<h3>Web Developer <span>@ IBGE</span></h3>
					<h4>2017 - 2019</h4>
					<p>
						IBGE is the Brazilian Institute of Geography and Statistics. I worked as a web developer
						on the company's main website, developing new features and maintaining the website.
					</p>
				</li>
				<li class="experience__content--list-item">
					<h3>Web Developer <span>@ Freelancing</span></h3>
					<h4>2016 - 2017</h4>
					<p>
						As a freelancer, I developed websites for small businesses and individuals. I worked
						with clients helping them to build their online presence. At the time, I was working
						with HTML, CSS, JavaScript, and WordPress.
					</p>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	#experience {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
	}

	.experience h2 {
		font-family: 'Mukta Vaani', sans-serif;
		font-size: 40px;
		line-height: 1.3;
		color: #fff;
		font-weight: 500;
		margin: 0;
	}

	.experience h2 span {
		color: #f57500;
		font-size: 40px;
	}

	.experience__content p {
		font-family: 'Oswald', sans-serif;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.51);
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 2px;
	}

	.experience__content--list {
		list-style: none;
		padding: 0;
	}

	.experience__content--list li {
		margin-bottom: 20px;
	}

	.experience__content--list li h3 {
		font-family: 'Oswald', sans-serif;
		font-size: 20px;
		color: #fff;
		line-height: 1.4;
		font-weight: 500;
		margin: 0;
	}

	.experience__content--list li h4 {
		font-family: 'Oswald', sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.5);
		font-weight: 300;
		margin: 0;
		padding-block-start: 6px;
	}

	.experience__content--list li h3 span {
		color: #f57500;
	}

	.experience__content--list-item {
		padding-block-end: 20px;
	}

	.experience__content--list-item p {
		font-family: 'Oswald', sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.51);
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 2px;
		margin: 0;
		padding-block-start: 16px;
	}

	@media (min-width: 768px) {
		#experience {
			height: 100vh;
		}

		.experience__content {
			max-width: 80%;
			margin-inline-start: 80px;
			/* padding-block-start: 130px; */
		}

		.experience h2 {
			font-size: 50px;
		}
	}

	@media (min-width: 1024px) {
		.experience__container {
			width: 100%;
			max-width: 1024px;
			margin: 0 auto;
		}

		.experience__content {
			max-width: 750px;
			margin-inline-start: 15%;
		}
	}

	@media (min-width: 1280px) {
		.experience__content {
			margin-inline-start: 0px;
		}
	}
</style>
