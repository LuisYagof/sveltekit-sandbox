<script>
	import InactivityCountdown from '@/routes/inactivity/components/InactivityCountdown.svelte'
</script>

<svelte:head>
	<title>Inactivity</title>
	<meta name="description" content="This countdown will restart every time a mouse event happens" />
</svelte:head>

<main>
	<h1>Screen Inactivity</h1>
	<InactivityCountdown />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
