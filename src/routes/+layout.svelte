<script>
	import Header from './Header.svelte';
	import Sidenav from './SidenavLeft.svelte';
	import SidenavRight from './SidenavRight.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
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
		position: relative;
		top: 80px;
		gap: 40px;
	}

	@media (min-width: 400px) {
		.main {
			padding-inline: 40px;
		}
	}

	@media (min-width: 768px) {
		.main {
			padding-inline: 0;
		}
	}
</style>
