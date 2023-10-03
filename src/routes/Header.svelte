<script>
	function scrollToSection(e) {
		const href = e.currentTarget.getAttribute('href');
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">ROGIX</a></li>
			<ul>
				<li>
					<a href="#about" on:click|preventDefault={scrollToSection}>01.<span>ABOUT</span></a>
				</li>
				<li><a href="#experience">02.<span>EXPERIENCE</span></a></li>
				<li><a href="#work">03.<span>WORK</span></a></li>
				<div>
					<button class="btn btn-primary">LET'S CHAT</button>
				</div>
			</ul>
		</ul>
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

	nav {
		height: 100%;
	}

	nav ul {
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

	nav ul div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: #f57500;
		width: 300px;
		height: 100%;
	}

	nav ul div button {
		height: 40px;
		width: 140px;
		border: none;
		background-color: #b1590662;
		color: #fff;
		margin-inline-end: 80px;
		font-size: 12px;
		font-weight: 300;
		letter-spacing: 4px;
	}

	nav ul a {
		color: #fff;
		color: rgba(255, 255, 255, 0.51);
		text-decoration: none;
	}

	nav ul a span {
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
	}
</style>
