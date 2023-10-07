<script lang="ts">
	import { scrollToSection } from '$lib/utils/scrollUtils';
</script>

<header>
	<span class="lc" />
	<nav class="nav">
		<a href="/" aria-label="Rogix hero section" tabindex="0">ROGIX</a>
		<div class="right-content">
			<ul class="nav-items">
				<li>
					<a
						href="#about"
						on:click|preventDefault={scrollToSection}
						aria-label="01.About section"
						tabindex="0">01.<span class="nav-item">ABOUT</span></a
					>
				</li>
				<li>
					<a
						href="#experience"
						on:click|preventDefault={scrollToSection}
						aria-label="02.Experience section"
						tabindex="0">02.<span class="nav-item">EXPERIENCE</span></a
					>
				</li>
				<li>
					<a
						href="#work"
						on:click|preventDefault={scrollToSection}
						aria-label="03.Work section"
						tabindex="0">03.<span class="nav-item">WORK</span></a
					>
				</li>
			</ul>
			<div class="corner">
				<button class="btn btn-primary">LET'S CHAT</button>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		background-color: #313131;
		color: #fff;
		height: 80px;
		padding-inline-start: 20px;
		position: fixed;
		right: 0;
		left: 0;
		z-index: 1;
	}

	.lc {
		display: none;
		background-color: #f57500;
		position: absolute;
		top: 30px;
		left: 30px;
		border-radius: 50%;
		width: 20px;
		height: 20px;
	}

	.nav-item {
		display: none;
	}

	nav {
		height: 100%;
	}

	.nav {
		display: flex;
		margin: 0;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		gap: 20px;
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		letter-spacing: 4px;
	}

	.right-content {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 300px;
		height: 100%;
	}

	.nav-items {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		margin-inline-end: 10px;
	}

	.nav .corner {
		height: 100%;
		min-width: 300px;
		display: none;
		align-items: center;
		justify-content: center;
	}

	.nav .corner button {
		height: 40px;
		width: 140px;
		border: none;
		background-color: #aa5205;
		color: #fff;
		font-size: 12px;
		font-weight: 300;
		letter-spacing: 4px;
	}

	.nav a {
		display: flex;
		color: #fff;
		color: rgba(255, 255, 255, 0.51);
		text-decoration: none;
		padding: 5px 10px;
	}
	.nav a span {
		color: #f57500;
	}

	@media (min-width: 400px) {
		header {
			padding-inline-start: 40px;
		}
	}

	@media (min-width: 768px) {
		header {
			padding-inline-start: 80px;
		}

		.nav-item {
			display: flex;
		}

		.nav .corner {
			display: flex;
		}

		.right-content {
			background-color: var(--primary-color);
		}
	}

	@media (min-width: 1024px) {
		.lc {
			display: block;
		}
	}
</style>
