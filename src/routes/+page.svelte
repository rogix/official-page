<script>
	import About from './About.svelte';
	import Experience from './Experience.svelte';
</script>

<section class="hero" id="hero">
	<div class="hero__container">
		<div class="circle" />
		<div class="line" />
		<div class="hero__content">
			<h1>Welcome to my website</h1>
			<h2>
				Rogerio Pereira <br />
				<span>Front-end</span> developer<br /> UI <span> artisan </span>
			</h2>
			<p>
				This website is where you can discover my projects, resume, and insights. Feel free to
				contact <br />
				me for questions or collaboration opportunities.
			</p>
			<!-- <button class="btn btn-primary">Resume</button> -->
		</div>
	</div>
</section>

<About />
<Experience />

<style>
	:root {
		--primary-color: #ba5900;
		--secondary-color: #f57500;
		--white-color: #ffffff;
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero__container {
		position: relative;
		height: calc(100vh - 80px);
		width: 100%;
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
		line-height: 52px;
		color: var(--white-color);
		font-size: 40px;
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
		color: var(--secondary-color);
	}

	/* .btn {
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
	} */

	.circle {
		display: none;
		position: relative;
		width: 450px;
		height: 450px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0px 0px 0px 52px rgba(255, 255, 255, 0.05);
		left: 0;
		top: 0;
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
		left: -170px;
		height: 1px;
		background: rgba(255, 255, 255, 0.2);
	}

	.circle::after {
		content: '';
		position: absolute;
		left: -5px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		top: 50%;
		margin-top: -4px;
		transition: all 0.5s ease-in-out;
		transform: scale(1);
		background: var(--secondary-color);
	}

	@media (min-width: 768px) {
		.hero__container {
			position: relative;
			height: 450px;
			width: 1024px;
		}

		.hero__content {
			position: absolute;
			left: 80px;
			top: 15%;
			padding-block-start: 0;
			width: auto;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			min-height: calc(100vh - 80px);
		}

		.circle {
			display: block;
		}

		.hero__content {
			left: 15%;
		}
	}

	@media (min-width: 1280px) {
		.hero__content h2 {
			line-height: 72px;
			font-size: 60px;
		}
	}

	@media (min-width: 1536px) {
		.hero__content {
			top: 10%;
			left: 0;
		}

		.circle {
			left: -15%;
		}

		.circle::before {
			left: -150px;
		}

		.circle::after {
			left: -150px;
		}
	}
</style>
