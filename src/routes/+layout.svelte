<script>
	import Header from './Header.svelte';
	import Sidenav from './SidenavLeft.svelte';
	import SidenavRight from './SidenavRight.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<Sidenav />
	<main class="main">
		<slot />
	</main>
	<SidenavRight />
</div>

<style>
	.app {
		margin: 0 auto;
	}

	.main {
		display: flex;
		flex-direction: column;
		padding-inline: 20px;
	}

	@media (min-width: 768px) {
		.main {
			padding-inline: 0;
		}
	}
</style>
