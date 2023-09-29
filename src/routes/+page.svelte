<script>
	import About from './About.svelte';
</script>

<section class="hero">
	<div class="circle">
		<div class="hero__content">
			<h1>Welcome to my website</h1>
			<h2>
				Rogerio Pereira <br />
				<span>Full-stack</span> developer<br /> from <span>Brazil</span>
			</h2>
			<p>
				This website is where you can discover my projects, resume, and insights. Feel free to
				contact <br />
				me for questions or collaboration opportunities.
			</p>
			<button class="btn btn-primary">Resume</button>
		</div>
	</div>
</section>

<About />

<section class="experience" id="experience">I've worked..</section>

<style>
	:root {
		--primary-color: #f57500;
		--white-color: #ffffff;
	}

	.hero {
		height: 100vh;
	}

	.hero__content {
		position: absolute;
		left: 30%;
		top: 15%;
		width: 800px;
	}

	.hero__content h1 {
		font-size: 11px;
		font-weight: 300;
		letter-spacing: 2px;
		font-weight: 700;
		color: var(--white-color);
		margin-bottom: 20px;
		text-transform: uppercase;
	}

	.hero__content h2 {
		font-family: 'Oswald', sans-serif;
		line-height: 62px;
		color: var(--white-color);
		font-size: 50px;
		font-weight: bold;
		text-transform: uppercase;
		margin: 0;
	}

	.hero__content p {
		font-size: 13px;
		font-weight: 300;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.51);
		margin-bottom: 10px;
	}

	.hero__content span {
		color: var(--primary-color);
	}

	#experience {
		height: 100vh;
		padding-inline: 80px;
	}

	.btn {
		background-color: var(--primary-color);
		color: var(--white-color);
		border: none;
		padding: 18px 34px;
		font-size: 12px;
		font-weight: 300;
		letter-spacing: 4px;
		text-transform: uppercase;
		cursor: pointer;
		margin-block-start: 10px;
	}

	.circle {
		position: relative;
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
		border-right-color: var(--primary-color);
		border-left-color: var(--primary-color);
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
