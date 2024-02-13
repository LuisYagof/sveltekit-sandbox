<script>
	import welcome from '$lib/images/svelte-welcome.webp'
	import welcome_fallback from '$lib/images/svelte-welcome.png'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="A frontend sandbox powered by Sveltekit" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to my sandbox
	</h1>

	<h3>What is this about?</h3>
	<h4>
		This is a collection of frontend utilities and a personal sandbox for new technologies from the
		Svelte ecosystem.
	</h4>
	<div>
		<h4 class="colored">
			The utilities displayed include an infinite scroll, an inactivity timeout, a
			click-outside-an-HTML-node directive, etc.
		</h4>
		<h4>The technologies I'm testing include Playwright, Vitest, Sveltkit and more</h4>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	h4 {
		margin: 0.5rem;
	}

	h4.colored {
		color: var(--color-theme-1);
	}
</style>
