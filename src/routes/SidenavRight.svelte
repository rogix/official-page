<script>
	import { onMount } from 'svelte';
	import arrow from '$lib/icons/arrow.svg';
	import { scrollToSection } from '$lib/utils/scrollUtils';

	function handleScroll() {
		const sections = document.querySelectorAll('section');
		const navLinks = document.querySelectorAll('.navigation a');

		let current = '';
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (scrollY >= sectionTop - sectionHeight / 3) {
				current = section.getAttribute('id') ?? '';
			}
		});

		navLinks.forEach((a) => {
			a.classList.remove('active');

			if (a.getAttribute('href') === `#${current}`) {
				a.classList.add('active');
			}
		});
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			handleScroll();
		});
	});
</script>

<aside class="aside">
	<div class="corner" />
	<nav class="nav" />
	<nav class="navigation">
		<a
			href="#hero"
			id="hero"
			class="active"
			on:click|preventDefault={scrollToSection}
			aria-label="Hero section"
			tabindex="0"
		>
			<span />
		</a>
		<a
			href="#about"
			id="about"
			on:click|preventDefault={scrollToSection}
			aria-label="about section"
			tabindex="0"
		>
			<span />
		</a>
		<a
			href="#experience"
			id="experience"
			on:click|preventDefault={scrollToSection}
			aria-label="experience section"
			tabindex="0"
		>
			<span />
		</a>
		<!-- <a href="#work" class="work">
			<span />
		</a> -->
	</nav>
	<div class="scroll-down">
		<div class="scroll-wrapper">
			<div class="mousey">
				<div class="scroller" />
			</div>
		</div>

		<img src={arrow} alt="arrow" class="arrow" />
	</div>
</aside>

<style>
	.corner {
		position: fixed;
		right: 0;
		top: 80px;
		width: 80px;
		height: 180px;
		background-color: var(--primary-color);
	}

	.aside {
		display: none;
		position: fixed;
		right: 0;
	}

	.nav {
		position: fixed;
		right: 0;
		bottom: 0px;
		width: 80px;
		height: calc(100vh - 260px);
		background-color: #313131;
	}

	.navigation {
		position: fixed;
		bottom: 50px;
		right: 0px;
		width: 80px;
		z-index: 100;
		display: flex;
		align-items: center;
		height: 100px;
		justify-content: space-around;
		flex-direction: column;
	}

	.navigation::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -50px;
		top: -50px;
		background: rgba(255, 255, 255, 0.05);
	}

	.navigation a {
		display: inline-block;
		background: none;
		position: relative;
		height: 6px;
		border-radius: 100%;
		opacity: 1;
	}

	.navigation a::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		height: 100%;
		width: 6px;
		border-radius: 100%;
		background: #fff;
		margin-left: -3px;
	}

	.navigation a.active::before {
		background: #f57500;
	}

	.navigation a::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 12px;
		height: 12px;
		margin: -6px 0 0 -6px;
		box-sizing: border-box;
		border: 1px solid rgba(255, 255, 255, 0.4);
		border-radius: 100%;
		transition: all 200ms linear;
		transform: scale(0);
	}

	.navigation a.active::after {
		transform: scale(1.6);
	}

	.scroll-down {
		position: fixed;
		z-index: 10;
		right: 30px;
		margin-bottom: -15px;
		bottom: 50%;
	}

	.scroll-wrapper {
		float: left;
		position: relative;
	}

	.mousey {
		float: left;
		width: 20px;
		height: 30px;
		border-radius: 6px;
		padding: 0 6px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-sizing: border-box;
		position: relative;
		z-index: 10;
	}

	.scroller {
		position: relative;
		left: 50%;
		top: 6px;
		margin-left: -2px;
		width: 4px;
		height: 4px;
		background: #292929;
		border-radius: 4px;
		animation-name: scroll;
		animation-duration: 2.2s;
		animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
		animation-iteration-count: infinite;
		background-color: #f57500;
	}

	.arrow {
		position: absolute;
		bottom: -40px;
		left: 0;
		width: 100%;
		height: 15px;
		display: inline-block;
		font-style: normal;
		font-variant: normal;
		text-rendering: auto;
	}

	@keyframes scroll {
		0% {
			opacity: 0;
		}
		10% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(35px);
			opacity: 0;
		}
	}

	@media (min-width: 768px) {
		.aside {
			display: flex;
		}
	}
</style>
