<script setup lang="ts">
	// IMPORTS
	import { clickOutside } from '@/directives/clickOutside'

	// DATA
	const paddings = { small: '1rem', big: '4rem' }
	let boxPadding = paddings.small

	// COMPUTED
	$: boxText =
		boxPadding === paddings.small
			? 'Click here to increase size!'
			: 'Click outside to decrease size!'

	// FUNCTIONS
	function increaseSize() {
		boxPadding = paddings.big
	}

	function decreaseSize() {
		boxPadding = paddings.small
	}
</script>

<main>
	<h1>Click Outside</h1>
	<div class="button-wrapper">
		<button
			on:click={increaseSize}
			use:clickOutside={decreaseSize}
			class="button"
			style="--dynamic-padding: {boxPadding}"
		>
			<span>{boxText}</span>
		</button>
	</div>
</main>

<style scoped>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		& .button-wrapper {
			width: 22rem;
			height: 10rem;
			display: flex;
			align-items: center;
			justify-content: center;
			& .button {
				cursor: pointer;
				background-color: var(--color-theme-1);
				color: white;
				font-family: Nunito;
				border: none;
				padding: var(--dynamic-padding);
				transition: padding 1s;
			}
		}
	}
</style>
