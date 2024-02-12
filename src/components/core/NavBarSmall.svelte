<script lang="ts">
	// IMPORTS
	import { page } from '$app/stores'
	import { clickOutside } from '@/directives/clickOutside'

	// PROPS
	export let routes: { pathname: string; name: string }[]

	// DATA
	let isOpen: boolean

	// FUNCTION
	function openMenu() {
		/*
		 * without a timeout, the custom directive clickOutside
		 * runs right after the click event, so the menu does not open
		 */
		setTimeout(() => {
			isOpen = true
		}, 0)
	}

	function closeMenu() {
		if (isOpen) isOpen = false
	}
</script>

<ul use:clickOutside={closeMenu} class:open={isOpen} class:closed={!isOpen}>
	{#if !isOpen}
		<a on:click={openMenu} class="closed">MENU</a>
	{:else}
		{#each routes as route}
			{#if !route.pathname.startsWith('/sverdle')}
				<li aria-current={$page.url.pathname === route.pathname ? 'page' : undefined}>
					<a href={route.pathname}>{route.name}</a>
				</li>
			{:else}
				<li aria-current={$page.url.pathname.startsWith(route.pathname) ? 'page' : undefined}>
					<a href={route.pathname}>{route.name}</a>
				</li>
			{/if}
		{/each}
	{/if}
</ul>

<style>
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	ul.closed {
		color: var(--color-text-dark);
		font-weight: 700;
		letter-spacing: 0.1em;
	}

	ul.open {
		position: absolute;
		background: #cccccc;
		width: 100vw;
		flex-direction: column;
		height: max-content;
		gap: 1rem;
		align-items: flex-start;
		padding: 1rem 0rem 1rem 2rem;
		z-index: 1;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	ul.open li[aria-current='page']::before {
		left: -10px;
		transform: rotate(-90deg);
	}

	a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text-dark);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
