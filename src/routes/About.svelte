<section class="about" id="about">
	<div class="about__container">
		<div class="about__content">
			<h2><span>01.</span> About me</h2>
			<p>
				Greetings from the vibrant landscapes of Brazil! I've dedicated seven fulfilling years to
				the software engineering world. My journey began with a profound interest in web UIs, driven
				by the allure of designing captivating interfaces. Over time, my expertise has broadened.
				Beyond just front-end development, I've delved deep into backend intricacies and have grown
				passionate about the entirety of the software development process.
			</p>
			<p>
				Are you faced with a technical challenge? I thrive on solving complex problems. While my
				experiences have often intertwined with React.js and Node.js, I remain adaptable and eager
				to explore new technologies. Let's collaborate and craft impactful digital solutions
				together.*
			</p>

			<p class="star">*This was not written by a machine. I !promise.</p>

			<div class="tools">Some tools I play with:</div>
			<ul>
				<li>JavaScript (ES6+)</li>
				<li>React</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>Git</li>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>Svelte</li>
			</ul>
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

	.about p span {
		color: #f57500;
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

	.about__content ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.star {
		font-style: italic;
	}

	.about__content .tools {
		font-family: 'Oswald', sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.51);
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 2px;
		display: flex;
		width: 100%;
		margin-block: 20px;
	}

	.about__content ul li {
		background-color: #f57500;
		padding: 10px 20px;
		border-radius: 5px;
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
