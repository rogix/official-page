<section class="hero">
	<div>Welcome to my website</div>
	<h1>
		Rogerio Pereira <br />
		<span>Full-stack</span> developer<br /> from <span>Brazil</span>
	</h1>
	<h4>
		This website is where you can discover my projects, resume, and insights. Feel free to contact <br
		/>
		me for questions or collaboration opportunities.
	</h4>
	<button class="btn btn-primary">Resume</button>
</section>

<section class="about" id="about">
	<div class="about__container">
		<div class="about__container--left">
			<h2>About me</h2>
			<p>
				I'm a full-stack developer with a passion for building things. I'm always looking for new
				opportunities to learn and grow.
			</p>
			<p>
				I'm a full-stack developer with a passion for building things. I'm always looking for new
				opportunities to learn and grow.
			</p>
			<p>
				I'm a full-stack developer with a passion for building things. I'm always looking for new
				opportunities to learn and grow.
			</p>
		</div>
		<div class="about__container--right">
			<img src="https://picsum.photos/200/300" alt="profile" />
		</div>
	</div>
</section>

<section class="experience" id="experience">I've worked..</section>

<div class="circle" />

<style>
	.hero {
		padding-left: 300px;
		margin-block-start: 320px;
		height: 100vh;
	}

	.hero > div {
		font-size: 11px;
		font-weight: 300;
		letter-spacing: 2px;
		font-weight: 700;
		color: #fff;
		margin-bottom: 20px;
		text-transform: uppercase;
	}

	.hero > h4 {
		font-size: 13px;
		font-weight: 300;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.51);
		margin-bottom: 10px;
	}

	.about {
		height: 100vh;
		padding-inline: 80px;
	}

	#experience {
		height: 100vh;
		padding-inline: 80px;
	}

	.btn {
		background-color: #f57500;
		color: #fff;
		border: none;
		padding: 18px 34px;
		font-size: 12px;
		font-weight: 300;
		letter-spacing: 4px;
		text-transform: uppercase;
		cursor: pointer;
		margin-block-start: 10px;
	}

	h1 {
		font-family: 'Oswald', sans-serif;
		line-height: 62px;
		color: #fff;
		font-size: 50px;
		font-weight: bold;
		text-transform: uppercase;
		margin: 0;
	}

	span {
		color: #f57500;
	}

	.circle {
		position: absolute;
		width: 450px;
		height: 450px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0px 0px 0px 52px rgba(255, 255, 255, 0.05);
		left: 30%;
		margin-left: -255px;
		top: 55%;
		margin-top: -245px;
		z-index: -2;
		background: rgba(255, 255, 255, 0.02);
		border-right-color: #f57500;
		border-left-color: #f57500;
	}

	.circle::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 100px;
		left: -120px;
		height: 1px;
		background: rgba(255, 255, 255, 0.2);
	}

	.circle::after {
		content: '';
		position: absolute;
		left: -120px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		top: 50%;
		margin-top: -4px;
		transition: all 0.5s ease-in-out;
		transform: scale(1);
	}
</style>
