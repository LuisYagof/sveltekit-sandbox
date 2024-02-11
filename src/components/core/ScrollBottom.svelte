<script lang="ts">
	// IMPORTS
	import { onDestroy, onMount, createEventDispatcher } from 'svelte'

	// COMPONENT EVENTS
	const dispatch = createEventDispatcher()

	// DATA
	let observer: IntersectionObserver
	let listBottomRef: Element | null

	// HOOKS
	onMount(() => {
		startObserver()
	})

	onDestroy(() => {
		if (observer) observer.disconnect()
	})

	// METHODS
	function startObserver() {
		const intersectionOptions = { root: null, rootMargin: '0px', threshold: 0.1 }
		observer = new IntersectionObserver(([entry]) => {
			if (entry && entry.isIntersecting) {
				dispatch('reachedTheBottom')
			}
		}, intersectionOptions)

		if (listBottomRef) observer.observe(listBottomRef)
	}
</script>

<div class="list-bottom" bind:this={listBottomRef}>&nbsp;</div>

<style>
	.list-bottom {
		height: 1px;
	}
</style>
