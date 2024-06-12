<section class="about" id="about">
	<div class="about__container">
		<div class="about__content">
			<h2><span>01.</span> About me</h2>
			<p>
				Hello, I’m Rogerio, a software engineer with a strong foundation in web development. Over
				the past 7 years, I have collaborated with companies and clients to create innovative
				digital solutions. During this time, I have crafted my skills in both front-end and
				full-stack development, working with a variety of technologies and tools, including
				React.js, Svelte, Node.js, and Express.
			</p>
			<p>
				I'm always looking for new challenges and opportunities to learn and grow as a developer.
				I'm passionate about creating clean, efficient, and user-friendly applications that help
				businesses achieve their goals. If you're looking for a developer who can bring your ideas
				to life, I'd love to hear from you!
			</p>

			<div class="tools"><span>Tools</span>and<span>Softwares</span></div>
			<p>
				Over the years, I've worked with a variety of tools and technologies. Here are some of the
				technologies I've worked with recently:
			</p>
			<ul>
				<li>JavaScript (ES6+)</li>
				<li>React</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>HTML5/CSS3</li>
				<li>Next.js</li>
				<li>Typescript</li>
				<li>Svelte</li>
				<li>SveltKit</li>
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

	.about__content .tools {
		font-family: 'Oswald', sans-serif;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.51);
		font-weight: 500;
		line-height: 1.5;
		letter-spacing: 2px;
		display: flex;
		width: 100%;
		margin-block: 20px;
		font-size: large;
		gap: 6px;
		margin-block-start: 50px;
	}

	.about__content .tools span {
		color: #f57500;
	}

	.about__content ul li {
		padding: 10px 20px;
		border-radius: 5px;
		color: #ff9436;
		border: 1px solid;
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
			max-width: 700px;
		}
	}

	@media (min-width: 1280px) {
		.about__content {
			margin-inline-start: 0px;
		}
	}
</style>
