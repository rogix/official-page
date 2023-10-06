<script>
	import github from '$lib/icons/github.svg';
	import linkedin from '$lib/icons/linkedin.svg';
	import youtube from '$lib/icons/youtube.svg';
</script>

<nav>
	<span class="lc" />
	<ul>
		<li>
			<a href="https://www.linkedin.com/in/rogmxp/"
				><span>
					<img src={linkedin} alt="linkedin" class="icon" />
				</span></a
			>
		</li>
		<li>
			<a href="https://github.com/rogix"
				><span>
					<img src={github} alt="github" class="icon" />
				</span></a
			>
		</li>
		<li>
			<a href="https://www.youtube.com/@saindodoloop"
				><span>
					<img src={youtube} alt="youtube" class="icon" />
				</span></a
			>
		</li>
	</ul>
</nav>

<style>
	nav {
		display: none;
		flex-direction: column;
		background-color: #313131;
		height: calc(100vh - 80px);
		width: 80px;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 80px;
	}

	nav ul {
		margin: 0;
		padding: 0;
	}

	nav::before {
		content: '';
		position: absolute;
		left: 50%;
		width: 1px;
		height: 70px;
		top: 0;
		background: rgba(255, 255, 255, 0.2);
	}

	.lc {
		background-color: #f57500;
		position: absolute;
		top: 0px;
		left: 50%;
		width: 6px;
		height: 6px;
		margin-left: -3px;
		border-radius: 50%;
	}

	li a {
		color: rgba(255, 255, 255, 0.51);
		text-decoration: none;
	}

	li a span {
		border: 1px solid rgba(255, 255, 255, 0.08);
		height: 44px;
		width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: none;
	}

	li a span:first-child {
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.icon {
		width: 20px;
		height: 20px;
	}

	@media (min-width: 1024px) {
		nav {
			display: flex;
		}
	}
</style>
