<script>
	import { page } from '$app/stores'
	import logo from '$lib/images/svelte-logo.svg'
	import github from '$lib/images/github.svg'
	import NavBarBig from '@/components/core/NavBarBig.svelte'
	import NavBarSmall from '@/components/core/NavBarSmall.svelte'
	// import menu from '$lib/images/menu.svg'

	// DATA
	const routes = [
		{
			pathname: '/',
			name: 'Home'
		},
		// {
		// 	pathname: '/about',
		// 	name: 'About'
		// },
		// {
		// 	pathname: '/sverdle',
		// 	name: 'Sverdle'
		// },
		{
			pathname: '/infinite-scroll',
			name: 'Infinite Scroll'
		},
		{
			pathname: '/click-outside',
			name: 'Click Outside'
		},
		{
			pathname: '/inactivity',
			name: 'Inactivity'
		}
	]
	let innerWidth = 0
	let innerHeight = 0

	$: bigHeader = innerWidth > 700
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		{#if bigHeader}
			<NavBarBig {routes} />
		{:else}
			<NavBarSmall {routes} />
		{/if}
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}
</style>
