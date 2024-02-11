# Svelte vs Vue

## v-if, v-for

#each, #if, #else. Example in [appRoutes](../src/routes/Header.svelte)

## Computed variables

Named reactive declarations. Example in [$: boxPadding](../src/routes/click-outside/+page.svelte)

## CSS binded variables

Example in [--dynamic-padding](../src/routes/click-outside/+page.svelte)

## Custom directives

HTML Element directives. In docs as [use:action](https://svelte.dev/docs/element-directives#use-action). Example in [use:clickOutside](../src/routes/click-outside/+page.svelte)

## ref (bind HTML element)

HTML Element binding. In docs as [bind:this](https://svelte.dev/docs/element-directives#bind-this). Example in [bind:this={listBottomRef}](../src/components/core/ScrollBottom.svelte)

## slots

Passing components in slots to child components. In docs as [slot](https://svelte.dev/docs/special-elements#slot). Example in [InfiniteScroll](../src/components/infinite-scroll/InfiniteScroll.svelte) and [ItemDetails](../src/components/infinite-scroll/ItemDetails.svelte). Using `<svelte:fragment>` and `<svelte:component>`

## emits

Named custom events. In docs as [on:eventname](https://svelte.dev/docs/component-directives#on-eventname). Example in [dispatch](../src/components/core/ScrollBottom.svelte)
