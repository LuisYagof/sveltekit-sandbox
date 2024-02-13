<script setup lang="ts">
	// IMPORTS
	import { createEventDispatcher } from 'svelte'
	import AppModal from '@/components/core/AppModal.svelte'

	// COMPONENT EVENTS
	const dispatch = createEventDispatcher()
</script>

<AppModal
	on:closeModal={() => dispatch('closeModal')}
	modalName="save-draft"
	title="The app was inactive for one minute"
	text="Click to refresh"
>
	<div class="wrapper-buttons">
		<button on:click={() => dispatch('closeModal')} class="close-btn">Close</button>
	</div>
</AppModal>

<style>
	.wrapper-buttons {
		display: flex;
		gap: 1rem;
	}
	.wrapper-buttons {
		& button {
			padding: 1rem;
			border: none;
			font-family: Nunito;
			font-family: var(--font-body);
			color: white;
			border-radius: 4px;
			min-width: 5rem;
			cursor: pointer;
		}

		& .close-btn {
			background-color: var(--vt-c-vue-darkgreen);
			/* background-color: var(--color-theme-2); */
		}
	}
</style>
