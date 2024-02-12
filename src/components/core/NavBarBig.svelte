<script lang="ts">
	// IMPORTS
	import { page } from '$app/stores'

	// PROPS
	export let routes: { pathname: string; name: string }[]
</script>

<ul>
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
