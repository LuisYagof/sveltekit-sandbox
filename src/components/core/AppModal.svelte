<script lang="ts">
	// IMPORTS
	import { createEventDispatcher } from 'svelte'

	// PROPS
	export let modalName: string
	export let title: string
	export let text: string

	// COMPONENT EVENTS
	const dispatch = createEventDispatcher()
</script>

<div class="modal-overlay">
	<div class="modal" class:{modalName}={modalName}>
		<div class="title">
			<h1 class="title-text">
				{title}
			</h1>
			<span class="close-icon" on:click={() => dispatch('closeModal')}>✖</span>
		</div>
		{#if text}
			<span class="modal-text">
				{text}
			</span>
		{/if}
		<slot />
	</div>
</div>

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #464646cc;
		color: var(--color-text);
		font-size: 14px;
		z-index: 99;
	}
	.modal-overlay .modal {
		background-color: var(--color-bg-2);
		min-width: 45rem;
		max-width: 50rem;
		max-height: 95vh;
		border-radius: 0.5rem;
		padding: 2rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.modal-overlay .modal .title {
		display: flex;
		align-items: flex-start;
		width: 100%;
		justify-content: space-between;

		& h1 {
			margin: 0;
		}
	}
	.modal-overlay .modal .title .title-text {
		font-size: 24px;
		line-height: 32px;
		width: 98%;
	}

	.modal-overlay .modal .title .close-icon {
		cursor: pointer;
		margin-top: calc((32px - 24px) / 2);
		width: 1.5rem;
	}

	.modal-overlay .modal .modal-text {
		font-size: 16px;
		margin-top: 1rem;
	}
</style>
