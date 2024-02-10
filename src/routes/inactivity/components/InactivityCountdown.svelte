<script lang="ts">
	// IMPORTS
	import { onMount, onDestroy } from 'svelte'

	// LIFECYCLE
	onMount(() => {
		beginListeningToScreenEvents()
	})

	onDestroy(() => {
		clearTimeout(inactivityTimeout)
		clearTimeout(oneSecondTimeout)
		secondsRemaining = 0
	})

	// DATA
	let inactivityTimeout: ReturnType<typeof setTimeout> | undefined = undefined
	let oneSecondTimeout: ReturnType<typeof setTimeout> | undefined = undefined
	let secondsRemaining = 60

	// FUNCTIONS
	function beginListeningToScreenEvents() {
		document.addEventListener('mousemove', resetInactivityTimeout)
		document.addEventListener('click', resetInactivityTimeout)
		resetInactivityTimeout()
	}

	function resetInactivityTimeout() {
		resetCountdown()
		startCountdown()
		const oneMinInMs = 1 * 60 * 1000
		clearTimeout(inactivityTimeout)
		inactivityTimeout = setTimeout(() => {
			window.alert('The app was inactive for one minute')
		}, oneMinInMs)
	}

	function startCountdown() {
		if (secondsRemaining > 0) {
			clearTimeout(oneSecondTimeout)
			oneSecondTimeout = setTimeout(() => {
				secondsRemaining--
				startCountdown()
			}, 1000)
		}
	}

	function resetCountdown() {
		secondsRemaining = 60
	}
</script>

<div class="countdown-wrapper">
	<span>This countdown will restart every time a mouse event happens</span>
	<span
		>Countdown:
		<span class="seconds">
			{secondsRemaining}
		</span>
	</span>
</div>

<style>
	.countdown-wrapper {
		display: flex;
		flex-direction: column;
	}
	span.seconds {
		color: var(--color-theme-1);
		font-size: 1.5rem;
	}
</style>
