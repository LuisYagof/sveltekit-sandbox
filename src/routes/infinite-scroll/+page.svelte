<script>
	import InfiniteScroll from '@/components/infinite-scroll/InfiniteScroll.svelte'
</script>

<svelte:head>
	<title>InfiniteScroll</title>
	<meta name="description" content="An infinite scroll example" />
</svelte:head>

<main>
	<h1>Infinite Scroll</h1>
	<InfiniteScroll />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
