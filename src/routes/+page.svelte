<script lang="ts">
	import PortfolioTile from '$lib/components/PortfolioTile.svelte';
	import { LocalStorage } from '$lib/store.svelte.js';

	let { data } = $props();

	const isList = new LocalStorage('isList', true);
</script>

<svelte:head>
	<title>Isabela's Portfolio</title>
</svelte:head>

<div class="flex flex-col justify-center select-none">
	<!-- Adds options to toggle between list and grid on large screen -->
	<div class="mx-auto mb-8 flex w-9/10 justify-end gap-6">
		<div
			class="hidden w-25 items-center justify-center gap-2 border-2 bg-white py-2 lg:visible lg:flex"
		>
			<button
				onclick={() => { isList.current = true; }}
				class="{isList.current ? 'border-b-2' : ''} cursor-pointer outline-0 hover:border-b-2 focus:border-b-2 active:border-b-2"
			>
				list
			</button>
			<p class="font-thin">|</p>
			<button
				onclick={() => { isList.current = false; }}
				class="{!isList.current ? 'border-b-2' : ''} cursor-pointer outline-0 hover:border-b-2 focus:border-b-2 active:border-b-2"
			>
				grid
			</button
			>
		</div>
	</div>

	<!-- Renders portfolio projects as a list or grid (grid only allowed on large devices) -->
	<div class="list {isList.current ? 'list' : 'grid'}">
		{#each data.projects as project}
			<PortfolioTile {...project} />
		{/each}
	</div>
</div>

<style>
	@import 'tailwindcss';

	.list {
		@apply flex h-full flex-row flex-wrap items-center justify-center gap-10;
	}

	.grid {
		@apply lg:grid lg:grid-cols-3 lg:justify-items-center;
	}
</style>
