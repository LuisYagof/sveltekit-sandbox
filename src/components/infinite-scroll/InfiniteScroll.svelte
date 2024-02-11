<script lang="ts">
	// IMPORTS
	import { sleep } from '@/utils/common'
	import AppLoader from '@/components/core/AppLoader.svelte'
	import ItemDetails from '@/components/infinite-scroll/ItemDetails.svelte'
	import ScrollBottom from '@/components/core/ScrollBottom.svelte'

	import DocumentationIcon from '@/components/icons/IconDocumentation.svelte'
	import ToolingIcon from '@/components/icons/IconTooling.svelte'
	import EcosystemIcon from '@/components/icons/IconEcosystem.svelte'
	import CommunityIcon from '@/components/icons/IconCommunity.svelte'
	import SupportIcon from '@/components/icons/IconSupport.svelte'

	// DATA
	const listItems = [
		{
			icon: DocumentationIcon,
			heading: 'First item',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			icon: ToolingIcon,
			heading: 'Second item',
			text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			icon: EcosystemIcon,
			heading: 'Third item',
			text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			icon: CommunityIcon,
			heading: 'Fourth item',
			text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			icon: SupportIcon,
			heading: 'Fifth item',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
		}
	]

	let dynamicListItems = listItems
	let itemsAreLoading = false

	// // FUNCTIONS
	async function onScrollBottom(event: Event) {
		itemsAreLoading = true
		await sleep(1000)
		dynamicListItems = [...dynamicListItems, ...listItems]
		itemsAreLoading = false
	}
</script>

<div class="wrapper">
	{#if itemsAreLoading}
		<AppLoader />
	{/if}

	<div class="list">
		{#each dynamicListItems as item}
			<div class="item">
				<i>
					<svelte:component this={item.icon} />
				</i>
				<ItemDetails>
					<svelte:fragment slot="heading">{item.heading}</svelte:fragment>
					<svelte:fragment slot="text">{item.text}</svelte:fragment>
				</ItemDetails>
			</div>
		{/each}
		<ScrollBottom on:reachedTheBottom={onScrollBottom} />
	</div>
</div>

<style>
	.wrapper {
		min-width: 25rem;
		min-height: 50vh;
		position: relative;
	}
	.wrapper .list {
		max-width: 35rem;
		max-height: 60vh;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.wrapper .list .item {
		display: flex;
		align-items: center;
		position: relative;
	}
	.wrapper .list .item i {
		display: flex;
		place-items: center;
		place-content: center;
		width: 32px;
		height: 32px;
		color: var(--color-text);
	}

	@media (min-width: 1024px) {
		.wrapper {
			min-width: 35rem;
		}
		.wrapper .list {
			max-width: 35rem;
		}
		.wrapper .list .item {
			margin-top: 0;
			padding: 0.4rem 0 1rem calc(1rem / 2);
		}

		.wrapper .list .item i {
			border: 1px solid var(--color-text);
			background: var(--color-bg-1);
			border-radius: 8px;
			width: 50px;
			height: 50px;
		}
	}
</style>
